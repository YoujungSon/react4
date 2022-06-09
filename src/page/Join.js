import React from "react";
import { auth, db } from "../shared/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { Button, Col, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const navigate = useNavigate();

  const id_ref = React.useRef(null);
  const name_ref = React.useRef(null);
  const pw_ref = React.useRef(null);
  const signupFB = async () => {
    // 값이 전부 멀쩡해! -> 벨리데이션
    if (id_ref.current.value === "") {
      return false;
    }
    const user = await createUserWithEmailAndPassword(
      auth,
      id_ref.current.value,
      pw_ref.current.value
    );
    // console.log(user);
    const user_doc = await addDoc(collection(db, "users"), {
      user_id: user.user.email,
      name: name_ref.current.value,
    });
    // console.log(user_doc.id);
    navigate("/login");
  };
  return (
    <Container className="join-wrap">
      <Col lg={4}>
        <h1>회원가입</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              ref={id_ref}
              placeholder="휴대폰 번호 또는 이메일 주소"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              ref={name_ref}
              placeholder="사용자 이름"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" ref={pw_ref} placeholder="비밀번호" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="비밀번호 확인" />
          </Form.Group>
          <Button variant="primary" onClick={signupFB}>
            가입
          </Button>
        </Form>
      </Col>
    </Container>
  );
};

export default Join;
