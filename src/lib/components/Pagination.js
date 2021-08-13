import React from 'react';
import PaginationBar from './PaginationBar';
import SelectPagination from './SelectPagination';


const Pagination = (props) => {

    const {
        rmtHeaders,
        handleSelectitem,
        paginateSelection,
        defaultSelection,
        totalrecords,
        rmtCheckAll
    } = props

    let pages;
    if (paginateSelection) {
        pages = paginateSelection
    } else {
        pages = [5, 10, 15, 20]
    }

    let colspan = rmtCheckAll ? rmtHeaders.length + 2 : rmtHeaders.length + 1
    return <tr >
        <td colSpan={colspan}>
            <div >
                <div className="fl">
                    <SelectPagination
                        pages={pages}
                        defaultSelection={defaultSelection}
                        handleSelectitem={handleSelectitem}
                        totalrecords={totalrecords}
                    />
                </div>
                <div className="fr">
                    <PaginationBar />
                </div>
            </div>

        </td>
    </tr>
}

export default Pagination;

