import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Segment, Button } from 'semantic-ui-react';

export default function Game() {
  const [questions, setQuestions] = useState([]);
  console.log('questions: ', questions);

  const { gameId } = useParams();

  useEffect(() => {
    console.log('useEffect');
    (async () => {
      console.log('async');
      try {
        const response = await fetch(`/game/games/${gameId}`);
        const result = await response.json();
        console.log('result: ', result);
        setQuestions(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div
      className="game__wrapper"
      style={{
        width: '70vw',
        margin: '0 auto',
      }}
    >
      <Segment inverted>
        <p>
          Current points
        </p>
        <Button content="End game" />
      </Segment>

      <div className="ui relaxed grid">
        {questions.map((elem) => (
          <div
            className="six column row"
            key={elem.category.id}
          >
            <div className="column">
              {elem.category.name}
            </div>
            {elem.questions.map((el) => (
              !el.status ? (
                <button
                  className="button column"
                  type="button"
                  key={el.id}
                  onClick={() => console.log('click')}
                >
                  <h3>
                    {el.Question.points}
                  </h3>
                </button>
              ) : (
                <button
                  className="button column"
                  type="button"
                  key={el.id}
                  disabled
                  style={{
                    opacity: '0',
                  }}
                >
                  <h3>
                    {el.Question.points}
                  </h3>
                </button>
              )

            ))}
          </div>

        ))}
      </div>
    </div>
  );
}
