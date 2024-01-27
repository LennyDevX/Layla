import { useChatLogic } from './LogicLayla';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Styles.css';


const HeroSection = () => {
    const { userInput, chatHistory, isLoading, handleInputChange, handleSubmit } = useChatLogic();

    return (
        <div className="hero-section">
            <textarea 
                readOnly 
                value={chatHistory.map(message => `${message.sender}: ${message.text}\n`).join('')}
            />
            <form onSubmit={handleSubmit} className="flex">
                <input 
                    type="text" 
                    value={userInput} 
                    color='black'
                    onChange={handleInputChange} 
                    placeholder="Escribe algo..."
                />
                <button 
                    type="submit" 
                    disabled={isLoading} 
                    className="p-2 bg-blue-500 text-white rounded-full shadow opacity-75"
                >
                    {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Enviar'}
                </button>
            </form>
        </div>
    );
};

export default HeroSection;