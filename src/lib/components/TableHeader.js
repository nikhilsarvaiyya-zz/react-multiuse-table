import React from 'react';

const TableHeader = (props) => {

    const { rmtHeaders, heading, subHeading } = props

    return <tr >
        <td
            colSpan={rmtHeaders.length + 2}
            style={{
                padding: ".5em",
                border: "1px solid lightgrey",
                textAlign: "left"
            }}
        >
            <div>
                <div style={{ float: "left" }}>
                    <strong>{heading}</strong>
                    {/* <p style={{ margin: "2px 0 0 0", fontSize: "70%" }}>{subHeading}</p> */}
                </div>
                <div style={{ float: "right" }}>
                    <ul style={{ listStyle: "none", display: "inline" }}>
                        <li style={{ display: "inline", padding: "2px", margin: "0 0 0 5px", cursor: "pointer" }}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAuElEQVQ4jdXSMWqCMQDF8Z9WcSjFwd7CKyhIceomegDBsYfQimfQW7jqWEpxaMHZM6gIinS1g/nKN3wRR/3DgyQv75GEcIsU0cMXtjhggbfg1YIyecYPZmiignIYz7HEBIOscB7feL9wuiFO6YJCymzjiH4kfLpQ/M/TNZvun+g1B84PlSjGBzrJJB8pykXCI5QwTRYeUmYDK7yghTV2eEQdY1Txit+s9mZQ0fnbLrDHBp/oBu/G+ANI2SCkCXAwFQAAAABJRU5ErkJggg==" />
                        </li>
                        <li style={{ display: "inline", padding: "2px", margin: "0 0 0 5px", cursor: "pointer" }}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAa0lEQVQ4jc2SQQ6AIAwEJ/5HDspnxP/f6As0gYNN5ICBhmjcY3eyNGXhT9oBARJwAK7wnM6SMqEWIMDS8dAKxJqR+pe92akYnoaAKjsbAizsh/Kj7PARh79RuErSkuehSEGNVpUjsBm2fVkZh9sa61aJuakAAAAASUVORK5CYII=" />
                        </li>
                        <li style={{ display: "inline", padding: "2px", margin: "0 0 0 5px", cursor: "pointer" }}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAApElEQVQ4jb2SXQrCMBCEP3/yXqWXEHxoyS2qDzlAb+1F9AC2vmx12SYrBHQgLJmZLLNh4QfYAZcMfxXtKzpgBg6KOwrXWfO2kEBX7Vsl2EsNwFmMJyfdoj2Bm1QAkkTUp1UP24w+AGyUqTH3uxgXX6O0CXg4Sf+I2hFm0d+o+cSkGwSgByIwOg1G8fR8VmCF6DSI1pzbxMnUEldEwMwnSDixq/EC9+wq3CrMRXcAAAAASUVORK5CYII=" />
                        </li>
                    </ul>
                </div>
            </div>
        </td>
    </tr>
}

export default TableHeader;

