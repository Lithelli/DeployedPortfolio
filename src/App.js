import React, { Component } from 'react';
import Projects from './Projects';
import Social from './SocialProfiles';
import profile from './assets/profilePic.jpg';
import './index.css';

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
       this.setState({ displayBio: !this.state.displayBio });
    }

    render() { 
        return (
            <>
               <div className="backgroundPhoto">

               <div className="container intro">

                    <div className="row">
                        <img id="profile" className="responsive-img circle col s5 m4 l4 offset-s6 offset-m7 offset-l8" src={profile} alt='profile'/>
                    </div>

                    <div className="row flow-text blue-grey-text text-lighten-4">
                        {/* DIV FOR CENTERING CONTENT */}
                        <div className="col s0 m2 l2"></div>
                        <div className="col s12 m6 l8 homeText">
                        <h1>Welcome to the Portfolio!</h1>
                                <p>My name is Lee. I'm a software engineer.</p>
                                <p>I'm always looking to link and build.</p>{
                                    this.state.displayBio ? (   
                                    <div>
                                        <p>I live in Birmingham, and code all day every day</p>
                                        <p>I primarly use Javascript, React.js is the way to go!</p>
                                        <p>Besides coding, I teach yoga and work with wood!</p>
                                        <button className="btn hoverable" onClick={this.toggleDisplayBio}>Show less</button>
                                    </div>
                                ) : (
                                    <div>
                                        <button className="btn hoverable" onClick={this.toggleDisplayBio}>Read more</button>
                                    </div>
                                )
                                }
                        </div>
                        
                        {/* DIV FOR CENTERING CONTENT */}
                        <div className="col s0 m2 l2"></div>
                    </div>

                    {/*//////////////// END OF FIRST CONTAINER/////////// */}
                    </div>
               </div>
                
                        <div className="col 12"><hr />
                        <Projects />
                        <hr />
                        <Social />
                        </div>
            </>
        )
    }
}

export default App