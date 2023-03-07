import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ques.css";
import "semantic-ui-css/semantic.min.css";

export default function Ques() {
  const { gameId, questionId } = useParams();
  const id = 2;
  const [allQues, setAllQues] = useState([]);
  const [ques, setQues] = useState(["Какое имя у Игоря?"]);
  const [timer, setTimer] = useState(5);
  useEffect(() => {
    (async () => {
      try {
        const question = await fetch(`http://localhost:3000/game/questions/${id}`);
        const res = await question.json();
        console.log("question======>", res);
      } catch {
        console.log("ошибка загрузки вопросов");
      }
    })();
  }, []);
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
        Swal.fire({
          icon: "error",
          title: "Время вышло...",
          text: "Иди учись!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("work it");
          }
        });

        setTimer("Время вышло!");
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleClick = () => {
    Swal.fire({
      title: "Правильный ответ",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
          rgba(0,0,123,0.4)
          url("https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif")
          left top
          no-repeat
        `,
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
                    <input type="text" placeholder="Ваш ответ" />
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
