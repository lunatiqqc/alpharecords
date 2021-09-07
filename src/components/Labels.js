import React from "react";

export default function Labels() {
    return (
        <section>
            <ul style={{ display: "flex", flexDirection: "" }}>
                <li>
                    <figure>
                        <img src="/labels_anti.jpg" alt="" />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src="/labels_brainfeeder.jpg" alt="" />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src="/labels_cityslang.jpg" alt="" />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src="/labels_cookingvinyl.jpg" alt="" />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src="/labels_crunchyfrog.jpg" alt="" />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src="/labels_smalltownsupersound.jpg" alt="" />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src="/labels_startracks.jpg" alt="" />
                    </figure>
                </li>
            </ul>

            <article style={{ color: "black", display: "flex" }}>
                <div style={{ width: "100%", marginLeft: "20%" }}>
                    <h1
                        style={{
                            borderLeft: "5px solid orange",
                        }}
                    >
                        INTERNATIONAL RECORD LABEL
                    </h1>
                    <p>
                        Alpha Records Entertainment is Scandinavia's largest
                        record company and is owned by Alpha Corporation of
                        Denmark. The record company has 44 branches around the
                        world, and one of them is Alpha Records Entertainment
                        Denmark A/S, which is located in the middle of
                        Copenhagen. <br />
                        <br />
                        At Alpha Records, we work daily to create, develop,
                        market, promote and sell music from a wide range of both
                        Danish and international artists. It takes place in
                        creative interaction with the constantly changing forms
                        during which music lovers discover, listen to, and buy
                        new music. And for Alpha Records, therefore, it is not
                        only about creating new music, but also creating new
                        ways for the consumer to grab and enjoy the music.{" "}
                        <br />
                        <br />
                        We are an innovative, willing to change and
                        action-oriented company that is critical of fixed norms,
                        and we are proud of that. At Alpha Records, we always
                        strive to be an attractive workplace where we thrive,
                        develop and show respect and recognition for each other.
                        Our vision is to be Denmark's best company and workplace
                        in the musical entertainment industry, envious of our
                        dynamics, creative and financial success and recognized
                        for our wordiness and the quality of our work.
                    </p>
                </div>

                <figure
                    style={{
                        width: "100%",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <img
                        style={{ height: "100%", width: "auto" }}
                        src="/studio.jpg"
                        alt=""
                    />
                </figure>
            </article>
        </section>
    );
}
