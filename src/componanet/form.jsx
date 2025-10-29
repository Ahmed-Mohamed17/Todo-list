import React from 'react'

const Form = ( {description,setDescription,HandleAddItems }) => {
  function HandleSubmit (e){
    e.preventDefault()
    if(!description){
      alert('you  must add a value')
    }
      const newItem ={
      id: Date.now(),
      description,
      selected: false
    }
    HandleAddItems(newItem)
    setDescription('')
    }
  return (
    <div>
      <form onSubmit={HandleSubmit} >
          <input type="text" placeholder='Enter Task..' value={description} onChange={(e)=> setDescription(e.target.value)} />
          <button> Add</button>
          
      </form>
    </div>
  )
}

export default Form
