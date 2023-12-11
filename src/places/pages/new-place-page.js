import Input from '../../shared/components/form-elements/input';
import './new-place-page.css';

export const NewPlace = () => {
  return (
    <form className='place-form'>
      <Input element='input' type='text' label='Title' />
    </form>
  );
};
