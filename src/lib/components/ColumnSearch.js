import React from 'react';

const dropdown = (h, handleColumnSearchValue, setCurrentPage) => {

    return <select
        className="input-select"
        onChange={(e) => {
            let val;

            if (e.target.value === "true") {
                val = true
            } else if (e.target.value === "false") {
                val = false
            } else {
                val = e.target.value
            }


            handleColumnSearchValue({
                [h.key]: val
            })
            setCurrentPage(1)
        }}
    >
        <option value={null}> Select</option>
        {h && h.alternateOptions && h.alternateOptions.map((s, i) => {
            return <option
                key={s}
                value={i === 0 ? Boolean(true) : Boolean(false)}>
                {s}
            </option>
        })}

        {h && h.selectOptions && h.selectOptions.map((s) => {
            return <option
                key={s}
                value={s}>
                {s}
            </option>
        })}

    </select>
}

const inputSearch = (h, columnSearchValue, handleColumnSearchValue, setCurrentPage) => {
    let key = ''
    if (typeof (h.key) === 'object') {
        key = h.key[0]
    } else {
        key = h.key
    }
    return <input

        className="input-search"
        placeholder={` ${h.label}`}
        value={key === Object.keys(columnSearchValue)[0] ? Object.keys(columnSearchValue)[1] : ''}
        onChange={(e) => {

            handleColumnSearchValue({
                [key]: e.target.value
            })
            setCurrentPage(1)
        }}
    />
}

const dateFilter = (h, columnSearchValue, handleColumnSearchValue, setCurrentPage) => {

    let filterType = "date"

    if (h.timeFilter) {
        filterType = "time"
    }


    return <input
        className="input-date"
        type={filterType}
        placeholder={` ${h.label}`}
        value={h.key === Object.keys(columnSearchValue)[0] ? Object.keys(columnSearchValue)[1] : ''}
        onChange={(object) => {
            console.log(object)
            // handleColumnSearchValue({
            //     [key]: e.target.value
            // })
            // setCurrentPage(1)
        }}
    />
}
const ColumnSearch = (props) => {

    const { headers,
        rmtCheckAll,
        handleColumnSearch,
        columnSearch,
        handleColumnSearchValue,
        columnSearchValue,
        setCurrentPage,
        isActions } = props
    let emptyTh = rmtCheckAll ? <th className="tx-c p-s l-0"> </th> : null
    return <tr >
        {emptyTh}
        {headers.map((h, i) => {
            return h.listed ?
                <th key={i} className="pd-0 m-0">
                    {h.selectOptions || h.alternateOptions ?
                        dropdown(h, handleColumnSearchValue, setCurrentPage) :
                        h.dateFilter || h.timeFilter ?
                            dateFilter(h, handleColumnSearchValue, setCurrentPage)
                            :
                            inputSearch(h, columnSearchValue, handleColumnSearchValue, setCurrentPage)
                    }
                </th> : null
        })}
        {isActions &&
            <th className="tx-c p-s r-0" >
                <img
                    alt="Column Filter"
                    onClick={() => handleColumnSearch(false)}
                    className="cr-p rmtIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAV0lEQVQ4jWNgGExgOgMDgzQR6qShajGAOAMDw0YChkgQUoPPEIKa8RlCtGZsGkjWDAPSDAwMW6EYp2YmUk0lFlDkBWwaiDYEn0KChhBjC97ERnFSHhgAAP3XEqdC/dYtAAAAAElFTkSuQmCC" />
            </th>}
    </tr>


}

export default ColumnSearch;

