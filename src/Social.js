import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSoundcloud,
    faInstagram,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'

export default function Social() {
    return (
        <div className="social-container">
            <a href="https://www.linkedin.com/in/andrewlienhard/"
                target="_new"
                className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </a>
            <a href="https://soundcloud.com/thinkingdogmusic"
                target="_new"
                className="soundcloud social">
                <FontAwesomeIcon icon={faSoundcloud} size="1x" />
            </a>
            <a href="https://www.instagram.com/sparrowandthenest"
                target="_new"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
            
        </div>
    )
}