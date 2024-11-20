import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
export default function Info() {
    return (
        <div className="info">
            <div className="photo-container">
            <img className="photo" src="./src/assets/img/img1.png" alt="photo of myself"/>
            </div>
            <div className="main">
            <h1>Franklin X</h1>
            <h2>Frontend Developer</h2>
            <a target="_blank" href="acindm.github.io"><p>acindm.github.io</p></a>
            <div className="buttons">
                <button className="button-email">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Email
                    </button>
                <button className="button-linkedin">
                    <FontAwesomeIcon icon={faLinkedin} />
                    LinkedIn
                    </button>
            </div>
            </div>
        </div>
    )
  }