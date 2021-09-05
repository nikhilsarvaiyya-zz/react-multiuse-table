import React, { useState } from 'react';
import RowDetail from './RowDetail'

import TableCell from './TableCell'
function sortFunction(arr,
    shortByKey,
    order,
    select,
    isPagination,
    globalSearchValue,
    checkAllAction,
    columnSearchValue,
    pagnetData,
    handleTotalRecords,
) {

    var collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: 'base'
    });

    let sortData = arr;

    sortData.map((item, i) => {
        item.isChecked = checkAllAction;
        item.rowKey = i
        return item
    })

    if (globalSearchValue.length > 0) {
        sortData = sortData.filter((f, i) => {
            let ky = Object.entries(f);
            let key1 = ky[0][0];
            let key2 = ky[0][0];
            let value1 = ky[0][1]
            let value2 = ky[0][2]
            if (typeof value1 !== 'number') {
                return key1.toLowerCase().includes(value1)
            } else {
                return key2.toLowerCase().includes(value2)
            }


        })
    }

    if (columnSearchValue && Object.keys(columnSearchValue).length !== 0) {
        sortData = sortData.filter((f, i) => {
            let ky = Object.entries(columnSearchValue);
            let key = ky[0][0];
            let value = ky[0][1];

            if (typeof f[key] === "boolean") {
                return f && f[key] === value
            }
            else if (typeof f[key] === "string") {
                return f && f[key] && f[key].toLowerCase().includes(value.toLowerCase())
            } else {
                return f && f[key] === value
            }
        })
    }

    sortData.sort((a, b) => {
        var nameA, nameB;
        if (typeof (shortByKey.key) === 'object') {
            nameA = a[shortByKey.key[0]];
            nameB = b[shortByKey.key[0]];
        } else {
            nameA = a[shortByKey.key];
            nameB = b[shortByKey.key];
        }
        return collator.compare(nameA, nameB)
    }).reverse();

    if (order === 1) {
        sortData = sortData.reverse();
    }

    if (isPagination) {
        handleTotalRecords(sortData.length)
        return sortData = sortData.slice(pagnetData.startIndex, pagnetData.endIndex)
    }

    return sortData

}




const TableBody = (props) => {
    let sortedData = [];
    const [isModalOpen, handleIsModalOpen] = useState({})
    // const [selectedData, handleSelectedData] = useState({})

    const { rmtCheckAll, rmtActions,
        rmtHeaders,
        rmtData,
        columnSpan,
        shortByKey,
        shortOrder,
        recordPerPage,
        isPagination,
        globalSearchValue,
        checkAllAction,
        handleCheckSingleRow,
        checkSingleRow,
        columnSearchValue,
        pagnetData,
        handleTotalRecords,
        rmtServer,

    } = props;

    if (rmtServer) {
        sortedData = rmtData
    } else {
        sortedData = sortFunction(
            rmtData,
            shortByKey,
            shortOrder,
            recordPerPage,
            isPagination,
            globalSearchValue,
            checkAllAction,
            columnSearchValue,
            pagnetData,
            handleTotalRecords,
        );
    }

    if (!rmtData) {
        return <td colSpan={columnSpan} className="mr-1">Loading...</td>
    }


    return sortedData.map((d, i1) => {

        return <React.Fragment>
            <tr
                key={i1}
                className="cr-p"
                onClick={(e) => {
                    handleIsModalOpen({
                        open: isModalOpen.index === i1 ? !isModalOpen.open : true,
                        index: i1
                    })
                    // handleSelectedData(d)
                }}
                style={d.rowStyle}>
                {
                    rmtCheckAll &&
                    <th className="tx-c p-s l-0" >
                        <div style={{ minWidth: "27px" }}>
                            <input
                                className="m-0"
                                value={i1}
                                type="checkbox"
                                defaultChecked={d.isChecked}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        handleCheckSingleRow([...checkSingleRow, d])
                                    } else {
                                        let findIndex = checkSingleRow.findIndex(x => x.rowKey === i1);
                                        checkSingleRow.splice(findIndex, 1)
                                        handleCheckSingleRow([...checkSingleRow])
                                    }
                                }} />
                        </div>
                    </th>
                }

                {
                    rmtHeaders.map((head, i2) => {
                        return head.listed && <TableCell
                            headers={head}
                            key={i2}
                            cellData={d} />
                    })
                }

                {
                    rmtActions && rmtActions.length !== 0 &&
                    <th className="tx-c p-s r-0 dropdown" >
                        <button className="dropbtn">
                            <img
                                alt="Dropdown Menu"
                                className="cr-p rmtIcon"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAiElEQVQ4jc2SwQ1AQBREX5BogiJQgxroRA1utEMPbq4uqnAQDjaxlz8JBzHJJD/5s7OZ2YU/IwVGx+SNQQscjq0lCoTBZMyPUAC5EkRiFwMlV4QZ2J7e3nB30Fgi1YGPw1qoCJ13uLdEoTDYuXIvwCp0JmruDipLpDrIvFk+pYUEGBxffeVvcAIAMhhp+VgEPQAAAABJRU5ErkJggg==" /></button>
                        <div className="dropdown-content" style={{ right: "36px" }}>
                            {rmtActions.map((a, i) => {
                                return <a key={i} href={a.label}>{a.label}</a>
                            })}
                        </div>
                    </th>
                }

            </tr >
            {
                isModalOpen.open && isModalOpen.index === i1 &&
                RowDetail(d, handleIsModalOpen, columnSpan)
            }
        </React.Fragment >
    })

}

export default TableBody;

