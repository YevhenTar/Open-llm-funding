import React, {useState } from 'react';
import LeaderboardRow from '../LeaderboardRow/LeaderboardRow';
import { leaderboardData } from './LeaderboardData';
import arrowButton from "../../assets/img/leaderboard_section/arrow-button.svg";
import './LeaderboardSection.css';

const LeaderboardSection = () => {
    const [showRest, setShowRest] = useState(false);
    const [fullScrollMode, setFullScrollMode] = useState(false); 

    const isDisabled = leaderboardData.length <= 8;

    const toggleRows = () => {
        if (isDisabled) return;
        setShowRest(!showRest);

        if (fullScrollMode) {
            setFullScrollMode(false); 
        }
    };

    const toggleFullScroll = () => {
        if (!fullScrollMode) {
            setFullScrollMode(true);
        } else {
            setFullScrollMode(false);
        }
    };

    let visibleRows;

    if (fullScrollMode) {
        visibleRows = leaderboardData; // показываем все, но внутри будет скролл
    } else if (showRest) {
        visibleRows = leaderboardData.slice(8); // строки с 9-й
    } else {
        visibleRows = leaderboardData.slice(0, 8); // первые 8
    }

    return (
        <div className="leaderboard-block" >
            <div className="main-container">
                <div className="leaderboard-content">
                    <div className="leaderbord-content__headline-block">
                        <h3 className="leaderbord-content__headline">LLM Leaderboard</h3>
                        <button 
                                className='button button_big button_buy-salt-ai leaderbord-content__button'
                                onClick={() => alert('Button click is working')}
                            >Submit your model
                        </button>
                    </div>
                    <p className="leaderboard-content__description">
                        We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to test LLMs on a large number of different evaluation tasks. 
                        The higher the score, the better the LLM.
                    </p>
                    <div className="leaderboard-content__main-table main-table">
                        <div className="main-table__header row-grid">
                            <div className='header-cell'></div>
                            <div className='header-cell'>#</div>
                            <div className='header-cell'>Model Name</div>
                            <div className='header-cell'>Average</div>
                            <div className='header-cell'>ARC</div>
                            <div className='header-cell'>HellaSwag</div>
                            <div className='header-cell'>MMLU</div>
                            <div className='header-cell'>TruthfulQA</div>
                            <div className='header-cell'>Winogrande</div>
                            <div className='header-cell'>GSM8K</div>
                            <div className='header-cell'>Usage</div>
                        </div>

                        <div
                            className={`main-table__body ${
                                fullScrollMode ? "scroll-mode" : ""
                            }`}
                        >
                            {visibleRows.map((item) => (
                                <LeaderboardRow key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                        <div className="main-table__button-block">
                            {leaderboardData.length > 8 && (
                                <>
                                    {/* Левая кнопка */}
                                    {showRest && (
                                        <button
                                            className={`full-leaderboard-btn ${fullScrollMode ? "active" : ""}`}
                                            onClick={toggleFullScroll}
                                        >
                                            View full leaderboard
                                        </button>
                                    )}

                                    {/* Стрелка */}
                                    <button
                                        className={`main-table__button ${showRest ? "expanded" : ""} ${
                                            isDisabled ? "disabled" : ""
                                        }`}
                                        onClick={toggleRows}
                                        disabled={isDisabled}
                                    >
                                        <img
                                            src={arrowButton}
                                            alt="arrow-button"
                                            className="main-table__button-img"
                                        />
                                    </button>
                                </>
                            )}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default LeaderboardSection