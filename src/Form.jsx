import { useState } from "react"

 function Form(){
    const [name, setName] = useState('')
    const [value, setVaue] = useState('')
    const handleInput =(e)=>{
        setVaue(e.target.value)
    }
    console.log('value: ', value);
    console.log('name; ', name);
    return(
        <div>
            
            <input type="text" name='name' placeholder="Type  here.." onChange={handleInput} />
            <button type="button" onClick={()=>setName(value)} >Submit</button>
            <p>name: {name}</p>
            <p>value: {value}</p>
        </div>

    )
}
export default Form