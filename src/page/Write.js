import React from "react";
import { Col, Container, Form, Button } from "react-bootstrap";
import { db, storage } from "../shared/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Write = () => {
  const file_link_ref = React.useRef(null);
  const text_ref = React.useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate("");
  const writeFB = async () => {
    const user_doc = await addDoc(collection(db, "images"), {
      image_url: file_link_ref.current?.url,
      text: text_ref.current?.value,
    });
    console.log(user_doc.path.image_url);
    await dispatch({
      type: "ADD_CONTENT",
      payload: {
        img: file_link_ref.current.url,
        text: text_ref.current.value,
      },
    });
    navigate("/");
  };
  const uploadFB = async (e) => {
    console.log(e.target.files);
    const uploaded_file = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );
    console.log(uploaded_file);
    const file_url = await getDownloadURL(uploaded_file.ref);
    console.log(file_url);
    file_link_ref.current = { url: file_url };
  };

  return (
    <Container className="write-wrap">
      <h1>게시글 작성</h1>
      <Col lg={4}>
        <Form>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>파일 선택</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              ref={file_link_ref}
              onChange={uploadFB}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>글 작성</Form.Label>
            <Form.Control type="text" ref={text_ref} />
          </Form.Group>
          <Button variant="primary" onClick={writeFB}>
            글 작성
          </Button>
        </Form>
      </Col>
    </Container>
  );
};

export default Write;
