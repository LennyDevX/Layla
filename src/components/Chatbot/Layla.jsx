import { useChatLogic } from './LogicLayla';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Styles.css';

const HeroSection = () => {
    const { userInput, chatHistory, isLoading, handleInputChange, handleSubmit } = useChatLogic();

    return (
        <div className="hero-section">
            <div 
                className="chat-history  p-5 rounded-lg overflow-auto" 
                style={{ height: '89%', marginBottom: '7px' }}
            >
                {chatHistory.map((message, index) => (
                    <p key={index} className={`${message.sender === 'User' ? 'text-right' : 'text-left'} mb-2`}>
                        <strong>{message.sender}:</strong> {message.text}
                    </p>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="flex">
                <input 
                    type="text" 
                    value={userInput} 
                    color='black'
                    onChange={handleInputChange} 
                    placeholder="Escribe algo..."
                    style={{ width: '80%', marginRight: '10px' }}
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