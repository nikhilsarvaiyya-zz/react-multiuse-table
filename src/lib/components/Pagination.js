import React from 'react';
import PaginationBar from './PaginationBar';
import SelectPagination from './SelectPagination';


const Pagination = (props) => {

    const {
        handleSelectitem,
        rmtPaginateSelection,
        rmtDefaultSelection,
        totalrecords,
    } = props

    let pages;
    if (rmtPaginateSelection) {
        pages = rmtPaginateSelection
    } else {
        pages = [5, 10, 15, 20]
    }


    return <div className="rmtPagnation" >
        <div className="fl w-50">
            <SelectPagination
                pages={pages}
                rmtDefaultSelection={rmtDefaultSelection}
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

