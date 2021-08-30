import React, { useState, useEffect } from 'react'
import ReactMultiuseTable from './lib/index';
import clientData from './client.json'


const rmtHeaders = [
  {
    key: 'id',
    label: "Index",
    listed: false,
    // cellStyle: { color: "gray", textAlign: "right" }
  },
  // {
  //   key: 'is_active', label: "Active",
  //   displayValue: ["yeppy", "Nathi"],
  //   listed: true,
  //   cellStyle: {}
  // },
  // {
  //   key: 'is_valid', label: "Valid",
  //   listed: true,
  //   cellStyle: {}
  // },
  {
    key: 'first_name', label: "First Name",
    listed: true,
    // cellStyle: { textTransform: "uppercase", color: "red", fontSize: "15px" }
  },
  {
    key: 'last_name', label: "Last Name",
    listed: true,
    cellStyle: {}
  },
  {
    key: ['first_name', 'last_name'],
    listed: true,
    label: "Full name"
  },
  {
    key: ['country', 'state', 'city'],
    label: "Place",
    seprator: "-",
    listed: true,
    cellStyle: {}
  },
  {
    key: ['category', 'sub_category'],
    label: "Categories tree",
    seprator: "-",
    listed: true,
    cellStyle: {}
  },


  { key: 'email', label: "Email" },
  { key: 'phone', label: "Phone" },
  {
    key: 'gender', label: "Gender",
    listed: true,
    options: ["Male", "Female"]
  },
  { key: 'ip_address', label: "IP Address" },
]



const actions = [
  { key: 'add', label: "Add" },
  { key: 'edit', label: "Edit" },
  { key: 'delete', label: "Delete" },
  { key: 'view', label: "View" },
]

//for server Data
//json-server data_1000.json 
//http://localhost:3000/users?_limit=3&_page=1&_sort=id&_order=DESC

const App = () => {

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
        handleServerData(data)
      });

  }, [params])

  return <ReactMultiuseTable
    rmtHeaders={rmtHeaders}
    rmtData={clientData}

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
    rmtActions={actions}

  // rmtServer={true}
  // rmtTotalrecord={998}
  // rmtQueryParams={queryParams}
  />


}

export default App;
