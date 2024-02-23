import React from 'react';
import Sidebar from '../components/Sdiebar/Sidebard';
import Navbar from './Chatbot/Navbar';
import Chatbot from './Chatbot/Layla'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <>
    <Navbar />
    <div className="flex h-screen p-6 ">
        <Sidebar />
        <Chatbot />
    </div>
    </>
);
};

export default App;