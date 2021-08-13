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
        rmtCheckAll,
        isActions,
        columnSpan
    } = props

    let pages;
    if (paginateSelection) {
        pages = paginateSelection
    } else {
        pages = [5, 10, 15, 20]
    }


    return <tr >
        <td colSpan={columnSpan}>
            <div className="w-100" >
                <div className="fl w-50">
                    <SelectPagination
                        pages={pages}
                        defaultSelection={defaultSelection}
                        handleSelectitem={handleSelectitem}
                        totalrecords={totalrecords}
                    />
                </div>
                <div className="fr w-50 tx-r">
                    <PaginationBar />
                </div>
            </div>

        </td>
    </tr>
}

export default Pagination;

