import React from 'react';
import Sidebar from '../components/Sdiebar/Sidebard';
import Navbar from './Chatbot/Navbar';
import Chatbot from './Chatbot/Layla'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <>
    <Navbar />
    <div className="flex h-screen p-3 ">
        <Chatbot />
        <Sidebar />

    </div>
    </>
);
};

export default App;