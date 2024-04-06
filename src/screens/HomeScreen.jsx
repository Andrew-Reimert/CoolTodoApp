import {
    Button,
    Text,
    View
} from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';


export default function HomeScreen({ navigation }) {
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
        <MainLayout>
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
            <SafeAreaView>
                <ToDoList tasks={tasks} />
                <ToDoForm addTask={addTask} tasks={tasks} />
            </SafeAreaView>
        </MainLayout>
    );
}