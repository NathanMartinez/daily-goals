import { useState } from "react";
import { Accordion, Button, Card } from "react-bootstrap";

function GoalCard({ goal = "No data", description = "No data" }) {
  const [checked, setChecked] = useState(false);
  const buttonStyles = {
    marginLeft: "2rem",
  };

  const handleClick = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Accordion defaultActiveKey="1" style={{ width: "100%" }}>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          className="d-flex justify-content-between align-items-center"
        >
          {goal}
          {checked ? (
            <Button
              variant="success"
              onClick={handleClick}
              style={buttonStyles}
            >
              Complete
            </Button>
          ) : (
            <Button
              variant="secondary"
              onClick={handleClick}
              style={buttonStyles}
            >
              Uncompleted
            </Button>
          )}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{description}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
export default GoalCard;
