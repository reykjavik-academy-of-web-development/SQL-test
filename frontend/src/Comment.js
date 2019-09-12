import React, {useState} from 'react';


const Comment = ({id}) => {
    const [form, setForm] = useState({name:"", comment:""})
    const submitComment = ()=> {
            fetch('http://localhost:3001/POST-Comment', {
            headers:{
                'Content-Type':'application/json'
            },
            method: 'post',
            body: JSON.stringify({
                name: form.name,
                comment: form.comment,
                ID: id

            })
        })
    }
    const handleChange = (e)=> {
        setForm({...form, [e.target.name]:e.target.value})
    }
    return (
        <div>
            <form onSubmit={(e) => {e.preventDefault(); submitComment();}}>
                <input onKeyUp = {handleChange} type= "text" name= "name"></input>
                <input onKeyUp = {handleChange} type= "text" name= "comment"></input>
                <input type= "submit" value= "submit"></input>
            </form>
        </div>
    )
}

export default Comment;