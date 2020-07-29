import { SHOW_LOADER, HIDE_LOADER, FETCH_NOTES, ADD_NOTE, REMOVE_NOTE } from "../types"


const handlers = {
  [SHOW_LOADER]: state => ({...state, loading: true}),
  [HIDE_LOADER]: state => ({...state, loading: false}),
  [FETCH_NOTES]: (state, {payload}) => ({
    ...state,
    notes: payload
  }),
  [ADD_NOTE]: (state, {payload}) => ({
    ...state,
    notes: [...state.notes, payload]
  }),
  [REMOVE_NOTE]: (state, id) => ({
    ...state,
    note: state.notes.filter(note => note.id === id)
  }),
  DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}