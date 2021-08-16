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

const data = [
    { age: 28,  gender: "Male",  mobile: "234546673453",  name: "john", email: "john@gmail.com"    },
    { age: 56,  gender: "Female",  mobile: "346724354564",  name: "Suzen",  email: "suzen@hotmail.com"    },
    { age: 34,  gender: "Male",  mobile: "345567345678",  name: "Ricky",  email: "ricky@rediff.com"    },
    { age: 23,  gender: "Male",  mobile: "443567656766",  name: "Messi",  email: "messi@gmail.com"    },
    { age: 45,  gender: "Female",  mobile: "978954364563",  name: "Arial",  email: "arial@gmail.com"    }
]

<ReactMultiuseTable
    rmtClass="table"
    rmtHeaders={headers}
    rmtData={data}
/>
```

## Name and Sub text for table

```js

<ReactMultiuseTable
   rmtHeading="Heading"
   rmtSubHeading="SubHeading"
/>
```

## Column search and Globel search
```js

<ReactMultiuseTable
    rmtColumnSearch={true}
    rmtGlobalSearch={false}
/>
```

## collect params for serverside 

```js

const handleSubmit = ({ skip, limit, order, columnSearch, globalSearch }) => {
  console.log({ skip, limit, order, columnSearch, globalSearch })
}

<ReactMultiuseTable
    handleSubmit={handleSubmit}
/>
```

