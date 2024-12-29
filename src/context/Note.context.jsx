import { createContext } from 'react';

export const NoteContext = createContext(0);

export default function NoteProvider({ children }) {
  return (
    <>
      <NoteContext.Provider value={{}}>{children}</NoteContext.Provider>
    </>
  );
}
