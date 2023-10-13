import React, { Suspense } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
// import { ReCAPTCHA } from 'react-google-recaptcha';
import { lazy } from 'react';

export default function Groups({ user, groups, groupSubmitHandler }) {
  const GoogleCaptcha = lazy(() => import('react-google-recaptcha'));
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
      <h1>111</h1>
      <Suspense fallback={<h1>...</h1>}>
        <h2>Preview</h2>
        <GoogleCaptcha sitekey="6LcL5pooAAAAAJy5l0fnxAyEjxLjmhCkcE5cA-Jn" onChange={onChange} />
      </Suspense>
      {/* <ReCAPTCHA sitekey="6LcL5pooAAAAAJy5l0fnxAyEjxLjmhCkcE5cA-Jn" onChange={onChange} /> */}
    </Container>
  );
}
