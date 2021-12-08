import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Col, Row, Toast, ToastContainer } from "react-bootstrap";

const ToastCard = ({ isCancelled }) => {
  const [show, setShow] = useState(true);

  return (
    <Row>
      <Col xs={6}>
        <ToastContainer position="top-end" className="p-3">
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
            animation={true}
          >
            <div className="toastCard">
              <Toast.Header className="toastHeader">
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Order Status</strong>
                {isCancelled ? (
                  <small>Order Cancelled Successfully</small>
                ) : (
                  <small>Order Placed Successfully</small>
                )}
              </Toast.Header>
              {isCancelled ? (
                <Toast.Body>Opps, you can replace order!</Toast.Body>
              ) : (
                <Toast.Body>Woohoo, enjoy your cravings soon!</Toast.Body>
              )}
            </div>
          </Toast>
        </ToastContainer>
      </Col>
    </Row>
  );
};

export default ToastCard;
