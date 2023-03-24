import { contactsReducer } from './contacts-reducers';
import { menuReducer } from './menu-reducer';

export const reducers = {
  menu: menuReducer,
  contacts: contactsReducer,
};
