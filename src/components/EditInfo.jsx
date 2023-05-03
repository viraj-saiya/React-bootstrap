import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ReactComponent as Close } from "../assets/icons/x-circle.svg";
import { ReactComponent as Save } from "../assets/icons/check-circle.svg";

export default function EditInfo({ infoList, index ,toggleEdit , saveFn }) {
  let age = new Date().getFullYear() - new Date(infoList.dob).getFullYear();
  const [validated, setValidated] = useState(false);
  const [err,setErr] = useState({})
  const gender = infoList.gender.toLowerCase();
  

  const ageRef = useRef();
  const genderRef = useRef();
  const countryRef = useRef();
  const descriptionRef = useRef();
  
  const genderList = ["male","female","transgender","rather not say","other"]

  const selectDefaultValue =
    gender == "male"
      ? 1
      : gender == "female"
      ? 2
      : gender == "transgender"
      ? 3
      : gender == "rather not say"
      ? 4
      : gender == "other"
      ? 5
      : "";

  const handleSubmit = (infoList) => {
    // const form = event.currentTarget;
    // console.log("form",form);
    
    const regex = /^[a-zA-Z ]*$/;
    const validCountry = regex.test(countryRef.current.value) &&  countryRef.current.value.length>0
    const validDescription = descriptionRef.current.value.length > 0 
    
    setErr({
      country:!validCountry,
      description:!validDescription

    })


    console.log(ageRef.current.value)
    console.log(genderList[parseInt(genderRef.current.value) - 1])


    if (validCountry && validDescription) {

      saveFn(
        index,
        {
          "id": infoList.id,
          "first": infoList.first,
          "last": infoList.last,
          "dob": infoList.dob,
          "age" : ageRef.current.value,
          "gender": genderList[parseInt(genderRef.current.value) - 1],
          "email": infoList.email,
          "picture": infoList.picture,
          "country": countryRef.current.value,
          "description": descriptionRef.current.value
        }
        )
      }
    

    


    // if (form.checkValidity() === false) {
      // event.preventDefault();
    //   event.stopPropagation();
    // }

    // setValidated(true);
  };

  return (
    <div>
      <Form>
        <Row className="mb-4">
          <Form.Group as={Col} md="4" controlId="ageId">
            <Form.Label>Age</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Age"
              defaultValue={age}
              ref={ageRef}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="genderId">
            <Form.Label>Gender</Form.Label>
            <Form.Select
              className="text-capitalize"
              defaultValue={selectDefaultValue}
              aria-label="Default select example"
              ref= {genderRef}
            >
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Transgender</option>
              <option value="4"> Rather not say</option>
              <option value="5">Other</option>
            </Form.Select>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Country</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Country"
              defaultValue={infoList.country}
              ref= {countryRef}
              isInvalid={err.country}


            />
            <Form.Control.Feedback type="invalid">No number in country or empty value</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              as="textarea"
              placeholder="Description"
              defaultValue={infoList.description}
              rows={7}
              ref= {descriptionRef}
              isInvalid={err.description}
          
            />
            <Form.Control.Feedback type="invalid">No empty value</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="d-flex flex-row-reverse bd-highlight">
          <Row>
            <Col xs={6} md={0}>
              <div onClick={() => toggleEdit()}>
                <Close />
              </div>
            </Col>
            <Col xs={6} md={1}>
              <div onClick = {()=>handleSubmit(infoList)} >
                <Save />
              </div>
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
}
{
  /* <Row>
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
      <div className="pt-4">
        Description
        <p>{infoList.description}</p>
      </div>
    </Container> */
}
