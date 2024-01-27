import React, { useState } from 'react';
import './Styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faRobot, faPaintBrush, faLightbulb, faGem, faCoffee } from '@fortawesome/free-solid-svg-icons';

const SidebarItem = ({ children, onClick, Icon }) => (
    <li className="p-2 rounded-lg flex items-center justify-between">
        <button className="w-full text-left hover:scale-110 transform transition-transform duration-200" onClick={onClick}>
            {children}
            <FontAwesomeIcon icon={Icon} className="mx-2 " /> {/* Mueve el icono aquí */}

        </button>
    </li>
);

const Sidebar = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClick = (item) => {
        setSelectedItem(item); 
    };

    const handleBack = () => {
        setSelectedItem(null);
    };

    return (
        <div className="sidebar w-full md:w-1/2 h-full bg-black text-white p-6 rounded-lg shadow-lg">
            <ul className="space-y-2 p-1 m-4 text-lg">
                {selectedItem === null ? (
                    <>
                    <SidebarItem Icon={faRobot} onClick={() => handleClick('What is Layla AI?')}>What is Layla AI?</SidebarItem>
                    <SidebarItem Icon={faPaintBrush} onClick={() => handleClick('API Google Generative AI')}>API Google Generative AI</SidebarItem>
                    <SidebarItem Icon={faLightbulb} onClick={() => handleClick('Use Case')}>Use Case</SidebarItem>
                    <SidebarItem Icon={faGithub} onClick={() => handleClick('Github')}>Github</SidebarItem>
                    <SidebarItem Icon={faDiscord} onClick={() => handleClick('Discord')}>Discord</SidebarItem>
                    <SidebarItem Icon={faGem} onClick={() => handleClick('Gemini Pro')}>Gemini Pro</SidebarItem>
                    <SidebarItem Icon={faCoffee} onClick={() => handleClick('Gemini Free')}>Gemini Free</SidebarItem>
                </>
                ) : (
                    <>
                        <li className="p-2 rounded-lg text-blue-400 text-3xl">{selectedItem}</li>
                        {selectedItem === 'Use Case' && (
                            <>
                                <p className="mt-4">Google Gemini AI can be leveraged for a multitude of use cases. From text generation and sentiment analysis to natural language processing and image generation. It can be utilized for language translation, product description generation, social media content creation, and much more. The possibilities are endless!</p>
                                <a href="https://www.google.com/gemini" target="_blank" rel="noopener noreferrer">
                                    <button className="mt-4 p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">Learn More</button>
                                </a>
                            </>
                        )}
                        {selectedItem === 'What is Layla AI?' && (
                            <>
                                <p className="mt-4">Layla AI is an intelligent chatbot that utilizes Google Gemini AI to interact with users. It can answer questions, provide recommendations, and perform tasks. Engage with Layla AI and discover how it can simplify your life!</p>
                                <a href="https://www.layla.ai" target="_blank" rel="noopener noreferrer">
                                    <button className="mt-4 p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">Learn More</button>
                                </a>
                            </>
                        )}
                        {selectedItem === 'API Google Generative AI' && (
                            <>
                                <p className="mt-4">The Google Gemini AI API allows developers to harness the power of artificial intelligence in their applications. You can use it to generate text, analyze sentiments, translate languages, and much more. Discover more about how you can utilize this powerful API in your projects!</p>
                                <a href="https://developers.google.com/gemini" target="_blank" rel="noopener noreferrer">
                                    <button className="mt-4 p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">Learn More</button>
                                </a>
                            </>
                        )}
                        {selectedItem === 'Github' && (
                            <>
                                <p className="mt-4">Our project is hosted on Github. We invite you to collaborate and contribute to improving our chatbot. Whether you want to fix a bug, add a new feature, or simply learn more about our code, your contribution is welcome!</p>
                                <a href="https://github.com/your-project" target="_blank" rel="noopener noreferrer">
                                    <button className="mt-4 p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">Go to Github</button>
                                </a>
                            </>
                        )}
                        {selectedItem === 'Discord' && (
                            <>
                                <p className="mt-4">Join our community on Discord. It's a place where you can ask questions, share your ideas, and learn more about Layla AI and Google Gemini AI. We look forward to seeing you there!</p>
                                <a href="https://discord.com/your-server" target="_blank" rel="noopener noreferrer">
                                    <button className="mt-4 p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">Join Discord</button>
                                </a>
                            </>
                        )}
                        {selectedItem === 'Gemini Pro' && (
                            <>
                                <p className="mt-4">Gemini Pro is our premium version that offers advanced features and priority support. With Gemini Pro, you can maximize the potential of Google Gemini AI and take your projects to the next level. Discover more about Gemini Pro today!</p>
                                <a href="https://www.gemini.com/pro" target="_blank" rel="noopener noreferrer">
                                    <button className="mt-4 p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">Go to Gemini Pro</button>
                                </a>
                            </>
                        )}
                        {selectedItem === 'Gemini Free' && (
                            <>
                                <p className="mt-4">Gemini Free is our free version that allows you to experiment with Google Gemini AI. Although it doesn't have all the features of Gemini Pro, it's a great way to start exploring what you can do with artificial intelligence. Try Gemini Free today!</p>
                                <a href="https://www.gemini.com/free" target="_blank" rel="noopener noreferrer">
                                    <button className="mt-4 p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">Try Gemini Free</button>
                                </a>
                            </>
                        )}
                        <button className="mt-4 p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600" onClick={handleBack}>Go Back</button>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;