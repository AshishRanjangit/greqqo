import { useState,useEffect } from "react";
import axios from "axios";
// import React {useState} from "react";

const User = ()=>{

    const [category, setCategory] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/hello');
          setCategory(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
      console.log(category);
    }, []);

    return(
        <>
        <h1>Category</h1>
        {category && category.map((category,index)=>
         <li>{category.category}</li>
        )}
        </>
    )
}

export default User;