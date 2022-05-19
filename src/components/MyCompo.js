import React, { Component } from 'react'
import MyItem from './MyItem';
import Slider from './Slider';
import Spinner from './Spinner';

export class MyCompo extends Component {
  render() {
    return (
      
      <div className="container my-3">
          <div className="row ">
            <div className="col-md-4 "><MyItem imgUrl="https://i.postimg.cc/nrbtYnk4/images.jpg" title="Vaibhv Pandey" description="I am Vaibhav Pandey. I am Glad to see you here. Welcome..." visitUrl="https://www.instagram.com/vaibhav_pandey_2005/?hl=en"/></div>
          </div>
          <div>
            <h4 className="text-center"><strong>Languages I learn</strong></h4>
          <Slider/>
          </div>
          <div className="row">
              <h3 className="text-center"><strong>--My Projects--</strong></h3>
              <div className="text-center"><Spinner/></div>
              <div className="col-md-4"><MyItem imgUrl="https://i.postimg.cc/2STxknZ4/T-M.png" title="Text Modifier" visitUrl="https://3110vaibhav2005.github.io/TextModifier/" description="This is a React JS WebApplication made for text editing online."/></div>
              <div className="col-md-4"><MyItem imgUrl="https://i.postimg.cc/CLT7mh0f/M-S.png" title="Mail_Bot" visitUrl="https://drive.google.com/file/d/18-L7CgAhyzGxjYi7Qtd1MgDm6wIWpPj-/view?usp=sharing" description="This a mail sending GUI made with help of SMTP lib & TKINTER module in Python"/></div>
              <div className="col-md-4"><MyItem imgUrl="https://i.postimg.cc/1ztrf4Gb/S-G.png" title="Nokia Snake Game" visitUrl="https://drive.google.com/file/d/1RTPv56RivPbuFKiq9jAWVu4MYEPKLfU0/view?usp=sharing" description="This is a simple snake game made with help of PYGAME Module in Python "/></div>
          </div>
          <div className="row">
          <div className="col-md-4"><MyItem imgUrl="https://i.postimg.cc/MK3n7jTY/Screenshot-2022-05-07-020037.png" title="Quick Runner" visitUrl="https://drive.google.com/file/d/14MfP0kKlGq_usN_zd91ni-EpH3HvrC3x/view?usp=sharing" description="This is a GUI made with the help of TKINTER module in Python."/></div>
          <div className="col-md-4"><MyItem imgUrl="https://i.postimg.cc/RZt1FzQ9/Screenshot-2022-05-07-021119.png" title="Calculator" visitUrl="https://drive.google.com/file/d/1G4Od8726cB1MP8UQQQJ1BHgoqdq5QG0l/view?usp=sharing" description="Basic Calculator on Python"/></div>
          <div className="col-md-4"><MyItem imgUrl="https://i.postimg.cc/6599nqmB/v-letter-logo-icon-for-business-and-company-vector.jpg" title="V_Browser" visitUrl="https://drive.google.com/file/d/1qKaeKC85CEeJw3yvPQPLvBUaHwcGt5YK/view?usp=sharing" description="Basic Browser made with help of PYQT5 on Python"/></div>
          </div>        
      </div>
    )
  }
}

export default MyCompo
