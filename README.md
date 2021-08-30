# Install

```bash
$ npm install react-multiuse-table
```
## Basic Usage

```js

import ReactMultiuseTable from 'react-multiuse-table'; 

const headers = [
  { key: 'first_name', label: "Full Name", listed: true },
  { key: 'mobile', label: "Phone", listed: true }
]

const data = [
  { age: 28, gender: "Male", mobile: "234546673453", first_name: "john", last_name: 'snow', email: "john@gmail.com" },
  { age: 56, gender: "Female", mobile: "346724354564", first_name: "Suzen", last_name: 'parker', email: "suzen@hotmail.com" },
  { age: 34, gender: "Male", mobile: "345567345678", first_name: "Ricky", last_name: 'sen', email: "ricky@rediff.com" },
  { age: 23, gender: "Male", mobile: "443567656766", first_name: "Messi", last_name: 'lobo', email: "messi@gmail.com" },
  { age: 45, gender: "Female", mobile: "978954364563", first_name: "Arial", last_name: 'oscorb', email: "arial@gmail.com" }
]

<ReactMultiuseTable
    rmtClass="table"
    rmtHeaders={headers}
    rmtData={data}
/>
```

## Advance Header

```js
const headers = [
  {
    key: ['first_name', 'last_name'],
    label: "Full Name",
    cellStyle: { textTransform: "capitalize" },
    listed: true,
  },
  {
    key: 'mobile',
    label: "Phone",
    listed: true,
    cellStyle: { textAlign: "right", display: "block", color: "#aaa", fontSize: "10px" }
  },
  {
    key: 'gender',
    label: "Gender",
    listed: true,
    options: ["Male", "Female"]
  },
  {
    key: 'age',
    label: "Age",
    listed: true,
    cellStyle: { textAlign: "right", display: "block", color: "#666" }
  },
  {
    key: 'email',
    label: "Mail Id",
    listed: true,
    cellStyle: { color: "blue" }
  },
  {
    key: ['age', 'gender'],
    label: "Seprator",
    listed: true,
    seprator: "-"
  }
]

```

## Pagination

```js

<ReactMultiuseTable
    rmtPaginateSelection={[5, 10, 100]}
    rmtRecordPerPage={10}
    rmtPageLimit={5}
  />
```

## Server side Data

You need to specify total number of records. Make sure the rmtServer flag is true.

```js

<ReactMultiuseTable
   rmtServer={true}
   rmtTotalrecord={100}
   rmtQueryParams={queryParams}
/>

```

## Props

```js

<ReactMultiuseTable
    rmtHeading="Heading"
    rmtSubHeading="SubHeading"
    rmtToolbar={true}
    rmtColumnSearch={true}
    rmtGlobalSearch={true}
    rmtResetData={false}
    rmtFullScreenMode={true}
    rmtArrangeHead={true}
/>
```




