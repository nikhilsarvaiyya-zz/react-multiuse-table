import React from 'react';


const Toolbar = (props) => {

    const {
        rmtHeading,
        rmtSubHeading,
        openFullScreen,
        closeFullScreen,
        fullScreen,
        handleFullScreen,
        rmtGlobalSearch,
        globalSearch,
        handleGlobalSearch,
        handleGlobalSearchValue,
        globalSearchValue,
        darkMode,
        handleDarkMode,
        rmtResetData,
        rmtFullScreenMode,
        rmtDarkTheme,
        columnSearchValue,
        handleColumnSearchValue,
        currentPage,
        setCurrentPage
    } = props

    console.log(Object.keys(columnSearchValue).length)

    let isDataToReset = globalSearchValue.length !== 0 ||
        Object.keys(columnSearchValue).length !== 0 ||
        currentPage !== 1



    return <div className="rmtToolbar">
        <div className="fl"
            style={rmtSubHeading ? { padding: "0 0 0 5px" } : { padding: "5px 0 0 5px" }}>
            {rmtHeading ? <strong className="rmtheading">{rmtHeading}</strong> : null}
            {rmtSubHeading ? <p
                style={!rmtHeading ? { padding: "7px 0 0 5px" } : null}
                className="subHeading" >{rmtSubHeading}</p> : null}

        </div>
        <div className="fr">
            <ul >
                {rmtGlobalSearch ?
                    globalSearch ?
                        <li className="ml-01 cr-p">
                            <img
                                alt=""
                                onClick={() => { handleGlobalSearch(false) }}
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAA4ElEQVQ4jaXSMUpDQRSF4S/RZ7ALSSnYCRbBwi1YuQAjxMLGRlJrZekWAkEEKwutDK7ApaSzsEkTUREs3iTImDcjyWmGuXfOP4c7Q7Xqid5ctWjfwiW28Yki1G/wkoPt4AmdqL6Ja1ykzAVGaCbOXOGwqtlDN5OwwGNcnA3qAM8ZwBfeRClngA28ZwACoLUIMEH7H4AtvC4CjHCSMTeVSadVB+6xW9Gr4w57uRsecIrGr3pHOf1vnMem+CfWcKR87zV8YIwBjsPaxzCVJKWzkKS/LOAPZH0JwG3w7a+SYq4fo1AfZnFyNMQAAAAASUVORK5CYII=" />
                        </li>
                        : <li className="ml-01 cr-p va-b p-r">
                            <img
                                alt=""
                                onClick={() => { handleGlobalSearch(true) }}
                                className="p-a searchBox" style={{
                                    left: "-26px",
                                    background: "white"
                                }}
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAV0lEQVQ4jWNgGExgOgMDgzQR6qShajGAOAMDw0YChkgQUoPPEIKa8RlCtGZsGkjWDAPSDAwMW6EYp2YmUk0lFlDkBWwaiDYEn0KChhBjC97ERnFSHhgAAP3XEqdC/dYtAAAAAElFTkSuQmCC" />
                            <input
                                type="search"
                                placeHolder="search"
                                value={globalSearchValue}
                                onChange={(e) => { handleGlobalSearchValue(e.target.value) }} />
                        </li> : null
                }

                {rmtResetData || isDataToReset ?
                    <li className="ml-01 cr-p">
                        <img
                            onClick={() => {
                                handleGlobalSearchValue('')
                                handleColumnSearchValue('')
                                setCurrentPage(1)
                            }}
                            alt=""
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAuElEQVQ4jdXSMWqCMQDF8Z9WcSjFwd7CKyhIceomegDBsYfQimfQW7jqWEpxaMHZM6gIinS1g/nKN3wRR/3DgyQv75GEcIsU0cMXtjhggbfg1YIyecYPZmiignIYz7HEBIOscB7feL9wuiFO6YJCymzjiH4kfLpQ/M/TNZvun+g1B84PlSjGBzrJJB8pykXCI5QwTRYeUmYDK7yghTV2eEQdY1Txit+s9mZQ0fnbLrDHBp/oBu/G+ANI2SCkCXAwFQAAAABJRU5ErkJggg==" />
                    </li> : null}
                {rmtDarkTheme ?
                    < li
                        className="ml-01 cr-p"
                        onClick={() => { handleDarkMode(darkMode ? false : true) }}>
                        <img
                            alt=""
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAA40lEQVQ4jaXTMU4DMRCF4Y8VLcsN6IICBVcBcRpElVyAOwSh1IgCrkFoghBtApdgQ2EvMsYOKxhpCo/nnxk/2/zTdirxY5ziMK5fcIvlbwX3MUeHTeYdbtBug58KYO6LWpH5APgKK1yXzlwaO/VJzD2LueO0wOVAGBqscQG7MTiqCRPhabLuBB1GfTWxyxA4nWKTFngtJE23wCc5c+S7iJOf3Jed40MmIuGR9FdVswNBwFlpsxXEWQlX1SR7Tey8xiP2ah1a4ZF0eMM9HvAex57lcO0zjYXP1J9ziTs81zr/2T4BZ2RR+NbR+GoAAAAASUVORK5CYII=" />
                    </li> : null}

                {rmtFullScreenMode && !fullScreen ?
                    <li
                        className="ml-01 cr-p"
                        onClick={() => { openFullScreen(); handleFullScreen(true) }}
                    >
                        <img
                            alt=""
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAa0lEQVQ4jc2SQQ6AIAwEJ/5HDspnxP/f6As0gYNN5ICBhmjcY3eyNGXhT9oBARJwAK7wnM6SMqEWIMDS8dAKxJqR+pe92akYnoaAKjsbAizsh/Kj7PARh79RuErSkuehSEGNVpUjsBm2fVkZh9sa61aJuakAAAAASUVORK5CYII=" />
                    </li> : null}
                {rmtFullScreenMode && fullScreen ?
                    <li className="ml-01 cr-p" >
                        <img
                            alt=""
                            onClick={() => { closeFullScreen(); handleFullScreen(false) }}
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAApElEQVQ4jb2SXQrCMBCEP3/yXqWXEHxoyS2qDzlAb+1F9AC2vmx12SYrBHQgLJmZLLNh4QfYAZcMfxXtKzpgBg6KOwrXWfO2kEBX7Vsl2EsNwFmMJyfdoj2Bm1QAkkTUp1UP24w+AGyUqTH3uxgXX6O0CXg4Sf+I2hFm0d+o+cSkGwSgByIwOg1G8fR8VmCF6DSI1pzbxMnUEldEwMwnSDixq/EC9+wq3CrMRXcAAAAASUVORK5CYII=" />
                    </li> : null}
            </ul>
        </div>
    </div >

}

export default Toolbar;

