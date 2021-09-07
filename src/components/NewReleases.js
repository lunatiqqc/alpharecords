import React from "react";

export default function NewReleases() {
    return (
        <section>
            <article
                style={{
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h1
                    style={{
                        borderBottom: "5px solid orange",
                        width: "fit-content",
                    }}
                >
                    NEW RELEASES
                </h1>
                <ul
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    }}
                >
                    <li>
                        <figure>
                            <img src="/releases_1.png" alt="" />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="/releases_2.jpg" alt="" />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="/releases_3.jpg" alt="" />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="/releases_4.jpg" alt="" />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="/releases_5.jpg" alt="" />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="/releases_6.jpg" alt="" />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="/releases_7.jpg" alt="" />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="/releases_8.jpg" alt="" />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="/releases_9.jpg" alt="" />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="/releases_10.jpg" alt="" />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="/releases_11.jpg" alt="" />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="/releases_12.jpg" alt="" />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="/releases_13.jpg" alt="" />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="/releases_14.jpg" alt="" />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="/releases_15.jpg" alt="" />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="/releases_16.jpg" alt="" />
                        </figure>
                    </li>
                </ul>

                <button
                    style={{
                        backgroundColor: "black",
                        padding: " 2.5vw 5vw",
                        color: "white",
                    }}
                >
                    ALL RELEASES
                </button>
            </article>
        </section>
    );
}
