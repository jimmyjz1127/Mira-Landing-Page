import React from 'react';

import './Partners.css';

function Partners() {

    return (
        <div className='partners-wrapper white-text'>
                        
            <div className='partner-logos'>
                <h1>PARTNERS</h1>
                <div className='row'>

                    <div className='row-partner'>
                        <a href="https://pontem.network/">
                            <img src='http://localhost:5055/pontem-logo' className='partner-logo'/>
                        </a>
                    </div>

                    <div className='row-partner'>
                        <a href='https://cogitent.ventures/'>
                            <img src='https://cogitent.ventures/wp-content/uploads/2022/04/Cogitent-Ventures-Horizontal-Light-Transparent.png' className='partner-logo'/>
                        </a>
                    </div>

                    <div className='row-partner'>
                        <a href='https://aptoslabs.com/'>
                            <img src='https://assets-global.website-files.com/60536b901b879c2f395d75d0/625d0fb1d7a6a4d59d14b190_aptos_logo_wordmark_transparent_white-p-500.png' className='partner-logo'/>
                        </a>
                    </div>

                </div>

                <h1></h1>
                <div className='bottom-line'/>

                <div className='row'>

                </div>
            </div>
        </div>
    )
}

export default Partners;