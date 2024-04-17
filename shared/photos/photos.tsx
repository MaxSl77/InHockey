import React from 'react';
import { View, Image, FlatList } from 'react-native';
import { faker } from "@faker-js/faker";
import { photosStyle } from '../../styles/shared/photosStyle'

const Photos = () => {
    const generateFakeData = () => {
        let data = [];
        for (let i = 0; i < 100; i++) {
            data.push({
                _id: faker.string.uuid(),
                imageUrl: faker.image.avatar(),
            });
        }
        return data;
    };

    const renderPhoto = ({ item }) => (
        <View style={photosStyle.postContainer}>
            <Image source={{ uri: item.imageUrl }} style={photosStyle.image} />
        </View>
    );

    return (
        <View style={photosStyle.container}>
            <FlatList
                data={generateFakeData()}
                renderItem={renderPhoto}
                numColumns={4}
                keyExtractor={(item) => item._id}
            />
        </View>
    );
};

export default Photos
