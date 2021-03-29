import IconPlanets from '../../assets/Planets.png';
import IconAsteroids from '../../assets/Asteroids.png';
import IconStars from '../../assets/Stars.png';
import IconGalaxies from '../../assets/Galaxies.png';

import MercuryImage from '../../assets/Planet/Mercury.png';
import VenusImage from '../../assets/Planet/Venus.png';

import EarthImage from '../../assets/Planet/Earth.png';
import MarsImage from '../../assets/Planet/Mars.png';
import JupiterImage from '../../assets/Planet/Jupiter.png';
import SaturnImage from '../../assets/Planet/Saturn.png';
import UranusImage from '../../assets/Planet/Uranus.png';
import NeptuneImage from '../../assets/Planet/Neptune.png';

import Category from '../../components/Category';
import AppBar from './AppBar';
import Input from '../../components/Input';
import PlanetCard from '../../components/Cards/PlanetCard';
import Wallpaper from '../../components/Wallpaper';

const planets = [
  {name: 'Mercúrio', image: MercuryImage},
  {name: 'Vênus', image: VenusImage},
  {name: 'Terra', image: EarthImage},
  {name: 'Marte', image: MarsImage},
  {name: 'Júpter', image: JupiterImage},
  {name: 'Saturno', image: SaturnImage},
  {name: 'Urano', image: UranusImage},
  {name: 'Neturno', image: NeptuneImage},
];

const category = [
  {
    icon: IconPlanets,
    label: 'Planetas',
    colors: ['#5935FF', '#47408E'],
  },
  {
    icon: IconAsteroids,
    label: 'Asteróides',
    colors: ['#ff6cd9', '#ff2184'],
  },
  {
    icon: IconStars,
    label: 'Estrelas',
    colors: ['#01d4e4', '#009de0'],
  },
  {
    icon: IconGalaxies,
    label: 'Galáxias',
    colors: ['#f9c270', '#ffaa2b'],
  },
];

export {planets, category, Wallpaper, Category, AppBar, Input, PlanetCard};
