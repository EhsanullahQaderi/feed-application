import React from 'react'
import Rectangle from '../../assets/images/Rectangle 2.png'

const Activity = () => {
    return (
        <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
            <img className="align-self-start" src={Rectangle} alt="" />
            <div className="d-flex flex-fill justify-content-between" >
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between" style={{ width: "240px" }}>
                        <div class="name" style={{ fontWeight: 'bold' }}> flippen.eth</div>
                        <div class="address" style={{ color: "#687684" }}>0x0D3A…2CEE</div>
                        <div class="time" style={{ color: "#687684" }}>4m</div>
                    </div>
                    <div><p>Swaped $4,200,000 of WETH for ATOM</p></div>
                    <div className="comments-likes d-flex justify-content-between" style={{ width: "123px" }}>
                        <span> <i class="far fa-comment-alt"></i> 2 </span>
                        <span> <i class="far fa-heart"></i> 3 </span>
                    </div>
                </div>
                <div className="d-flex" >
                    <span> <i className="fa fa-ellipsis-h"></i> </span>
                </div>
            </div>

        </a>
    )
}

export default Activity
