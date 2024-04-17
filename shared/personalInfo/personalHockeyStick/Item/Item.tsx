import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { item } from '../../../../styles/shared/personal/personalHockeyStick/item';

export type ItemType = {
    text: string
}

const Item = (props: ItemType) => {
    return (
        <Text style={item.text}>
            {props.text}
        </Text>
    );
};

export default Item;
