import "../styles/footer.css";
import { Navbar } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      fixed="bottom"
      className="justify-content-center footer"
    >
      {/* lets put in some social media link/icons. */}
      <FaFacebookF className="social-media-icons" />
      <FaTwitter className="social-media-icons" />
      <FaInstagram className="social-media-icons" />
    </Navbar>
  );
};
export default Footer;
