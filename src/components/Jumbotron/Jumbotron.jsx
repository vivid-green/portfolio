import React from "react";
import { Link } from 'react-router-dom';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon, MDBLink } from "mdbreact";
import sunset from "../../images/sunset.JPG";
import resume from "../../files/resume.pdf";

const Jumbotron = () => {

    return (
        <MDBJumbotron className="mw-100" style={{ padding: 0, margin: 0 }}>
            <MDBCol className="text-black text-center" style={{ backgroundImage: `url(${sunset})` }}>
                <MDBCol className="py-5">
                    <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Hello World.</MDBCardTitle>
                    <div className="juicy-peach-gradient color-block-5 w-100 d-inline-block mb-3 bio">
                        <p className="ml-5">
                            I'm an aspiring fullstack web developer in SLC, UT and enjoy the diverse landscapes here.<br></br> I enjoy hikes and biking around the city. I'll be adding some more projects to my portfolio as I continue to learn code.
                        </p>
                    </div>
                    <Link to="/portfolio">
                        <MDBBtn color="dark" style={{ width: "20rem" }}><MDBIcon icon="clone" ></MDBIcon> View Portfolio</MDBBtn>
                    </Link>
                    <a href={resume} target="_blank" rel="noreferrer"><MDBBtn color="dark" style={{ width: "20rem" }}><MDBIcon icon="clone"></MDBIcon> View Resume</MDBBtn></a>
                    <a href="mailto:zacharycreek@gmail.com" target="_blank" rel="noreferrer"><MDBBtn color="dark" style={{ width: "20rem" }}><MDBIcon icon="clone"></MDBIcon> Contact</MDBBtn></a>
                </MDBCol>
            </MDBCol>
        </MDBJumbotron>
    )
}

export default Jumbotron;