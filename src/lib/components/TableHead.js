import React from 'react';
const TableHead = (props) => {
    if (!props.headers) {
        return "Loading..."
    }

    return <tr >
        {props.headers.map((h, i) => {
            return <th
                onClick={() => {
                    props.handleName(h);
                    props.hangleOrder(h.key === props.shortByKey ? props.shortOrder : -props.shortOrder)
                }}
                style={{
                    padding: ".5em",
                    border: "1px solid lightgrey",
                    cursor: "pointer"
                }}
                key={i}>{h.label}</th>
        })}
    </tr>
}

export default TableHead;

