import React from "react";
import nikeIcon from "../assets/brand_logo.png";
import "../App.css"

export default function NavBar() {
    return (
        <div>
            <nav className="nav-bar">

                <ul className="ui-list"
                >
                    <li style={{
                        listStyle: "none"
                    }}>MENU</li>
                    <li style={{
                        listStyle: "none"
                    }}
                    >LOCATION</li>
                    <li style={{
                        listStyle: "none"
                    }}
                    >ABOUT</li>
                    <li style={{
                        listStyle: "none"
                    }}
                    >CONTACT</li>
                </ul>

                <button
                style={{
                    background: "red",
                    color: "white",
                    fontWeight: "bold",
                    width: "75px",
                    height: "31px",
                    
                }}
                > Login</button>
            </nav>
        </div>
    )
}