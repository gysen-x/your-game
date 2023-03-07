import React, { useEffect, useState } from 'react';
import {
  Segment, Button, Progress, Header,
} from 'semantic-ui-react';

export default function Homepage() {
  const [games, setGames] = useState([
    { id: 1, points: 0, questionPassed: 10 },
    { id: 2, points: 100, questionPassed: 20 },
  ]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/games');
        const result = await response.json();
        setGames(result);
      } catch (error) {
        console.log('error: ', error);
      }
    })();
  }, []);

  const newGame = async () => {
    const response = await fetch('/games/new', { credentials: 'include' });
    const result = await response.json()
    console.log(result)
  };

  return (
    <div className="container center aligned middle">
      <Segment.Group>
        <Segment>
          <Header as="h3">Top games</Header>
        </Segment>
        <Segment.Group>
          <Segment>
            <p>rokki - 4500 points - 1:34</p>
          </Segment>
          <Segment>
            <p>dima - 3800 points - 1:58</p>
          </Segment>
          <Segment>
            <p>oleg - 2900 points - 2:12</p>
          </Segment>
        </Segment.Group>
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
              {game.questionPassed}
              /30
            </Segment>
            <Segment>
              <Progress
                value={game.questionPassed}
                total={30}
                active
              />
            </Segment>
            <Segment>
              <Button icon="play" />
              <Button icon="close" color="red" />
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
