import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav
            style={{
                backgroundColor: "rgba(0,0,0,0.67)",
                display: "flex",
                flexDirection: "",
                justifyContent: "space-around",
            }}
        >
            <figure
                style={{
                    flexGrow: "1",
                    height: "",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <img
                    style={{ width: "50%", height: "" }}
                    src="/logo_alpha-records.svg"
                    alt="logo"
                />
            </figure>
            <ul
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    flexGrow: "1",
                }}
            >
                <li>
                    <Link to="">LABELS</Link>
                </li>{" "}
                <li>
                    <Link to="">RELEASES</Link>
                </li>{" "}
                <li>
                    <Link to="">NEWS</Link>
                </li>{" "}
                <li>
                    <Link to="">CONTACT</Link>
                </li>
            </ul>
        </nav>
    );
}
