import { PlaceList } from '../components/place-list';

const items = [
  {
    id: 'p1',
    imageUrl: '/images/places/place-1.jpg',
    name: 'City',
    description: 'Very big city',
    address: 'Adress',
    creator: 'u1',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
  },
  {
    id: 'p2',
    imageUrl: '/images/places/place-1.jpg',
    name: 'City',
    description: 'Very big city',
    address: 'Adress',
    creator: 'u2',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
  },
];

export const UserPlacesPage = () => {
  return <PlaceList items={items} />;
};
