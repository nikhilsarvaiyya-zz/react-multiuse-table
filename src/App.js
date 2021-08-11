import ReactMultiuseTable from './lib/index';

const rmtHeaders = ['name', 'mobile', 'age', 'mobile', 'email']
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
    rmtHeaders={rmtHeaders}
    rmtData={rmtData}
  />
}

export default App;
