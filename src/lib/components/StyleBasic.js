import React from 'react';

const StyleSheet = () => {
    return true
}
document.head.innerHTML += `
  <style>
  .trans{
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -o-transition: all .5s ease;
    -ms-transition: all .5s ease;
    transition: all .5s ease;
  }
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    color:#444444;
   background:white;
    font-size:13px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
  }
  
  td, th {
    border: 1px solid #efefef;
    text-align: left;
    padding: 8px;
  }
  th{
    background:#fafafa;
    position: sticky;
          top: 0; /* Don't forget this, required for the stickiness */
          box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
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
    background:#efefef;
    
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
        .p-a{
          position:absolute
        } 
        .p-r{
          position:relative
        }
         
  </style>`
export default StyleSheet;

