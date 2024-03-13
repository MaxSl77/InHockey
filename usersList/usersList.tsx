import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  Animated,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { faker } from "@faker-js/faker";
import { usersListStyle } from "../styles/usersList/usersListStyle";

const emojis = ["🏒", "🤵🏼", "🕵️‍♂️"];

const usersData = Array.from({ length: 30 }, (_, index) => {
  const includeEmoji = Math.random() < 0.5; // 50% chance
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const isOnline = Math.random() < 0.5;

  return {
    _id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    emoji: includeEmoji ? randomEmoji : null,
    isOnline,
  };
});

const ITEM_SIZE = 80;

export const UsersList = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={usersListStyle.wrapper}>
      <Animated.FlatList
        data={usersData}
        contentContainerStyle={{
          padding: 10,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];

          const inputRangeOpacity = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 0.7),
          ];

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });

          const opacityAnimatedValue = scrollY.interpolate({
            inputRange: inputRangeOpacity,
            outputRange: [1, 1, 1, 0],
          });

          return (
            <Animated.View
              style={{
                flexDirection: "row",
                padding: 10,
                marginBottom: 10,
                borderRadius: 18,
                backgroundColor: "rgb(255,255,255)",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                // how to take this styles out woth consts?
                shadowRadius: 20,
                shadowOpacity: 0.3,
                transform: [{ scale }],
                opacity: opacityAnimatedValue,
              }}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#000" />
              ) : (
                <>
                  <Image
                    source={{ uri: item.avatar }}
                    style={usersListStyle.loadingIndicator}
                    onLoadEnd={() => setIsLoading(false)}
                  />
                  {item.isOnline && (
                    <View style={usersListStyle.onlineIndicator}></View>
                  )}
                </>
              )}
              <View>
                <Text style={usersListStyle.firstName}>
                  {item.firstName} {item.emoji}
                </Text>
                <Text style={usersListStyle.lastName}>{item.lastName}</Text>
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};
