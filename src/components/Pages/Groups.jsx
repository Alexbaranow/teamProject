import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { ReCAPTCHA } from 'react-google-recaptcha';

export default function Groups({ user, groups, groupSubmitHandler }) {
  const onChange = () => {};
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
      <ReCAPTCHA sitekey="6LcL5pooAAAAAJy5l0fnxAyEjxLjmhCkcE5cA-Jn" onChange={onChange} />
    </Container>
  );
}
