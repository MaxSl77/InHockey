import React, { useRef, useState, useEffect } from "react";
import {
    View,
    Image,
    Text,

    ActivityIndicator,
} from "react-native";
import { messageItemStyle } from '../../../../styles/messages/messageItem/messageItemStyle'

export type MessageType = {
    _id: string;
    avatar: string;
    firstName: string;
    lastName: string;
    email: string;
    emoji?: string | null;
    message: string;
    time: string;
    isOnline: boolean;
}

export interface MessageItemProps {
    loading: boolean,
    item: MessageType,
    setIsLoading: (loading: boolean) => void;
}

export const MessageItem = (props: MessageItemProps) => {
    const { item, loading, setIsLoading } = props;

    const handleLoadEnd = () => {
        setIsLoading(false)
    }

    return (
        <View style={messageItemStyle.wrapper}>
            <View style={messageItemStyle.personWrapper}>
                {loading ? (
                    <ActivityIndicator size="small" color="#000" />
                ) : (
                    <>
                        <Image
                            source={{ uri: item.avatar }}
                            style={messageItemStyle.loadingIndicator}
                            onLoadEnd={handleLoadEnd}
                        />
                        {item.isOnline && (
                            <View style={messageItemStyle.onlineIndicator}></View>
                        )}
                    </>
                )}
                <View style={messageItemStyle.nameWrapper}>
                    <Text style={messageItemStyle.firstName}>
                        {item.firstName}
                    </Text>
                    <Text style={messageItemStyle.lastName}>{item.lastName} {item.emoji}</Text>
                </View>
            </View>

            <View style={messageItemStyle.messageWrapper}>
                <Text style={messageItemStyle.message}>{item.message}</Text>
                <Text style={messageItemStyle.time}>{item.time}</Text>
            </View>
        </View>
    );
};
