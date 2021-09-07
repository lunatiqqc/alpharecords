import React from "react";

export default function SendDemo() {
    return (
        <section
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <article
                style={{
                    color: "black",
                    backgroundColor: "#f2f2f2",
                    width: "70%",
                    padding: "10%",
                }}
            >
                <div>
                    <h1 style={{ borderLeft: "5px solid orange" }}>
                        SEND DEMO
                    </h1>
                    <p>
                        It is extremely important for us to constantly hear new
                        music and we are constantly looking for new artists,
                        producers and songwriters that we can work with. <br />
                        <br /> Whether you are an artist, producer or
                        songwriter, you are very welcome to send your music to
                        us. At Alpha Records we offer fair, artist-friendly
                        distribution deals with no obligation to sign with us.
                    </p>
                </div>
                <form style={{ display: "flex", flexWrap: "wrap" }} action="">
                    <input
                        style={{ width: "50%" }}
                        type="text"
                        placeholder="Firstname"
                        required
                    />
                    <input
                        style={{ width: "50%" }}
                        type="text"
                        placeholder="Surname"
                        required
                    />
                    <input
                        style={{ width: "50%" }}
                        type="email"
                        placeholder="E-mail"
                        required
                    />
                    <input
                        style={{ width: "50%" }}
                        type="tel"
                        placeholder="Phone"
                        required
                    />
                    <textarea
                        style={{ width: "100%", height: "10vh" }}
                        type="text"
                        placeholder="Tell us about yourself (min. 100 characters)
                "
                    />
                    <input type="file" style={{ width: "100%" }} />
                    <div style={{ width: "100%" }}>
                        <input type="checkbox" id="terms" required />{" "}
                        <label htmlFor="terms">
                            I accept terms and conditions
                        </label>
                    </div>
                    <button
                        style={{
                            backgroundColor: "black",
                            padding: "2% 5%",
                            color: "white",
                        }}
                        onClick={(e) => {}}
                    >
                        SEND DEMO
                    </button>
                </form>
            </article>
        </section>
    );
}
