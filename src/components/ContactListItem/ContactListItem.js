import React from 'react';
import { Contact, Button } from './ContactList.styles';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContactThunk } from '../../redux/operations/contactsThunk';
import { Loader } from '../Loader/Loader';

export function ContactListItem({ id, name, phone }) {
  const dispatch = useDispatch();
  const selectIsLoading = state => state.contacts.isLoading;
  const isLoading = useSelector(selectIsLoading);

  return (
    <Contact>
      {name} - {phone}
      <Button onClick={() => dispatch(deleteContactThunk(id))}>
        {isLoading ? <Loader /> : 'Delete'}
      </Button>
    </Contact>
  );
}