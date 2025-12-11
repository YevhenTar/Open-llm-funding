import React from 'react';
import './OverviewSection.css';

const OverviewSection = ({ sectionRef }) => {
    return (
        <div className="overview-block" ref={sectionRef}>
            <div className="main-container">
                <div className="overview-content">
                    <h2 className="overview-content__headline">
                        Crowdsourcing our collective intelligence to build the best AI
                    </h2>

                    <div className="overview-content__description-block" >
                        <p className="overview-content__description-text">
                            Open source AI has been lagging behind the likes of Google and OpenAI by billions of dollars.
                        </p>
                        <p className="overview-content__description-text">
                            Salt aims to solve that by rewarding open source developers who contribute to the democratization of AI. 
                            We run competitions between AI models to find and reward the best AI models. As a result, our users will 
                            be able to access the latest cutting edge AI models.
                        </p>
                    </div>
                    <button 
                            className='button button_big button_buy-salt-ai'
                            onClick={() => alert('Button click is working')}
                        >Use The Cutting Edge AI
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OverviewSection