import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
    <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Log In</Link></li>
                <li><Link to="/newuser">Sign Up</Link></li>
                <li><Link to="/quizzes">View Quizzes</Link></li>
            </ul>
        </nav>
    </div>
);

export default Navbar;
