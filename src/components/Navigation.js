import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../images/home.png';
import OMMIcon from '../images/OMM_black.png';
import DevIcon from '../images/devIcon.png';
import DolphinIcon from '../images/DolphinIcon.png';
import './Navigation.css';

function Navigation(){
    const [devStatus, setDevStatus] = useState(false);
    const [onDev, setOndev] = useState("nonClicked");
    const devClick = () => {
        if (devStatus === true) {
            setDevStatus(false);
            setOndev("nonClicked");
        } else {
            setDevStatus(true);
            setOndev("Clicked");
        }
    };
    return(
        <div className="nav">
            <div className="Home">
                <Link to="/">
                    <img src={HomeIcon} alt="GotoHome" />
                </Link>
                <p>
                    HOME
                </p>
            </div>
            <div className="Developer">
                <img src={DevIcon} onClick={devClick} alt="As Developer" />
                <p className={onDev}>
                    As Developer
                </p>
            </div>
            {devStatus ?
                (
                    <>
                        <Link to="/OMM">
                            <img src={OMMIcon} alt="Oh My Mirror" />
                        </Link>
                        <Link to="/Dolphin">
                            <img src={DolphinIcon} alt="Project Dolphin" />
                        </Link>
                    </>
                ):(
                    <>
                    </>
                )
            }
        </div>
    );
}

export default Navigation;