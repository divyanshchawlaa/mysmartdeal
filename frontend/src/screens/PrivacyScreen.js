import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const PrivacyScreen = () => {
  return (
    <Container>

      <Row className="mt-4">

        <Col>

          <h1>Privacy Policy</h1>

          <p>
            MySmartDeal respects your privacy and is committed to protecting
            your personal data.
          </p>

          <p>
            This application does not store real payment information.
            All transactions are simulated using PayPal Sandbox.
          </p>

          <p>
            User data is stored securely in MongoDB for educational purposes.
          </p>

          <p>
            This project is created only for academic use and is not a real
            commercial website.
          </p>

        </Col>

      </Row>

    </Container>
  )
}

export default PrivacyScreen