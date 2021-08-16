import React from 'react';
import PaginationBar from './PaginationBar';
import SelectPagination from './SelectPagination';


const Pagination = (props) => {

    const {
        handleSelectitem,
        paginateSelection,
        defaultSelection,
        totalrecords,
    } = props

    let pages;
    if (paginateSelection) {
        pages = paginateSelection
    } else {
        pages = [5, 10, 15, 20]
    }


    return <div className="rmtPagnation" >
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


}

export default Pagination;

