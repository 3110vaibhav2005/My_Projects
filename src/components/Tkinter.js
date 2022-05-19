import React, { Component } from 'react'
import Spinner2 from './Spinner2'

export class Tkinter extends Component {
  render() {
    return (
    <div>
        <h4 className="text-center">Tkinter</h4>
        <div className="text-center"><Spinner2/></div>
        <p>
            Tkinter is a module use to design a simple GUI with the help of PYTHON.
            Tkinter is spread across several modules. Most applications will need the main tkinter module, 
            as well as the tkinter.ttk module, which provides the modern themed widget set and API.
        </p>
        <div>
            <table className="table table-striped table-hover" >
            <thead>
                <tr>
                <th scope="col">Sr.</th>
                <th scope="col">Project No.</th>
                <th scope="col">Project Name</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td >Project1</td>
                <td >MailSender</td>
                <td ><a href="https://github.com/3110vaibhav2005/TK_GUI/blob/main/MailSender%20v-1.3.0.py" target="_blank" className="btn btn-sm btn-primary">See Code Here</a></td>
                </tr>
                <tr>
                <th  scope="row">2</th>
                <td >Project2</td>
                <td >Digital Clock</td>
                <td ><a href="https://github.com/3110vaibhav2005/TK_GUI/blob/main/Time.py" target="_blank" className="btn btn-sm btn-primary">See Code Here</a></td>
                </tr>
                <tr>
                <th  scope="row">3</th>
                <td >Project3</td>
                <td >QuickRunner</td>
                <td ><a href="https://github.com/3110vaibhav2005/TK_GUI/blob/main/QuickRunner.pyw" target="_blank" className="btn btn-sm btn-primary">See Code Here</a></td>
                </tr>
                <tr>
                <th  scope="row">4</th>
                <td >Project4</td>
                <td >Calculator</td>
                <td ><a href="https://github.com/3110vaibhav2005/TK_GUI/blob/main/calc.py" target="_blank" className="btn btn-sm btn-primary">See Code Here</a></td>
                </tr>                                
            </tbody>
            </table>        
        </div>
        <p className="text-center"><strong>More Projects will be added soon.</strong></p>
    </div>
    )
  }
}

export default Tkinter
