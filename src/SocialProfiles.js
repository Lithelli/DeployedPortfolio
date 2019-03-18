import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class Profile extends Component {
  render(){

    const { image, link } = this.props.profile;
    
    return(
      <span>
        <a href={link}><img src={image} alt ="Social Icon" style={{ width: 35, height: 35, margin: 10}} /></a>
      </span>
    )
  }
}

export default class Profiles extends Component {
  render(){
    return(
      <div>
        <h2>Connect with me!</h2>
        <div>
          {
            SOCIAL_PROFILES.map(PROFILE => {
              return(
                <Profile key={PROFILE.id} profile={PROFILE} />
              )
            })
          }
        </div>
      </div>
    )
  }
}