import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles/style.css'

const TOTALCOVID = 'https://api.covidindiatracker.com/total.json'
const STATECOVID = 'https://api.covidindiatracker.com/state_data.json'

export default class CovidMain extends Component {
  constructor (props) {
    super(props)
    this.state = {
      covidStates: [],
      deaths: null,
      recover: null,
      confirm: null
    }
    // this.handleTableClick = this.handleTableClick.bind(this);
  }

  componentDidMount () {
    this.covidTotal()
    this.stateCovid()
  }

  // get total covid numbers
  covidTotal = () => {
    fetch(`${TOTALCOVID}`)
      .then(response => response.json())
      .then(result => {
        if (result !== null) {
          const deaths = result.deaths
          const confirm = result.confirmed
          const recover = result.recovered

          this.setState({
            deaths,
            confirm,
            recover
          })
        }
      })
      .catch(err => console.log(err.message))
  }

  // get statewise covid details
  stateCovid = () => {
    fetch(`${STATECOVID}`)
      .then(response => response.json())
      .then(result => {
        if (result) {
          const stateDetails = result
          this.setState({
            covidStates: stateDetails
          })
          console.log(stateDetails)
        }
        console.log(this.state.covidStates)
      })
      .catch(err => console.log(err.message))
  }

  render () {
    return (
      <div>
        <div className='container'>
          <div className='row text-center'>
            <div className='col-sm-4'>
              <div className='card confirmcard shadow bg-white rounded'>
                <div className='card-body'>{this.state.confirm}</div>
                <div className='card-footer'>Confirmed</div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='card recoverCard shadow bg-white rounded'>
                <div className='card-body'>{this.state.recover}</div>
                <div className='card-footer'>Recovered</div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='card deathCard shadow bg-white rounded'>
                <div className='card-body'>{this.state.deaths}</div>
                <div className='card-footer'>Deaths</div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-12'>
              <div className='table table-responsive mx-auto p-5'>
                <table className='table table-responsive table-hover table-bordered'>
                  <thead className='thead-dark'>
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                  </thead>
                  <tbody>
                    {this.state.covidStates.map((item, key) => {
                      return (
                        <tr key={key}>
                          <td>
                            {' '}
                            <Link to={'/district/' + item.id}>
                              {item.state}
                            </Link>
                          </td>
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
        </div>
      </div>
    )
  }
}
