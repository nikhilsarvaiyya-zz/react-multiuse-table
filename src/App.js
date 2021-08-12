import ReactMultiuseTable from './lib/index';
import faker from 'faker'
import TableJson from './table.json'




const rmtHeaders = [
  { key: 'name', label: "Full Name" },
  { key: 'email', label: "Email" },
  { key: 'phone', label: "Phone" },
  { key: 'gender', label: "Gender" },
  { key: 'city', label: "City" },
]
// const createUser = () => {
//   return {
//     name: faker.name.findName(),
//     gender: faker.name.gender(),
//     email: faker.internet.email(),
//     phone: faker.phone.phoneNumber(),
//     city: faker.address.city()
//   }
// }

// const createUsers = (numUsers = 5) => {
//   return new Array(numUsers)
//     .fill(undefined)
//     .map(createUser);
// }

let rmtData = TableJson

function App() {
  return <ReactMultiuseTable
    rmtClass="table"
    rmtHeaders={rmtHeaders}
    rmtData={rmtData}
    pagination={true}
    paginateSelection={[1, 3, 5, 7, 9, 10, 15, 20]}
    defaultSelection={15}
  />
}

export default App;
