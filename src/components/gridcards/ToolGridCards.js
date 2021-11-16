import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import ToolService from "../../service/ToolsService";
import { useState, useEffect } from "react";

const ToolGridCards = () => {
  const [tools, setTools] = useState([{}]);
  const toolService = new ToolService();

  const getTools = () => {
    toolService
      .getAllTools()
      .then((toolList) => {
        setTools(toolList.data);
      })
      .catch((error) => {
        this.setState({ errorMessage: "Cant get Tools" });
      });
  };

  useEffect(() => {
    getTools();
  }, []);

  function onDelete(toolId) {
    toolService.removeTool(toolId).then((toolMessage) => {
      console.log(toolMessage);
      getTools();
    });
  }

  function onUpdate(toolID) {
    console.log("Update");
  }

  const gridCards = tools.map((tool, index) => {
    return (
      <Col key={index}>
        <Card bg="primary" style={{ marginBottom: 15 }} border="success">
          <Card.Header>
            <Card.Title>{tool.name}</Card.Title>
            <Card.Text>{tool.description}</Card.Text>
          </Card.Header>
          <Card.Img
            style={{ height: "300px" }}
            variant="bottom"
            src={tool.pictureUrl}
          />
          <Card.Footer>
            <Button onClick={() => onDelete(tool._id)}>Delete</Button>
            <Button onClick={() => onUpdate(tool._id)}>Update</Button>
          </Card.Footer>
        </Card>
      </Col>
    );
  });

  return (
    <div className="GridCards container mb-3">
      <Row xs={1} lg={3} className="g-4">
        {gridCards}
      </Row>
    </div>
  );
};

export default withRouter(ToolGridCards);
