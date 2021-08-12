import React from 'react';

const TableBody = (props) => {

    if (!props.data) {
        return "Loading..."
    }
    return props.data.map((d, i1) => {

        return <tr key={i1}>
            {d.map((m, i2) => {
                return <td
                    key={i2}
                    style={{
                        padding: ".5em",
                        border: "1px solid lightgrey"
                    }}>
                    {m}
                </td>
            })}
        </tr>
    })

}

export default TableBody;

