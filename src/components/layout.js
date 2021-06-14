import * as React from "react"

import { Link } from "gatsby"

//style
const linkStyle = {
    marginRight: "3rem",
    display: "inline-block",
}
const nameStyle = {
    textDecoration: "none",
    //color: "white",
}






const ListLink = props => (
    <li style={linkStyle}>
        <Link class="tabs" to={props.to}>{props.children}</Link>
    </li>
)



export default function layout({ children }) {
    return (
        <div >
            <div class="banner">
                <div class="tagname">
                    <Link style={nameStyle} to="/">Jiang Hulusi</Link>
                </div>


                <ul class="pagetabs">
                    <ListLink to="/">Syllabus</ListLink>
                    <ListLink to="/groups">Roster</ListLink>
                    <ListLink to="/contact">Contact</ListLink>
                    <ListLink to="/announcements">Annoucements</ListLink>

                </ul>



            </div>

            <div class="desk">

                {children}

            </div>

            <div class="footer">
                <hr />

                <div class="copyright">

                </div>


                <div class="footlinks">

                </div>
            </div>

        </div>

    )
}