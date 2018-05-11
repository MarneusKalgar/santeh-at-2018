import React from 'react';
import { NavLink } from 'react-router-dom';

import day1 from '../images/articles/aquatherm-STK-2017-001.jpg';
import day2 from '../images/articles/aquatherm-STK-2017-008.jpg';
import day3 from '../images/articles/aquatherm-STK-2017-040.jpg';
import day4 from '../images/articles/aquatherm-STK-2017-060.jpg';

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/day-one">
                        <p>День 1</p>
                    </NavLink>
                    <div className="overlay" style={{backgroundImage: "url(" + day1 + ")"}}></div>
                </li>
                <li>
                    <NavLink to="/day-two">
                        <p>День 2</p>
                    </NavLink>
                    <div className="overlay" style={{backgroundImage: "url(" + day2 + ")"}}></div>
                </li>
                <li>
                    <NavLink to="/day-three">
                        <p>День 3</p>
                    </NavLink>
                    <div className="overlay" style={{backgroundImage: "url(" + day3 + ")"}}></div>
                </li>
                <li>
                    <NavLink to="/day-four">
                        <p>День 4</p>
                    </NavLink>
                    <div className="overlay" style={{backgroundImage: "url(" + day4+ ")"}}></div>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;