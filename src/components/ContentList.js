import React from "react";
import { useSelector } from "react-redux";
import { CardGroup, Container } from "react-bootstrap";
import Content from "./Content";

const ContentList = () => {
  const contentList = useSelector((state) => state.contentList);
  return (
    <Container>
      <CardGroup>
        {contentList.map((item, idx) => (
          <Content key={idx} item={item} />
        ))}
      </CardGroup>
    </Container>
  );
};

export default ContentList;
