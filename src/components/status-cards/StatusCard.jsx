import React from 'react'
import './statusCard.css';

const StatusCard = (props) => {
    return (
        <div className="status__card">
            <div className="status__card--icon">
                <i className={props.icon}></i>
            </div>
            <div className="status__card--info">
                <h4>{props.count}</h4>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default StatusCard
