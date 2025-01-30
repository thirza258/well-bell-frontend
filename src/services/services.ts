const apiBaseURL = "http://127.0.0.1:8000/handler"

import axios from "axios";
import { FormData } from "../components/Personalized";

const getChatbotResponse = async (input: string) => {
    const response = await axios.post(`${apiBaseURL}/ask/`, { question: input }, 
    { headers: { "Content-Type": "application/json" } });
    return response.data;
}

const returnFormData = async (formData: FormData) => {
    const response = await axios.post(`${apiBaseURL}/personalized/`, formData, 
    { headers: { "Content-Type": "application/json" } });
    return response.data;
}

export default { getChatbotResponse, returnFormData };