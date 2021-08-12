import React from 'react';

const SelectPagination = (props) => {

    const { defaultSelection, handleSelectitem, pages, totalrecords } = props

    return <div>
        <div style={{ margin: "0 20px 0 0", display: "inline-block" }}>
            Total Records: {totalrecords}
        </div>
        <div style={{ margin: "0 20px 0 0", display: "inline-block" }}>
            Records per page
            <select
                style={{ padding: "3px 8px 3px 3px", margin: "3px" }}
                defaultValue={defaultSelection}
                onChange={(e) => handleSelectitem(e.target.value)}
            >
                {pages.map((p, i) => {
                    return <option key={i} value={p} >{p}</option>
                })}
            </select>
        </div>

        <div style={{ margin: "0 20px 0 0", display: "inline-block" }}>
            Go to page
            <select
                style={{ padding: "3px 8px 3px 3px", margin: "3px" }}
                defaultValue={defaultSelection}
                onChange={(e) => handleSelectitem(e.target.value)}
            >
                <option value={1} >1</option>
                <option value={2} >2</option>
                <option value={3} >3</option>
                <option value={4} >4</option>
            </select>
        </div>
    </div>


}

export default SelectPagination;

