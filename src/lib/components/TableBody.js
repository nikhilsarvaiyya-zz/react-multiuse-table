import React from 'react';



function sortFunction(arr,
    shortByKey,
    order,
    select,
    isPagination,
    globalSearchValue,
    checkAllAction,
    columnSearchValue) {

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
            return f.name.toLowerCase().includes(globalSearchValue.toLowerCase())
        })
    }

    if (columnSearchValue && Object.keys(columnSearchValue).length !== 0) {
        sortData = sortData.filter((f, i) => {
            let abc = Object.entries(columnSearchValue);
            let key = abc[0][0];
            let value = abc[0][1].toLowerCase()
            if (typeof f[key] !== "number") {
                return f && f[key] && f[key].toLowerCase().includes(value)
            } else {
                console.log(f[key])
                console.log(value)
                return f && f[key] == value
            }
        })
    }

    sortData.sort((a, b) => {
        var nameA = a[shortByKey.key], nameB = b[shortByKey.key];
        return collator.compare(nameA, nameB)
    }).reverse();

    sortData.sort((a, b) => {
        var nameA = a[shortByKey.key], nameB = b[shortByKey.key];
        return collator.compare(nameA, nameB)
    })

    if (order === -1) {
        sortData = sortData.reverse();
    }

    if (isPagination) {
        return sortData = sortData.filter((f, i) => {
            return i < select
        })
    }

}

const TableBody = (props) => {

    const { rmtCheckAll, rmtActions,
        rmtHeaders,
        rmtData,
        columnSpan,
        keyIndex,
        shortByKey,
        shortOrder,
        selectItem,
        isPagination,
        globalSearchValue,
        checkAllAction,
        handleCheckSingleRow,
        checkSingleRow,
        columnSearchValue
    } = props;

    if (!rmtData) {
        return <td colSpan={columnSpan} className="mr-1">Loading...</td>
    }

    rmtData.map((item, i) => {
        return false
    })


    let sortedData = sortFunction(
        rmtData,
        shortByKey,
        shortOrder,
        selectItem,
        isPagination,
        globalSearchValue,
        checkAllAction,
        columnSearchValue
    );

    const formateText = (text, index) => {
        return <div key={index} className="overflow-200">{text ? text : <span style={{ opacity: "20%" }}>NA</span>} </div>
    }

    return sortedData.map((d, i1) => {
        return <tr key={i1} >
            {rmtCheckAll &&
                <th
                    className="tx-c p-s l-0"
                    style={{ boxShadow: "rgb(0 0 0) -1px 0px 8px -8px inset" }}>
                    <div>
                        <input
                            value={i1}
                            type="checkbox"
                            defaultChecked={d.isChecked}
                            onChange={(e) => {
                                if (e.target.checked) {
                                    handleCheckSingleRow([...checkSingleRow, d])
                                } else {
                                    let findIndex = checkSingleRow.findIndex(x => x.rowKey == i1);
                                    checkSingleRow.splice(findIndex, 1)
                                    handleCheckSingleRow([...checkSingleRow])
                                }
                            }} />
                    </div>
                </th>}

            {rmtHeaders.map((head, i2) => {
                return <td key={i2} >
                    {Object.entries(d).map((k, i3) => {
                        if (k[0] === head.key) {
                            return formateText(k[1], i3)
                        }
                    })}
                </td>
            })}
            {rmtActions && rmtActions.length !== 0 &&
                <th className="tx-c p-s r-0"
                    style={{ boxShadow: "rgb(0 0 0) 1px 0px 8px -8px inset" }}>
                    {
                        <div className="dropdown">
                            <button className="dropbtn"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAiElEQVQ4jc2SwQ1AQBREX5BogiJQgxroRA1utEMPbq4uqnAQDjaxlz8JBzHJJD/5s7OZ2YU/IwVGx+SNQQscjq0lCoTBZMyPUAC5EkRiFwMlV4QZ2J7e3nB30Fgi1YGPw1qoCJ13uLdEoTDYuXIvwCp0JmruDipLpDrIvFk+pYUEGBxffeVvcAIAMhhp+VgEPQAAAABJRU5ErkJggg==" /></button>
                            <div className="dropdown-content">
                                {rmtActions.map((a, i) => {
                                    return <a key={i} href="#">{a.label}</a>
                                })}
                            </div>
                        </div>
                    }
                </th>
            }
        </tr >
    })

}

export default TableBody;

