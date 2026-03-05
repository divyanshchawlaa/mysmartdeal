import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

const Header = () => {

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>

      <Navbar
        style={{
          backgroundColor: "#1f2a44",
        }}
        variant='dark'
        expand='lg'
        collapseOnSelect
        fixed="top"
      >

        <Container fluid>

          {/* LEFT SIDE */}

          <div style={{ display: "flex", alignItems: "center", width: "60%" }}>

            <LinkContainer to='/'>
              <Navbar.Brand
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  color: '#00d4ff',
                  letterSpacing: '1px',
                  marginRight: "20px"
                }}
              >
                <i className='fas fa-store'></i> MySmartDeal
              </Navbar.Brand>
            </LinkContainer>


            {/* SEARCH WIDTH INCREASED */}

            <div style={{ width: "100%", maxWidth: "500px" }}>

              <Route
                render={({ history }) =>
                  <SearchBox history={history} />
                }
              />

            </div>

          </div>


          <Navbar.Toggle aria-controls='basic-navbar-nav' />

          <Navbar.Collapse id='basic-navbar-nav'>

            {/* RIGHT SIDE */}

            <Nav className='ml-auto'>

              <LinkContainer to='/about'>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/contact'>
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/faq'>
                <Nav.Link>FAQ</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/privacy'>
                <Nav.Link>Privacy</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (

                <NavDropdown title={userInfo.name} id='username'>

                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>
                      Profile
                    </NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>

                </NavDropdown>

              ) : (

                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>

              )}

              {userInfo && userInfo.isAdmin && (

                <NavDropdown title='Admin' id='adminmenu'>

                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>
                      Users
                    </NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>
                      Products
                    </NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>
                      Orders
                    </NavDropdown.Item>
                  </LinkContainer>

                </NavDropdown>

              )}

            </Nav>

          </Navbar.Collapse>

        </Container>

      </Navbar>

    </header>
  )
}

export default Header