import { Colors } from './styles';

const { primary, theme } = Colors;

export const States = [
  'Wp Kuala Lumpur',
  'Johor',
  'Kedah',
  'Kelantan',
  'Melaka',
  'Negeri Sembilan',
  'Pahang',
  'Penang',
  'Perak',
  'Perlis',
  'Sabah',
  'Sarawak',
  'Selangor',
  'Terengganu',
  'Wp Labuan',
  'Wp Putrajaya',
];

export const HeaderScreenOptions = {
  headerStyle: {
    backgroundColor: theme,
  },
  headerTintColor: primary,
  headerTransparent: true,
  headerTitle: '',
  headerLeftContainerStyle: {
    paddingLeft: 20,
  },
  headerShadowVisible: false,
};
