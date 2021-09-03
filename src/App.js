import React, { useState, useEffect } from 'react'
import ReactMultiuseTable from './lib/index';
import headers from './headers.json'
import clientData from './client.json'
import Actions from './lib/components/Actions';

//for server Data
//json-server data_1000.json 
//http://localhost:3000/users?_limit=3&_page=1&_sort=id&_order=DESC

const App = () => {

  var color1 = ["F8DE7F", "FADA5F", "D2B45A", "C49102", "FEE103", "FDA50F", "FEFEDA", "FFBE00", "EFDB82", "FFDDAF", "FFFFFF", "FEFCCF"];
  var color2 = ["ccc"];
  var color3 = ["000"];

  const [serverData, handleServerData] = useState([])
  const [params, queryParams] = useState()

  useEffect(() => {

    let endpoint = "http://localhost:3000/users"
    let limit = `_limit=${params && params.limit}`
    let page = `_page=${params && ((params.skip / params.limit) + 1)}`
    let order = `_order=${params && params.shortByOrder === 1 ? "ASC" : "DESC"}`
    let sort = `_sort=${params && params.shortByKey ? params.shortByKey : "id"}`
    let search = `q=${params && params.globalSearch ? params.globalSearch : ''}`
    let query = `?${limit}&${page}&${order}&${sort}&${search}`

    fetch(endpoint + query)
      .then(response => response.json())
      .then(data => {
        data.map(item => {
          item.rowStyle = item.is_valid ? { background: "#edfee9" } : { background: "#fff3f3" }
          item.cellStyle = { background: "#" + color1[Math.floor(Math.random() * color1.length)] }
          return item
        })

        handleServerData(data)
      });

  }, [params])

  return <ReactMultiuseTable
    rmtHeaders={headers}
    rmtData={serverData}

    rmtHeading="Client Data"
    rmtSubHeading="staticData"
    rmtClass="table"

    rmtPagination={true}
    rmtPaginateSelection={[5, 10, 100]}
    rmtRecordPerPage={10}
    rmtPageLimit={5}

    rmtToolbar={true}
    rmtColumnSearch={true}
    rmtGlobalSearch={true}
    rmtResetData={false}
    rmtDarkTheme={true}
    rmtFullScreenMode={true}
    rmtArrangeHead={true}

    rmtCheckAll={true}
    rmtActions={Actions}

    rmtServer={true}
    rmtTotalrecord={40}
    rmtQueryParams={queryParams}
  />


}

export default App;



// const rmtHeaders = [
//   {
//     key: 'id',
//     label: "Index",
//     listed: false,
//     columnStyle: { color: "gray", textAlign: "right" }
//   },
//   {
//     key: 'is_active', label: "Active",
//     alternateOptions: ["Yes", "No"],
//     listed: true,
//     columnStyle: {}
//   },
//   {
//     key: 'is_valid', label: "Valid",
//     listed: true,
//     alternateOptions: ["Enabled", "Disabled"],
//     columnStyle: {}
//   },
//   {
//     key: 'gender', label: "Gender",
//     listed: true,
//     selectOptions: ["Male", "Female"]
//   },
//   {
//     key: 'first_name', label: "First Name",
//     listed: true,
//     columnStyle: { textTransform: "uppercase", color: "red", fontSize: "15px" }
//   },
//   {
//     key: 'last_name', label: "Last Name",
//     listed: true,
//     columnStyle: {}
//   },
//   {
//     key: ['first_name', 'last_name'],
//     listed: true,
//     label: "Full name"
//   },
//   {
//     key: ['country', 'state', 'city'],
//     label: "Place",
//     seprator: " > ",
//     listed: true,
//     columnStyle: {}
//   },
//   {
//     key: ['category', 'sub_category'],
//     label: "Categories tree",
//     seprator: "-",
//     listed: true,
//     columnStyle: {}
//   },
//   {
//     key: "date",
//     label: "Created Date",
//     listed: true
//   },


//   { key: 'email', label: "Email" },
//   { key: 'phone', label: "Phone" },

//   { key: 'ip_address', label: "IP Address" },
// ]