import React from 'react';
import PaginationBar from './PaginationBar';
import SelectPagination from './SelectPagination';


const Pagination = (props) => {

    const {
        handleSelectitem,
        rmtPaginateSelection,
        rmtRecordPerPage,
        totalrecords,
        rmtData,
        rmtPageLimit,
        handlePagnetData,
        currentPage,
        setCurrentPage,
        recordPerPage,
        handleRecordPerPage

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
                rmtRecordPerPage={rmtRecordPerPage}
                handleSelectitem={handleSelectitem}
                totalrecords={totalrecords}
                currentPage={currentPage}
                recordPerPage={recordPerPage}
                setCurrentPage={setCurrentPage}
                handleRecordPerPage={handleRecordPerPage}

            />
        </div>
        <div className="fr w-50 tx-r">
            <PaginationBar
                rmtData={rmtData}
                rmtPageLimit={rmtPageLimit}
                rmtRecordPerPage={rmtRecordPerPage}
                handlePagnetData={handlePagnetData}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                recordPerPage={recordPerPage}
                totalrecords={totalrecords}
            />
        </div>
    </div>


}

export default Pagination;

