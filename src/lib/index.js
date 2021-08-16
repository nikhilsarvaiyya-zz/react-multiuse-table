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
        rmtActions,
        query
    } = props

    let selection = defaultSelection ? defaultSelection : 5

    const [keyIndex, handleKeyIndex] = useState(0);
    const [shortByKey, handleName] = useState('name');
    const [shortOrder, handleOrder] = useState(1);
    const [selectItem, handleSelectitem] = useState(selection);
    const [totalrecords, handleTotalRecords] = useState(rmtData.length);
    const [fullScreen, handleFullScreen] = useState(false);

    const [columnSearch, handleColumnSearch] = useState(rmtColumnSearch);
    const [columnSearchValue, handleColumnSearchValue] = useState({});
    const [columnSearchArray, handleColumnSearchArray] = useState([]);

    const [globalSearch, handleGlobalSearch] = useState(rmtGlobalSearch);
    const [globalSearchValue, handleGlobalSearchValue] = useState('');

    const [darkMode, handleDarkMode] = useState(false); // Need to Work
    const [isActions, handleisActions] = useState(rmtActions && rmtActions.length !== 0);
    const [checkAllAction, handleCheckAllAction] = useState(false);
    const [checkSingleRow, handleCheckSingleRow] = useState([]);

    const [setQuery, handlesetQuery] = useState({});

    useEffect(() => {
        handlesetQuery(selectItem, 10, shortOrder)
        query({
            limit: Number(selectItem),
            skip: 10,
            order: Number(setQuery)
        })
    }, [selectItem, shortOrder])

    console.log(columnSearchArray)
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

    return <div className="rmtMainContainer">
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
        <div className="rmtTableContainer">
            <table className={rmtClass} id="rmtable">
                <thead >
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
                        handleCheckAllAction={handleCheckAllAction}
                    />

                    {columnSearch ? <ColumnSearch
                        headers={rmtHeaders}
                        rmtCheckAll={rmtCheckAll}
                        columnSearch={columnSearch}
                        handleColumnSearch={handleColumnSearch}
                        isActions={isActions}
                        columnSpan={columnSpan}
                        handleColumnSearchValue={handleColumnSearchValue}
                        columnSearchValue={columnSearchValue} /> : null}
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
                        checkAllAction={checkAllAction}
                        handleCheckSingleRow={handleCheckSingleRow}
                        checkSingleRow={checkSingleRow}
                        columnSearchValue={columnSearchValue}
                    />
                </tbody>
                <tfoot></tfoot>
            </table >
        </div>
        {isPagination && <Pagination
            rmtHeaders={rmtHeaders}
            selectItem={selectItem}
            handleSelectitem={handleSelectitem}
            paginateSelection={paginateSelection}
            defaultSelection={selection}
            totalrecords={totalrecords}
            rmtCheckAll={rmtCheckAll}
            isActions={isActions}
            columnSpan={columnSpan} />
        }

    </div>
}



export default MyTable;

