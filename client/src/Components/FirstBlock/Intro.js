//styling
import './Intro.css';

import React from 'react';

//apis
// import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom';


function Intro() {

    const getStyle = () => {
        return {
            backgroundImage:`url("http://localhost:5000/first-block")`,
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroundRepeat: "no-repeat"
        }
    }

    return (
        <div >
            <div className='intro white-text' >
                <div className='left-col'>
                    <div className='section-label yellow-text'>
                        Next Generation of Index Management
                    </div>
                    <br/>
                    <br/>
                    
                    <div className='sub-text'>
                        Making crypto investing simple by offering:
                        <br/>
                        Cross chain index funds   
                        <br/>
                        Composable index management
                        <br/>
                        Onramps to decentralized finance
                    </div>                
                    
                    <br/>
                    <br/>
                    <div className='signup-form'>
                        <form className='email-form '>
                            <div className='email-box'>
                                <input className='email-input' type='text' placeholder='Email*'></input>
                                <button classname='btn email-submit'>Early Access</button>
                            </div>
                        </form>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <div className='intro-btns'>
                        <button className='btn intro-btn learn-btn'>Learn More</button>
                        <button className='btn intro-btn launch-btn'>Launch App</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Intro;