import { configureStore } from '@reduxjs/toolkit'
import task from './slices/task'

export const store = configureStore({
  reducer: {
    task
  },
})

store.subscribe(() => {
  localStorage.setItem('tasks', JSON.stringify(store.getState().task));
});

