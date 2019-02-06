import React, { Component } from 'react';
import Module from './Module'
import './pricing.css';
import FilterForm from'./FilterForm';

class RscLibMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subjects: [{"name":"Java","material" : {"presentation" :"Powerpoint", "weekwork" : "Exercise Book", "extrawork" : "Challenges", "project" : "Project"}},
      {"name":"React","material" : {"presentation" :"React_Powerpoint", "weekwork" : "React Exercise Book", "extrawork" : "React_Challenges", "project" : "React_Project"}},
      {"name":"HTML","material" : {"presentation" :"HTML_Powerpoint", "weekwork" : "HTML Exercise Book", "extrawork" : "HTML_Challenges", "project" : "HTML_Project"}}],
      filteredSubjects: []
    }
  }



    filterSubjects = (subjectFilter) => {
      let filteredSubjects = this.state.subjects
      filteredSubjects = filteredSubjects.filter((subject) => {
        let subjectName = subject.name.toLowerCase()
        return subjectName.indexOf(
          subjectFilter.toLowerCase()) !== -1
      })
      this.setState({
        filteredSubjects
      })
    }


  render() {
    return (
      <div class="container">
      
      
        <div class="card-deck mb-3 text-center">
          <div class="card mb-4 shadow-sm">
            <div class="card-header">
            <h4 class="my-0 font-weight-normal"> Resource Library </h4>
            <FilterForm match={this.props.match} onChange={this.filterSubjects} />
          </div>
          <Module  data={this.state.filteredSubjects}/>
        </div>
      </div>
      </div>
    );
  }
}

export default RscLibMain;

