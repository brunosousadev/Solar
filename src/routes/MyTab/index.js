import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function MyTabBar({state, descriptors, navigation, IconScreen}) {
  const renderLabel = (label, isFocused) => {
    if (isFocused) {
      return <Text style={styles.Label}>{isFocused ? label : ''}</Text>;
    }
    return null;
  };

  const renderIcon = name => {
    const Icon = IconScreen[name];
    return <Icon width={24} height={24} />;
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
            {renderIcon(route.name)}
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
    marginTop: 5,
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
