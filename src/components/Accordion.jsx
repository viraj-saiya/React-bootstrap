import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { ReactComponent as Edit } from "../assets/icons/edit.svg";
import { ReactComponent as Delete } from "../assets/icons/delete.svg";
import Info from "./Info";
import EditInfo from "./EditInfo";
import { ModalComponent } from "./Modal";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AccordionComponent({ list }) {
  const [inputList, setInputList] = useState([...list] || []);
  const [showModal, setShowMoal] = useState(false);
  const [seletedValue, setSelectedValue] = useState();
  const [editState, setEditState] = useState(false);

  const ToggleEditState =() => setEditState(!editState)

  const handleClose = () => {
    setShowMoal(false);
  };
  const deleteCeleb = (item, index) => {
    inputList.splice(index, 1);
    setInputList([...inputList]);
    handleClose();
  };

  const UpdateCeleb = (index,data) =>{
    inputList[index] = data
    setInputList([...inputList]);
    setEditState(false)

    console.log("data Up",index,data)
  }





  if (inputList) {
    return (
      <div style={{ width: "25%", height: "50%" }}>
        <Accordion>
          {inputList.map((item, index) => {
            return (
              <div key={index}>
                <div className="pt-5">
                  <Accordion.Item eventKey={index.toString()}>
                    <Accordion.Header onClick={()=>console.log("I am click")}>
                      <img
                        src={item.picture}
                        className="rounded-circle"
                        style={{ width: "50px" }}
                        alt="Avatar"
                      />
                      <div className="ps-4">{item.first + " " + item.last}</div>
                    </Accordion.Header>
                    <Accordion.Body>
                      {editState ? (
                        <EditInfo infoList={item} index={index} toggleEdit = {ToggleEditState}  saveFn={(index,data)=>UpdateCeleb(index,data)}/>
                        ) : (
                          <Info infoList={item} />
                      )}

                        {!editState ? (
                      <div className="d-flex flex-row-reverse bd-highlight">
                          <Row>
                            <Col xs={6} md={0}>
                              <div
                                onClick={() => {
                                  setShowMoal(true),
                                    setSelectedValue({ item, index });
                                }}
                              >
                                <Delete />
                              </div>
                            </Col>
                            <Col xs={6} md={1}>
                              <div onClick={()=>setEditState(true)}>
                              <Edit />
                              </div>
                            </Col>
                          </Row>
                      </div>
                        ):null}
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              </div>
            );
          })}
        </Accordion>
        <ModalComponent
          show={showModal}
          handleClose={handleClose}
          seletedValue={seletedValue}
          deleteFn={(item, index) => deleteCeleb(item, index)}
        />
      </div>
    );
  } else {
    return null;
  }
}
export default AccordionComponent;
