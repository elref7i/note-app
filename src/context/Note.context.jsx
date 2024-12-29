import { createContext, useContext } from 'react';
import { UserContext } from './User.context';
import axios from 'axios';

export const NoteContext = createContext(0);

// eslint-disable-next-line react/prop-types
export default function NoteProvider({ children }) {
  const { token } = useContext(UserContext);
  async function getNote() {
    try {
      const options = {
        url: 'https://note-sigma-black.vercel.app/api/v1/notes',
        method: 'GET',
        headers: {
          token: `3b8ny__${token}`,
        },
      };
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <NoteContext.Provider value={{ getNote }}>
        {children}
      </NoteContext.Provider>
    </>
  );
}
