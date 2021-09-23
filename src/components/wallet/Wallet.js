import React from 'react'
import Buttons from './Buttons'
import ConnectWallet from './ConnectWallet'

const Wallet = () => {
    return (
        <div className = "wallet">
            <ConnectWallet/>
            <Buttons/>
            <a href="#">How is your privacy protected?</a>
        </div>
    )
}

export default Wallet
