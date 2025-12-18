import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = ({ onActivate }) => {
    const [isActive, setIsActive] = useState(false);

    const handleActivate = () => {
        setIsActive(true);
        onActivate();
    };

    return (
        <div className={`main-block ${isActive ? 'active' : ''}`}>
            <div className='main-container'>
                <div className='buttons-wrap main-block__buttons-wrap'>
                    <button 
                        className='button button_small button_scroll-activate' 
                        data-text="Show info"
                        onClick={handleActivate}
                    >Show info</button>
                    <button 
                        className='button button_small button_buy-salt-ai'
                        onClick={() => alert('Button click is working')}
                    >Buy Salt AI</button>
                </div>
                <div className='hero-wrap'>
                    <div className='hero-content hero-wrap__hero-content'>
                        <h1 className='hero-content__headline'>A new economic primitive for funding decentralized AI</h1>
                        <h4 className='hero-content__subheadline'>We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI</h4>
                        <div className='buttons-wrap hero-content__buttons-wrap'>
                            <button 
                                className='button button_big button_buy-salt-ai'
                                onClick={() => alert('Button click is working')}
                            >Buy Salt AI</button>
                            <button 
                                className='button button_medium button_scroll-activate' 
                                data-text="Show info"
                                onClick={handleActivate}
                            >Show info</button>
                        </div>
                    </div>
                    {isActive && (
                        <div className='analytics-block'>
                            <div className='analytics-block__item analytics-item'>
                                <p className="analytics-item__value">1,873</p>
                                <p className="analytics-item__description">LLM models</p>
                            </div>
                            <div className='analytics-block__item analytics-item'>
                                <p className="analytics-item__value">$326,734</p>
                                <p className="analytics-item__description">Paid to data scientists</p>
                            </div>
                            <div className='analytics-block__item analytics-item'>
                                <p className="analytics-item__value">6,557</p>
                                <p className="analytics-item__description">Developers</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HeroSection