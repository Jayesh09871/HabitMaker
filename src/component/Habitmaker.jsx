import React, { useState } from 'react';
import './Habitmaker.css';

function Habitmaker() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    what: '',
    where: '',
    why: '',
    when: ''
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (form.what && form.where && form.why && form.when) {
      setTasks([...tasks, form]);
      setForm({ what: '', where: '', why: '', when: '' });
    } else {
      alert('Please fill all fields');
    }
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="Habitmaker">
      <input name="what" value={form.what} onChange={handleInputChange} placeholder="What to do" />
      <input name="where" value={form.where} onChange={handleInputChange} placeholder="Where to do" /><br/>
      <input name="why" value={form.why} onChange={handleInputChange} placeholder="Why to do" />
      <input name="when" type="date" value={form.when} onChange={handleInputChange} />

      <button onClick={handleSave}>Save</button>

      {tasks.length === 0 ? (
        <p><b>You have no tasks</b></p>
        ) : (
          tasks.map((task, index) => (
            <div className='hello' key={index}>
              <p>What to do: {task.what}</p>
              <p>Where to do: {task.where}</p>
              <p>Why to do: {task.why}</p>
              <p>When to do: {task.when}</p>
              <button className='btn' onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))
        )}
     </div>
   );
}

export default Habitmaker;