import React, { useState, useEffect } from 'react';
import TableHead from './components/TableHead.js'
import TableBody from './components/TableBody.js'
import Pagination from './components/Pagination.js';


function sortFunction(arr, keyIndex, key, order, select, isPagination) {

    let sortData = arr
        .filter((f, i) => isPagination ? i < select : f)
        .sort((a, b) => {
            if (a[keyIndex] === b[keyIndex]) {
                return 0;
            }
            else {
                return (a[keyIndex] < b[keyIndex]) ? -1 : 1;
            }
        });

    if (order === 1) {
        return sortData
    } else {
        return sortData.reverse()
    }
}

function onPageChange(value) {
    return true
}

const MyTable = (props) => {

    const {
        rmtData,
        rmtHeaders,
        rmtClass,
        pagination,
        paginateSelection,
        defaultSelection } = props

    let selection = defaultSelection ? defaultSelection : 5

    const [keyIndex, handleKeyIndex] = useState(0);
    const [shortByKey, handleName] = useState('name');
    const [shortOrder, handleOrder] = useState(1);
    const [selectItem, handleSelectitem] = useState(selection);
    const isPagination = (pagination == undefined || pagination === true)

    if (!rmtHeaders || !rmtData) {
        return "Loading..."
    }

    let mapData = []

    rmtData.forEach((d) => {
        let selectedkey = []
        rmtHeaders.forEach((h) => {
            for (const [key, value] of Object.entries(d)) {
                if (h.key === key) {
                    selectedkey.push(value)
                }
            }
        });
        mapData.push(selectedkey)
    });

    let sortedData = sortFunction(mapData, keyIndex, shortByKey, shortOrder, selectItem, isPagination);


    return <table
        className={rmtClass}
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
                handleKeyIndex={handleKeyIndex}
                handleName={handleName}
                handleOrder={handleOrder}
                keyIndex={keyIndex}
                shortByKey={shortByKey}
                shortOrder={shortOrder}
                headers={rmtHeaders} />
        </thead>
        <tbody>
            <TableBody
                shortByKey={shortByKey}
                shortOrder={shortOrder}
                data={sortedData} />
        </tbody>

        {isPagination && <tfoot>
            <Pagination
                rmtHeaders={rmtHeaders}
                selectItem={selectItem}
                handleSelectitem={handleSelectitem}
                paginateSelection={paginateSelection}
                defaultSelection={selection} />
        </tfoot>}
    </table >
}

export default MyTable;

