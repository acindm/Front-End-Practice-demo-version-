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
            <h2>Developer</h2>
            <a target="_blank" href="acindm.github.io"><p>acindm.github.io</p></a>
            <div className="buttons">
                <a href="mailto:acindms@gmail.com">
                    <button className="button-email">
                        <FontAwesomeIcon icon={faEnvelope} />
                        Email
                        </button>
                </a>            
                <a target="_blank" href="https://www.linkedin.com/in/%E6%95%8F-%E6%9D%8E-541389312/">
                    <button className="button-linkedin">
                        <FontAwesomeIcon icon={faLinkedin} />
                        LinkedIn
                        </button>
                </a>
            </div>
            </div>
        </div>
    )
  }