import React, { Component } from 'react'
import PostData from '../data/post.json'
import { MDBDataTable, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import SectionContainer from "./components/sectionContainer";

class Shipments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: [],
      isOldestFirst: true,
      referrer: null
    }

  }

  componentDidMount() {
    const postList = PostData
    this.setState({
      isOldestFirst: true,
      postList: postList
    })
  }

  render() {
    function testClickEvent(e) {
      document.location.href = "/shipment-details/id";
    }
    const { postList } = this.state

    const data = () => ({
      columns: [
        {
          label: "id",
          field: "id",
          sort: "asc",
          width: 150
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
          width: 270
        },
        {
          label: "cargo Type",
          field: "cargoType",
          width: 200,
        },
        {
          label: "cargo Description",
          field: "cargoDesc",
          width: 200,
        },
        {
          label: "cargo Volume",
          field: "cargoVol",
          width: 200,
        },
        {
          label: "Mode",
          field: "mode",
          width: 100
        },
        {
          label: "Type",
          field: "type",
          width: 150
        },
        {
          label: "Destination",
          field: "destination",
          width: 100
        },
        {
          label: "Origin",
          field: "origin",
          width: 100
        },
        {
          label: "Service Type",
          field: "services",
          width: 100
        },
        {
          label: "Total",
          field: "total",
          width: 100
        },
        {
          label: "Status",
          field: "status",
          width: 100
        },
        {
          label: "User Id",
          field: "userId",
          width: 100
        }
      ],
      rows: [{
        id: "S1000",
        name: "T-shirts(Summer2018) from Shanghai to Hamburg",
        cargoType: "Fabric",
        cargoDesc: "2000 Green T-shirts",
        cargoVol: "3",
        mode: "sea",
        type: "FCL",
        destination: "Saarbrücker Str. 38, 10405 Berlin",
        origin: "Shanghai Port",
        services: "customs",
        total: "1000",
        status: "ACTIVE",
        userId: "U1000",
        clickEvent: (e) => testClickEvent(e)
      }, {
        id: "S1001",
        name: "New spring collection(2018)",
        cargoType: "Furniture",
        cargoDesc: "300 Tables",
        cargoVol: "3",
        mode: "sea",
        type: "FCL",
        destination: "Saarbrücker Str. 38, 10405 Berlin",
        origin: "Ningbo port",
        services: "customs",
        total: "3000",
        status: "ACTIVE",
        userId: "U1002",
        clickEvent: (e) => testClickEvent(e)
      },
      {
        id: "S1002",
        name: "PO89634, PO27X",
        cargoType: "Bikes model 27X",
        cargoDesc: "100 Bikes model 27X",
        cargoVol: "100",
        mode: "air",
        type: "LCL",
        destination: "Saarbrücker Str. 38, 10405 Berlin",
        origin: "Shanghai Port",
        services: "customs",
        total: "10000",
        status: "COMPLETED",
        userId: "U1001",
        clickEvent: (e) => testClickEvent(e)
      },
      {
        id: "S1003",
        name: "New Furnitures from Shengen(2018)",
        cargoType: "Couch22 White",
        cargoDesc: "103 Couch model Couch22",
        cargoVol: "103",
        mode: "sea",
        type: "LCL",
        destination: "Mullerstr 6, 13353 Berlin",
        origin: "Shengen Port",
        services: "insurance",
        total: "10000",
        status: "COMPLETED",
        userId: "U5312",
        clickEvent: (e) => testClickEvent(e)
      },
      {
        id: "S1004",
        name: "New Furnitures from Shengen",
        cargoType: "Couch22 White",
        cargoDesc: "103 Couch model Couch22",
        cargoVol: "103",
        mode: "air",
        type: "LCL",
        destination: "Mullerstr 6, 13353 Berlin",
        origin: "Shengen Port",
        services: "insurance",
        total: "10000",
        status: "NEW",
        userId: "U5312",
        clickEvent: (e) => testClickEvent(e)
      },
      {
        id: "S1005",
        name: "New Furnitures From Chittagong",
        cargoType: "Couch22 White",
        cargoDesc: "103 Couch model Couch22",
        cargoVol: "103",
        mode: "air",
        type: "FCL",
        destination: "Mullerstr 6, 13353 Berlin",
        origin: "Chittagong Port",
        services: "insurance",
        total: "1000",
        status: "NEW",
        userId: "U5312",
        clickEvent: (e) => testClickEvent(e)
      },
      {
        id: "S1006",
        name: "Vacuum Cleaners",
        cargoType: "TVAC515",
        cargoDesc: "555 TVAC515 120V",
        cargoVol: "555",
        mode: "air",
        type: "FCL",
        destination: "Tughlakabad Port",
        origin: "Hamburg Port",
        services: "insurance",
        total: "100000",
        status: "ACTIVE",
        userId: "U531221",
        clickEvent: (e) => testClickEvent(e)
      },
      {
        id: "S1007",
        name: "Mattress",
        cargoType: "MAT128",
        cargoDesc: "MAT12ftx82ft",
        cargoVol: "666",
        mode: "sea",
        type: "FCL",
        destination: "Shengen Port",
        origin: "Bremerhaven Port",
        services: "customs",
        total: "101010",
        status: "ACTIVE",
        userId: "U531222",
        clickEvent: (e) => testClickEvent(e)
      },
      {
        id: "S1008",
        name: "Scooters",
        cargoType: "Gororo",
        cargoDesc: "Gororo Type B",
        cargoVol: "150",
        mode: "air",
        type: "FCL",
        destination: "Rotterdam Port",
        origin: "Xianbou Port",
        services: "customs",
        total: "60120120",
        status: "COMPLETED",
        userId: "U1337",
        clickEvent: (e) => testClickEvent(e)
      },
      {
        id: "S1009",
        name: "Helmets",
        cargoType: "HelmGoro",
        cargoDesc: "HelmGoro Red",
        cargoVol: "150",
        mode: "air",
        type: "LCL",
        destination: "Rotterdam Port",
        origin: "Xianbou Port",
        services: "customs",
        total: "60120120",
        status: "COMPLETED",
        userId: "U1337",
        clickEvent: (e) => testClickEvent(e)
      },
      {
        id: "S1010",
        name: "Neukrit 5a Cable",
        cargoType: "Neukrit5a",
        cargoDesc: "Cable with phantom support",
        cargoVol: "80",
        mode: "air",
        type: "LCL",
        destination: "Rotterdam Port",
        origin: "Xianbou Port",
        services: "customs",
        total: "420420",
        status: "ACTIVE",
        userId: "U0002",
        clickEvent: (e) => testClickEvent(e)
      },
      {
        id: "S1011",
        name: "Neukrit Phantom3",
        cargoType: "NeukritPh3",
        cargoDesc: "Phantom Plug Gold Plated",
        cargoVol: "100",
        mode: "sea",
        type: "LCL",
        destination: "Rotterdam Port",
        origin: "Xianbou Port",
        services: "customs",
        total: "420420",
        status: "ACTIVE",
        userId: "U0002",
        clickEvent: (e) => testClickEvent(e)
      },
      {
        id: "S1012",
        name: "T-shirts(Spring 2018) from Shanghai to Hamburg",
        cargoType: "Fabric",
        cargoDesc: "1000 Blue T-shirts",
        cargoVol: "3",
        mode: "sea",
        type: "FCL",
        destination: "Saarbrücker Str. 38, 10405 Berlin",
        origin: "Shanghai Port",
        services: "customs",
        total: "1000",
        status: "COMPLETED",
        userId: "U1000",
        clickEvent: (e) => testClickEvent(e)
      },
      {
        id: "S1013",
        name: "New spring furniture collection(2018)",
        cargoType: "Furniture",
        cargoDesc: "1500 Chairs",
        cargoVol: "15",
        mode: "sea",
        type: "FCL",
        destination: "Saarbrücker Str. 38, 10405 Berlin",
        origin: "Ningbo port",
        services: "customs",
        total: "3000",
        status: "COMPLETED",
        userId: "U1002",
        clickEvent: (e) => testClickEvent(e)
      },
      {
        id: "S1014",
        name: "New Furnitures from Shengen(Rosewood)",
        cargoType: "Couch22 White",
        cargoDesc: "103 Couch model Couch22",
        cargoVol: "103",
        mode: "air",
        type: "LCL",
        destination: "Mullerstr 6, 13353 Berlin",
        origin: "Shengen Port",
        services: "insurance",
        total: "10000",
        status: "COMPLETED",
        userId: "U5312",
        clickEvent: (e) => testClickEvent(e)
      },
      {
        id: "S1015",
        name: "New Furnitures From Chittagong(Sisou)",
        cargoType: "Couch22 White",
        cargoDesc: "103 Couch model Couch22",
        cargoVol: "103",
        mode: "air",
        type: "FCL",
        destination: "Mullerstr 6, 13353 Berlin",
        origin: "Chittagong Port",
        services: "insurance",
        total: "1000",
        status: "NEW",
        userId: "U5312",
        clickEvent: (e) => testClickEvent(e)
      },
      {
        id: "S1016",
        name: "Vacuum Cleaners",
        cargoType: "TVAC515",
        cargoDesc: "555 TVAC515 120V",
        cargoVol: "555",
        mode: "sea",
        type: "FCL",
        destination: "Tughlakabad Port",
        origin: "Hamburg Port",
        services: "insurance",
        total: "100000",
        status: "COMPLETED",
        userId: "U531221",
        clickEvent: (e) => testClickEvent(e)
      },
      {
        id: "S1017",
        name: "Mattress(Medium)",
        cargoType: "MAT128",
        cargoDesc: "MAT12ftx82ft",
        cargoVol: "666",
        mode: "sea",
        type: "FCL",
        destination: "Shengen Port",
        origin: "Bremerhaven Port",
        services: "customs",
        total: "101010",
        status: "ACTIVE",
        userId: "U531222",
        clickEvent: (e) => testClickEvent(e)
      },
      {
        id: "S1018",
        name: "Scooters Blue/Green",
        cargoType: "Gororo",
        cargoDesc: "Gororo Type B",
        cargoVol: "150",
        mode: "air",
        type: "FCL",
        destination: "Rotterdam Port",
        origin: "Xianbou Port",
        services: "customs",
        total: "60120120",
        status: "COMPLETED",
        userId: "U1337",
        clickEvent: (e) => testClickEvent(e)
      },
      {
        id: "S1019",
        name: "Helmets(Round)",
        cargoType: "HelmGoro",
        cargoDesc: "HelmGoro Red",
        cargoVol: "150",
        mode: "air",
        type: "LCL",
        destination: "Rotterdam Port",
        origin: "Xianbou Port",
        services: "customs",
        total: "60120120",
        status: "COMPLETED",
        userId: "U1337",
        clickEvent: (e) => testClickEvent(e)
      },
      {
        id: "S1020",
        name: "Neukrit 5a Cable",
        cargoType: "Neukrit5a",
        cargoDesc: "Cable with phantom support",
        cargoVol: "80",
        mode: "air",
        type: "LCL",
        destination: "Rotterdam Port",
        origin: "Xianbou Port",
        services: "customs",
        total: "420420",
        status: "ACTIVE",
        userId: "U0002",
        clickEvent: (e) => testClickEvent(e)
      },
      {
        id: "S1021",
        name: "Neukrit Phantom3",
        cargoType: "NeukritPh3",
        cargoDesc: "Phantom Plug Gold Plated",
        cargoVol: "100",
        mode: "sea",
        type: "LCL",
        destination: "Rotterdam Port",
        origin: "Xianbou Port",
        services: "customs",
        total: "420420",
        status: "ACTIVE",
        userId: "U0002",
        clickEvent: (e) => testClickEvent(e)
      },
      {
        id: "S1022",
        name: "T-shirts(Spring 2019) from Shanghai to Hamburg",
        cargoType: "Fabric",
        cargoDesc: "2000 Green T-shirts",
        cargoVol: "3",
        mode: "sea",
        type: "FCL",
        destination: "Saarbrücker Str. 38, 10405 Berlin",
        origin: "Shanghai Port",
        services: "customs",
        total: "1000",
        status: "ACTIVE",
        userId: "U1000",
        clickEvent: (e) => testClickEvent(e)
      },
      {
        id: "S1023",
        name: "New spring collection(2019)",
        cargoType: "Furniture",
        cargoDesc: "300 Tables",
        cargoVol: "20",
        mode: "sea",
        type: "FCL",
        destination: "Saarbrücker Str. 38, 10405 Berlin",
        origin: "Ningbo port",
        services: "customs",
        total: "3000",
        status: "ACTIVE",
        userId: "U1002",
        clickEvent: (e) => testClickEvent(e)
      }]
    });
    return (
      <div >
        <br></br>
        <h2>
          <strong className="title">
            Shipments Summary Dashboard
          </strong>
        </h2>
        <MDBRow className="py-3">
          <MDBCol md="12">
            <SectionContainer noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTable
                    striped
                    bordered
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={new data()}
                  />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>
      </div>
    )
  }
}

export default Shipments
