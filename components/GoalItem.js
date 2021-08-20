import React from 'react';
import { Text, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';

export default function GaolItem({ id, title, onDelete }) {
    return (<>
        <TouchableOpacity activeOpacity={0.7} onPress={() => onDelete(id)}>
            <Text style={styles.listItem} >{id} {title}</Text>
        </TouchableOpacity>

    </>)
}

const onPressHandler = () => {
    console.log("Item Pressed");
}

const styles = StyleSheet.create({
    listItem: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#ccc',
        marginVertical: 10,
        padding: 10,
    }
})