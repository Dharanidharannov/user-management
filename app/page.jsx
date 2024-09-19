

import React from "react"
import Link from "next/link"



function Home(){
    return(
        <div className=" bg-teal-300">
          
             <Link className="text-blue-500 " href='/users'> User information</Link>
        </div>
    )
}
export default Home