import { useEffect } from "react";

const useTitleCount =(count) =>{
    useEffect(() =>{
        console.log("i am the first one now")
        if (count>=0){
            document.title =`chats (${count} )`
        }
        else{
            document.title =`chats`
        }
    },[count]);
}
export default useTitleCount;