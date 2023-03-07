import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ques.css";
import "semantic-ui-css/semantic.min.css";

export default function Ques() {
  const { gameId, questionId } = useParams();
  const id = 2;
  const [allQues, setAllQues] = useState([]);
  const [ques, setQues] = useState(["Какое имя у Игоря?"]);
  const [answer, setAnswer] = useState("");
  const [timer, setTimer] = useState(20);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const question = await fetch(
          `http://localhost:3000/game/questions/${id}`
        );
        const res = await question.json();
        console.log("question======>", res);
      } catch {
        console.log("ошибка загрузки вопросов");
      }
    })();
  }, []);
  const fatal = () => {
    Swal.fire({
      icon: "error",
      title: "Время вышло...",
      text: "Иди учись!",
      confirmButtonText: "Я пошел",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(-1);
      }
    });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        (async () => {
          await fetch("http://localhost:3000", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(),
          });
        })();
        fatal();
        setTimer("Время вышло!");
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);
  const handleChange = (event) => {
    setAnswer(event.target.value);
  };
  const handleClick = () => {
    console.log(answer);
    Swal.fire({
      title: "Правильный ответ",
      width: 600,
      padding: "3em",
      color: "#716add",
      background:
        "#fff url(https://tikkurila.ru/sites/default/files/styles/thumbnail_800_auto/public/121433-1644256852.png?itok=ysIoCTOf)",
      backdrop: `
          rgba(0,0,123,0.4)
          url("https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif")
          left top
          no-repeat
        `,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(-1);
      }
    });
  };
  return (
    <>
      <div className="timer">Timer: {timer}</div>
      <div className="test">
        <div className="window">
          <div class="ui inverted segment mysegment">
            <label>{ques}</label>
            <form class="ui inverted form myform">
              <div class="equal width fields">
                <div class="field">
                  <label className="answer">Ваш ответ:</label>
                  <div class="ui fluid input">
                    <input
                      onChange={handleChange}
                      value={answer}
                      type="text"
                      placeholder="Ваш ответ"
                    />
                  </div>
                </div>
              </div>
              <button onClick={handleClick} className="ui button" type="button">
                Ответить
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
