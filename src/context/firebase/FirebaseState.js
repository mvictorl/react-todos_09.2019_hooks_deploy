import React, { useReducer } from "react"
import axios from "axios"
import { FirebaseContext } from "./firebaseContext"
import { firebaseReducer } from "./firebaseReducer"
import {
  SHOW_LOADER,
  HIDE_LOADER,
  ADD_NOTE,
  REMOVE_NOTE,
  FETCH_NOTES,
} from "../types"

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(firebaseReducer, initialState)

  const showLoader = () => dispatch({ type: SHOW_LOADER })

  const hideLoader = () => dispatch({ type: HIDE_LOADER })

  const fetchNotes = async () => {
    try {
      showLoader()
      const res = await axios.get(`${url}/notes.json`)
      if (res.data) {
        const payload = Object.keys(res.data).map((key) => {
          return {
            ...res.data[key],
            id: key,
          }
        })
        dispatch({ type: FETCH_NOTES, payload })
      }
    } catch (e) {
      throw new Error(e.message)
    } finally {
      hideLoader()
    }
  }

  const addNote = async (title) => {
    const note = {
      title,
      date: new Date().toJSON(),
    }
    try {
      showLoader()
      const res = await axios.post(`${url}/notes.json`, note)
      const payload = {
        ...note,
        id: res.data.name,
      }
      dispatch({ type: ADD_NOTE, payload })
    } catch (e) {
      throw new Error(e.message)
    } finally {
      hideLoader()
    }

    // dispatch({type: ADD_NOTE, note})
  }

  const removeNote = async (id) => {
    try {
      showLoader()
      await axios.delete(`${url}/notes/${id}.json`)
      dispatch({
        type: REMOVE_NOTE,
        payload: id,
      })
    } catch (e) {
      throw new Error(e.message)
    } finally {
      hideLoader()
    }
  }

  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        hideLoader,
        fetchNotes,
        addNote,
        removeNote,
        notes: state.notes,
        loading: state.loading,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}
