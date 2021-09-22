import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container, Row, Col } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import '../App.css'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import SideBar from './SideBar.js'
const eye = <FontAwesomeIcon icon={faEye} />;


export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>

      <Row>
        <Col lg={6} md={6} sm={12} xs={12} className="sidebar-left">
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Card className='card-style form'>
                <Card.Body>
                  <h2 className="text-center head-text">Sign Up</h2>
                  <h2 className="text-center head-text-2">Welcome</h2>

                  <Row className="d-flex text-center">
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <button className="auth d-flex justify-content-around align-items-center"><img src={google} alt="" />Sign up with Google</button>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <button className="auth d-flex justify-content-around align-items-center"><img src={facebook} alt="" />Sign Up with Facebook</button>
                    </Col>
                  </Row>
                  <h2 className="text-center head-text-2">or</h2>

                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                      <Form.Control type="email" ref={emailRef} className="input-style" placeholder="Email" required />
                    </Form.Group>
                    <Form.Group id="password">
                      <Form.Control type="password" ref={passwordRef} className="input-style" placeholder="Password" required />

                    </Form.Group>
                    <Form.Group id="password-confirm">
                      <Form.Control type="password" ref={passwordConfirmRef} className="input-style" placeholder="Confirm password" required />
                    </Form.Group>
                    <Row>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <Button disabled={loading} className="auth-btn top-60" type="submit">
                          Sign Up
                  </Button>
                      </Col>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <Button disabled={loading} className="auth-btn not-now" type="submit">
                          Now now
                  </Button>
                      </Col>
                    </Row>
                    <div className="w-100 text-center have-account">
                      <Link to="/Login">Already have an account?</Link>
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
