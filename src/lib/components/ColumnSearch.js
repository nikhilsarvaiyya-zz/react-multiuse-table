import React from 'react';

const ColumnSearch = (props) => {

    const { headers } = props

    return <tr >
        <th className="tx-c"> </th>
        {headers.map((h, i) => {
            return <th key={i}>
                <input type="search" />
            </th>
        })}
        <th className="tx-c" >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAV0lEQVQ4jWNgGExgOgMDgzQR6qShajGAOAMDw0YChkgQUoPPEIKa8RlCtGZsGkjWDAPSDAwMW6EYp2YmUk0lFlDkBWwaiDYEn0KChhBjC97ERnFSHhgAAP3XEqdC/dYtAAAAAElFTkSuQmCC" />
        </th>
    </tr>


}

export default ColumnSearch;

