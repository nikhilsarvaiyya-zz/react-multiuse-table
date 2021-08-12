import React from 'react';


const Pagination = (props) => {

    const { rmtHeaders, handleSelectitem, paginateSelection, defaultSelection } = props

    let pages;
    if (paginateSelection) {
        pages = paginateSelection
    } else {
        pages = [5, 10, 15, 20]
    }
    return <tr >
        <td style={{
            padding: ".5em",
            border: "1px solid lightgrey",
            cursor: "pointer",
            textAlign: "left",
        }}
            colSpan={rmtHeaders.length}>
            <div style={{
                float: "left"
            }}>
                <select defaultValue={defaultSelection} onChange={(e) => handleSelectitem(e.target.value)} >
                    {pages.map((p, i) => {
                        return <option key={i} value={p} >{p}</option>
                    })}
                </select>
            </div>
            {/* <ul style={{
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
                        }}
                        href="tryit.asp-filename=trycss_ex_pagination.html#">«</a>
                </li>
                <li style={{ display: "inline" }}>
                    <a
                        style={{
                            float: "left",
                            padding: "8px 16px",
                            textDecoration: "none",
                        }}
                        href="tryit.asp-filename=trycss_ex_pagination.html#">1</a>
                </li>
                <li style={{ display: "inline" }}>
                    <a
                        style={{
                            float: "left",
                            padding: "8px 16px",
                            textDecoration: "none",
                        }}
                        href="tryit.asp-filename=trycss_ex_pagination.html#">2</a>
                </li>
                <li style={{ display: "inline" }}>
                    <a
                        style={{
                            float: "left",
                            padding: "8px 16px",
                            textDecoration: "none",
                        }}
                        href="tryit.asp-filename=trycss_ex_pagination.html#">3</a>
                </li>
                <li style={{ display: "inline" }}>
                    <a
                        style={{
                            float: "left",
                            padding: "8px 16px",
                            textDecoration: "none",
                        }}
                        href="tryit.asp-filename=trycss_ex_pagination.html#">4</a>
                </li>
                <li style={{ display: "inline" }}>
                    <a
                        style={{
                            float: "left",
                            padding: "8px 16px",
                            textDecoration: "none",
                        }}
                        href="tryit.asp-filename=trycss_ex_pagination.html#">5</a>
                </li>
                <li style={{ display: "inline" }}>
                    <a
                        style={{
                            float: "left",
                            padding: "8px 16px",
                            textDecoration: "none",
                        }}
                        href="tryit.asp-filename=trycss_ex_pagination.html#">6</a>
                </li>
                <li style={{ display: "inline" }}>
                    <a
                        style={{
                            float: "left",
                            padding: "8px 16px",
                            textDecoration: "none",
                        }}
                        href="tryit.asp-filename=trycss_ex_pagination.html#">7</a>
                </li>
                <li style={{ display: "inline" }}>
                    <a
                        style={{
                            float: "left",
                            padding: "8px 16px",
                            textDecoration: "none",
                        }}
                        href="tryit.asp-filename=trycss_ex_pagination.html#">»</a>
                </li>
            </ul> */}
        </td>
    </tr>



}

export default Pagination;

