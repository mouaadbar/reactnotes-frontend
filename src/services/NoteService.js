import axios from "axios";
import httpClient from "../http-common";




const getAll = () =>{
   return  httpClient.get("/allNotes")
}

const create = data => {
   return httpClient.post("/addNote", data)
}

export default {getAll, create};