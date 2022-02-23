import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Himanshu Goyal </span>
            from <span className="purple"> Surat, India.</span>
            <br />I am a challenge-driven, Dev Professional with experience and
            and builds in the MERN stack.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Voice Overs
            </li>
            <li className="about-activity">
              <ImPointRight /> Anime & Manga
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "The roots of ,every significant establishment, somewhere deep down
            is associated with the sheer belief to bring about a disruption with
            the normal cycle of things."{" "}
          </p>
          <footer className="blockquote-footer">Himanshu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
