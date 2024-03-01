import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export const AdoptNDonate = () => {
  const [formData, setFormData] = useState({
    Username: '',
    Password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

    const Submitlogin = async (e) => {
      e.preventDefault();
      try {
        // Send form data to Laravel API endpoint
        const response = await axios.post('http://localhost:8000/api/storeUserLogin', formData);
        console.log(response.data); // Log the response from the API
        // Optionally, you can reset the form after successful submission
        setFormData({
          Username: '',
          Password: ''
        });
      } catch (error) {
        console.error('Error submitting form:', error.response.data);
      }
    };

    const deleteUser = (e) => {
      e.preventDefault();
      axios.delete(`http://localhost:8000/api/deleteUserLogin/${formData.Username}`, formData)
      .then((result) => {
        console.log('User deleted:', result.data);
      })
      .catch((error) => {
        console.error('Error deleting user:', error.response.data);
      });
    }

    const updateUser = (e) => {
      e.preventDefault();
      axios.put(`http://localhost:8000/api/updateUserLogin/${formData.Username}`, formData)
      .then((result) => {
        console.log('User Updated:', result.data);
      })
      .catch((error) => {
        console.error('Error Updating user:', error.response.data);
      });
    }
    //This is to delete a user from the database
  //   return (
  //   <form onSubmit={deleteUser}>
  //   {/* Use a hidden input field to specify the method as PUT */}
  //   <input type="hidden" name="_method" value="PUT" />
  //   <h1>Adopt or Donate</h1>
  //   <p>Adopt a turtle or donate to help save the turtles!</p>
  //   <p>Adopt a turtle</p>
  //   <input type="text" placeholder="Username" value={formData.Username} onChange={(e) => setFormData({ ...formData, Username: e.target.value })} />
  //   {/* <input type="email" placeholder="Email" value={formData.email}/> */}
  //   {/* <input type="password" placeholder="Enter Password" value={formData.Password} onChange={(e) => setFormData({ ...formData, Password: e.target.value })} /> */}
  //   <button type='submit' onClick={deleteUser}>Enter</button>
  // </form>
  // )
  
  //This is for adding in new data
  return (
    <form onSubmit={Submitlogin}>
     {/* Use a hidden input field to specify the method as PUT */}
     <input type="hidden" name="_method" value="PUT" />
     <h1>Adopt or Donate</h1>
     <p>Adopt a turtle or donate to help save the turtles!</p>
     <p>Adopt a turtle</p>
     <input type="text" placeholder="Username" value={formData.Username} onChange={(e) => setFormData({ ...formData, Username: e.target.value })} />
     {/* <input type="email" placeholder="Email" value={formData.email}/> */}
     <input type="password" placeholder="Enter Password" value={formData.Password} onChange={(e) => setFormData({ ...formData, Password: e.target.value })} />
     <button type='submit' onClick={Submitlogin}>Enter</button>
   </form>
  )

  //Updating data in the database
    // return (
    // <form onSubmit={updateUser}>
    //   {/* Use a hidden input field to specify the method as PUT */}
    //   <input type="hidden" name="_method" value="PUT" />
    //   <h1>Adopt or Donate</h1>
    //   <p>Adopt a turtle or donate to help save the turtles!</p>
    //   <p>Adopt a turtle</p>
    //   <input type="text" placeholder="Username" value={formData.Username} onChange={(e) => setFormData({ ...formData, Username: e.target.value })} />
    //   {/* <input type="email" placeholder="Email" value={formData.email}/> */}
    //   <input type="password" placeholder="Enter Password" value={formData.Password} onChange={(e) => setFormData({ ...formData, Password: e.target.value })} />
    //   <button type='submit' onClick={updateUser}>Enter</button>
    // </form>
    // )

}
