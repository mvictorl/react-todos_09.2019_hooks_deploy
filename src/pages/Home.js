import React, {useContext, useEffect} from "react"
import { Form } from "../components/Form"
import { Notes } from "../components/Notes"
import { FirebaseContext } from "../context/firebase/firebaseContext"
import { AlertContext } from "../context/alert/alertContext"
import { Loader } from "../components/Loader"
import { Alert } from "../components/Alert"

export const Home = () => {
  // const notes = new Array(3).fill("").map((_, i) => ({id: i, title: `Note ${i+1}`}))
  const {notes, loading, fetchNotes, removeNote} = useContext(FirebaseContext)
  const {hide} = useContext(AlertContext)

  // Hook = ComponentDidMount (once)
  useEffect(() => {
    fetchNotes()
    // eslint-disable-next-line
  }, [])

  // Hook = ComponentWillUnmount
  useEffect(() => {
    return () => {
      hide()
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Alert />
      <Form />
      <hr />
      {loading
        ? <Loader />
        : <Notes notes={notes} onRemove={removeNote} />
      }
    </>
  )
}
