import React, { Component } from 'react'
import Spinner2 from './Spinner2'

export class OtherPr extends Component {
  render() {
    return (
      <div>
        <h3 className="text-center">Practice Projects</h3>
        <div className="text-center"><Spinner2/></div>
        <p><strong>
          These are projects I created for learning and getting perfect in my work.You may also try these source code are also available. There are list of top 14 Projects and remaining in Others.</strong></p>
        <h6>I Hope this would help full for you</h6>
        <table className="table table-striped table-hover">
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
                <td >GP Calculator</td>
                <td ><a href="https://github.com/3110vaibhav2005/pythonPro/blob/main/Geometric%20Problem%20Calc.py" target="_blank" className="btn btn-sm btn-primary">See Code Here</a></td>
                </tr>
                <tr>
                <th  scope="row">2</th>
                <td >Project2</td>
                <td >BMI Calculator</td>
                <td ><a href="https://github.com/3110vaibhav2005/pythonPro/blob/main/BMI.py" target="_blank" className="btn btn-sm btn-primary">See Code Here</a></td>
                </tr>
                <tr>
                <th  scope="row">3</th>
                <td >Project3</td>
                <td >AP Calculator</td>
                <td ><a href="https://github.com/3110vaibhav2005/pythonPro/blob/main/Arethmetic%20Problem%20Calc.py" target="_blank" className="btn btn-sm btn-primary">See Code Here</a></td>
                </tr>
                <tr>
                <th  scope="row">4</th>
                <td >Project4</td>
                <td >Fibonica Series</td>
                <td ><a href="https://github.com/3110vaibhav2005/pythonPro/blob/main/Fibonica%20Series.py" target="_blank" className="btn btn-sm btn-primary">See Code Here</a></td>
                </tr>
                <tr>
                <th  scope="row">5</th>
                <td >Project5</td>
                <td >Count element using Dict</td>
                <td ><a href="https://github.com/3110vaibhav2005/pythonPro/blob/main/dict%20count.py" target="_blank" className="btn btn-sm btn-primary">See Code Here</a></td>
                </tr>    
                <tr>
                <th scope="row">6</th>
                <td>Project6</td>
                <td>Pattern L.H Triangle</td>
                <td><a href="https://github.com/3110vaibhav2005/pythonPro/blob/main/pattern1.py" target="_blank" className="btn btn-sm btn-primary">See Code Here</a></td>
                </tr>
                <tr>
                <th scope="row">7</th>
                <td>Project7</td>
                <td>Palindrome Num Finder</td>
                <td><a href="https://github.com/3110vaibhav2005/pythonPro/blob/main/palindrome%20num.py" target="_blank" className="btn btn-sm btn-primary">See Code Here</a></td>
                </tr>
                <tr>
                <th scope="row">8</th>
                <td>Project8</td>
                <td>Bubble Sorting</td>
                <td><a href="https://github.com/3110vaibhav2005/pythonPro/blob/main/Bubble%20Sorting%20list.py" target="_blank" className="btn btn-sm btn-primary">See Code Here</a></td>
                </tr>   
                <tr>
                <th scope="row">9</th>
                <td>Project9</td>
                <td>Armstrong Number</td>
                <td><a href="https://github.com/3110vaibhav2005/pythonPro/blob/main/Armstrong%20num.py" target="_blank" className="btn btn-sm btn-primary">See Code Here</a></td>
                </tr>            
                <tr>
                <th scope="row">10</th>
                <td>Project10</td>
                <td>Leap Year Finder</td>
                <td><a href="https://github.com/3110vaibhav2005/pythonPro/blob/main/Leap%20year.py" target="_blank" className="btn btn-sm btn-primary">See Code Here</a></td>
                </tr>             
                <tr>
                <th scope="row">11</th>
                <td>Project 11</td>
                <td>Table print</td>
                <td><a href="https://github.com/3110vaibhav2005/pythonPro/blob/main/Table%20in%20exp.py" target="_blank" className="btn btn-sm btn-primary">See Code Here</a></td>
                </tr>            
                <tr>
                <th scope="row">12</th>
                <td>Project12</td>
                <td>Vowel count</td>
                <td><a href="https://github.com/3110vaibhav2005/pythonPro/blob/main/Vowel.py" target="_blank" className="btn btn-sm btn-primary">See Code Here</a></td>
                </tr>             
                <tr>
                <th scope="row">13</th>
                <td>Project13</td>
                <td>Sum of elements in Sequence</td>
                <td><a href="https://github.com/3110vaibhav2005/pythonPro/blob/main/without%20sum.py" target="_blank" className="btn btn-sm btn-primary">See Code Here</a></td>
                </tr>             
                <tr>
                <th scope="row">14</th>
                <td>Project14</td>
                <td>Detail of Pharagraph</td>
                <td><a href="https://github.com/3110vaibhav2005/pythonPro/blob/main/Phara%20Data.py" target="_blank" className="btn btn-sm btn-primary">See Code Here</a></td>
                </tr>             
                <tr>
                <th scope="row">15</th>
                <td>Others</td>
                <td>Remaining Projecs</td>
                <td><a href="https://github.com/3110vaibhav2005/pythonPro" target="_blank" className="btn btn-sm btn-primary">See Code Here</a></td>
                </tr>                                                                                                                
            </tbody>            
        </table>        
      </div>
    )
  }
}

export default OtherPr
