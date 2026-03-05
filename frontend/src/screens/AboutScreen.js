import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const AboutScreen = () => {
  return (
    <Container>

      <Row className="mt-4">

        <Col>

          <h1>About MySmartDeal</h1>

          <p>
            MySmartDeal is an online shopping platform developed as a web
            application project. The goal of this application is to provide
            users with a simple and efficient way to browse products,
            view details, and simulate online purchases.
          </p>

          <p>
            This web application was built using modern web technologies
            including React, Node.js, Express, and MongoDB. It demonstrates
            the implementation of a full-stack e-commerce system with
            product management, order processing, and payment simulation.
          </p>

          <p>
            Features of this project include:
          </p>

          <ul>
            <li>Product listing and search</li>
            <li>Product detail view</li>
            <li>Shopping cart</li>
            <li>Order history</li>
            <li>PayPal sandbox payment</li>
            <li>Admin product management</li>
          </ul>

          <p>
            This project was created for educational purposes as part of a
            web development course.
          </p>

        </Col>

      </Row>

    </Container>
  )
}

export default AboutScreen