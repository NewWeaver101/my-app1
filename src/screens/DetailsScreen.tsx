import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize: 24}}>This is, 👤 Details Screen 📋</Text>
            <Button
                title="Go Back Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}