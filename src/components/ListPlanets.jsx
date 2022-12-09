import React, {useState ,useEffect } from 'react'


const ListPlanets = () => {
    const [data, setData] = useState([])  /* there localStorage */
    const key='HPEBVd3eWc3L8N9PzZddKA==84YxXPbI6fS3s5b0'
    const url='https://api.api-ninjas.com/v1/planets?name={Neptuno}'
    useEffect(() =>{
        const fetchData=async () =>{
            await fetch(`${url}?key=${key}`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.log(error)) 
        }

        fetchData()
    },[])  
  return (
    <>
   
      <h3> Planetas{ data.length} </h3>
      
        { 
        data.map((person, idx) => (
            <div key={`key_${person._id}`}>{idx+1} - {person.name}</div>
        ))}  

        

    </>
  )
}

export default ListPlanets