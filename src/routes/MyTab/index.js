import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Forward from '../../assets/Forward.png';

function MyTabBar({state, descriptors, navigation}) {
  const renderLabel = (label, isFocused) => {
    if (isFocused) {
      return <Text style={styles.Label}>{isFocused ? label : ''}</Text>;
    }
    return null;
  };

  return (
    <View style={styles.Container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.TouchableOpacity}>
            <Image source={Forward} style={styles.Icon} />
            {renderLabel(label, isFocused)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    backgroundColor: '#151515',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Label: {
    color: '#ffff',
    marginTop: 10,
  },
  TouchableOpacity: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Icon: {
    width: 16,
    height: 16,
  },
});
export default MyTabBar;
