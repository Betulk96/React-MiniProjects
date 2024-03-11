import React from 'react'
import "./social-menu.scss"

const SocialMenu = () => {
    return (
        <nav className="social-menu" >
            <ul >
                <li>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="no-opener no-referrer"
                    >
                        <i className="fa-brands fa-linkedin" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="no-opener no-referrer"
                    >
                        <i className="fa-brands fa-x-twitter" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="no-opener no-referrer"
                    >
                        <i className="fa-brands fa-facebook" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default SocialMenu;
