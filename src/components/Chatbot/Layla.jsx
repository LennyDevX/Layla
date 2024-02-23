import { useChatLogic } from './LogicLayla';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Styles.css';

const HeroSection = () => {
    const { userInput, chatHistory, isLoading, handleInputChange, handleSubmit } = useChatLogic();

    return (
        <div className="hero-section w-full">
            <div 
                className="chat-history  p-4 rounded-lg bg-black w-full overflow-auto" 
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
                    style={{ width: '100%', marginRight: '10px' }}
                />
                <button 
                    type="submit" 
                    disabled={isLoading} 
                >
                    {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Enviar'}
                </button>
            </form>
        </div>
    );
};

export default HeroSection;