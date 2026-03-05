import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ContactScreen = () => {
  return (
    <Container>

      <Row className="mt-4">

        <Col>

          <h1>Contact Us</h1>

          <p>
            If you have any questions about MySmartDeal, feel free to contact us.
          </p>

          <p>
            Email: support@mysmartdeal.com
          </p>

          <p>
            Phone: +49 123 456789
          </p>

          <p>
            Address:
          </p>

          <p>
            MySmartDeal Online Store <br />
            Berlin, Germany
          </p>

        </Col>

      </Row>

    </Container>
  )
}

export default ContactScreen