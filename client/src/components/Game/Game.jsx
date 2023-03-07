import React from 'react';
import { Segment, Button } from 'semantic-ui-react';

export default function Game() {
  const one = {
    id: 1,
    name: 'секс-игрушки',
    questions: [
      { id: 1, status: true, points: 100 },
      { id: 2, status: false, points: 200 },
      { id: 3, status: true, points: 300 },
      { id: 4, status: false, points: 400 },
      { id: 5, status: true, points: 500 },
    ],
  };

  const arr = new Array(6);
  arr.fill(one);
  console.log('arr: ', arr);

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
        {arr.map((elem) => (
          <div
            className="six column row"
            key={elem.name}
          >
            <div className="column">
              {elem.name}
            </div>
            {elem.questions.map((el) => (
              <button
                className="button column"
                type="button"
                key={el.id}
                onClick={() => console.log('click')}
              >
                <h3>
                  {el.points}
                </h3>

              </button>
            ))}
          </div>

        ))}
      </div>
    </div>
  );
}
