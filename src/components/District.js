import React, { Component } from 'react'
const STATECOVID = 'https://api.covidindiatracker.com/state_data.json'

export default class District extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
      districtData: null,
      stateName: null
    }
    console.log('id:', this.state.id)
  }

  componentDidMount () {
    this.districtDetails()
  }

  // fetch the all district data of perticular state    
  districtDetails = () => {
    fetch(`${STATECOVID}`)
      .then(response => response.json())
      .then(result => {
        if (result) {
          const stateDetails = result
          const districtDetails = stateDetails.filter(
            state => state.id === this.state.id
          )
          const districtData = districtDetails[0].districtData
          const stateName = districtDetails[0].state

          this.setState({
            districtData,
            stateName
          })
        }
      })
      .catch(err => console.log(err.message))
  }

  render () {
    return (
      <div className='container'>
        <div
          className='row'
          style={{
            alignItems: 'center',
            padding: '50px',
            justifyItems: 'center'
          }}
        >
        <div className="col-md-12 jumbotron text-center">
                  <h1>{this.state.stateName} Covid Details</h1>
              </div>
          <div className='col-md-12'>
              
            <div className='table table-responsive'>
              <table
                className='table table-hover table-bordered'
                style={{ alignItems: 'center', justifyContent: 'center' }}>
                <thead className="thead-dark">
                  <th>District</th>
                  <th>Confirmed</th>
                  <th>Recovered</th>
                  <th>Deaths</th>
                </thead>
                <tbody>
                  {this.state.districtData &&
                    this.state.districtData.map((item, key) => {
                      return (
                        <tr key={key}>
                          <td>{item.name}</td>
                          <td>{item.confirmed}</td>
                          <td>{item.recovered}</td>
                          <td>{item.deaths}</td>
                        </tr>
                      )
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        distic
      </div>
    )
  }
}
