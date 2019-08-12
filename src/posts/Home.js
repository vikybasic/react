import React, { Component } from 'react'
import Shipments from './Main'
import {
  MDBNavbar,
  MDBEdgeHeader,
  MDBFreeBird,
  MDBRow,
  MDBCardBody
} from "mdbreact";

class Home extends Component {
  render() {
    return (
      <div>
        <MDBNavbar color="indigo" dark expand="md" fixed="top" scrolling>
          <div >
            <h2>
              <strong className="font-weight-header" color="blue"><i className="fas fa-ship"> </i>
                Freight Market
              </strong>
            </h2>
          </div>
        </MDBNavbar>
        <MDBEdgeHeader color="indigo darken" className="sectionPage" />
        <div className="col-md-12">
          <MDBFreeBird>
            <MDBRow>
              <MDBCardBody className="text-center">
                <Shipments />
              </MDBCardBody>
            </MDBRow>
          </MDBFreeBird>
        </div>
      </div>
    )
  }
}

export default Home
