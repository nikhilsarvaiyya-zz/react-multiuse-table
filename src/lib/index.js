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
                if (h === key) {
                    selectedkey.push(value)
                }
            }
        });
        mapData.push(selectedkey)
    });


    return <table>
        <thead>
            <tr>
                {props.rmtHeaders.map((h, i) => { return <th key={i}>{h}</th> })}
            </tr>
        </thead>
        <tbody>
            {mapData.map((d, i1) => {
                return <tr key={i1}>
                    {d.map((m, i2) => {
                        return <td key={i2}>
                            {m}
                        </td>
                    })}
                </tr>
            })}
        </tbody>
    </table >
}
export default MyTable;

