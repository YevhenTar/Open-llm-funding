import React from 'react';
import './LeaderboardRow.css';

const LeaderboardRow = ({ item }) => {
    return (
        <div className="row-grid main-table__row">  
            <div className="row-cell cell_direction">
                <img src={item.direction} alt="direction" className="cell_direction-img" />
            </div>
            <div className="row-cell">{item.id}</div>
            <div className="row-cell cell_name">{item.model}</div>
            <div className="row-cell">{item.avg}</div>
            <div className="row-cell">{item.arc}</div>
            <div className="row-cell">{item.hellaswag}</div>
            <div className="row-cell">{item.mmlu}</div>
            <div className="row-cell">{item.truthful}</div>
            <div className="row-cell">{item.winogrande}</div>
            <div className="row-cell">{item.gsm8k}</div>
            <div className="row-cell">{item.usage}</div>
        </div>
    );
};

export default LeaderboardRow