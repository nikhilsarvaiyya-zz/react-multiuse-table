import React, { useState, useEffect } from 'react';
import TableHead from './components/TableHead.js'
import TableBody from './components/TableBody.js'
import Pagination from './components/Pagination.js';
import ColumnSearch from './components/ColumnSearch.js';
import './components/StyleBasic';
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
        rmtPagination,
        rmtPaginateSelection,
        rmtRecordPerPage,
        rmtHeading,
        rmtSubHeading,
        rmtCheckAll,
        rmtColumnSearch,
        rmtGlobalSearch,
        rmtActions,
        rmtQueryParams,
        rmtPageLimit,
        rmtTotalrecord,
        rmtServer,
        rmtResetData,
        rmtFullScreenMode,
        rmtToolbar,
        rmtDarkTheme,
        rmtArrangeHead,
        details
    } = props

    let rpp = rmtRecordPerPage ? rmtRecordPerPage : 10

    const [keyIndex, handleKeyIndex] = useState(0);
    const [shortByKey, handleName] = useState('name');
    const [shortOrder, handleOrder] = useState(1);

    const [totalrecords, handleTotalRecords] = useState(rmtTotalrecord ? rmtTotalrecord : 0);
    const [fullScreen, handleFullScreen] = useState(false);

    const [columnSearch, handleColumnSearch] = useState(rmtColumnSearch);
    const [columnSearchValue, handleColumnSearchValue] = useState({});
    //const [columnSearchArray, handleColumnSearchArray] = useState([]);

    const [globalSearch, handleGlobalSearch] = useState(rmtGlobalSearch);
    const [globalSearchValue, handleGlobalSearchValue] = useState('');

    const [darkMode, handleDarkMode] = useState(false); // Need to Work
    //const [isActions, handleisActions] = useState(rmtActions && rmtActions.length !== 0);
    const [isActions] = useState(rmtActions && rmtActions.length !== 0);

    const [checkAllAction, handleCheckAllAction] = useState(false);
    const [checkSingleRow, handleCheckSingleRow] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [pagnetData, handlePagnetData] = useState([]);

    const [recordPerPage, handleRecordPerPage] = useState(rpp);
    const [loadData, handleLoadData] = useState(rmtData);

    const [stateHeaders, handleStateHeaders] = useState({})

    console.log({ stateHeaders, rmtHeaders })

    useEffect(() => {
        rmtHeaders.forEach(header => {
            console.log(header, stateHeaders.heads)
            if (stateHeaders && stateHeaders.heads && header.key === stateHeaders.heads.key) {

                return header.listed = !header.listed
            }
        });
        handleStateHeaders(rmtHeaders)
    }, [stateHeaders])

    useEffect(() => {
        let basic = {
            limit: Number(recordPerPage),
            skip: 10,
            order: Number(shortOrder),
            columnSearch: columnSearchValue,
            globalSearch: globalSearchValue
        }
        let all = {
            limit: Number(recordPerPage),
            skip: pagnetData.startIndex,
            shortByKey: shortByKey.key,
            shortByOrder: Number(shortOrder),
            columnSearch: columnSearchValue,
            globalSearch: globalSearchValue,
            fullScreen: fullScreen,
            darkMode: darkMode,
            isActions: isActions,
            checkAllAction: checkAllAction,
            checkSingleRow: checkSingleRow,

        }

        if (rmtQueryParams && rmtServer) {
            rmtQueryParams(all, basic)
        }

    }, [recordPerPage, pagnetData, shortByKey, shortOrder, columnSearchValue, globalSearchValue, isActions])


    useEffect(() => {

        const startIndex = currentPage * Number(recordPerPage) - Number(recordPerPage);
        const endIndex = startIndex + Number(recordPerPage);
        handlePagnetData({ startIndex, endIndex })
    }, [currentPage, recordPerPage]);


    const isPagination = (rmtPagination === undefined || rmtPagination === true)

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



    return <div className="rmtMainContainer" id="rmtMainContainer">
        {rmtToolbar ?
            <Toolbar
                rmtHeading={rmtHeading}
                rmtSubHeading={rmtSubHeading}
                rmtHeaders={rmtHeaders}
                handleStateHeaders={handleStateHeaders}
                stateHeaders={stateHeaders}
                openFullScreen={openFullScreen}
                closeFullScreen={closeFullScreen}
                fullScreen={fullScreen}
                handleFullScreen={handleFullScreen}
                rmtCheckAll={rmtCheckAll}
                rmtGlobalSearch={rmtGlobalSearch}
                globalSearchValue={globalSearchValue}
                globalSearch={globalSearch}
                handleGlobalSearch={handleGlobalSearch}
                isActions={isActions}
                columnSpan={columnSpan}
                handleColumnSearch={handleColumnSearch}
                columnSearch={columnSearch}
                handleGlobalSearchValue={handleGlobalSearchValue}
                handleDarkMode={handleDarkMode}
                darkMode={darkMode}
                rmtResetData={rmtResetData}
                rmtFullScreenMode={rmtFullScreenMode}
                rmtDarkTheme={rmtDarkTheme}
                columnSearchValue={columnSearchValue}
                handleColumnSearchValue={handleColumnSearchValue}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                rmtArrangeHead={rmtArrangeHead}
            /> :
            null}
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
                        columnSearchValue={columnSearchValue}
                        handlePagnetData={handlePagnetData}
                        setCurrentPage={setCurrentPage} /> : null}
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
                        isPagination={isPagination}
                        globalSearchValue={globalSearchValue}
                        checkAllAction={checkAllAction}
                        handleCheckSingleRow={handleCheckSingleRow}
                        checkSingleRow={checkSingleRow}
                        columnSearchValue={columnSearchValue}
                        pagnetData={pagnetData}
                        totalrecords={totalrecords}
                        handleTotalRecords={handleTotalRecords}
                        handlePagnetData={handlePagnetData}
                        rmtServer={rmtServer}
                    />

                </tbody>
                <tfoot></tfoot>
            </table >
        </div>
        {isPagination && <Pagination
            rmtHeaders={rmtHeaders}
            rmtPaginateSelection={rmtPaginateSelection}
            rmtRecordPerPage={recordPerPage}
            totalrecords={totalrecords}
            rmtCheckAll={rmtCheckAll}
            isActions={isActions}
            columnSpan={columnSpan}
            rmtPageLimit={rmtPageLimit}
            rmtData={rmtData}
            handlePagnetData={handlePagnetData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            recordPerPage={recordPerPage}
            handleRecordPerPage={handleRecordPerPage} />
        }

    </div>
}



export default MyTable;

