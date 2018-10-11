import React from 'react'
import {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import FormSearch from './input';
import DayWeather from './dayWeather'
import "./style.css";

class Map extends Component {
  render() {
    return (
      <React.Fragment>
          <div className = "wrapperWeather"> 
            { this.props.listOfDays.map(day => {    
              return <DayWeather weather = {day} key = {day.id}/>            
            })}
          </div>        
          <FormSearch setInfo = {this.props.setInfo} setNonexistentCity = {this.props.setNonexistentCity} existentCity = {this.props.existentCity}/>
          <ReactMapGL mapboxApiAccessToken={"pk.eyJ1IjoiZGFyeWFkcmFjaHVrIiwiYSI6ImNqbjNiMmMwNTBiMmszd28ycXgwdjdveGIifQ.8FzTZ1Rjy76vf6r_7uVC9w"}
          width={window.innerWidth}
          height={window.innerHeight}
          latitude={this.props.coords.lat}
          longitude={this.props.coords.lon}
          zoom={this.props.zoom}
          onViewportChange={(viewport) => {this.props.setInfoFromMapGL(viewport)}}
        />
      </React.Fragment>     
    );
  }
}

export default Map;