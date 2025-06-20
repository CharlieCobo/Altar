import { create } from 'zustand';

interface State {
  open: boolean;
  toggle: (value?: boolean) => void;
}

export const useMenu = create<State>(set => ({
  open: false,
  toggle: (value?: boolean) => set(state => ({ open: value ?? !state.open })),
}));
