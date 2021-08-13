import React, { useState, useEffect } from 'react';
import TableHead from './components/TableHead.js'
import TableBody from './components/TableBody.js'
import Pagination from './components/Pagination.js';
import ColumnSearch from './components/ColumnSearch.js';
import StyleSheet from './components/StyleBasic';
import Toolbar from './components/Toolbar.js';

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

const MyTable = (props) => {

    const {
        rmtData,
        rmtHeaders,
        rmtClass,
        pagination,
        paginateSelection,
        defaultSelection,
        rmtHeading,
        rmtSubHeading,
        rmtCheckAll,
        rmtColumnSearch,
        rmtGlobalSearch,
        rmtActions } = props

    let selection = defaultSelection ? defaultSelection : 5

    const [keyIndex, handleKeyIndex] = useState(0);
    const [shortByKey, handleName] = useState('name');
    const [shortOrder, handleOrder] = useState(1);
    const [selectItem, handleSelectitem] = useState(selection);
    const [totalrecords, handleTotalRecords] = useState(0);
    const [fullScreen, handleFullScreen] = useState(false);
    const [columnSearch, handleColumnSearch] = useState(rmtColumnSearch);
    const [globalSearch, handleGlobalSearch] = useState(rmtGlobalSearch);
    const [globalSearchValue, handleGlobalSearchValue] = useState('');
    const [darkMode, handleDarkMode] = useState(false); // Need to Work
    const [isActions, handleisActions] = useState(rmtActions && rmtActions.length !== 0);

    const isPagination = (pagination == undefined || pagination === true)

    if (!rmtHeaders) {
        return "Headers is not Provided"
    }

    let columnSpan = rmtHeaders.length
    if (rmtCheckAll) {
        columnSpan = columnSpan + 1
    }
    if (isActions) {
        columnSpan = columnSpan + 1
    }

    return <table className={rmtClass} id="rmtable">
        <thead >

            <Toolbar
                rmtHeading={rmtHeading}
                rmtSubHeading={rmtSubHeading}
                rmtHeaders={rmtHeaders}
                openFullScreen={openFullScreen}
                closeFullScreen={closeFullScreen}
                fullScreen={fullScreen}
                handleFullScreen={handleFullScreen}
                rmtCheckAll={rmtCheckAll}
                globalSearch={globalSearch}
                handleGlobalSearch={handleGlobalSearch}
                isActions={isActions}
                columnSpan={columnSpan}
                handleColumnSearch={handleColumnSearch}
                columnSearch={columnSearch}
                handleGlobalSearchValue={handleGlobalSearchValue}
                handleDarkMode={handleDarkMode}
                darkMode={darkMode} />
            <TableHead
                handleKeyIndex={handleKeyIndex}
                handleName={handleName}
                handleOrder={handleOrder}
                keyIndex={keyIndex}
                shortByKey={shortByKey}
                shortOrder={shortOrder}
                headers={rmtHeaders}
                rmtCheckAll={rmtCheckAll}
                columnSearch={columnSearch}
                handleColumnSearch={handleColumnSearch}
                isActions={isActions}
                columnSpan={columnSpan}
            />

            {columnSearch ? <ColumnSearch
                headers={rmtHeaders}
                rmtCheckAll={rmtCheckAll}
                columnSearch={columnSearch}
                handleColumnSearch={handleColumnSearch}
                isActions={isActions}
                columnSpan={columnSpan} /> : null}
        </thead>

        <tbody>
            <TableBody
                shortByKey={shortByKey}
                shortOrder={shortOrder}
                rmtData={rmtData}
                rmtHeaders={rmtHeaders}
                rmtCheckAll={rmtCheckAll}
                rmtActions={rmtActions}
                isActions={isActions}
                columnSpan={columnSpan}
                keyIndex={keyIndex}
                selectItem={selectItem}
                isPagination={isPagination}
                globalSearchValue={globalSearchValue}

            />
        </tbody>

        {isPagination && <tfoot>
            <Pagination
                rmtHeaders={rmtHeaders}
                selectItem={selectItem}
                handleSelectitem={handleSelectitem}
                paginateSelection={paginateSelection}
                defaultSelection={selection}
                totalrecords={20}
                rmtCheckAll={rmtCheckAll}
                isActions={isActions}
                columnSpan={columnSpan} />
        </tfoot>}
    </table >
}



export default MyTable;

