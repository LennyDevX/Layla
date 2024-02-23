import React, { useState } from 'react';
import '../Chatbot/Styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faRobot, faPaintBrush, faLightbulb, faGem, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const SidebarItem = ({ children, onClick, Icon }) => (
    <li className="p-1 rounded-lg flex items-center justify-between">
        <button className="w-full text-left hover:scale-105 transform transition-transform duration-200" onClick={onClick}>
            {children}
            <FontAwesomeIcon icon={Icon} className="mx-2 " /> {/* Mueve el icono aquí */}
        </button>
    </li>
);

const Sidebar = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isRegistering, setIsRegistering] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes llamar a tu API para iniciar sesión
    };

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes llamar a tu API para registrar un nuevo usuario
    };

    const handleClick = (item) => {
        setSelectedItem(item); 
    };

    const handleBack = () => {
        setSelectedItem(null);
    };

    return (
        <div className="sidebar w-full md:w-1/2 h-full text-white rounded-lg p-2 ">
            <ul className="space-y-3 text-lg">
                {selectedItem === null ? (
                    <>
                        <SidebarItem Icon={faRobot} onClick={() => handleClick('What is Layla AI?')}>What is Layla AI?</SidebarItem>
                        <SidebarItem Icon={faPaintBrush} onClick={() => handleClick('API Generative AI')}>API Generative AI</SidebarItem>
                        <SidebarItem Icon={faLightbulb} onClick={() => handleClick('Use Case')}>Use Case</SidebarItem>
                        <SidebarItem Icon={faGithub} onClick={() => handleClick('Github')}>Github</SidebarItem>
                        <SidebarItem Icon={faDiscord} onClick={() => handleClick('Discord')}>Discord</SidebarItem>
                        <SidebarItem Icon={faGem} onClick={() => handleClick('Gemini Pro')}>Gemini Pro</SidebarItem>
                        <SidebarItem Icon={faRobot} onClick={() => handleClick('CHATBOT BETA 1')}>CHATBOT </SidebarItem>
                        <SidebarItem Icon={faSignInAlt} onClick={() => handleClick('Account')}>Login </SidebarItem>

                    </>
                ) : (
                    <>
                        <li className="rounded-lg   text-blue-400 text-3xl">{selectedItem}</li>
                        {selectedItem === 'Use Case' && (
                            <>
                                <p className="">Google Gemini AI can be leveraged for a multitude of use cases. From text generation and sentiment analysis to natural language processing and image generation. It can be utilized for language translation, product description generation, social media content creation, and much more. The possibilities are endless!</p>
                                <a href="https://www.google.com/gemini" target="_blank" rel="noopener noreferrer">
                                    <button className="mt-4 mb-2 p-3 rounded-lg border-blue-800 border-2 text-blue-500 hover:bg-blue-200 hover:text-black transition-colors duration-200">Learn More</button>
                                </a>
                            </>
                        )}
                        {selectedItem === 'What is Layla AI?' && (
                            <>
                                <p className="mt-4">Layla AI is an intelligent chatbot that utilizes Google Gemini AI to interact with users. It can answer questions, provide recommendations, and perform tasks. Engage with Layla AI and discover how it can simplify your life!</p>
                                <a href="https://www.layla.ai" target="_blank" rel="noopener noreferrer">
                                    <button className="mt-4 mb-2 p-3 rounded-lg border-blue-800 border-2 text-blue-500 hover:bg-blue-200 hover:text-black transition-colors duration-200">Learn More</button>
                                </a>
                            </>
                        )}
                        {selectedItem === 'API Generative AI' && (
                            <>
                                <p className="mt-4">The Google Gemini AI API allows developers to harness the power of artificial intelligence in their applications. You can use it to generate text, analyze sentiments, translate languages, and much more. Discover more about how you can utilize this powerful API in your projects!</p>
                                <a href="https://developers.google.com/gemini" target="_blank" rel="noopener noreferrer">
                                    <button className="mt-4 mb-2 p-3 rounded-lg border-blue-800 border-2 text-blue-500 hover:bg-blue-200 hover:text-black transition-colors duration-200">Learn More</button>
                                </a>
                            </>
                        )}
                        {selectedItem === 'Github' && (
                            <>
                                <p className="mt-4">Our project is hosted on Github. We invite you to collaborate and contribute to improving our chatbot. Whether you want to fix a bug, add a new feature, or simply learn more about our code, your contribution is welcome!</p>
                                <a href="https://github.com/your-project" target="_blank" rel="noopener noreferrer">
                                    <button className="mt-4 mb-2 p-3 rounded-lg border-blue-800 border-2 text-blue-500 hover:bg-blue-200 hover:text-black transition-colors duration-200">Learn More</button>
                                </a>
                            </>
                        )}
                        {selectedItem === 'Discord' && (
                            <>
                                <p className="mt-4">Join our community on Discord. It's a place where you can ask questions, share your ideas, and learn more about Layla AI and Google Gemini AI. We look forward to seeing you there!</p>
                                <a href="https://discord.com/your-server" target="_blank" rel="noopener noreferrer">
                                    <button className="mt-4 mb-2 p-3 rounded-lg border-blue-800 border-2 text-blue-500 hover:bg-blue-200 hover:text-black transition-colors duration-200">Learn More</button>
                                </a>
                            </>
                        )}
                        {selectedItem === 'Gemini Pro' && (
                            <>
                                <p className="mt-4">Gemini Pro is our premium version that offers advanced features and priority support. With Gemini Pro, you can maximize the potential of Google Gemini AI and take your projects to the next level. Discover more about Gemini Pro today!</p>
                                <a href="https://www.gemini.com/pro" target="_blank" rel="noopener noreferrer">
                                    <button className="mt-4 mb-2 p-3 rounded-lg border-blue-800 border-2 text-blue-500 hover:bg-blue-200 hover:text-black transition-colors duration-200">Learn More</button>
                                </a>
                            </>
                        )}
                        {selectedItem === 'CHATBOT BETA 1' && (
                            <>
                                <p className="mt-4">
                                    Layla AI is our free version that allows you to experiment with the best Google LLM. Although it doesn't have all the features of Gemini Pro, it's a great way to start exploring what you can do with artificial intelligence. Please note that this chatbot is in beta phase, so any errors you may encounter are part of the development process. We ask that you use the bot with caution. We are open to collaboration! If you are a developer and have ideas to improve the chatbot, we would love to hear your suggestions. Try Gemini Free today!
                                </p>                                
                                <a href="https://www.gemini.com/free" target="_blank" rel="noopener noreferrer">
                                    <button className="mt-4 mb-2 p-3 rounded-lg border-blue-800 border-2 text-blue-500 hover:bg-blue-200 hover:text-black transition-colors duration-200">Learn More</button>
                                </a>
                            </>
                        )}
                           {selectedItem === 'Account' && !isRegistering && (
                <>
                    <form onSubmit={handleLoginSubmit} className="mt-4">
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Nombre de usuario" className="p-2 rounded-lg border-blue-800 border-2 mb-2" />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" className="p-2 rounded-lg border-blue-800 border-2 mb-2" />
                        <button type="submit" className="p-3 rounded-lg border-blue-800 border-2 text-blue-500 hover:bg-blue-200 hover:text-black transition-colors duration-200">
                            <FontAwesomeIcon icon={faSignInAlt} /> Iniciar sesión
                        </button>
                    </form>
                    <button onClick={() => setIsRegistering(true)} className="p-3 rounded-lg border-blue-800 border-2 text-blue-500 hover:bg-blue-200 hover:text-black transition-colors duration-200">
                        Registrarse
                    </button>
                </>
            )}
            {selectedItem === 'Account' && isRegistering && (
                <form onSubmit={handleRegisterSubmit} className="mt-4">
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Nombre de usuario" className="p-2 rounded-lg border-blue-800 border-2 mb-2" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" className="p-2 rounded-lg border-blue-800 border-2 mb-2" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="p-2 rounded-lg border-blue-800 border-2 mb-2" />
                    <button type="submit" className="p-3 rounded-lg border-blue-800 border-2 text-blue-500 hover:bg-blue-200 hover:text-black transition-colors duration-200">
                        <FontAwesomeIcon icon={faSignInAlt} /> Registrarse
                    </button>
                    <button onClick={() => setIsRegistering(false)} className="p-3 rounded-lg border-blue-800 border-2 text-blue-500 hover:bg-blue-200 hover:text-black transition-colors duration-200">
                        Iniciar sesión
                    </button>
                </form>
            )}
                        <button className="m-2 p-3 rounded-lg bg-red-800 text-white hover:bg-red-600" onClick={handleBack}>Go Back</button>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;