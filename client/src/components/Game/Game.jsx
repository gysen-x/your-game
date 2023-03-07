import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Segment, Button } from 'semantic-ui-react';

export default function Game() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [points, setPoints] = useState(0);

  const { gameId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/game/games/${gameId}`);
        const result = await response.json();
        setQuestions(result.sortedQuestions);
        setPoints(result.game.points);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleEndGame = async (id) => {
    const response = await fetch(`http://localhost:3000/game/games/${id}/end`, { credentials: 'include' });
    const result = await response.json();
    if (result.success) {
      navigate('/');
    }
  };

  // useEffect(() => {
  //   const handleQuestionSelect = (questionId) => {
  //     navigate(`/game/question/${questionId}`);
  //   };
  // }, []);

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
        <h3>
          {points}
        </h3>
        <Button
          onClick={() => handleEndGame(gameId)}
          content="End game"
        />
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
                  onClick={() => navigate(`/game/question/${el.id}`)}
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
