import React from 'react'
import Button from './Button'
import vector1 from '../../assets/images/vector1.png'
import vector2 from '../../assets/images/vector2.png'
import vector3 from '../../assets/images/vector3.png'


const Buttons = () => {
    return (
        <div className="buttons">
            <Button text = {"MetaMask"} image = {vector1} type = {'bg-dark'} />
            <Button text = {"WalletConnect"} image = {vector2} type = {'bg-primary'}/>
            <Button text = {"Coinbase"} image = {vector3} type = {'bg-danger'}/>
        </div>
    )
}

export default Buttons
