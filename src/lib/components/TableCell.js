import React from 'react';

const na = () => {
    return <span className="NA_text" title="Not Available" >NA &nbsp;</span>
}

const subStr = (text) => {
    return <span>
        {text.substring(0, 40)}
        {text && text.length > 40 ? "..." : ''}
    </span>

}

const strEllipsis = (text) => {

    return <div>
        <div className="fl ws-nr" title={text}>
            {customChanges(text)}
        </div>

    </div>
}

const arrEllipsis = (text) => {
    return <ul>
        {text && Array.isArray(text) && text.map((m, i) => {
            return i < 3 && < li title={m}> {i !== 0 ? "," : null} {m}</li>
        })}
        {text && text.length > 4 ? " ..." : null}
    </ul>
}


const keyIsString = (text, headers) => {
    if (text === "null" || text === null) {
        return na()
    }
    if (typeof (text) === 'boolean') {
        if (headers.alternateOptions) {
            return text ? headers.alternateOptions[0] : headers.alternateOptions[1]
        } else {
            return text ? "Yes" : "No"
        }
    }
    if (typeof (text) === 'string') {
        return strEllipsis(text)
    }
    if (typeof (text) === 'number') {
        return text
    }
    if (typeof (text) === 'object') {
        return arrEllipsis(text)
    }
}

const validImageUrl = (data) => {
    return data.match("(:jpg|gif|png)")
}

const validDate = (data) => {
    return (new Date(data) !== "Invalid Date") && !isNaN(new Date(data));
}

const validUrl = (data) => {

    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(data);

}

const customChanges = (data) => {

    if (validImageUrl(data)) {
        return <img
            className="va-m"
            src={data}
            height="30" style={{
                height: "22px",
                borderRadius: "500em",
                border: "1px solid #cccccc",
                background: "white"
            }} />
    } else if (validDate(data)) {
        let date = new Date(data)
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();
        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        return year + '-' + month + '-' + dt
    } else if (validUrl(data)) {
        let url = data.indexOf('://') === -1 ? 'http://' + data : data;
        return <a onClick="event.preventDefault()" target="_blank" href={url} >
            {subStr(url)}
        </a>
    } else {
        return subStr(data)
    }
}


const keyIsObject = (data, headers) => {
    return headers.key && headers.key.map((item, i) => {
        if (data[0] === item) {
            if (!data[1]) {
                return na()
            } else {
                if (typeof (data[1]) === 'object') {
                    return arrEllipsis(data[1])
                } else {

                    if (headers.seprator && i !== (headers.key.length - 1)) {
                        return <span >{customChanges(data[1])}&nbsp;{headers.seprator}&nbsp; </span>
                    } else {
                        return <span>{customChanges(data[1])}&nbsp; </span>
                    }
                }
            }
        }
    })
}

const TableCell = (props) => {
    const { cellData, headers } = props
    const columnStyle = headers.columnStyle
    const cellStyle = headers.cellStyle ? cellData.cellStyle : ""

    return <td style={{ ...cellStyle, ...columnStyle }}>
        {Object.entries(cellData).map((k, i3) => {
            if (typeof (headers.key) === 'object') {
                return keyIsObject(k, headers)
            } else if (typeof (headers.key) === 'string') {
                if (k[0] === headers.key) {
                    return keyIsString(k[1], headers)
                }
            }
        })}
    </td>
}

export default TableCell;

