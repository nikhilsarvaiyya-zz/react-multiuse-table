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
    rmtHeading="Heading"
    rmtSubHeading="SubHeading"
    rmtClass="table"
    rmtHeaders={rmtHeaders}
    rmtData={TableJson}
    pagination={true}
    paginateSelection={[5, 10, 15]}
    defaultSelection={10}
    rmtColumnSearch={true}
    rmtGlobalSearch={false}
    rmtActions={actions}
    rmtCheckAll={true}
  />
}

export default App;
