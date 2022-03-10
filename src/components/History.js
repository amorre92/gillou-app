import React, { useState } from 'react'
import { View, Button, StyleSheet, Modal, FlatList, Text } from 'react-native'

const History = props => {

    const closeHandler = () => {
        props.onCloseHistory();
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.historyContainer}>
                <FlatList 
                    data={props.data}
                    renderItem={
                        itemData => (<Text>{itemData.item.value.date + ' ' + itemData.item.value.time + ' | ' + itemData.item.value.scoreNumber + ' - ' + itemData.item.value.scoreTitle }</Text>)
                    }/>
            </View>
            <View style={styles.button}>
                    <Button title='Fermer' onPress={closeHandler} color="#fc861d" />
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    historyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
    button: {
        width: '100%',
        justifyContent: 'center',
        padding: 10
    }
});
export default History