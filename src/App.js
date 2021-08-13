import ReactMultiuseTable from './lib/index';
import TableJson from './table.json'

const rmtHeaders = [
  { key: 'name', label: "Full Name" },
  { key: 'email', label: "Email" },
  { key: 'phone', label: "Phone" },
  { key: 'gender', label: "Gender" },
  { key: 'city', label: "City" },

]

const actions = [
  { key: 'add', label: "Add" },
  { key: 'edit', label: "Edit" },
  { key: 'delete', label: "Delete" },
  { key: 'view', label: "View" },
]

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
    rmtGlobalSearch={true}

    rmtCheckAll={true}
    rmtActions={actions}


  />
}

export default App;
