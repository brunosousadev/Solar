import React from 'react';
import {Label, Container, TouchableOpacity} from './stlyes';

function MyTabBar({state, descriptors, navigation, IconScreen}) {
  const renderLabel = (label, isFocused) => {
    if (isFocused) {
      return <Label>{isFocused ? label : ''}</Label>;
    }
    return null;
  };

  const renderIcon = name => {
    const Icon = IconScreen[name];
    return Icon ? <Icon width={24} height={24} /> : null;
  };

  return (
    <Container>
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
            onLongPress={onLongPress}>
            {renderIcon(route.name)}
            {renderLabel(label, isFocused)}
          </TouchableOpacity>
        );
      })}
    </Container>
  );
}
export default MyTabBar;
