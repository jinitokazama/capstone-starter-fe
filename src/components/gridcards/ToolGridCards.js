import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link, withRouter } from "react-router-dom";
import ToolService from "../../service/ToolsService";
import { useState, useEffect } from "react";

const ToolGridCards = () => {
  const [tools, setTools] = useState([{}]);

  useEffect(() => {
    const toolService = new ToolService();

    toolService
      .getAllTools()
      .then((toolList) => {
        setTools(toolList.data);
      })
      .catch((error) => {
        this.setState({ errorMessage: "Cant get Tools" });
      });
  }, []);

  const gridCards = tools.map((tool) => {
    return (
      <Col>
        <Card bg="primary" style={{marginBottom: 15}} border="success">
          <Card.Header>
            <Card.Title>{tool.name}</Card.Title>
            <Card.Text>{tool.description}</Card.Text>
          </Card.Header>

          <Card.Img style={{'height':"300px"}}variant="bottom" src={tool.pictureUrl} />
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