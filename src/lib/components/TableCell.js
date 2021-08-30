import React from 'react';

const na = () => {
    return <span className="NA_text" >NA &nbsp;</span>
}

const arrEllipsis = (text) => {
    return <ul>
        {text && text.map((m, i) => {
            return i < 3 && < li> {i !== 0 ? "," : null} {m}</li>
        })}
        {text && text.length > 4 ? " ..." : null}
    </ul>
}


const keyIsString = (text, headers) => {
    if (text === "null" || text === null) {
        return na()
    }
    if (typeof (text) === 'boolean') {
        if (headers.displayValue) {
            return text ? headers.displayValue[0] : headers.displayValue[1]
        } else {
            return text ? "Yes" : "No"
        }
    }
    if (typeof (text) === 'string') {
        return text
    }
    if (typeof (text) === 'number') {
        return text
    }
    if (typeof (text) === 'object') {
        return arrEllipsis(text)
    }
}

const keyIsObject = (data, headers) => {

    return <div className="dib" style={headers.cellStyle ? headers.cellStyle : {}}> {
        headers.key && headers.key.map((item, i) => {
            if (data[0] === item) {
                if (!data[1]) {
                    return na()
                } else {
                    if (typeof (data[1]) === 'object') {
                        return arrEllipsis(data[1])
                    } else {
                        if (headers.seprator && i !== (headers.key.length - 1)) {
                            return <span>{data[1]}&nbsp;{headers.seprator}&nbsp; </span>
                        } else {
                            return <span>{data[1]}&nbsp; </span>
                        }
                    }
                }
            }
        })
    }

    </div>
}
const TableCell = (props) => {
    const { cellData, headers } = props


    // const formateText = (text) => {
    //     return <div key={index} className="overflow-200">{text ? text : <span style={{ opacity: "20%" }}>NA</span>} </div>
    // }

    return <td  >
        {Object.entries(cellData).map((k, i3) => {
            if (typeof (headers.key) === 'object') {
                return keyIsObject(k, headers)
            } else if (typeof (headers.key) === 'string') {
                if (k[0] === headers.key) {
                    return <div className="dib" style={headers.cellStyle ? headers.cellStyle : {}}>
                        {keyIsString(k[1], headers)}
                    </div>
                }
            }
        })}
    </td>
}

export default TableCell;

