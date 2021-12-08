import React from "react";

import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import IncDecCounter from "./IncDecCounter";

export default function CheckoutModal({
  handleClose,
  show,
  handleNewDish,
  checkoutListener,
  newDish,
  increaseQuantity,
  decreaseQuantity,
  restDishes,
}) {
  const selectedDishes = restDishes.filter((item) => item.quantity);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>You Cart</Modal.Title>
        </Modal.Header>
        <Form className="modal-form">
          {selectedDishes.map((item) => {
            return (
              <Form.Group
                as={Row}
                className="mb-6 m-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="3">
                  {item.name}
                </Form.Label>
                <Form.Label column sm="3" className="checkoutButtons">
                  <label id={item._id} onClick={decreaseQuantity}>
                    -
                  </label>{" "}
                  <span>{item.quantity}</span>{" "}
                  <label id={item._id} onClick={increaseQuantity}>
                    +
                  </label>
                </Form.Label>
              </Form.Group>
            );
          })}
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={checkoutListener}>
            Proceed to checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
