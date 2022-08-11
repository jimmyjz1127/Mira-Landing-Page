//styling
import './Intro.css';

import React from 'react';

//apis
// import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom';


function Intro() {

    const getStyle = () => {
        return {
            backgroundImage:`url("http://localhost:5055/background")`,
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroundRepeat: "no-repeat"
        }
    }

    return (
            <div className='intro-wrapper white-text' >
                <div className='intro'>
                    <div className='col1'>
                        <div className='left-col'>
                            <div className='section-label white-text'>
                                <h2>
                                    Next
                                    <span className='navy-text'> Generation</span>
                                    <br/>
                                    Index Management
                                </h2>
                            </div>
                            
                            <br/>
                            
                            <div className='sub-text'>
                                Making crypto investing simple by offering
                                cross chain index funds,   
                                composable index management,
                                onramps to decentralized finance
                            </div>                
                            
                            <br/><br/>
                            
                            <div className='signup-form'>
                                <form className='email-form '>
                                    <div className='email-box'>
                                        <input className='email-input no-outline' type='email' placeholder='Email*'></input>
                                        <button className='btn email-submit'>Early Access</button>
                                    </div>
                                </form>
                                <br/><br/>
                                <div className='intro-btns'>
                                    <button className='btn intro-btn learn-btn'>Learn More</button>
                                    <button className='btn intro-btn launch-btn'>Launch App</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col2'>
                        <img src='http://localhost:5055/dex' />
                    </div>
                </div>
            </div>        
    );
}

export default Intro;