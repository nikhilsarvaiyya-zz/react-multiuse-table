import React from 'react';

const PaginationBar = (props) => {

    const { defaultSelection, handleSelectitem, pages } = props

    return <ul >
        <li >
            <a href="tryit.asp-filename=trycss_ex_pagination.html#">«</a>
        </li>
        <li >
            <a href="tryit.asp-filename=trycss_ex_pagination.html#">1</a>
        </li>
        <li >
            <a className="active" href="tryit.asp-filename=trycss_ex_pagination.html#">2</a>
        </li>
        <li >
            <a href="tryit.asp-filename=trycss_ex_pagination.html#">...</a>
        </li>
        <li >
            <a href="tryit.asp-filename=trycss_ex_pagination.html#">6</a>
        </li>
        <li >
            <a href="tryit.asp-filename=trycss_ex_pagination.html#">7</a>
        </li>
        <li >
            <a href="tryit.asp-filename=trycss_ex_pagination.html#">»</a>
        </li>
    </ul>


}

export default PaginationBar;

