import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';

function GameStats() {
  // Тестовые данные:
  const gameStats = [
    {
      name: 'Harry Potter',
      points: 20,
      questionsPassed: 30,
      trueAnswers: 20,
      falseAnswers: 10,
    },
    {
      name: 'Elbrus',
      points: 17,
      questionsPassed: 29,
      trueAnswers: 17,
      falseAnswers: 12,
    },
  ];

  // ? Раскомментить позже как появится статистика и привязать ссылку в nav
  // const [gameStats, setGames] = useState([
  //   {
  //     name: 'Harry Potter',
  //     points: 20,
  //     questionsPassed: 30,
  //     trueAnswers: 20,
  //     falseAnswers: 10,
  //   },
  //   {
  //     name: 'Elbrus',
  //     points: 17,
  //     questionsPassed: 29,
  //     trueAnswers: 17,
  //     falseAnswers: 12,
  //   },
  // ]);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetch('/game/statistics');
  //       const result = await response.json();
  //       setGames(result);
  //     } catch (error) {
  //       console.log('error: ', error);
  //     }
  //   })();
  // }, []);

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Game Name</Table.HeaderCell>
          <Table.HeaderCell>Score</Table.HeaderCell>
          <Table.HeaderCell>Total Questions</Table.HeaderCell>
          <Table.HeaderCell>Correct Answers</Table.HeaderCell>
          <Table.HeaderCell>Incorrect Answers</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {gameStats.map((game) => (
          <Table.Row key={game.name}>
            <Table.Cell>{game.name}</Table.Cell>
            <Table.Cell>{game.points}</Table.Cell>
            <Table.Cell>{game.questionsPassed}</Table.Cell>
            <Table.Cell>{game.trueAnswers}</Table.Cell>
            <Table.Cell>{game.falseAnswers}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default GameStats;
