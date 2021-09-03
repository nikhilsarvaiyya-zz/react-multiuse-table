

const StyleSheet = () => {
  return true
}
document.head.innerHTML += `
  <style>

  :root {
    --color-light: #999999;
    --color: #555555;
    --color-dark: #111111;
   
    --background-light: #FEFEFE;
    --background:#FCFCFC;
    --background-dark: #FAFAFA;
   
    --border-light: #D2D0CE;
    --border: #C8C6C4;
    --border-dark: #BDBBB8;
  }

  // :root {
  //   --background-light: #333333;
  //   --background: #222222;
  //   --background-dark: #111111;
   
  //   --color-light: #FEFEFE;
  //   --color:#FCFCFC;
  //   --color-dark: #FAFAFA;
   
  //   --border-light: #666666;
  //   --border: #555555;
  //   --border-dark: #444444;
  // }


  img.rmtIcon {
    filter: invert(0)
  }
  
  a {
    color: inherit
  }
  
  table {
    border-collapse: collapse;
  }
  
  td,
  th {
    border: 1px solid var(--border);
    text-align: left;
    padding: 8px;
    white-space: nowrap;
  }
 
  th {
    background: var(--background-dark);
  }
  tr:hover {
    background: var(--background-light)
  }
  
  thead tr:nth-child(2) {
    position: sticky;
    top: -1px;
     box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px -4px;
    z-index: 4
  }
  
  thead {}
  
  tbody {}
  
  .trans {
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -o-transition: all .5s ease;
    -ms-transition: all .5s ease;
    transition: all .5s ease;
  }
  
  ul {
    list-style: none;
    display: block;
    margin: 0;
    padding: 0
  }
  
  ul li {
    display: inline-block
  }
  
  ul li a {
    margin: 0 3px;
    padding: 5px 10px;
    text-decoration: none;
    color: inherit;
    display: inline-block
  }
  
  ul li img {
    padding: 5px;
  }
  
  ul li a:hover,
  ul li img:hover,
  ul li a.active {
    background: var(--background-dark)
  }
  

  
  input[type="text"i],
  input[type="search"i] {
    width: 100%;
  
  }
  
  input[type="checkbox"] {
    border: 1px solid var(--border)
  }
  
  ::-webkit-input-placeholder {
    color: var(--color-light);
  }
  
  :-ms-input-placeholder {
    color: var(--color-light);
  }
  
  ::placeholder {
    color: var(--color-light);
  
  }
  
  ::-webkit-scrollbar {
    
    height: 8px;             
    width: 8px; 
  }
  
  ::-webkit-scrollbar-track {
    background-color: var(--background-dark);
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: var(--background-dark);
     box-shadow: inset 0 0 6px var(--color-light);
  }
  
 
  
  select,
  input {
    padding: 3px 6px 3px 3px;
    background: var(--background-dark);
    color: var(--color);
    padding: 4px;
    border: 1px solid var(--border);
    border-radius:3px
  }
  
  div {
    display: block
  }
  
  .lh-1 {
    line-height: 1em
  }
  
  .lh-2 {
    line-height: 2em
  }
  
  .fl {
    float: left
  }
  
  .fr {
    float: right
  }
  
  .db {
    display: block
  }
  
  .dib {
    display: inline-block
  }
  
  .df {
    display: flex
  }
  
  .ws-nr {
    white-space: noWrap
  }
  
  .ml-1 {
    margin-left: 1em
  }
  
  .ml-2 {
    margin-left: 2em
  }
  
  .mr-01 {
    margin-right: 0.1em
  }
  
  .m-0 {
    margin: 0
  }
  
  .mr-1 {
    margin-right: 1em
  }
  
  .mr-2 {
    margin-right: 2em
  }
  
  .pd-05 {
    padding: 0.5em
  }
  
  .pd-1 {
    padding: 1em
  }
  
  .w-50 {
    width: 50%
  }
  
  .w-100 {
    width: 100%
  }
  
  .va-m {
    vertical-align: middle
  }
  
  .va-b {
    vertical-align: bottom
  }
  
  .cr-p {
    cursor: pointer
  }
  
  .cr-p:hover {
    opacity: .9
  }
  
  .tx-c {
    text-align: center
  }
  
  .tx-r {
    text-align: right
  }

  .p-a {
    position: absolute
  }
  
  .p-r {
    position: relative
  }
  
  .p-s {
    position: sticky;
  }
  
  .p-f {
    position: fixed;
  }
  
  .t-0 {
    top: 0px
  }
  
  .l-0 {
    left: 0px
  }
  
  .b-0 {
    bottom: 0px
  }
  
  .r-0 {
    right: 0px
  }

  .searchBox {
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -o-transition: all .5s ease;
    -ms-transition: all .5s ease;
    transition: all .5s ease;
  }

  .rmtMainContainer {
    font-family: arial, sans-serif;
    color: var(--color);
    background: var(--background-light);
    font-size: 13px;
    position: relative;
  }
  
  .rmtTableContainer {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: auto;
    border-left: 1px solid var(--border);
    border-right: 1px solid var(--border);
  }
  
  .dropdown {
    // position: relative;
    // display: inline-block;
  }
  
  
  .dropdown .dropbtn {
    background: none;
    border: none;
    border-radius: 4px;
    padding: 2px;
  }
  
  .dropdown .dropbtn img {
    // vertical-align: middle
  }
  
  .dropdown:hover .dropbtn {
    // background: var(--background);
    // cursor: pointer;
  }
  
  .dropdown-content {
    display: none;
    right: 36px;
    top: 0px;
    position: absolute;
    background-color: var(--background-light);
    min-width: 150px;
    border:1px solid var(--border-light);
    z-index: 1;
    border-radius: 2px
  }
  
  .dropdown-content a {
    color: var(--color);
    padding: 8px 5px;
    text-decoration: none;
    display: block;
    border-bottom: 1px solid var(--border);
    text-align: left
  }
  
  .dropdown-content a:hover {
    background-color: var(--background-dark);
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
    
  }
  
  .subHeading {
    margin: 0;
    padding: 2px 0;
    font-size: 80%
  }
  
  .rmtToolbar,
  .rmtPagnation {
    display: block;
    float: left;
    width: calc(100% - 10px);
    padding: 5px;
    background: var(--background-light);
    position: relative;
    z-index: 9
  }
  
  .rmtToolbar {
    border-right: 1px solid var(--border-light);
    border-left: 1px solid var(--border-light);
    border-top: 1px solid var(--border-light);
  }
  
  .rmtPagnation {
    border-right: 1px solid var(--border-light);
    border-left: 1px solid var(--border-light);
    border-bottom: 1px solid var(--border-light);
  }
  
  
  
  .overflow-200 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 200px;
  }
  
  .rmtPagination {
    display: flex;
    align-items: center;
    justify-content: center;
    float: right
  }
  
  .rmtPaginationItem,
  .rmtPrev,
  .rmtNext {
    display: inline-block;
    padding: 6px 10px;
    margin-right: 4px;
    border-radius: 3px;
    border: solid 1px var(--border);
    background: var(--background);
    
    font-size: .875em;
    font-weight: bold;
    text-decoration: none;
    color: var(--color);
    
    cursor: pointer
  }
  
  .rmtPaginationItem:hover,
  .rmtPrev:hover,
  .rmtNext:hover {
    background: var(--background-dark);
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(var(--background-dark); ), to(var(--background-dark); ));
    background: -moz-linear-gradient(0% 0% 270deg, var(--background-dark); , var(--background-dark); );
  }
  
  .rmtPaginationItem.active {
    border: none;
    background: var(--background-light);
    border: solid 1px var(--border-light);
    color: var(--color-light);
    
  }
  
  .rmtPaginationItem span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: contents;
  }
  
  .rmtPrev.disabled,
  .rmtNext.disabled {
    pointer-events: none;
    box-shadow: none;
    color: var(--color-light);
    background: var(--background-light);
  }
  
  .noDataAvaliable {
    color: var(--color-light);
  }
  
  .NA_text {
    color: var(--color-light);
  }
        
  </style>`
export default StyleSheet;

