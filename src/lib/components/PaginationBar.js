
import React, { useState } from 'react';
const PaginationBar = ({ rmtPageLimit, recordPerPage, rmtData, setCurrentPage, currentPage, totalrecords }) => {

    const pages = Math.round(totalrecords / Number(recordPerPage))

    const [pageLimit] = useState(rmtPageLimit ? rmtPageLimit : 5)

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };



    return <div>
        <div className="rmtPagination">
            <button
                onClick={goToPreviousPage}
                className={`rmtPrev ${currentPage === 1 ? 'disabled' : ''}`}
            >
                &#8672;
            </button>
            {getPaginationGroup().map((item, index) => {
                return < button
                    key={index}
                    onClick={changePage}
                    className={`rmtPaginationItem ${currentPage === item ? 'active' : null}`}
                >
                    <span>{item}</span>
                </button>

            })}
            <button
                onClick={goToNextPage}
                className={`rmtNext ${currentPage === pages ? 'disabled' : ''}`}
            >
                &#8674;
            </button>
        </div>
    </div >
}

export default PaginationBar;

