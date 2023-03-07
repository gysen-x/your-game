import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import './ques.css';
import 'semantic-ui-css/semantic.min.css';

export default function Ques() {
  const navigate = useNavigate();
  const { questionId } = useParams();
  const [timer, setTimer] = useState(25);
  const [ans, setAns] = useState('');
  const [question, setQuestion] = useState({});
  console.log('question.Question: ', question.Question?.text);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `/game/questions/${questionId}`,
        );
        const result = await response.json();
        setQuestion(result);
      } catch {
        console.log('ошибка загрузки вопросов');
      }
    })();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(interval);
        setTimer('Время вышло!');

        (async () => {
          const wrongAnswer = {
            id: questionId,
            answer: '2b$10$njrgz73OPzu.zviCinJDee8Yhs9MSe8otCE/wSpQflSoqULeV64uS',
          };
          await fetch(' http://localhost:3000/game/checkanswer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(wrongAnswer),
          });
          Swal.fire({
            title: 'Время вышло',
            width: 600,
            padding: '3em',
            color: '#716add',
            background:
              '#fff url(https://tikkurila.ru/sites/default/files/styles/thumbnail_800_auto/public/121433-1644256852.png?itok=ysIoCTOf)',
            backdrop: `
              rgba(123, 0, 14, 0.4)
              url("https://media4.giphy.com/media/QBd2kLB5qDmysEXre9/giphy.gif?cid=ecf05e47f0jjrcan6aqpijyef3fy1q3p0720a07cxwuwj6rv&rid=giphy.gif&ct=g")
              left top
              no-repeat
              `,
          }).then((res) => {
            if (res.isConfirmed) {
              navigate(-1);
            }
          });
        })();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (event) => {
    setAns(event.target.value);
  };

  const handleClick = async (id, answer) => {
    // eslint-disable-next-line no-param-reassign
    if (!answer) answer = 'kjdflkjdsflkjs';
    console.log('id, answer: ', id, answer);
    const response = await fetch('/game/checkanswer', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, answer }),
    });
    const result = await response.json();
    console.log('result: ', result);

    if (result.fail) {
      Swal.fire({
        title: 'Неправильный ответ',
        width: 600,
        icon: 'error',
        padding: '3em',
        color: '#716add',
        background:
          '#fff url(https://tikkurila.ru/sites/default/files/styles/thumbnail_800_auto/public/121433-1644256852.png?itok=ysIoCTOf)',
        backdrop: `
            rgba(123, 0, 14, 0.4)
            url("https://media0.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif?cid=ecf05e47skzdrq8m4v2g75w87sxlqf5kz8uao8ad80xs5mii&rid=giphy.gif&ct=g")
            left top
            no-repeat
          `,
      }).then((res) => {
        if (res.isConfirmed) {
          navigate(-1);
        }
      });
    } else {
      Swal.fire({
        title: 'Правильный ответ',
        width: 600,
        padding: '3em',
        color: '#716add',
        background:
          '#fff url(https://tikkurila.ru/sites/default/files/styles/thumbnail_800_auto/public/121433-1644256852.png?itok=ysIoCTOf)',
        backdrop: `
            rgba(0,0,123,0.4)
            url("https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif")
            left top
            no-repeat
          `,
      }).then((res) => {
        if (res.isConfirmed) {
          navigate(-1);
        }
      });
    }
  };
  return (
  // <h1>111</h1>
    <>
      <div className="timer">
        Timer:
        {' '}
        {timer}
      </div>
      <div className="test">
        <div className="window">
          <div className="ui inverted segment mysegment">
            <label
              htmlFor="question"
            >
              {question.Question?.text}
            </label>
            <form
              className="ui inverted form myform"
              id="question"
            >
              <div className="equal width fields">
                <div className="field">
                  <label htmlFor="answer" className="answer">
                    Ваш ответ:
                    <div className="ui fluid input">
                      <input
                        onChange={handleChange}
                        value={ans}
                        type="text"
                        placeholder="Ваш ответ"
                        id="answer"
                      />
                    </div>
                  </label>
                </div>
              </div>
              <button onClick={() => handleClick(questionId, ans)} className="ui button" type="button">
                Ответить
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
