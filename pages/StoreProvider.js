import { persistor, store } from '@/lib/store';
import { CircularProgress } from '@mui/material';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export default function StoreProvider({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store;
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={<CircularProgress />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
