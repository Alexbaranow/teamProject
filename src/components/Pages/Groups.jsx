import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

export default function Groups({ groups, groupSubmitHandler }) {
  return (
    <Container>
      <h1> Выбери свою группу: </h1>
      <Form onSubmit={groupSubmitHandler}>
        <Form.Select name="select">
          {groups.map((el) => (
            <option key={el.id} value={el.id}>
              {el.groupName}
            </option>
          ))}
        </Form.Select>
        <Button as="input" type="submit" value="Submit" />
      </Form>
    </Container>
  );
}
