import React from "react";
import { Container, Col, Form, Button } from "react-bootstrap";
import { auth, db } from "../shared/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { where } from "firebase/firestore";
import { query } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const id_ref = React.useRef(null);
  const pw_ref = React.useRef(null);
  const navigate = useNavigate();
  const login_FB = async () => {
    // console.log(id_ref.current.value, pw_ref.current.value);
    const user = await signInWithEmailAndPassword(
      auth,
      id_ref.current.value,
      pw_ref.current.value
    );
    // console.log(user);
    const user_docs = await getDocs(
      query(collection(db, "users"), where("user_id", "==", user.user.email))
    );
    user_docs.forEach((u) => {
      console.log(u.data());
    });
    navigate("/");
  };

  return (
    <Container className="login-wrap">
      <Col lg={4}>
        <h1>로그인</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              ref={id_ref}
              placeholder="휴대폰 번호 또는 이메일 주소"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" ref={pw_ref} placeholder="비밀번호" />
          </Form.Group>
          <Button variant="primary" onClick={login_FB}>
            로그인
          </Button>
        </Form>
      </Col>
    </Container>
  );
};

export default Login;
