import React from 'react';

const PaginationBar = (props) => {

    const { defaultSelection, handleSelectitem, pages } = props

    return <ul style={{
        display: "inline-block",
        padding: "0",
        margin: "0",
        float: "right"
    }}>
        <li style={{ display: "inline" }}>
            <a
                style={{
                    float: "left",
                    padding: "8px 16px",
                    textDecoration: "none",
                    color: "inherit"
                }}
                href="tryit.asp-filename=trycss_ex_pagination.html#">«</a>
        </li>
        <li style={{ display: "inline" }}>
            <a
                style={{
                    float: "left",
                    padding: "8px 16px",
                    textDecoration: "none",
                    color: "inherit"
                }}
                href="tryit.asp-filename=trycss_ex_pagination.html#">1</a>
        </li>
        <li style={{ display: "inline" }}>
            <a
                style={{
                    float: "left",
                    padding: "8px 16px",
                    textDecoration: "none",
                    color: "inherit"
                }}
                href="tryit.asp-filename=trycss_ex_pagination.html#">2</a>
        </li>
        <li style={{ display: "inline" }}>
            <a
                style={{
                    float: "left",
                    padding: "8px 16px",
                    textDecoration: "none",
                    color: "inherit"
                }}
                href="tryit.asp-filename=trycss_ex_pagination.html#">...</a>
        </li>

        <li style={{ display: "inline" }}>
            <a
                style={{
                    float: "left",
                    padding: "8px 16px",
                    textDecoration: "none",
                    color: "inherit"
                }}
                href="tryit.asp-filename=trycss_ex_pagination.html#">6</a>
        </li>
        <li style={{ display: "inline" }}>
            <a
                style={{
                    float: "left",
                    padding: "8px 16px",
                    textDecoration: "none",
                    color: "inherit"
                }}
                href="tryit.asp-filename=trycss_ex_pagination.html#">7</a>
        </li>
        <li style={{ display: "inline" }}>
            <a
                style={{
                    float: "left",
                    padding: "8px 16px",
                    textDecoration: "none",
                    color: "inherit"
                }}
                href="tryit.asp-filename=trycss_ex_pagination.html#">»</a>
        </li>
    </ul>


}

export default PaginationBar;

