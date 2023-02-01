//shortcut - type rfce

import React, {useState, useEffect} from 'react'
import axios from './axios'

function Row({title}) {
    // use state - stores info untill refreshed 
    const [movies, setMovies] = useState([])

    // a snippet of code which runs based on a specific condition/variable 
    // when the page loads this code runs
    useEffect(()=>{
        // if bracket is blank, the code runs once.  
    }, [])



    return (
    <div>
        {/* title */}
        <h2>{title}</h2>

        {/* container -> posters */}

    </div>
  )
}

export default Row