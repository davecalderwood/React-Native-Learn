import React, { Component } from 'react'
import { View, StyleSheet, Text, AppRegistry } from 'react-native'

export default Tabs = () => {
        return (
            <View style={{flex: 2}}>
                <Text style={styles.tabs}>My Tickets</Text>
                <Text style={styles.tabs}>Buy Tickets</Text>
                <Text style={styles.tabs}>Upgrade Seat</Text>
                <Text style={styles.tabs}>Digital Wallet</Text>
                <Text style={styles.tabs}>Stars Gear</Text>
                <Text style={styles.tabs}>Explore Arena</Text>
            </View>
        )
}

