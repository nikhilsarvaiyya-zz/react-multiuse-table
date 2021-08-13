import React from 'react';


const Toolbar = (props) => {

    const { rmtHeaders,
        rmtHeading,
        rmtSubHeading,
        openFullScreen,
        closeFullScreen,
        fullScreen,
        handleFullScreen,
        rmtCheckAll,
        globalSearch,
        handleGlobalSearch,
        columnSpan,
        isActions,
        handleColumnSearch,
        columnSearch
    } = props


    return <tr >
        <td colSpan={columnSpan} style={{ padding: "5px" }}>
            <div>
                <div className="fl"
                    style={rmtSubHeading ? { padding: "0 0 0 5px" } : { padding: "5px 0 0 5px" }}>
                    {rmtHeading ? <strong className="rmtheading">{rmtHeading}</strong> : null}
                    {rmtSubHeading ? <p
                        style={!rmtHeading ? { padding: "7px 0 0 5px" } : null}
                        className="subHeading" >{rmtSubHeading}</p> : null}

                </div>
                <div className="fr">
                    <ul >
                        {globalSearch ?
                            <li className="ml-01 cr-p va-b p-r">
                                <img
                                    onClick={() => { handleGlobalSearch(false) }}
                                    className="p-a" style={{ right: "1px" }}
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAV0lEQVQ4jWNgGExgOgMDgzQR6qShajGAOAMDw0YChkgQUoPPEIKa8RlCtGZsGkjWDAPSDAwMW6EYp2YmUk0lFlDkBWwaiDYEn0KChhBjC97ERnFSHhgAAP3XEqdC/dYtAAAAAElFTkSuQmCC" />
                                <input type="search" />
                            </li> :
                            <li className="ml-01 cr-p">
                                <img
                                    onClick={() => { handleGlobalSearch(true) }}
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAA4ElEQVQ4jaXSMUpDQRSF4S/RZ7ALSSnYCRbBwi1YuQAjxMLGRlJrZekWAkEEKwutDK7ApaSzsEkTUREs3iTImDcjyWmGuXfOP4c7Q7Xqid5ctWjfwiW28Yki1G/wkoPt4AmdqL6Ja1ykzAVGaCbOXOGwqtlDN5OwwGNcnA3qAM8ZwBfeRClngA28ZwACoLUIMEH7H4AtvC4CjHCSMTeVSadVB+6xW9Gr4w57uRsecIrGr3pHOf1vnMem+CfWcKR87zV8YIwBjsPaxzCVJKWzkKS/LOAPZH0JwG3w7a+SYq4fo1AfZnFyNMQAAAAASUVORK5CYII=" />
                            </li>}
                        <li>
                            {columnSearch ?
                                <img
                                    onClick={() => handleColumnSearch(false)}
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAnklEQVQ4jdXSPQrCQBiE4ccgSCqxsbSw0FJSWHkAj+Q9vJS12AhWgoo2sVFQELQwhYT8GFM5sLAMO+83Hyzc8Kx4HgghwEZ17RII6GJdYfoJwzSxh+0X4TOivFoDHAvCV0zKdhshzgjfMc0KNDK8COOUt8KibPqnlkmTGPuih80cv41Ocm8VAYIqtf4LcKgLDjHDxfsD/aw+5nXbFOoFzGo/FIAQQ1YAAAAASUVORK5CYII=" />
                                :
                                <img
                                    onClick={() => handleColumnSearch(true)}
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAwElEQVQ4jdXSsWoCQRDG8d+ZEEWbWAkKh1iIjZB0FiGFjS9k6TPYamulpkhAAnkOy1R5hJBWUqS4EyTcnXt2ftXuN/MfZnYnwif2ymmIEX7gHe0ScDNlakejjQ+0AuA6XjH4H4ixw30BfIcNHvMS+nhDIyN2gxWezrX4gBdUT7wIS0yygCjDe8YMX+k9xkIyYrDWktduYluUeJvj/+I7PR+KClTKtHVdBRoYhxTI+kaSPZ+ih46cHQhRF/NL4SD9AXMyFQWiX47OAAAAAElFTkSuQmCC" />

                            }
                        </li>

                        <li className="ml-01 cr-p">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAuElEQVQ4jdXSMWqCMQDF8Z9WcSjFwd7CKyhIceomegDBsYfQimfQW7jqWEpxaMHZM6gIinS1g/nKN3wRR/3DgyQv75GEcIsU0cMXtjhggbfg1YIyecYPZmiignIYz7HEBIOscB7feL9wuiFO6YJCymzjiH4kfLpQ/M/TNZvun+g1B84PlSjGBzrJJB8pykXCI5QwTRYeUmYDK7yghTV2eEQdY1Txit+s9mZQ0fnbLrDHBp/oBu/G+ANI2SCkCXAwFQAAAABJRU5ErkJggg==" />
                        </li>
                        {!fullScreen ?
                            <li className="ml-01 cr-p"
                                onClick={() => { openFullScreen(); handleFullScreen(true) }}
                            >
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAa0lEQVQ4jc2SQQ6AIAwEJ/5HDspnxP/f6As0gYNN5ICBhmjcY3eyNGXhT9oBARJwAK7wnM6SMqEWIMDS8dAKxJqR+pe92akYnoaAKjsbAizsh/Kj7PARh79RuErSkuehSEGNVpUjsBm2fVkZh9sa61aJuakAAAAASUVORK5CYII=" />
                            </li> : null}
                        {fullScreen ?
                            <li className="ml-01 cr-p" >
                                <img
                                    onClick={() => { closeFullScreen(); handleFullScreen(false) }}
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAApElEQVQ4jb2SXQrCMBCEP3/yXqWXEHxoyS2qDzlAb+1F9AC2vmx12SYrBHQgLJmZLLNh4QfYAZcMfxXtKzpgBg6KOwrXWfO2kEBX7Vsl2EsNwFmMJyfdoj2Bm1QAkkTUp1UP24w+AGyUqTH3uxgXX6O0CXg4Sf+I2hFm0d+o+cSkGwSgByIwOg1G8fR8VmCF6DSI1pzbxMnUEldEwMwnSDixq/EC9+wq3CrMRXcAAAAASUVORK5CYII=" />
                            </li> : null}
                    </ul>
                </div>
            </div>
        </td>
    </tr>
}

export default Toolbar;

