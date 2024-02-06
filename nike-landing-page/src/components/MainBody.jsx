import React from "react";
import shoe from "../assets/shoe_image.png";
export default function MainBody() {
    return (
        <div style={
            {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "80vh"
            }
        }>
          <div
            style={{
                width: "1125px",
                height: "613px",
                display: "grid",
                gridTemplateColumns: "595px 530px"
            }}
          >
            <div>
                <h1
                style={{
                    fontSize: "108px",
                    marginTop: "0px",
                    marginBottom: "10px"
                }}
                >YOUR FEET DESERVE THE BEST</h1>
                <p style={{
                    fontSize: "16px",
                    width: "404px",
                    marginBottom: "40px"
                }}>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div style={{
                    display: "flex",
                    width: "331px",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <button
                    style={{
                        marginRight: "50px",
                        background: "red",
                        height: "41px",
                        width: "150px",
                        color: "white",
                        fontWeight: "bolder",
                        border: "none",
                        fontSize: "24px"
                    }}
                    >Shop Now</button>
                    <button
                    style={{
                        background: "white",
                        height: "41px",
                        width: "150px",
                        color: "grey",
                        fontWeight: "bolder",
                        fontSize: "24px"
                    }}
                    > Category </button>
                </div>
            </div>
            <div
            style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}
            >
                <img 
                    src={shoe}
                    width={530}
                    height={480}
                    />
            </div>
          </div>  
        </div>
    )
}