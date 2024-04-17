import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { itemsList } from '../../../../styles/shared/personal/personalHockeyStick/itemsList';
import Item, { ItemType } from '../Item/Item'

type ItemsListProps = {
    items: ItemType[]
}

const ItemsList = (props: ItemsListProps) => {

    return (
        <ScrollView style={itemsList.container}>
            <View >
                {props.items.map((item, index) => (
                    <Item key={`${item.text}.${index}`} text={item.text} />
                ))}
            </View>
        </ScrollView>

    );
};

export default ItemsList;
