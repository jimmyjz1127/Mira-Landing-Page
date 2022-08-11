import React from 'react';

import './Aptos.css';

function Aptos() {

    return (
        <div className='aptos-wrapper white-text'>
            <div className='aptos-intro'>
                <h1>Powered By Aptos</h1>
                <p className='gray-text'>
                    Aptos is a new Layer 1 blockchain using the Move language, 
                    pipelined execution and other innovations for enabling production-ready 
                    smart contract infrastructure with an emphasis on 
                    safety, scalability, and reliability for Web3 mass adoption
                </p>
            </div>

            <div className='aptos-grid'>
                <div className='aptos-grid-item  left-col'>
                    <img src='https://assets-global.website-files.com/60536b901b879c2f395d75d0/623508dbb040a48238163477_Group.svg'  className='aptos-grid-img'/>
                </div>

                <div className='aptos-grid-item  left-col'>
                    <h2>Secure</h2>
                    <div className='aptos-item-list left-col gray-text'>
                        <li>Prover for smart contract verificiation</li>
                        <li>Deterministic transaction finality</li>
                        <li>Move Tokens are atomic resource data types that can't copied or discarded </li>
                    </div>
                </div>

                <div className='aptos-grid-item  left-col'>
                    <h2>Efficient</h2>
                    <div className='aptos-item-list left-col gray-text'>
                        <li>160K+ TPS benchmarked with sub-second finality</li>
                        <li>Optimized for horizontal (sharded) compute and storage</li>
                        <li>Upgradeable HotStuff BFT consensus derivative extensible to L2 frameworks</li>
                    </div>
                </div>

                <div className='aptos-grid-item left-col'>
                    <img src='https://assets-global.website-files.com/60536b901b879c2f395d75d0/623508db499a3c6262d6ab47_Group-1.svg'  className='aptos-grid-img'/>
                </div>

                <div className='aptos-grid-item left-col'>
                    <img src='https://assets-global.website-files.com/60536b901b879c2f395d75d0/623508dbfc048189646f9f74_Group%204.svg'  className='aptos-grid-img'/>
                </div>

                <div className='aptos-grid-item left-col'>
                    <h2>Dev and User Friendly</h2>
                    <div className='aptos-item-list left-col gray-text'>
                        <li>Move language built on popular Rust language</li>
                        <li>Supports Private key rotation and recovery</li>
                        <li>Access control (permissions) built in</li>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Aptos;