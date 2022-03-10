import React, { useState } from 'react'
import { View, StyleSheet, Modal, FlatList, Text } from 'react-native'
import { Button, ListItem } from 'react-native-elements';

const History = props => {

    const closeHandler = () => {
        props.onCloseHistory();
    }

    const removeFromHistoryHandler = (historyId) => {
        props.onRemoveFromHistory(historyId);
    }

    const deleteAllHandler = () => {
        props.onDeleteAll();
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.historyContainer}>
                <FlatList
                    data={props.data}
                    renderItem={
                        itemData => (
                            <ListItem bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Title>{itemData.item.value.scoreNumber + ' - ' + itemData.item.value.scoreTitle}</ListItem.Title>
                                    <ListItem.Subtitle>{itemData.item.value.date + ' - ' + itemData.item.value.time}</ListItem.Subtitle>
                                </ListItem.Content>
                                <Button
                                    icon={{
                                        name: 'trash',
                                        type: 'font-awesome',
                                        size: 20,
                                        color: 'red'
                                    }}
                                    buttonStyle={{ backgroundColor: 'white' }}
                                    onPress={() => removeFromHistoryHandler(itemData.item.key)} />
                            </ListItem>)
                    } />
            </View>
            <View style={styles.button}>
                <Button title='Fermer' onPress={closeHandler} buttonStyle={{ backgroundColor: '#fc861d', width: 200 }} />
                <Button title='Supprimer session' onPress={deleteAllHandler} buttonStyle={{ backgroundColor: 'red' }} />
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    historyContainer: {
        flex: 1
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
    button: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems:'center',
        padding: 10
    }
});
export default History