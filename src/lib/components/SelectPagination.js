import React from 'react';

const SelectPagination = (props) => {

    const { defaultSelection, handleSelectitem, pages, totalrecords } = props

    return <div className="fl db lh-2">
        <div className="fl mr-1">
            Total Records: {totalrecords}
        </div>
        <div className="fl mr-1">
            Records per page &nbsp;
            <select
                defaultValue={defaultSelection}
                onChange={(e) => handleSelectitem(e.target.value)}
            >
                {pages.map((p, i) => {
                    return <option key={i} value={p} >{p}</option>
                })}
            </select>
        </div>

        <div className="fl mr-1">
            Go to page&nbsp;
            <select>
                <option value={1} >1</option>
                <option value={2} >2</option>
                <option value={3} >3</option>
                <option value={4} >4</option>
                <option value={5} >5</option>
            </select>
        </div>
    </div>


}

export default SelectPagination;

