import './place-item.css';
import Card from '../../shared/components/ui-elements/card';
import Button from '../../shared/components/form-elements/button';
import { useState } from 'react';
import Modal from '../../shared/components/ui-elements/modal';

export const PlaceItem = (props) => {
  const { id, image, name, description, address, creatorId, coordinates } =
    props;

  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        contentClass={'place-item__modal-content'}
        footerClass={'place-item__modal-actions'}
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className='map-container'>
          <h2>map place</h2>
        </div>
      </Modal>
      <li className='place-item'>
        <Card className='place-item__content'>
          <div className='place-item__image'>
            <img src={image} alt={name} />
          </div>
          <div className='place-item__info'>
            <h2>{name}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className='place-item__actions'>
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  );
};
