import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

export default function Groups({ user, groups, groupSubmitHandler }) {
  return (
    <Container>
      <br />
      <h1> Привет, {user.name}!</h1>
      <br />
      <h3> Выбери свою группу: </h3>
      <Form onSubmit={groupSubmitHandler}>
        <Form.Select name="select">
          {groups.map((el) => (
            <option key={el.id} value={el.id}>
              {el.groupName}
            </option>
          ))}
        </Form.Select>
        <br />
        <Button variant="dark" as="input" type="submit" value="Submit" />
      </Form>
    </Container>
  );
}
