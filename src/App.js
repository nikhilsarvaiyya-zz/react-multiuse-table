import ReactMultiuseTable from './lib/index';

const rmtHeaders = [
  { key: 'name', label: "Full Name" },
  { key: 'mobile', label: "Phone" },
  { key: 'gender', label: "Sex" }
]

const rmtData = [{
  name: "Nikhil",
  age: 24,
  gender: "Male",
  mobile: "99876788776",
  email: "nikhil@gmail.com"
},
{
  age: 34,
  gender: "Female",
  mobile: "45645675673",
  name: "Vaani",
}]

function App() {
  return <ReactMultiuseTable
    rmtClass="table"
    rmtHeaders={rmtHeaders}
    rmtData={rmtData}
  />
}

export default App;
