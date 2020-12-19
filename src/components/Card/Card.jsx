import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const Card = (props) => {
  return (
    <MDBCol size="12">
      <MDBCard className="m-2 mw-100 elegant-color-dark">
        <MDBCardImage className="img-fluid" src={props.img} waves />
        <MDBCardBody>
          <MDBCardTitle style={{color: "white"}}>{props.title}</MDBCardTitle>
          <MDBCardText className="cardbody">
            {props.desc}
          </MDBCardText>
          <MDBBtn href={props.github} target="_blank" rel="noreferrer">Github</MDBBtn>
          <MDBBtn href={props.website} target="_blank" rel="noreferrer">Website</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Card;