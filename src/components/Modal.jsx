import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function ModalComponent({show,handleClose,seletedValue,deleteFn}) {

  

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true}
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
        <Modal.Header closeButton>
          Are you sure you want to delete ?
        </Modal.Header>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={()=>{
            deleteFn(seletedValue.item,seletedValue.index)
            }}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
