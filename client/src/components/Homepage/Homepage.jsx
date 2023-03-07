import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Segment, Button, Progress, Header,
} from 'semantic-ui-react';

export default function Homepage() {
  const navigate = useNavigate();

  const [games, setGames] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/game/games');
        const result = await response.json();
        console.log('result: ', result);
        setGames(result);
      } catch (error) {
        console.log('error: ', error);
      }
    })();
  }, []);

  const newGame = async () => {
    const response = await fetch('game/games/new', { credentials: 'include' });
    const result = await response.json();
    navigate(`game/${result.gameId}`);
  };

  const handleDelGame = async (gameId) => {
    try {
      const response = await fetch(`game/games/${gameId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });
      const result = await response.json();
      if (result.success) {
        const filtredArr = games.filter((elem) => elem.id !== gameId);
        setGames(filtredArr);
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const handleContinueGame = (gameId) => {
    navigate(`game/${gameId}`);
  };

  return (
    <div className="container center aligned middle">
      <Segment.Group>

        <Segment>
          <Header as="h3">Your games</Header>
        </Segment>
        {games.map((game) => (
          <Segment.Group horizontal>
            <Segment>
              <p>
                {' '}
                Game #
                {game.id}
              </p>
            </Segment>
            <Segment>
              {game.questionsPassed}
              /30
            </Segment>
            <Segment>
              <Progress
                value={game.questionsPassed}
                total={30}
                active
              />
            </Segment>
            <Segment>
              <Button
                onClick={() => handleContinueGame(game.id)}
                icon="play"
              />
              <Button
                onClick={() => handleDelGame(game.id)}
                icon="close"
                color="red"
              />
            </Segment>
          </Segment.Group>
        ))}
        <Segment>
          <Button onClick={newGame} color="black" fluid size="large">
            New game
          </Button>
        </Segment>
      </Segment.Group>

    </div>
  );
}
