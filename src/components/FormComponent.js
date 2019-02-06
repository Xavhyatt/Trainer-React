import React, { Component } from 'react';

class FormComponent extends Component {

    constructor(props) {
      super(props);
  
      //Each form component will call this method to update the state
      this.handleChange = (valueName) => (event) => this.setState({ [valueName]: event.target.value });
  
      //Submit on the child form component will push all data in the state of the child
      //component up to the parent component
      this.handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
          myData: ""
        });
      }
      //Initialize state
      this.state = {
        myData: ""
      };
    }
    render() {
      return (
        <form id="addmyData" onSubmit={this.handleSubmit} >
          <input type="text" name="myData" value={this.state.myData} onChange={this.handleChange("myData")} />
        </form>
      );
    }
  }

 export default FormComponent;