import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { MdClose } from 'react-icons/md';
import style from '../ContactList/ContactList.module.css';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <>
      <p>
        {' '}
        <button
          type="button"
          className={style.form_btn_del}
          onClick={handleDelete}
        >
         <MdClose style={{width: '15px', color: 'red'}}/>
        </button>
        {name} : {number}
      </p>
    </>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};