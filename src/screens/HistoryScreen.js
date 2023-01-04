import React, { useState } from 'react'
import { View, StyleSheet, Modal, FlatList, Text } from 'react-native'
import { Button, ListItem } from 'react-native-elements';

function HistoryScreen({onRemoveFromHistory, onDeleteAll, data}) {

    const removeFromHistoryHandler = (historyId) => {
        onRemoveFromHistory(historyId);
    }

    const deleteAllHandler = () => {
        onDeleteAll();
    }

    return (
        <View style={styles.historyContainer}>
                <FlatList
                    data={data}
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
                    <Button title='Supprimer session' onPress={deleteAllHandler} buttonStyle={{ backgroundColor: 'red' }} />
            </View>
    );
}

export default HistoryScreen

const styles = StyleSheet.create({
    historyContainer: {
        flex: 1, 
        paddingTop: 10,
        backgroundColor: 'white'
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