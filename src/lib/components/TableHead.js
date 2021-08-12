import React from 'react';
const TableHead = (props) => {
    const { headers, shortByKey, shortOrder, handleName, handleOrder, handleKeyIndex } = props

    if (!headers) {
        return "Loading..."
    }

    return <tr >
        {headers.map((h, i) => {
            return <th
                onClick={() => {
                    handleName(h);
                    handleOrder(h.key === shortByKey ? shortOrder : -shortOrder);
                    handleKeyIndex(i)
                }}
                style={{
                    padding: ".5em",
                    border: "1px solid lightgrey",
                    cursor: "pointer",
                    textAlign: "left"
                }}
                key={i}>{h.label}
                <div style={{ float: "right" }}>
                    {shortByKey.key !== h.key && <img style={{ verticalAlign: "middle" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABmJLR0QA/wD/AP+gvaeTAAAAm0lEQVQ4je3TSwrCMBCA4U/wCnoLN7pQUPAB1lPo3QQv4d7bCOKD0qVumoW1alpdiT8MgZD5J2Qy/MnpYJuvH9HDHlccMKgrGuGUi0JcMKsqmuBcEIVIkcSKEmRPRCEyLIqJzRJZG7uIoq3Y29WiUbK3xCoid43Nu0OxbxbdhLHX3ZzHigJDHD3+s2lVUaDrfgL6dUWBr83mj3ADmtQ4D3mdLi0AAAAASUVORK5CYII=" />}
                    {shortByKey.key === h.key && shortOrder === 1 && <img style={{ verticalAlign: "middle" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAAsUlEQVQokaXRQWrCQBSH8V/QjTcojQixh5AuuvMOrox0VfE+PU4P0XuU0kULXZjEzQSGmIwJfjCb9973nzcMdzBL9Ao8o8LPFHmNDRZY4h/fY+QiiFlUy/sCuvIqrJq55hF/oifE8gNeBkShnuMLvzCPmk0oDsntTJPojye+ZYv3zjZdzjjhQ8/gk/TfVxLP2oX0pudUKBPB4BAGY7HG2y2x5TUKqHEcK7aU+MR+qjiKC1J0JpMjvdeDAAAAAElFTkSuQmCC" />}
                    {shortByKey.key === h.key && shortOrder === -1 && <img style={{ verticalAlign: "middle", transform: "rotate(180deg)" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAAsUlEQVQokaXRQWrCQBSH8V/QjTcojQixh5AuuvMOrox0VfE+PU4P0XuU0kULXZjEzQSGmIwJfjCb9973nzcMdzBL9Ao8o8LPFHmNDRZY4h/fY+QiiFlUy/sCuvIqrJq55hF/oifE8gNeBkShnuMLvzCPmk0oDsntTJPojye+ZYv3zjZdzjjhQ8/gk/TfVxLP2oX0pudUKBPB4BAGY7HG2y2x5TUKqHEcK7aU+MR+qjiKC1J0JpMjvdeDAAAAAElFTkSuQmCC" />}
                </div>

            </th>
        })}
    </tr>
}

export default TableHead;

