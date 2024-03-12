import { useState } from 'react';

function Square () {
  const [num, setNum] = useState(null);
  function handleClick(){
    setNum('X')
  }
  return (
    <button 
      className="square" 
      onClick={handleClick}>
        {num}
        </button>)
}

export default function Board() {
  return (
    <>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div 
      className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
    </>)
  
}
