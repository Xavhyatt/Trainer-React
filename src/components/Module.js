import React, { Component } from 'react';
import './pricing.css';

class Module extends Component {

    render() {
        //Loop through the array of data, convert it into an array of div elements.
        let outputData = this.props.data.map((element) => {
            return (
                <div class="card-deck mb-3 text-center">
                    <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <div key={element.id}>
                                <h4><strong>{element.id}</strong>  {element.name}</h4>
                            </div>
                            <div class="card-body">
                    <button><strong>{element.id}</strong> {element.material.presentation} </button><br/>
                    <button> <strong>{element.id}</strong> {element.material.weekwork}  </button><br/>
                     <button> <strong>{element.id}</strong> {element.material.extrawork}  </button><br/>
                    <button> <strong>{element.id}</strong> {element.material.project}  </button><br/>
                 </div>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div>
                {outputData}
            </div>
        );

    }
}

export default Module;

    // render(){
    //     return(
    //         <div class="card-deck mb-3 text-center">
    //         <div class="card mb-4 shadow-sm">
    //             <div class="card-header">
    //                 <h4 id="card1Title" class="my-0 font-weight-normal"> </h4>
    //             </div>
    //             <div class="card-body">
    //                 <button > Java Presentation </button><br/>
    //                 <a href="#"> Java Exercise Book </a><br/>
    //                 <a href="#"> Java Challenges </a><br/>
    //                 <a href="#"> Java Project 1 </a><br/>
    //                 <a href="#"> Java Project 2 </a><br/>
    //             </div>
    //         </div>
    //         </div>
    //     )
    // }
// }