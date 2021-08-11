import React from 'react';

const MyTable = (props) => {
    if (!props.rmtHeaders || !props.rmtData) {
        return "Loading..."
    }

    let mapData = []

    props.rmtData.forEach((d) => {
        let selectedkey = []
        props.rmtHeaders.forEach((h) => {
            for (const [key, value] of Object.entries(d)) {
                if (h.key === key) {
                    selectedkey.push(value)
                }
            }
        });
        mapData.push(selectedkey)
    });


    return <table style={{
        margin: "0",
        color: "#333",
        background: "white",
        border: "1px solid grey",
        fontSize: "12pt",
        fontFamily: "Verdana, sans-serif",
        borderCollapse: "collapse"
    }} >
        <thead >
            <tr >
                {props.rmtHeaders.map((h, i) => {
                    return <th
                        style={{
                            padding: ".5em",
                            border: "1px solid lightgrey"
                        }}
                        key={i}>{h.label}</th>
                })}
            </tr>
        </thead>
        <tbody>
            {mapData.map((d, i1) => {
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
            })}
        </tbody>
    </table >
}

export default MyTable;

