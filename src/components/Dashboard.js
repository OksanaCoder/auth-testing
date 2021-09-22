import React, { useState } from "react"
import { Card, Button, Col, Row } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import SideBar from './SideBar.js'


export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <Row>
        <Col lg={6} md={6} sm={12} xs={12} className="sidebar-left">
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} className="text-center">
              <h6 className="text-center head-text m-352">Well done!
               You’ve created an account on Favvle!</h6>

              <Button className="auth-btn" onClick={handleLogout}>
                Continue</Button>

            </Col>
          </Row>
        </Col>
        <SideBar />
      </Row>
    </>
  )
}
