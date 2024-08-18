import React, { useState } from 'react'; 
import './App.css'; 
function App() { 
const [showLoginForm, setShowLoginForm] = useState(true); 
const toggleForm = () => { 
setShowLoginForm(!showLoginForm); 
}; 
  const handleLoginFormSubmit = (event) => { 
    event.preventDefault(); 
    const username = event.target.elements.username.value; 
    const password = event.target.elements.password.value; 
    if (username !== "" && password !== "") { 
      toggleForm(); 
    } 
  }; 
  const handleLostItemFormSubmit = (event) => { 
    event.preventDefault(); 
    // Add MongoDB integration here 
    alert("Lost item details submitted successfully!"); 
  }; 
  return ( 
    <div className="container"> 
      <h1>Welcome to Lost Item Finder</h1> 
      {showLoginForm ? ( 
        <div id="login-container"> 
          <h2>Login</h2> 
          <form id="login-form" onSubmit={handleLoginFormSubmit}> 
            <input type="text" id="username" placeholder="Username" required /><br /> 
            <input type="password" id="password" placeholder="Password" required /><br /> 
            <input type="submit" value="Login" /> 
          </form> 
        </div> 
      ) : ( 
        <div id="lost-item-form"> 
          <h1 style={{ color: 'white' }}>Lost Item Finder Portal</h1> 
          <form id="lost-item-details-form" onSubmit={handleLostItemFormSubmit}> 
            <label htmlFor="itemName" style={{ color: 'red' }}>Item Name:</label> 
            <input type="text" id="itemName" name="itemName" required /><br /> 
            <label htmlFor="description" style={{ color: 'red' }}>Description:</label> 
            <input type="text" id="description" name="description" required /><br /> 
            <label htmlFor="contactEmail" style={{ color: 'red' }}>Contact Email:</label> 
            <input type="email" id="contactEmail" name="contactEmail" required /><br /> 
            <input type="submit" value="Submit" /> 
          </form> 
        </div> 
      )} 
    </div> 
  ); 
} 
export default App; 
