import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Info({ infoList }) {
  let age = infoList.age || new Date().getFullYear() - new Date(infoList.dob).getFullYear();

  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          Age
          <div>{age} Years</div>
        </Col>
        <Col xs={6} md={4}>
          Gender
          <div className="text-capitalize">{infoList.gender}</div>
        </Col>
        <Col xs={6} md={4}>
          Country
          <div>{infoList.country}</div>
        </Col>
      </Row>
      <div className="pt-4">Description
      <p>{infoList.description}</p>
      </div>
     
    </Container>
  );
}
