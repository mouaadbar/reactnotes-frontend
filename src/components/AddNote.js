import {useState} from 'react'
import { useHistory } from 'react-router'
import NoteService from '../services/NoteService'


const AddNote = () => {

    const [title, setTitle] = useState ('')
    const [body, setBody] = useState ('')
    const [category, setCategory] = useState ('');
    const history = useHistory()


    const saveNote =(e) =>{
        e.preventDefault();
        const note = {title, body, category};
        console.log('printion note', note)
        NoteService.create(note)
        .then(response=>{
           console.log("Note added successfully", response.data)
        history.push("api/")        })
        .catch(error=>{
            console.log("somthing goes wrong", error)
        })
        
    }
    return (
        <div className="create">
            <form>
                <div className="form-group">
                    <label htmlFor="title">Note Title<sup>*</sup></label>
                    <input 
                    type ="text"
                    className="form-control"
                    id="title" 
                    value = {title}
                    onChange={(e)=>setTitle(e.target.value)}
                    ></input>

                <div className="form-group">
                    <label htmlFor="body">Note Description<sup>*</sup></label>
                    <textarea
                    className="form-control"
                    id="body" 
                    value={body}
                    onChange = {(e)=>setBody(e.target.value)}
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="category">Note Category</label>
                    <select 
                    id="category"
                    className="form-control"
                    value={category}
                    onChange={(e)=> setCategory(e.target.value)}>
                    <option value =""></option>
                    <option value ="working">Working</option>
                    <option value ="meeting">Meeting</option>
                    <option value ="vacation">Vacation</option>
                    <option value ="blogging">Blogging</option>
                   
                  
                    </select>
                </div>
                <div className="text-center">
                <button onClick={(e)=>saveNote(e)}>Add Note</button>
                </div>
                </div>
            </form>
        </div>
    )
}
export default AddNote;