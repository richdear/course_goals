import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import GaolInput from './components/GoalInput';
import GaolItem from './components/GoalItem';


export default function App() {

  const [courseGoals, setCourseGaols] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setCourseGaols(currentCourseGoals => [...currentCourseGoals,
    {
      id: Math.floor(Math.random() * 100000).toString(), value: enteredGoal
    }
    ]);
    setIsAddMode(false);
  }

  const cancelHandler=()=>{
    setIsAddMode(false);
  }


  const onDeleteGoalHandler = (goalId) => {

    setCourseGaols(currentCourseGoals =>
      currentCourseGoals.filter((goal) => {
        console.log(goal);
        return goal.id != goalId
      })
    )

  }

  return (

    <View style={styles.screen}>

      <GaolInput addGoalHandler={addGoalHandler} visible={isAddMode} cancelHandler={cancelHandler}/>
      <Button title="Add Goal" onPress={() => setIsAddMode(true)} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={
          itemData => (
            <GaolItem title={itemData.item.value} onDelete={onDeleteGoalHandler} id={itemData.item.id} />
          )}
      />
    </View>

  );
}

const styles = StyleSheet.create({

  screen: {
    padding: 20,
  },





})

