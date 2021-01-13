import "../styles/content.css";
import { Container } from "react-bootstrap";

const content = ({ children }) => {
  return (
    <div className="content" fluid>
      {children}
    </div>
  );
};

export default content;
