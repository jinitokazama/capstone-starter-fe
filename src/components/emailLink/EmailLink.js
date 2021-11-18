import React from "react";
import { Link } from "react-router-dom";

const LinkMailto = ({ mailto, label }) => {
    return (
        <Link style={{fontWeight: "bold"}}
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

export default LinkMailto;