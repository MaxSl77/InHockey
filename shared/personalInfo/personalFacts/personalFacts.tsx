import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import playerMockData from '../mock/player.json';
import { personalFactsStyle } from '../../../styles/shared/personal/personalFacts';
import { Colors } from "../../../styles/const/colors";


const PersonalFacts = () => {
    const { personal_info, club_info } = playerMockData.player;

    const calculateCompletionPercentage = () => {
        let totalFields = 0;
        let filledFields = 0;

        for (const category in playerMockData.player) {
            if (Object.prototype.hasOwnProperty.call(playerMockData.player, category)) {
                //@ts-ignore
                for (const field in playerMockData.player[category]) {
                    //@ts-ignore
                    if (Object.prototype.hasOwnProperty.call(playerMockData.player[category], field)) {
                        totalFields++;
                        //@ts-ignore
                        if (playerMockData.player[category][field] !== '-') {
                            filledFields++;
                        }
                    }
                }
            }
        }

        return (filledFields / totalFields) * 100;
    };

    const completionPercentage = calculateCompletionPercentage();
    return (
        <ScrollView contentContainerStyle={personalFactsStyle.wrapper}>
            <View style={personalFactsStyle.personFactsWrapper}>
                <View style={personalFactsStyle.progressBar}>
                    <View
                        style={{
                            width: `${completionPercentage}%`,
                            backgroundColor: Colors.PRIMARY,
                            height: 25,
                            borderRadius: 20,
                            position: 'relative',
                        }}
                    />
                </View>
                <Text style={personalFactsStyle.percentage}>{`${completionPercentage.toFixed()}%`}</Text>
            </View>
            <View style={personalFactsStyle.personTextWrapper}>
                <Text style={[personalFactsStyle.text, personalFactsStyle.name]}>{personal_info.Name} Facts</Text>
            </View>
            {[
                { label: 'Date of Birth:', value: personal_info.date_of_birth },
                { label: 'Age:', value: personal_info.age },
                { label: 'Place of Birth:', value: personal_info.place_of_birth },
                { label: 'Nationality:', value: personal_info.nationality },
                { label: 'Youth Team:', value: club_info.youth_team },
                { label: 'Position:', value: club_info.position },
                { label: 'Height:', value: club_info.height },
                { label: 'Weight:', value: club_info.weight },
                { label: 'Shoots:', value: club_info.shoots },
                { label: 'Contract:', value: club_info.contract },
            ].map(({ label, value }, index) => (
                <View key={index} style={personalFactsStyle.personTextWrapper}>
                    <Text style={[personalFactsStyle.text, personalFactsStyle.bold]}>{label}</Text>
                    <Text style={personalFactsStyle.text}>{value}</Text>
                </View>
            ))}
        </ScrollView >
    );
};

export default PersonalFacts;
