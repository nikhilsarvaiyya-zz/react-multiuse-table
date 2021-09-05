import React from 'react';

const SelectPagination = (props) => {

    const {

        pages,
        totalrecords,
        recordPerPage,
        handleRecordPerPage,
        setCurrentPage,
        currentPage
    } = props


    const totalPages = Math.round(totalrecords / Number(recordPerPage));
    let allPages = Array.from(Array(totalPages).keys())
    return <div className="fl db lh-2">
        <div className="fl mr-1">
            Total Records: <b>{totalrecords}</b>
        </div>
        <div className="fl mr-1">
            Records per page &nbsp;
            <select
                defaultValue={recordPerPage ? recordPerPage : 0}
                onChange={(e) => {
                    handleRecordPerPage(e.target.value)
                    setCurrentPage(1)
                }}
            >
                {pages.map((p, i) => {
                    return <option key={i} value={p} >{p}</option>
                })}
            </select>
        </div>

        <div className="fl mr-1">
            Go to page&nbsp;
            <select
                defaultValue={1}
                onChange={(e) => {
                    setCurrentPage(Number(e.target.value))
                }}>
                {allPages.map(p => {
                    return <option key={p} defaultValue={currentPage === p + 1} value={p + 1} >{p + 1}</option>
                })}

            </select>
        </div>
    </div>


}

export default SelectPagination;

