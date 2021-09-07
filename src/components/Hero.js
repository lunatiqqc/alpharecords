import React from "react";

export default function hero() {
    return (
        <section
            style={{
                background: "url(/hero-studio.jpg)",
                height: "100vh",
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                //filter: "brightness(0.7)",
            }}
        >
            <section
                style={{
                    filter: "drop-shadow(2px 2px 2px black)",
                    backgroundColor: "rgba(0,0,0,.2)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <h1>MUSIC FOR THE PEOPLE</h1>
                <h2>Create. Develop. Promote. Sell</h2>
            </section>
        </section>
    );
}
