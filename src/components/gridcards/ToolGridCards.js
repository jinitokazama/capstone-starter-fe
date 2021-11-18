import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Button, Form, Toast } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import ToolService from "../../service/ToolsService";
import { useState, useEffect } from "react";
import isAuthenticated from "../../utils/isAuthenticated";

const ToolGridCards = () => {
  const [alert, setAlert] = useState(false);
  const [status, setStatus] = useState();
  const [tools, setTools] = useState([{}]);
  const [updatedToolId, setUpdatedToolId] = useState();
  const toolService = new ToolService();

  const getTools = () => {
    toolService
      .getAllTools()
      .then((toolList) => {
        setTools(toolList.data);
      })
  };

  useEffect(() => {
    getTools();
  }, []);

  function onDelete(toolId) {
    toolService.removeTool(toolId).then((toolMessage) => {
      getTools();
      setAlert(true);
      setStatus("Success")
    })
    .catch((error) => {
      setStatus("Error")
    });
  }

  const authentication = isAuthenticated();

  const onUpdate = (event) => {
    event.preventDefault();
    const updatedBody = {};
    if (event?.target[0]?.value) {
      updatedBody.name = event?.target[0]?.value;
    }
    
    if (event?.target[1]?.value) {
      updatedBody.description = event?.target[1]?.value;
    }

    if (event?.target[2]?.value) {
      updatedBody.pictureUrl = event?.target[2]?.value;
    }
   
    toolService.updateTool(updatedToolId, updatedBody).then((updatedTool) => {
      getTools();
      setUpdatedToolId(null);
      setAlert(true);
      setStatus("Success")
    })
    .catch((error) => {
      setStatus("Error")
    });
  };

  const gridCards = tools.map((tool, index) => {
    return (
      <Col key={index}>
        <Card bg="warning" style={{ marginBottom: 15 }} border="success">
          <Card.Header>
            <Card.Title>{tool.name}</Card.Title>
            <Card.Text>{tool.description}</Card.Text>
          </Card.Header>
          <Card.Img
            style={{ height: "250px" }}
            variant="bottom"
            src={tool.pictureUrl}
          />
          {authentication && (
            <Card.Footer style={{ textAlign: "center" }}>
              <Button
                style={{ marginRight: 15 }}
                onClick={() => onDelete(tool._id)}
              >
                Delete
              </Button>
              <Button onClick={() => setUpdatedToolId(tool._id)}>Update</Button>
            </Card.Footer>
          )}
        </Card>
      </Col>
    );
  });

  return (
    <div className="GridCards container mb-3">
      <Row xs={1} lg={3} className="g-4">
        {gridCards}
      </Row>
      <Toast onClose={() => setAlert(false)} show={alert} delay={3000} autohide>
        {(status === "Success") ? <Toast.Body>Success!</Toast.Body> : <Toast.Body>Error</Toast.Body>}
      </Toast>
      {updatedToolId && (
        <Form onSubmit={onUpdate}>
          <h2 style={{ color: "white", textAlign: "center" }}>Update Tool</h2>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label style={{ color: "white" }}>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter new name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label style={{ color: "white" }}>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter new description" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPicture">
            <Form.Label style={{ color: "white" }}>Picture</Form.Label>
            <Form.Control type="text" placeholder="Enter new PictureUrl" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      )}
    </div>
  );
};

export default withRouter(ToolGridCards);
