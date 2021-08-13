import React from 'react';

const StyleSheet = () => {
  return true
}
document.head.innerHTML += `
  <style>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    color:#444444;
   
    font-size:14px
  }
  
  td, th {
    border: 1px solid #efefef;
    text-align: left;
    padding: 8px;
  }
  th{
    background:#fafafa
  }
  thead{

  }
  tbody{

   }
  ul{
      list-style:none;
      display:block;
      margin:0;
      padding:0
  }
  ul li{
    display:inline-block
  }
  ul li a{
    margin:0 3px;
    padding:5px 10px;
    text-decoration:none;
    color:inherit;
    display:inline-block
   
    
  }
  ul li img{
    padding:5px ;
  }

  ul li a:hover,
  ul li img:hover,
  ul li a.active
  {
    background:#efefef
  }
  input[type="text" i],
  input[type="search" i]{
      width:100%;
      padding:5px;
      border:1px solid #cccccc
    }

    input[type="checkbox" ]{
      
        border:1px solid #cccccc
        
    }

    select{
        padding:3px 6px 3px 3px
    }

    div{
        display:block
    }
    .lh-1{
        line-height:1em
    }
    .lh-2{
        line-height:2em
    }

    .fl{
        float:left
    }
    .fr{
        float:right
    }
    .db{
        display:block
    }
    .dib{
        display:inline-block
    }
    .ml-1{
        margin-left:1em
    }
    .ml-2{
        margin-left:2em
    }
    .mr-01{
      margin-right:0.1em
  }
  .m-0{
    margin:0
    }
    .mr-1{
        margin-right:1em
    }
    .mr-2{
        margin-right:2em
    }
    .pd-05{
        padding:0.5em
    }
    .pd-1{
        padding:1em
    }
   
    .w-100{
        width:100%
    }
   
    .cr-p{
        cursor:pointer
    }
    .tx-c{
        text-align:center
    }
    .dropdown {
         float:right;
          position: relative;
          display: inline-block;
        }
        

        .dropdown .dropbtn {
            background:none;
            border:none;
            border-radius: 4px;
            padding: 2px;
          }
          .dropdown .dropbtn img{
            vertical-align:middle
          }

          .dropdown:hover .dropbtn {
            background:#e5e5e5;
            cursor:pointer 
          }
        
        .dropdown-content {
          display: none;
          right:20px;
          top:0px;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.2);
          z-index: 1;
          border-radius:2px
        }
        
        .dropdown-content a {
          color: black;
          padding: 8px 5px;
          text-decoration: none;
          display: block;
          border-bottom:1px solid #ccc;
         text-align:left
        }
        
        .dropdown-content a:hover {background-color: #f1f1f1}
        
        .dropdown:hover .dropdown-content {
          display: block;
        }
        .subHeading{
          margin:0;
          padding:2px 0;
          font-size:80%
        }    
  </style>`
export default StyleSheet;

