'use client';
import { Provider } from 'react-redux';
import { createStore } from '@/stores/store';

const store = createStore();

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
