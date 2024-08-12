import React from 'react';
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen, faCheck, } from "@fortawesome/free-solid-svg-icons";

function TodoHeader() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : `${today.getMonth() + 1}`;
  const date = today.getDate();

  return (
    <div className='todo-header'>
      <div className='todo-title'>Today's Tasks</div>
      <div className='todo-date'>{`${year}-${month}-${date}`}</div>
    </div>
  )
}

function TodoInput({ onInput, tasks }) {
  const taskInputRef = useRef();
  function addList(event) {
    event.preventDefault();
    onInput(tasks, taskInputRef.current.value);
    taskInputRef.current.value = '';
  }

  return (
    <div className='todo-input-container'>
      <form onSubmit={addList}>
        <input className='todo-input' ref={taskInputRef} type='text' placeholder='Please type your task...'></input>
      </form>
    </div>
  );
}

function TodoItems({ tasks, onUpdate }) {
  const checkRefs = useRef([]);
  const inputRefs = useRef([]);
  const itemRefs = useRef([]);

  function deleteList(currentIndex) {
    onUpdate(tasks.filter((el, index) => {
      return index !== currentIndex;
    }));
  }

  function handleCheck(i) {
    const checkRef = checkRefs.current[i];
    let checkColor = checkRef.style.color;

    if (checkColor === 'black') {
      checkRef.style.color = 'white';
    }
    else {
      checkRef.style.color = 'black';
    }
  }

  function modifyListReady(i) {
    const inputRef = inputRefs.current[i];
    const itemRef = itemRefs.current[i];
    inputRef.style.display = 'block';
    inputRef.value = itemRef.innerText;
    itemRef.style.display = 'none';
  }

  function modifyList(i) {
    const nextTasks = tasks.slice();
    const inputRef = inputRefs.current[i];
    const itemRef = itemRefs.current[i];
    
    nextTasks[i] = inputRef.value;
    onUpdate(nextTasks);
    inputRef.style.display = 'none';
    itemRef.style.display = 'block';
  }

  const todoList = tasks.map((el, idx) => {
    return (
      <div key={idx} className='todo-item-container'>
        <div ref={div => checkRefs.current[idx] = div} onClick={() => { handleCheck(idx) }} className='todo-check'>
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <div ref={div => itemRefs.current[idx] = div} className='todo-item'>
          {el}
        </div>
        <form onSubmit={(event) => {
          event.preventDefault();
          modifyList(idx)
        }}>
          <input ref={input => inputRefs.current[idx] = input} type='text' className='todo-modify-input'></input>
        </form>
        <div className='todo-buttons'>
          <div onClick={() => { modifyListReady(idx) }} className='todo-modify'>
            <FontAwesomeIcon icon={faPen} />
          </div>
          <div onClick={() => { deleteList(idx) }} className='todo-delete'>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
      </div>

    );
  })

  return (
    <div className='todo-items'>
      {todoList}
    </div>
  )
}

export default function Todolist() {
  const [tasks, setTasks] = useState([]);


  function handleAdd(tasks, currentTask) {
    const nextTasks = [...tasks, currentTask];
    setTasks(nextTasks);
  }

  function handleUpdate(tasks) {
    const newTasks = tasks.slice();
    setTasks(newTasks)
  }

  return (
    <div className='todo-list-container'>
      <TodoHeader />
      <TodoInput onInput={handleAdd} tasks={tasks} />
      <TodoItems onUpdate={handleUpdate} tasks={tasks} />
    </div>
  );
}