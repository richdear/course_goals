import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Button, Modal } from 'react-native';

export default function GaolInput({ placeholder = "Course goal", addGoalHandler, visible, cancelHandler }) {

    const [enteredGoal, setEnteredGoal] = useState('');

    const onAddGoal = () => {
        addGoalHandler(enteredGoal);
        setEnteredGoal('');
    }

    const goalInputHandler = (enteredGoal) => {
        setEnteredGoal(enteredGoal);
        console.log(enteredGoal);
    }

    const onCancelHandler = () => {
        cancelHandler();
        setEnteredGoal('');
    }

    return (<>
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal"
                    style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button title="Add" color={'blue'} onPress={onAddGoal} style={styles.addButton} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" color={'gray'} onPress={onCancelHandler} style={styles.addButton} />
                    </View>
                </View>

            </View>
        </Modal>
    </>)
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        borderBottomColor: "black",
        width: '60%',
        borderWidth: 1,
        padding: 10,
        marginBottom: 15
    },

    addButton: {
        margin: 15,
        padding: 15,
        color: 'red'
    },

    modal: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonsContainer: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    button: {
        width: '40%'
    }
})