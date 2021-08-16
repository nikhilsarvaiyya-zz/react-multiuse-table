import ReactMultiuseTable from './lib/index';
import TableJson from './table.json'

const rmtHeaders = [
  { key: 'id', label: "Index" },
  { key: 'first_name', label: "Full Name" },
  { key: 'last_name', label: "Full Name" },
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

const query = ({ limit, skip, order }) => {
  //console.log({ skip, limit, order })
}

function App() {
  return <ReactMultiuseTable
    rmtHeaders={rmtHeaders}
    rmtData={TableJson}

    rmtHeading="Heading"
    rmtSubHeading="SubHeading"
    rmtClass="table"

    pagination={true}
    paginateSelection={[5, 10, 100]}
    defaultSelection={10}

    rmtColumnSearch={true}
    rmtGlobalSearch={false}

    rmtCheckAll={true}
    rmtActions={actions}

    query={query}
  />
}

export default App;
