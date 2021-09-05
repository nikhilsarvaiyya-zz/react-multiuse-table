document.head.innerHTML += `<style>:root {
    --color-light: #999999;
    --color: #555555;
    --color-dark: #111111;
    --background-light: #FEFEFE;
    --background: #FCFCFC;
    --background-dark: #FAFAFA;
    --border-light: #D2D0CE;
    --border: #C8C6C4;
    --border-dark: #BDBBB8;
    --image-filter: 0;
}

[data-theme="dark"] {
    --background-light: #333333;
    --background: #222222;
    --background-dark: #111111;
    --color-light: #FEFEFE;
    --color: #FCFCFC;
    --color-dark: #FAFAFA;
    --border-light: #666666;
    --border: #555555;
    --border-dark: #444444;
    --image-filter: 1;
}

[data-theme="blue"] {
    --color-light: #FEFEFE;
    --color: #FCFCFC;
    --color-dark: #FAFAFA;
    --background-light: #3ba4f6;
    --background: #2098f6;
    --background-dark: #0a8aee;
    --border-light: #666666;
    --border: #555555;
    --border-dark: #444444;
    --image-filter: 1;
}


[data-theme="red"] {
    --color-light: #FEFEFE;
    --color: #FCFCFC;
    --color-dark: #FAFAFA;
    --background-light: #fc4646;
    --background: #fa3030;
    --background-dark: #ff2020;
    --border-light: #666666;
    --border: #555555;
    --border-dark: #444444;
    --image-filter: 1;
}

input[type="date"]::-webkit-calendar-picker-indicator,
input[type="time"]::-webkit-calendar-picker-indicator {
    cursor: pointer;
    border-radius: 4px;
    margin-right: 2px;
    opacity: 0.7;
    filter: invert(var(--image-filter));
}


.rmtMainContainer img.rmtIcon {
    opacity: 0.7;
    filter: invert(var(--image-filter))
}

.rmtMainContainer img.rmtIcon:hover {
    opacity: 0.7;
    filter: var(--image-filter)
}

a {
    color: inherit
}

.rmtMainContainer table {
    border-collapse: collapse;
}

.rmtMainContainer td,
.rmtMainContainer th {
    border: 1px solid var(--border);
    text-align: left;
    padding: 8px;
    white-space: nowrap;
}

.rmtMainContainer th {
    background: var(--background-dark);
}

.rmtMainContainer tr:hover {
    background: var(--background-light)
}

.rmtMainContainer thead tr:nth-child(2) {
    position: sticky;
    top: -1px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px -4px;
    z-index: 4
}

.rmtMainContainer thead {}

.rmtMainContainer tbody {}

.rmtMainContainer .trans {
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -o-transition: all .5s ease;
    -ms-transition: all .5s ease;
    transition: all .5s ease;
}

.rmtMainContainer ul {
    list-style: none;
    display: block;
    margin: 0;
    padding: 0
}

.rmtMainContainer ul li {
    position: relative;
    display: inline-block
}

.rmtMainContainer ul li a {
    margin: 0 3px;
    padding: 5px 10px;
    text-decoration: none;
    color: inherit;
    display: inline-block
}

.rmtMainContainer ul li img {
    padding: 5px;
}

.rmtMainContainer ul li a:hover,
.rmtMainContainer ul li img:hover,
.rmtMainContainer ul li a.active {
    background: var(--color-light)
}

.rmtMainContainer select,
.rmtMainContainer input {
    background: var(--background-dark);
    color: var(--color);
    border: 1px solid var(--border);
    border-radius: 3px;
}

.rmtMainContainer input[type="text"i],
.rmtMainContainer input[type="search"i] {
    padding: 4px
}

.rmtMainContainer input[type="date"i],
.rmtMainContainer input[type="time"i] {
    padding: 0 4px;
}


.rmtMainContainer input[type="checkbox"] {
    border: 1px solid var(--border)
}

.rmtMainContainer .input-search,
.rmtMainContainer .input-select,
.rmtMainContainer .input-date {
    border: none;
    color: var(--color-dark);
    background: var(--background-light);
    padding: 0 10px;
}

.rmtMainContainer .input-search {
    width: calc(100% - 20px);
    min-height: 32px
}

.rmtMainContainer .input-select {
    width: calc(100% - 0px);
    min-height: 36px
}

.rmtMainContainer .input-date {
    width: calc(100% - 10px);
    min-height: 34px
}



input[type="date"]::-webkit-calendar-picker-indicator:hover {
    opacity: 1
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




.rmtMainContainer div {
    display: block
}

.rmtMainContainer .lh-1 {
    line-height: 1em
}

.rmtMainContainer .lh-2 {
    line-height: 2em
}

.rmtMainContainer .fl {
    float: left
}

.rmtMainContainer .fr {
    float: right
}

.rmtMainContainer .db {
    display: block
}

.rmtMainContainer .dib {
    display: inline-block
}

.rmtMainContainer .df {
    display: flex
}

.rmtMainContainer .ws-nr {
    white-space: noWrap
}

.rmtMainContainer .ml-1 {
    margin-left: 1em
}

.rmtMainContainer .ml-2 {
    margin-left: 2em
}

.rmtMainContainer .mr-01 {
    margin-right: 0.1em
}

.rmtMainContainer .m-0 {
    margin: 0
}

.rmtMainContainer .mr-1 {
    margin-right: 1em
}

.rmtMainContainer .mr-2 {
    margin-right: 2em
}

.rmtMainContainer .pd-0 {
    padding: 0
}

.rmtMainContainer .pd-05 {
    padding: 0.5em
}

.rmtMainContainer .pd-1 {
    padding: 1em
}

.rmtMainContainer .w-50 {
    width: 50%
}

.rmtMainContainer .w-100 {
    width: 100%
}

.rmtMainContainer .va-m {
    vertical-align: middle
}

.rmtMainContainer .va-b {
    vertical-align: bottom
}

.rmtMainContainer .cr-p {
    cursor: pointer
}

.rmtMainContainer .cr-p:hover {}

.rmtMainContainer .tx-c {
    text-align: center
}

.rmtMainContainer .tx-r {
    text-align: right
}

.rmtMainContainer .p-a {
    position: absolute
}

.rmtMainContainer .p-r {
    position: relative
}

.rmtMainContainer .p-s {
    position: sticky;
}

.rmtMainContainer .p-f {
    position: fixed;
}

.rmtMainContainer .t-0 {
    top: 0px
}

.rmtMainContainer .l-0 {
    left: 0px
}

.rmtMainContainer .b-0 {
    bottom: 0px
}

.rmtMainContainer .r-0 {
    right: 0px
}

.rmtMainContainer .searchBox {
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

.rmtMainContainer .rmtTableContainer {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: auto;
    border-left: 1px solid var(--border);
    border-right: 1px solid var(--border);
}

.rmtMainContainer .dropdown {
    /* position: relative;
      display: inline-block; */
}


.rmtMainContainer .dropdown .dropbtn {
    background: none;
    border: none;
    border-radius: 4px;
    padding: 2px;
}

.rmtMainContainer .dropdown .dropbtn img {
    /* vertical-align: middle */
}

.rmtMainContainer .dropdown:hover .dropbtn {
    /* background: var(--background);
cursor: pointer; */
}

.rmtMainContainer .dropdown-content {
    display: none;

    top: 0px;
    position: absolute;
    background-color: var(--background-light);
    min-width: 150px;
    border: 1px solid var(--border-light);
    z-index: 1;
    border-radius: 2px;
    overflow: auto;
    max-height: 300px
}

.rmtMainContainer .dropdown-content a,
.rmtMainContainer .dropdown-content span {
    color: var(--color);
    padding: 8px 5px;
    text-decoration: none;
    display: block;
    border-bottom: 1px solid var(--border);
    text-align: left
}

.rmtMainContainer .dropdown-content a:hover {
    background-color: var(--background-dark);
}

.rmtMainContainer .dropdown:hover .dropdown-content {
    display: block;

}

.rmtMainContainer .subHeading {
    margin: 0;
    padding: 2px 0;
    font-size: 80%
}

.rmtMainContainer .rmtToolbar,
.rmtMainContainer .rmtPagnation {
    display: block;
    float: left;
    width: calc(100% - 10px);
    padding: 5px;
    background: var(--background-light);
    position: relative;

}

.rmtMainContainer .rmtToolbar {
    border-right: 1px solid var(--border-light);
    border-left: 1px solid var(--border-light);
    border-top: 1px solid var(--border-light);
    z-index: 9;
    position: relative
}

.rmtMainContainer .rmtPagnation {
    border-right: 1px solid var(--border-light);
    border-left: 1px solid var(--border-light);
    border-bottom: 1px solid var(--border-light);
    z-index: 1;
    position: relative
}



.rmtMainContainer .overflow-200 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 200px;
}

.rmtMainContainer .rmtPagination {
    display: flex;
    align-items: center;
    justify-content: center;
    float: right
}

.rmtMainContainer .rmtPaginationItem,
.rmtMainContainer .rmtPrev,
.rmtMainContainer .rmtNext {
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

.rmtMainContainer .rmtPaginationItem:hover,
.rmtMainContainer .rmtPrev:hover,
.rmtMainContainer .rmtNext:hover {
    background: var(--background-dark);
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(var(--background-dark)), to(var(--background-dark)));
    background: -moz-linear-gradient(0% 0% 270deg, var(--background-dark), var(--background-dark));
}

.rmtMainContainer .rmtPaginationItem.active {
    border: none;
    background: var(--background-light);
    border: solid 1px var(--border-light);
    color: var(--color-light);

}

.rmtMainContainer .rmtPaginationItem span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: contents;
}

.rmtMainContainer .rmtPrev.disabled,
.rmtMainContainer .rmtNext.disabled {
    pointer-events: none;
    box-shadow: none;
    color: var(--color-light);
    background: var(--background-light);
}

.rmtMainContainer .noDataAvaliable {
    color: var(--color-light);
}

.rmtMainContainer .NA_text {
    color: var(--color-light);
}

<style>`