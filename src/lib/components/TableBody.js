import React from 'react';

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

const TableBody = (props) => {

    const { rmtCheckAll, rmtActions,
        rmtHeaders,
        handleSelectitem,
        paginateSelection,
        defaultSelection,
        totalrecords,
        rmtData,
        isActions,
        columnSpan, keyIndex, shortByKey, shortOrder, selectItem, isPagination } = props;

    if (!rmtData) {
        return <td colSpan={columnSpan} className="mr-1">Loading...</td>
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


    return sortedData.map((d, i1) => {
        return <tr key={i1}>
            {rmtCheckAll &&
                <th className="tx-c">
                    <div>
                        <input type="checkbox" />
                    </div>
                </th>}
            {d.map((m, i2) => {
                return <td key={i2} > {m} </td>
            })}
            {rmtActions && rmtActions.length !== 0 &&
                <td className="tx-c">
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
                </td>}
        </tr>
    })

}

export default TableBody;

