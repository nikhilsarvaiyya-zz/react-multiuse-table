import ReactMultiuseTable from './lib/index';
import faker from 'faker'





const rmtHeaders = [
  { key: 'name', label: "Full Name" },
  { key: 'email', label: "Email" },
  { key: 'phone', label: "phone" },
  { key: 'gender', label: "Sex" },
  { key: 'city', label: "City" },
]
const createUser = () => {
  return {
    name: faker.name.findName(),
    gender: faker.name.gender(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    city: faker.address.city()
  }
}

const createUsers = (numUsers = 5) => {
  return new Array(numUsers)
    .fill(undefined)
    .map(createUser);
}

let rmtData = createUsers(15)



function App() {
  return <ReactMultiuseTable
    rmtClass="table"
    rmtHeaders={rmtHeaders}
    rmtData={rmtData}
  />
}

export default App;
