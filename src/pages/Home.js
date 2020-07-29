import React, {useContext, useEffect} from "react"
import { Form } from "../components/Form"
import { Notes } from "../components/Notes"
import { FirebaseContext } from "../context/firebase/firebaseContext"
import { Loader } from "../components/Loader"

export const Home = () => {
  // const notes = new Array(3).fill("").map((_, i) => ({id: i, title: `Note ${i+1}`}))
  const {notes, loading, fetchNotes, removeNote} = useContext(FirebaseContext)

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <>
      <Form />
      <hr />
      {loading
        ? <Loader />
        : <Notes notes={notes} onRemove={removeNote} />
      }
    </>
  )
}
