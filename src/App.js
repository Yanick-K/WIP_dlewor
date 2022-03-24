
import { memo } from 'react';
import './App.css';
import Board from './Components/Board/Board'



function App() {
 
  return (
    <div>
      <header className="bg-gray-800 flex items-center justify-center py-4">
        <h1 className="font-bold text-white text-2xl">DleWor</h1>
      </header>
      <main className="min-h-screen flex items-center justify-center bg-gray-700">
        <Board  />
      </main>
    </div>
  );
}

export default memo(App);
