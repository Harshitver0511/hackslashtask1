import React from 'react'
import '../App.css';

export default function Comp(props) {
    const styles={
        backgroundColor:"rgb(33,37,41)",
        color:"white"
    }
  return (
    <div className="section" style={props.sty}>
      <div className="item1">
        <h2>{props.head2}</h2>
        <p className="info">
            {props.para}
        </p>
        <div className='aa' style={props.sac?styles:{backgroundColor:"rgb(240,248,255)",color:"black"}}>
          <p>{props.head3}</p>
          <i className="fa fa-long-arrow-right" aria-hidden="true" />
        </div>
      </div>
      <div className="item">
        <img src={props.source} alt="" />
      </div>
    </div>
  )
}
