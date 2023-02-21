import {useState} from 'react'


function About(){
	const[employees,setEmployees]=useState([])
	function retrieve(){
		fetch("https://reqres.in/api/users?page=2")
		.then((res)=>{
			console.log(res)
			return res.json()
		})
		.then((jsonRes)=>{
			console.log(jsonRes)
			setEmployees(jsonRes.data)
		})
	}
	return(
		<div>
		<h1>About Component</h1>
		<p><button className="btn" onClick={retrieve}>get the data</button></p>
		{
			employees.map((pos)=>(
			<div key={pos.id} className="group">
			<p>Name:{pos.first_name}</p>
			<p>Email:{pos.email}</p>
			<img src={pos.avtar} width="30%"/>
		
		</div>
	))
	
}
    </div>
      )
}
export default About