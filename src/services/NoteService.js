import axios from "axios";
import httpClient from "../http-common";




const getAll = () =>{
   return  httpClient.get("/allNotes")
}

export default {getAll}