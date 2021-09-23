import React from 'react'

const Button = ({ text, image, type }) => {
    return (
        <div className={`button-group d-flex justify-content-between align-items-center ${type}`}>
            <button className={'btn'}>{text}</button>
            <img className="btn-image" src={image} />
        </div>
    )
}

export default Button
