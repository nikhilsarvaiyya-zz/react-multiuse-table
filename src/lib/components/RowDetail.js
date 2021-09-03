const RowDetail = (data, handleIsModalOpen, columnSpan) => {
    let abc = <table className="pd-1 db" style={{ background: "#fafafa" }}>
        {Object.entries(data).map((key, value) => {
            console.log(JSON.stringify(key[1]))
            return <tr>
                <td style={{ minWidth: "120px" }}>{key[0]}</td>
                <td>{typeof (key[1]) === "boolean" ?
                    key[1] ? "Yes" : "No" : typeof (key[1]) === "object" ?
                        <pre>{JSON.stringify(key[1])}</pre> :
                        key[1]
                }
                </td>
            </tr>
        })}
    </table>
    return <td colSpan={columnSpan}>
        <div className="pd-1">
            <button
                className="fr"
                onClick={
                    () => handleIsModalOpen({ open: false, index: null })
                }>Close
            </button>
        </div>
        {abc}
    </td>
}

export default RowDetail