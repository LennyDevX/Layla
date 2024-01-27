import React from 'react';
import Sidebar from './Chatbot/Sidebard';
import Chatbot from './Chatbot/Layla'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <div className="flex h-screen p-6 ">
        <Sidebar />
        <Chatbot />
    </div>
);
};

export default App;