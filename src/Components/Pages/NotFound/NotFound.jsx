import React from 'react'
import { Link } from "react-router-dom"
import "./NotFound.scss"; // Import SCSS file

const NotFound = () => {
    return (
        <div>
            <div className="not-found">
                <h1>404</h1>
                <h2>Oops! Page Not Found</h2>
                <p>The page you are looking for doesn’t exist or has been moved.</p>
                <Link to="/" className="home-btn">Go Home</Link>
            </div>
        </div>
    )
}

export default NotFound