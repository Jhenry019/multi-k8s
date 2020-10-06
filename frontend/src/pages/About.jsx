import React from 'react';
import { Link } from 'react-router-dom';


function About() {
  return (
    <div>
      <h2>About Fib Calculator</h2>
      <span>
        This calculator allows a user 
        to specify a position in the 
        fibonacci sequence and retrieve 
        the number at that position.
      </span>
      <br /><br />
      <span>Back to </span>
      <Link to="/">Home</Link>
    </div>
  )
}

export default About;