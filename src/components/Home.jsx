import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <><div>Home</div><br /><ul>
          <li>
              {/* Endpoint to route to Home component */}
              <Link to="/">Home</Link>
          </li>
          <li>
              {/* Endpoint to route to About component */}
              <Link to="/ReSize">ReSize</Link>
          </li>
          <li>
              {/* Endpoint to route to Contact Us component */}
              <Link to="/WaterMark">WaterMark</Link>
          </li>
          <li>
              {/* Endpoint to route to Contact Us component */}
              <Link to="/WaterMark_PDF">WaterMark PDF</Link>
          </li>
      </ul></>
  )
}

export default Home