import { PlaceList } from '../components/place-list';
import { useParams } from 'react-router-dom';

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
    imageUrl: '/images/places/place-2.jpg',
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
  const { uid } = useParams();

  return <PlaceList items={items.filter((item) => item.creator === uid)} />;
};
