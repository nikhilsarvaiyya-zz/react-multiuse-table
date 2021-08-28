import React, { useState, useEffect } from 'react'
import ReactMultiuseTable from './lib/index';
import clientData from './client.json'


const rmtHeaders = [
  { key: 'id', label: "Index" },
  { key: 'first_name', label: "First Name" },
  { key: 'last_name', label: "Last Name" },
  { key: 'email', label: "Email" },
  { key: 'phone', label: "Phone" },
  { key: 'gender', label: "Gender" },
  { key: 'ip_address', label: "IP Address" },
  { key: 'country', label: "country" },
  { key: 'state', label: "state" },
  { key: 'city', label: "City" },
  { key: 'category', label: "category" },
  { key: 'sub_category', label: "Sub Category" },

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



  return <div style={{ background: "#a3a3a3" }}>
    <div style={{ display: "flex" }}>
      <div style={{ width: "calc(50% - 30px)", padding: "15px" }}>
        <ReactMultiuseTable
          rmtHeaders={rmtHeaders}
          rmtData={clientData}
        />
      </div>
      <div style={{ width: "calc(50% - 30px)", padding: "15px" }}>
        <ReactMultiuseTable
          rmtHeaders={rmtHeaders}
          rmtData={serverData}

          rmtServer={true}
          rmtTotalrecord={998}
          rmtQueryParams={queryParams}
        />
      </div>

    </div>
    <div style={{ width: "calc(100% - 30px)", padding: "15px", display: "inline-block" }}>
      <ReactMultiuseTable
        rmtHeaders={rmtHeaders}
        rmtData={clientData}

        rmtHeading="Client Data"
        rmtSubHeading="clientData"
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

        rmtCheckAll={true}
        rmtActions={actions}

      />
    </div>
    <div style={{ width: "calc(100% - 30px)", padding: "15px", display: "inline-block" }}>
      <ReactMultiuseTable
        rmtHeaders={rmtHeaders}
        rmtData={serverData}

        rmtHeading="Server Data"
        rmtSubHeading="serverData"
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

        rmtCheckAll={true}
        rmtActions={actions}

        rmtServer={true}
        rmtTotalrecord={998}
        rmtQueryParams={queryParams}

      />
    </div>
  </div>
}

export default App;
