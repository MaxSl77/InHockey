import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { faker } from "@faker-js/faker";
import { homeStyles } from '../../styles/shared/homeStyles'
const like = require('../../assets/like.png')
const comment = require('../../assets/comment.png')
const repost = require('../../assets/repost.png')
const addFried = require('../../assets/add_friend.png')




const Home = () => {
    const generateFakeData = () => {
        let data = [];
        for (let i = 0; i < 10; i++) {
            const timestamp = faker.date.recent();
            data.push({
                _id: faker.string.uuid(),
                imageUrl: faker.image.avatar(),
                username: faker.internet.userName(),
                userAvatar: faker.image.avatar(),
                likes: faker.number.int({ min: 1, max: 1000 }),
                comments: faker.number.int({ min: 1, max: 100 }),
                timestamp: timestamp.toLocaleString(), // Format timestamp
            });
        }
        return data;
    };

    const renderPost = ({ item }) => (
        <View style={homeStyles.postContainer}>
            <View style={homeStyles.header}>
                <View>
                    <View style={homeStyles.headerUser}>
                        <Image source={{ uri: item.userAvatar }} style={homeStyles.avatar} />
                        <View>
                            <Text style={homeStyles.username}>{item.username}</Text>
                            <Text style={homeStyles.timestamp}>{item.timestamp}</Text>
                        </View>
                    </View>
                </View>
                <Image source={addFried} style={homeStyles.icon} />
            </View>
            <Image source={{ uri: item.imageUrl }} style={homeStyles.image} />
            <View style={homeStyles.postDetails}>
                <View style={homeStyles.likesCommentsContainer}>
                    <View style={homeStyles.likesCommentsContainerFlex}>
                        <View>
                            <Image source={like} style={homeStyles.icon} />
                            <Text style={homeStyles.iconText}>{item.likes}</Text>
                        </View>
                        <View>
                            <Image source={comment} style={homeStyles.icon} />
                            <Text style={homeStyles.iconText}>{item.comments}</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={repost} style={homeStyles.icon} />
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <View style={homeStyles.container}>
            <FlatList
                data={generateFakeData()}
                renderItem={renderPost}
                keyExtractor={(item) => item._id}
            />
        </View>
    );
};

export default Home;
