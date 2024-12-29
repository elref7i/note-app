import { createContext, useContext } from 'react';
import { UserContext } from './User.context';
import axios from 'axios';

export const NoteContext = createContext(0);

export default function NoteProvider({ children }) {
  return (
    <>
      <NoteContext.Provider value={{}}>{children}</NoteContext.Provider>
    </>
  );
}
