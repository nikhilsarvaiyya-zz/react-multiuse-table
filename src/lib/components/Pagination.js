import React from 'react';
import PaginationBar from './PaginationBar';
import SelectPagination from './SelectPagination';


const Pagination = (props) => {

    const {
        rmtHeaders,
        handleSelectitem,
        paginateSelection,
        defaultSelection,
        totalrecords
    } = props

    let pages;
    if (paginateSelection) {
        pages = paginateSelection
    } else {
        pages = [5, 10, 15, 20]
    }
    return <tr >
        <td
            style={{
                padding: ".5em",
                border: "1px solid lightgrey",
                cursor: "pointer",
                textAlign: "left",
            }}
            colSpan={rmtHeaders.length + 2}>
            <div style={{
                float: "left"
            }}>
                <SelectPagination
                    pages={pages}
                    defaultSelection={defaultSelection}
                    handleSelectitem={handleSelectitem}
                    totalrecords={totalrecords}
                />
            </div>
            <div style={{
                float: "right"
            }}>
                <PaginationBar />
            </div>
        </td>
    </tr>
}

export default Pagination;

