# Install

```bash
$ npm install react-multiuse-table
```
## Usage

```js
import ReactMultiuseTable from 'react-multiuse-table'; 

const headers = [
  { key: 'name', label: "Full Name" },
  { key: 'mobile', label: "Phone" },
]

const data = [{
  name: "john",
  age: 28,
  gender: "Male",
  mobile: "123-456-7890",
  email: "john@gmail.com"
},
{
  age: 34,
  gender: "Male",
  mobile: "987-654-321",
  name: "Ricky",
}]

<ReactMultiuseTable
    rmtHeaders={headers}
    rmtData={data}
/>
```

