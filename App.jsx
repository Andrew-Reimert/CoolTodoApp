/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  const initialTasks = [
  'Do laundry',
  'Go to gym',
  'Walk dog'
];

const addTask = (taskText) => {
  setTasks([...tasks, taskText]);
};


const [tasks, setTasks] = useState(initialTasks);
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;