import React, { Component } from 'react'

export class MyItem extends Component {

  render() {
      let {title,description,imgUrl,visitUrl} = this.props;
    return (
      <div className="w-auto p-3 my-5">
        <div className="card" style={{width:"14rem"}}>
            <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={visitUrl} target="_blank" className="btn btn-sm btn-primary">Visit</a>
            </div>
        </div>        
      </div>
    )
  }
}

export default MyItem
