import React from 'react'
import Logo2 from '../../assets/images/logo2.png'
import color from '../../assets/images/color-palette.png'

const Welcome = () => {
    return (
        <div className="welcome">
            <img className="color-palette" src={color} />
            <img className="logo" src={Logo2} alt="Not Found" />
            <div className="welcome-text">
                <strong> Welcome to 0xPeople,</strong><br />
                    a decentralized social network
                    for the crypto natives.<br /><br />
                    <span>
                    For the first time, you can communicate with users behind
                    the ETH addresses. Follow what
                    the others are doing and engage
                    in cummunication.<br /><br />
                    Service is run on a distributed proof-of-stake network.
                    There’s
                    no central company owning
                    the servers. <br /><br />
                </span>
                <a href="google.com">learn more</a>
            </div>
        </div>
    )
}

export default Welcome
