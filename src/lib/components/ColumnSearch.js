import React from 'react';

const ColumnSearch = (props) => {

    const { headers } = props

    return <tr >
        <td
            style={{
                padding: ".5em",
                border: "1px solid lightgrey",
                cursor: "pointer",
                textAlign: "left"
            }}
        >

        </td>
        {headers.map((h, i) => {
            return <th
                style={{
                    padding: ".5em",
                    border: "1px solid lightgrey",
                    cursor: "pointer",
                    textAlign: "left"
                }}
                key={i}>
                <input type="search" style={{ width: "100%", padding: "3px 5px" }} />
            </th>
        })}
        <th style={{
            padding: ".5em",
            border: "1px solid lightgrey"
        }}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAV0lEQVQ4jWNgGExgOgMDgzQR6qShajGAOAMDw0YChkgQUoPPEIKa8RlCtGZsGkjWDAPSDAwMW6EYp2YmUk0lFlDkBWwaiDYEn0KChhBjC97ERnFSHhgAAP3XEqdC/dYtAAAAAElFTkSuQmCC" />
        </th>
    </tr>


}

export default ColumnSearch;

