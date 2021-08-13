import React, { useState, useEffect } from 'react';
import TableHead from './components/TableHead.js'
import TableBody from './components/TableBody.js'
import Pagination from './components/Pagination.js';
import ColumnSearch from './components/ColumnSearch.js';
import TableHeader from './components/TableHeader.js';
import StyleSheet from './components/Style.js';

var elem = document.documentElement;
function openFullScreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

function closeFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

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
    const [totalrecords, handleTotalRecords] = useState(0);
    const [fullScreen, handleFullScreen] = useState(false);
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


    return <table className={rmtClass} id="rmtable">
        <thead >
            <TableHeader
                heading="Heading"
                subHeading="SubHeading"
                rmtHeaders={rmtHeaders}
                openFullScreen={openFullScreen}
                closeFullScreen={closeFullScreen}
                fullScreen={fullScreen}
                handleFullScreen={handleFullScreen} />
            <TableHead
                handleKeyIndex={handleKeyIndex}
                handleName={handleName}
                handleOrder={handleOrder}
                keyIndex={keyIndex}
                shortByKey={shortByKey}
                shortOrder={shortOrder}
                headers={rmtHeaders}
            />
            <ColumnSearch
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
                defaultSelection={selection}
                totalrecords={mapData.length} />
        </tfoot>}
    </table >
}



export default MyTable;

