import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ToolService from "../../service/ToolsService";
import { Toast } from "react-bootstrap";

function ToolForm() {
  const [addedTool, setAddedTool] = useState(false);
  const toolService = new ToolService();
  const formRef = useRef(null);

  const onAdd = (e) => {
    e.preventDefault();
    let newTool = {};
    newTool.name = e?.target[0]?.value;
    newTool.pictureUrl = e?.target[1]?.value;
    newTool.description = e?.target[2]?.value;
    toolService
      .addTool(newTool)
      .then((addedTool) => {
        setAddedTool(true);
        formRef.current.reset();
      })
      .catch((error) => {
        setAddedTool(false);
      });
  };

  return (
    <div className="ToolForm container">
      <Toast
        onClose={() => setAddedTool(false)}
        show={addedTool}
        delay={3000}
        autohide
      >
        <Toast.Body>You have successfully added a Tool!</Toast.Body>
      </Toast>
      <Form ref={formRef} onSubmit={onAdd}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formName">
            <Form.Label >Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter name" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formPicture">
            <Form.Label >Picture</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter picture source"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid picture.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label >Description</Form.Label>
          <Form.Control required placeholder="Enter description" />
          <Form.Control.Feedback type="invalid">
            Please provide a valid description.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ToolForm;
