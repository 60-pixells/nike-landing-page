import React from "react";
import nikeIcon from "../assets/brand_logo.png";


export default function NavBar() {
    return (
        <div>
            <nav style={{ display: "flex",
             justifyContent: "space-around",
             alignItems: "center",
             height: "72px"
             }}>
                <img src = {nikeIcon}
                alt = "nike icon"
                width={76}
                height={42.75}
                />

                <ul
                style={{ 
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "330px"
                }}
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