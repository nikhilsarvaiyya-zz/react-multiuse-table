import React, { useState, useEffect } from 'react';
import TableHead from './components/TableHead.js'
import TableBody from './components/TableBody.js'


const MyTable = (props) => {
    const [shortByKey, handleName] = useState('name');
    const [shortOrder, hangleOrder] = useState(1);



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

    console.log(mapData)



    return <table
        className={props.rmtClass}
        style={{
            width: "100%",
            margin: "0",
            color: "#333",
            background: "white",
            border: "1px solid grey",
            fontSize: "12pt",
            fontFamily: "Verdana, sans-serif",
            borderCollapse: "collapse"
        }} >
        <thead >
            <TableHead
                handleName={handleName}
                hangleOrder={hangleOrder}
                shortByKey={shortByKey}
                shortOrder={shortOrder}
                headers={props.rmtHeaders} />
        </thead>
        <tbody>
            <TableBody
                shortByKey={shortByKey}
                shortOrder={shortOrder}
                data={mapData} />
        </tbody>
    </table >
}

export default MyTable;

