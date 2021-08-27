import ReactMultiuseTable from './lib/index';
import TableJson from './table.json'

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

const handleSubmit = (data, { skip, limit, order, columnSearch, globalSearch }) => {
  //console.log(JSON.stringify(data, null, 4))
}

function App() {
  return <ReactMultiuseTable
    rmtHeaders={rmtHeaders}
    rmtData={TableJson}

    rmtHeading="Heading"
    rmtSubHeading="SubHeading"
    rmtClass="table"

    rmtPagination={true}
    rmtPaginateSelection={[5, 10, 100]}
    rmtRecordPerPage={10}
    rmtPageLimit={5}

    rmtColumnSearch={true}
    rmtGlobalSearch={false}

    rmtCheckAll={true}
    rmtActions={actions}

    handleSubmit={handleSubmit}




  />
}

export default App;
