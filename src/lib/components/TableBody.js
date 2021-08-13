import React from 'react';

const TableBody = (props) => {

    if (!props.data) {
        return "Loading..."
    }
    return props.data.map((d, i1) => {
        return <tr key={i1}>
            <td className="tx-c">
                <input type="checkbox" />
            </td>
            {d.map((m, i2) => {
                return <td key={i2} > {m} </td>
            })}
            <td className="tx-c">
                <div className="dropdown">
                    <button className="dropbtn"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAiElEQVQ4jc2SwQ1AQBREX5BogiJQgxroRA1utEMPbq4uqnAQDjaxlz8JBzHJJD/5s7OZ2YU/IwVGx+SNQQscjq0lCoTBZMyPUAC5EkRiFwMlV4QZ2J7e3nB30Fgi1YGPw1qoCJ13uLdEoTDYuXIvwCp0JmruDipLpDrIvFk+pYUEGBxffeVvcAIAMhhp+VgEPQAAAABJRU5ErkJggg==" /></button>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                {/*  */}
            </td>
        </tr>
    })

}

export default TableBody;

