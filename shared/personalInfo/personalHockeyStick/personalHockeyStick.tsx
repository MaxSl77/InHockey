import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { personalHockeyStick } from '../../../styles/shared/personal/personalHockeyStick/personalHockeyStick';
import { Colors } from "../../../styles/const/colors";
import ItemsList from './ItemsList/ItemsList';
import { ItemType } from './Item/Item';

const items: ItemType[] = [
    { text: "Season" },
    { text: "Team" },
    { text: "Games" },
    { text: "Points" },
    { text: "Goal" },
    { text: "Pass" },
    { text: "Penalty" }
];

const PersonalHockeyStick = () => {

    return (
        <ScrollView contentContainerStyle={personalHockeyStick.wrapper}>
            <ItemsList items={items} />
        </ScrollView >
    );
};

export default PersonalHockeyStick;
