import React, { Component } from 'react'

class filterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subjectFilter: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      subjectFilter: e.target.value
    })
    this.props.onChange(e.target.value)
  }

  render() {
    return (
      <div>
        <label htmlFor="filter">Filter by Subject: </label>
        <input type="text" id="filter" 
          value={this.state.subjectFilter} 
          onChange={this.handleChange}/>
      </div>
      )
  }
}

export default filterForm