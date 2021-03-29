import React from 'react';
import HomePageBackground from '../../assets/HomePage.png';
import {ImageBackground} from './styles';

const Wallpaper = ({children}) => {
  return (
    <ImageBackground source={HomePageBackground}>{children}</ImageBackground>
  );
};

export default Wallpaper;
