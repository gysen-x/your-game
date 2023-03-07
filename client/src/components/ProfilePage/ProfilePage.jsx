import React from 'react';
import { Image, Segment, Table } from 'semantic-ui-react';

export default function ProfilePage() {
  return (
    <div className="d-flex flex-column">
      <div className="user-data d-flex">
        <Image src="/images/wireframe/square-image.png" size="medium" circular />
        <div className="user-data__form">
          <Segment attached="top">Segment 1</Segment>
          <Segment attached>Segment 2</Segment>
          <Segment attached>Segment 3</Segment>
          <Segment attached="bottom">Segment 4</Segment>
        </div>
      </div>
      <div className="user-statistics">
        <Table attached="top" basic verticalAlign="top">
          <Table.Header>
            <Table.HeaderCell>Header</Table.HeaderCell>
            <Table.HeaderCell>Header</Table.HeaderCell>
            <Table.HeaderCell>Header</Table.HeaderCell>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
