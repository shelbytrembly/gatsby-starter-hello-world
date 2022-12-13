import * as React from "react"
import { Link } from "gatsby"
import "../components/index.css"


const index = () => {
  return (
    <header className='hero' >
      <div className ='heroContainer'>
        <div className="heroInfo">
        <h1> Shelby Trembly</h1>
        <p> Information Design</p>
        <Link to= "/about"> See how we can help. </Link>
        </div> 
      </div> 
    </header>
  );
}

export default index;



 
