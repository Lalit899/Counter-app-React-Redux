import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function Header() {
const text = useRef()
  const counter = useSelector(store => store.counter);
  const privacy = useSelector(store => store.privacy);

  const dispatch = useDispatch();
  
  const handleIncrement = () => {
    dispatch({type: "INCREMENT"});
  }

  const handleDecrement = () => {
    dispatch({type: "DECREMENT"});
  }

  const handleAddition = () => {
    dispatch({type: "ADDITION", payload: {number: text.current.value}});
    text.current.value="";
  }

  const handleSubtract = () => {
    dispatch({type: "SUBTRACTION", payload: {number: text.current.value}});
    text.current.value="";
  }

  const handletoggle = () => {
    dispatch({type: "TOGGLE"})
  }

  return (
    <>
    <div className="py-24 flex items-center min-h-screen justify-center bg-white">
    <div className="mx-auto max-w-[43rem] border-green-700/50 border-2 p-8 rounded-2xl bg-emerald-50">
    <div className="text-center">
      <p className="font-mono font-semibold text-lg leading-8 text-emerald-700">Introducing Counter App</p>
      {privacy ? <p className="mt-3 text-lg font-bold leading-relaxed text-slate-400">Counter: {counter}</p> : <p className="mt-3 text-lg font-bold leading-relaxed text-slate-400">Counter: **** </p> }
    </div>

    <div className="mt-6 flex items-center justify-center gap-4">
      <button className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700" onClick={handleIncrement}>Increment</button>
      <button className="transform rounded-md border border-slate-200 bg-slate-300 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-200" onClick={handleDecrement}>Decrement</button>
      </div>
      <div className="mt-4">
      <input type='number' ref={text} placeholder='Enter a value' className='w-full border border-slate-200 px-4 py-3 rounded-md font-medium text-slate-900 transition-colors hover:bg-slate-50'/>
      </div>
      <div className="mt-4 flex items-center justify-center gap-4">
      <button className="transform rounded-md border bg-blue-600 border-slate-200 px-7 py-3 font-medium text-white transition-colors hover:bg-blue-700" onClick={handleAddition}>Addition</button>
      <button className="transform rounded-md bg-indigo-600/95 px-7 py-3 font-medium text-white transition-colors hover:bg-indigo-700" onClick={handleSubtract}>Subtract</button>    
    </div>
    <div className="mt-4 flex items-center justify-center gap-4">
      <button className="transform rounded-md bg-emerald-600 px-20 py-3 font-medium text-white transition-colors hover:bg-emerald-700" onClick={handletoggle}>Show / Hide</button>    
    </div>
    </div>
    </div>
    </>
  )
}

export default Header