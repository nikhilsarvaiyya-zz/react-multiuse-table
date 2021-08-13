import ReactMultiuseTable from './lib/index';
import TableJson from './table.json'

const rmtHeaders = [
  { key: 'name', label: "Full Name" },
  { key: 'email', label: "Email" },
  { key: 'phone', label: "Phone" },
  { key: 'gender', label: "Gender" },
  { key: 'city', label: "City" },

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
    rmtCheckAll={true}
    rmtActions={true}
    rmtColumnSearch={true}
    rmtGlobalSearch={false}
  />
}

export default App;
