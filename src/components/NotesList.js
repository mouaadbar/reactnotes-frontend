import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import NoteService from "../services/NoteService";



const NotesList = () => {
    const [notes, setnotes] = useState([]);

    useEffect(() =>{
        NoteService.getAll()
        .then(response =>{
            console.log('printing response', response.data);
            setnotes(response.data);

        })
        .catch(error=>{
console.log("something went wrog", error);
        })
     
        
},[]);

return (
    <div className="main-content">
        <h4 className="font-weight-bold">List OF NOTES</h4>

       <div className="notes-list mt-4">

       {
           notes.length > 0 ? notes.map(
                note=>(
                    <div key={note.id} className="notes-preview mt-3">
                    <Link>
                        <h5 className="primary-color text-capitalize">{note.title}</h5>
                        <p>{note.body}</p>
                    </Link>
                    </div>
                ) 
                
            ) : <div>
                No NOTES are available
            </div>
        }

       </div>
    </div>
)
    }
export default NotesList;


