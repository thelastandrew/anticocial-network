import { createContext } from 'react';

export const StoreContext = createContext(null);

const Provider = (props) => (
  <StoreContext.Provider value={props.store}>
    {props.children}
  </StoreContext.Provider>
);

export default Provider;
