import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Col, Row } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import SideBar from './SideBar.js'
import '../App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div> */}

      <Row>
        <Col lg={6} md={6} sm={12} xs={12} className="sidebar-left">
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Card className='card-style form'>
                <Card.Body>
                  <h2 className="text-center head-text">Log In</h2>

                  <Row className="d-flex text-center">
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <button className="auth d-flex justify-content-around align-items-center"><img src={google} alt="" />Login with Google</button>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <button className="auth d-flex justify-content-around align-items-center"><img src={facebook} alt="" />Login with Facebook</button>
                    </Col>
                  </Row>
                  <h2 className="text-center head-text-2">or</h2>

                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                      <Form.Control type="email" ref={emailRef} className="input-style" placeholder="Email" required />
                    </Form.Group>
                    <Form.Group id="password">
                      <Form.Control type={passwordShown ? "text" : "password"} ref={passwordRef} className="input-style" placeholder="Password" required />
                      <i className="eye-3" onClick={togglePasswordVisiblity}>{eye}</i>
                    </Form.Group>
                    <div className="w-100 text-right have-account">
                      Forgot password ?
                    </div>

                    <Row>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <Button disabled={loading} className="auth-btn top-60" type="submit">
                          Log In
                  </Button>
                      </Col>

                    </Row>
                    <div className="w-100 text-center have-account">
                      <Link to="/signup">Don't an account yet ?</Link>
                    </div>

                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <SideBar />
      </Row>
    </>
  )
}
