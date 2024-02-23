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

        if (userInput.trim() === '') {
            return;
        }

        setIsLoading(true);

        setChatHistory(prevChatHistory => [...prevChatHistory, { text: userInput, sender: 'You'}]);

        try {
            const result = await model.generateContentStream([userInput]);

            let text = '';
            for await (const chunk of result.stream) {
                const chunkText = chunk.text();
                text += chunkText;
            }

            text = text.length > 600 ? text.substring(0, 600) + '...' : text;

            setTimeout(() => {
                setChatHistory(prevChatHistory => [...prevChatHistory, { text, sender: 'Layla AI' }]);
                setUserInput('');
                setIsLoading(false);
            }, 1000);
        } catch (error) {
            console.error('Error generating response:', error);
            setIsLoading(false);
        }
    };

    return { userInput, chatHistory, isLoading, handleInputChange, handleSubmit };
};