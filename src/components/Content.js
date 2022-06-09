import React from "react";
import { Card, Col } from "react-bootstrap";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../shared/firebase";

const Content = async ({ item }) => {
  const q = query(collection(db, "images"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
  return (
    <Col lg={3}>
      <Card className="card-content">
        <Card.Footer>
          <small className="content-title text-muted">
            <img
              className="profile-img"
              src="https://youjungson.github.io/blue-talk/images/person1.png"
            />
            <span>yyoujg</span>
          </small>
        </Card.Footer>
        <div className="content-img">
          <Card.Img variant="top" src={item.img} />
        </div>
        <Card.Body>
          <Card.Text>{item.text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Content;
