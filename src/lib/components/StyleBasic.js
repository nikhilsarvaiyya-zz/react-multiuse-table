import React from 'react';

const StyleSheet = () => {
  return true
}
document.head.innerHTML += `
  <style>
  .rmtMainContainer{
    font-family: arial, sans-serif;
    color:#444444;
    background:white;
    font-size:13px;
  }
  .rmtTableContainer{
    width:100%;
    margin:0;
    padding:0;
    overflow-x: auto;
    border-left:1px solid #efefef;
    border-right:1px solid #efefef;
    
  }
  table {
    

    border: none;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    
  }
  
  td, th {
    border: 1px solid #efefef;
    text-align: left;
    padding: 8px;
  }
  th{
    background:#fafafa;    
  }
  thead tr:nth-child(2) {
    position: sticky;
    top: -1px; 
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px -4px;
    z-index:4
  }

  thead {
    
  }
  tbody{

   }
   .trans{
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -o-transition: all .5s ease;
    -ms-transition: all .5s ease;
    transition: all .5s ease;
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
    background:#efefef;
    
  }
  input[type="text" i],
  input[type="search" i]{
      width:100%;
      padding:5px;
      border:1px solid #cccccc
    }

    .searchBox{
      -webkit-transition: all .5s ease;
      -moz-transition: all .5s ease;
      -o-transition: all .5s ease;
      -ms-transition: all .5s ease;
      transition: all .5s ease;
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
    .df{
      display:flex
  }
  .ws-nr{
    white-space:noWrap
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
   
    .w-50{
      width:50%
  }
    .w-100{
        width:100%
    }

    .va-m{
      vertical-align:middle
  }
  .va-b{
    vertical-align:bottom
}
   
    .cr-p{
        cursor:pointer
    }
    .tx-c{
        text-align:center
    }
    .tx-r{
      text-align:right
  }
    .dropdown {
        
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
            cursor:pointer ;
            
          }
        
        .dropdown-content {
          display: none;
          right:20px;
          top:0px;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 100px;
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

        .rmtToolbar,
        .rmtPagnation{
          display: block;
          float: left;
          width: calc(100% - 10px);
          padding: 5px;
          background:#fafafa;  
        }
        .rmtToolbar{ 
          border-right: 1px solid #efefef;
          border-left: 1px solid #efefef;
          border-top: 1px solid #efefef;
        }
        
        .rmtPagnation{ 
          border-right: 1px solid #efefef;
          border-left: 1px solid #efefef;
          border-bottom: 1px solid #efefef;
        }
        .p-a{
          position:absolute
        } 
        .p-r{
          position:relative
        }
        .p-s{
          position:sticky;
        }
        .p-f{
          position:fixed;
        }
        .t-0{
          top:0px
        }
        .l-0{
          left:0px
        }
        .b-0{
          bottom:0px
        }
        .r-0{
          right:0px
        }
        .overflow-200{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 200px;
        }

  </style>`
export default StyleSheet;

