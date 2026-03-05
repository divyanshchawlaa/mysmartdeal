import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const FaqScreen = () => {
  return (
    <Container>

      <Row className="mt-4">

        <Col>

          <h1>Frequently Asked Questions</h1>

          <h4>Is this a real store?</h4>
          <p>
            No, this website is a university project created for learning
            full-stack web development.
          </p>

          <h4>How does payment work?</h4>
          <p>
            Payments are simulated using PayPal Sandbox, so no real money is used.
          </p>

          <h4>Can I create an account?</h4>
          <p>
            Yes, you can register and login to test the features.
          </p>

          <h4>Who developed this project?</h4>
          <p>
            This project was developed as part of a software engineering course by DIVYANSH CHAWLA.
          </p>

        </Col>

      </Row>

    </Container>
  )
}

export default FaqScreen