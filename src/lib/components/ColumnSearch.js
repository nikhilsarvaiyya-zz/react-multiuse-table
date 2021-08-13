import React from 'react';

const ColumnSearch = (props) => {

    const { headers, rmtCheckAll, handleColumnSearch, columnSearch,
        isActions } = props
    let emptyTh = rmtCheckAll ? <th className="tx-c"> </th> : null
    return <tr >
        {emptyTh}
        {headers.map((h, i) => {
            return <th key={i}>
                <input type="search" />
            </th>
        })}
        {isActions &&
            <th className="tx-c" >
                <img
                    onClick={() => handleColumnSearch(false)}
                    className="cr-p" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAV0lEQVQ4jWNgGExgOgMDgzQR6qShajGAOAMDw0YChkgQUoPPEIKa8RlCtGZsGkjWDAPSDAwMW6EYp2YmUk0lFlDkBWwaiDYEn0KChhBjC97ERnFSHhgAAP3XEqdC/dYtAAAAAElFTkSuQmCC" />
            </th>}
    </tr>


}

export default ColumnSearch;

