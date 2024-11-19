import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faSquareTwitter, faSquareFacebook, faSquareInstagram, faSquareGithub,} from "@fortawesome/free-brands-svg-icons"
export default function Footer() {
    return (
      <footer>
        <FontAwesomeIcon icon={faSquareTwitter} />
        <FontAwesomeIcon icon={faSquareFacebook} />
        <FontAwesomeIcon icon={faSquareInstagram} />
        <a href="https://github.com/acindm">
        <FontAwesomeIcon icon={faSquareGithub} />
        </a>
            <p>© 2021 React Course</p>
      </footer>
    )
  }