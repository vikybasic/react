import React, { Component } from 'react'
import { MDBNavbar, MDBEdgeHeader, MDBFreeBird, MDBRow, MDBDataTable, MDBCard, MDBCardHeader, MDBCardBody } from "mdbreact";
import PostData from '../data/post.json'

class Details extends Component {
  constructor(props) {
    super(props)
    this.handleDataCallback = this.handleDataCallback.bind(this)
    this.handlePostRemove = this.handlePostRemove.bind(this)
    this.state = {
      postList: []
    }
  }

  updateBackend(currentPostList) {
    console.log('Updating..')
    this.setState({
      postItem: currentPostList
    })
  }
  handlePostRemove(postItem) {
    let currentPostList = this.state.postList
    currentPostList.pop(postItem)

    this.updateBackend(currentPostList)
  }

  handleDataCallback(postItem) {
    let currentPostList = this.state.postList
    currentPostList.push(postItem)
    this.setState({
      postItem: currentPostList
    })
  }
  componentDidMount() {
    this.setState({
      postList: PostData
    })
  }

  render() {
    const { postList } = this.state
    const columns = ["", "", "", "", ""];
    const data = [];
    return (
      <div >
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
            <br></br>
            <br></br>
            <h2>
            </h2>
            <MDBRow>
              <MDBCardBody className="text-center">
                <MDBCard>
                  <MDBCardHeader tag="h4" className="text-center font-weight-bold text-uppercase py-4"><i className="fas fa-edit"> </i>
                    Configure Shipment Details
                  </MDBCardHeader>
                  <MDBCardBody>
                    <MDBDataTable
                      data={data} columns={columns} striped bordered
                    />
                    {/* <MDBTableEditable data={data} columns={columns} striped bordered /> */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCardBody>
            </MDBRow>
          </MDBFreeBird>
        </div>
      </div>
    )
  }
}

export default Details
