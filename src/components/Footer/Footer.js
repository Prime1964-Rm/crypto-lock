import React from "react";
import { Input } from "reactstrap";
import { NewsLetterBg } from "../../assets/svg";
import { COLORS } from "../../styles";
import Button from "../Button.component/Button";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-us">
        <div>
          <h1>
            Subscribe to our newsletter for latest <strong>crypto news </strong>{" "}
            daily
          </h1>
          <p>
            Get crypto analysis, news and updates right to your inbox! Sign up
            here so you don't
            <br /> miss a single newsletter.
          </p>
          <Input placeholder="Enter your email address" type="text" />
          <Button
            borderRadius="1rem"
            size="lg"
            backgroundColor={COLORS.blue}
            color={COLORS.light}
          >
            Subscribe Now
          </Button>
        </div>
        <NewsLetterBg style={{opacity:"0.9"}} />
      </div>
      <div className="footer-details"></div>
    </div>
  );
};

export default Footer;
