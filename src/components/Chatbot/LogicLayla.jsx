import { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Carga la clave de API de las variables de entorno
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);

// For text-only input, use the gemini-pro model
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

export const useChatLogic = () => {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsLoading(true);

        // Añade la entrada del usuario al historial de chat
        setChatHistory(prevChatHistory => [...prevChatHistory, { text: userInput, sender: 'You' }]);

        // Usa el modelo para generar una respuesta basada en la entrada del usuario
        const result = await model.generateContentStream([userInput]);

        let text = '';
        for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            text += chunkText;
        }

        // Añade la respuesta del bot al historial de chat
        setChatHistory(prevChatHistory => [...prevChatHistory, { text, sender: 'Layla AI' }]);

        // Limpia la entrada del usuario
        setUserInput('');

        setIsLoading(false);
    };

    return { userInput, chatHistory, isLoading, handleInputChange, handleSubmit };
};