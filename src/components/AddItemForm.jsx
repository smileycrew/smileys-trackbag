import { useRef, useState } from "react"
import Button from "./Button"

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("")
  const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()

    // basic validation aka guard statement
    if (!itemText) {
      alert("Item can't be empty")
      inputRef.current.focus()
      return
    }

    onAddItem(itemText)
    setItemText("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        autoFocus
        onChange={(event) => setItemText(event.target.value)}
        ref={inputRef}
        value={itemText}
      />
      <Button>Add to list</Button>
    </form>
  )
}
