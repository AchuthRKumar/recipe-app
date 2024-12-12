import { GoogleGenerativeAI } from '@google/generative-ai';
import Topbar from "./components/Topbar";
import dotenv from 'dotenv';

function RecipePage(){
   
    const genAI = new GoogleGenerativeAI(process.env.API);
    
    return(
        <div>
            <Topbar /> 
            
        </div>
    );
    
} 

export default RecipePage;