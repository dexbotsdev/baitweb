/* eslint-disable no-console */

import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import foot from "../Images/bait.png";
import logo from "../Images/logo_6.png";

// import tele from "../Images/footertele.svg";
import discord from "../Images/Telegram_logo.svg";
import twitter from "../Images/twitter.svg";
const Footer = () => {
  return (
    <footer className=" text-dark pt-5">
      <Container> 
          <img src={logo} className="groupimg2 mb-3" /> 
        <Row>
          <Nav className="footAdjust">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#AboutUs">About Us</Nav.Link>
            <Nav.Link href="#Universe">Universe</Nav.Link>
            <Nav.Link href="#Marketing">Marketing</Nav.Link>
            <Nav.Link href="https://master--baitwhitelist.netlify.app/">Airdrop</Nav.Link>
            <Nav.Link href="#Roadmap">Roadmap</Nav.Link> 
          </Nav>
        </Row>
        <hr />
        <Row>
          <div className="text-center footericonadjust">
            <p className="copy my-4">
              Copyright &copy; {new Date().getFullYear()} the BAIT, All
              rights reserved
            </p>
            <Nav className="navicon mb-3">
              <Nav.Link href="#deets" className="md-p-0">
                <a href="https://twitter.com/baitthisisbait" target="_blank">
                  <img src={twitter} style={{ width: "40px" }} />
                </a>
              </Nav.Link>
              <Nav.Link href="https://t.me/baitthisisbait"  className="md-p-0">
                <img src={discord} style={{ width: "40px" }} />
              </Nav.Link>
            </Nav>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
