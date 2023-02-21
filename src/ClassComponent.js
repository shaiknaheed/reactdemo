import React from 'react'

class ClassComponent extends React.Component{
	state={
		Subjectname:"react",
		year:2013,
		inputValue:"",
		students:[
		{
			name:"naheed",
			age:21,
			gender:"female"
		},
		{
			name:"papi",
			age:20,
			gender:"female"
		},
		{
			name:"goweri",
			age:21,
			gender:"female"
		},
		]
	}
	handleClick=()=>{
		console.log(this.state.inputValue)
		this.setState({
			inputValue:""
		})
		
    }
    handleChange=(e)=>{
    	//console.log(this.state.inputValue)
    	this.setState({
    		inputValue:e.target.value 
    		})
    }
	render(){
       return(
       	 <div>
       	    <h2>Good morning</h2>
       	    <p>{this.state.Subjectname}</p>
       	    <p>{this.state.year}</p>
       	    {
       	    	this.state.students.map((pos)=>(
       	    	<div> 
       	    	<p> {pos.name}</p>
       	    	<p> {pos.age}</p>
       	    	<p> {pos.gender}</p>
       	    	</div>
       	    		))
       	    }
       	    <input onChange={this.handleChange} value={this.state.inputValue}/>
       	    <button onClick={this.handleClick}>Submit</button>
       	  </div>
       	 )
      }
 }
 export default ClassComponent
