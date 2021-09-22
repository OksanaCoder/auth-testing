import React from "react"
import { Col } from "react-bootstrap"
import '../App.css'
import logo from '../assets/Logo.png'
import imgBig from '../assets/back.png'

const SideBar = () => {
    return (
        <Col lg={6} md={6} sm={12} xs={12} className='sidebar'>
            <img src={logo} alt="" className="logo" />
            <h6 className="text-white head">Create, share, rank, compare</h6>
            <ul className="text-white list-info">
                <li>Create beautiful rankings, with up to 25 items in each ranking</li>
                <li>Use simple Drag & Drop functionality to rank your lists</li>
                <li>Easily and quickly share your rankings on social media</li>
                <li>Create and share a unique GIF-version of your ranking</li>
                <li>Personalize your ranking with Favvle’s design toolsSave up to 10 unique rankings to your personal library</li>
            </ul>
            <img src={imgBig} alt="" className="imgBig" />
        </Col>
    );
}

export default SideBar