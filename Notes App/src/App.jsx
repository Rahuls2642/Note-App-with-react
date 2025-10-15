import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [title,setTitle]=useState('')
const[details,setDetails]=useState('')
const [notes,setNotes]=useState([])
const submitHandler=(e)=>{
e.preventDefault()
 if (title.trim() === '' || details.trim() === '') {
        // Optional: Show an alert or message to the user
        alert('Please fill in both the Title and the Details before submitting.');

        // 3. Stop the function execution (preventing the note from being added)
        return;
    }
const newNotes=[...notes]
newNotes.push({title,details})
setNotes(newNotes)
console.log(notes)
setDetails('')
setTitle('')
}
const inputHandler=(e)=>{
  setTitle(e.target.value)
}
const detailsHandler=(e)=>{
  setDetails(e.target.value)
}
const deleteNote=(idx)=>{
const newNotes=[...notes]
newNotes.splice(idx,1)
setNotes(newNotes)
}
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-amber-50 p-4 md:p-8">
  <form
    onSubmit={(e) => submitHandler(e)}
    className="bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-xl space-y-5 max-w-lg mx-auto mb-12 border border-gray-100"
  >
    <h2 className="text-3xl font-bold text-gray-800 border-b pb-3 mb-4 text-center">
      Add Notes 📝
    </h2>

    <input
      onChange={(e) => inputHandler(e)}
      value={title}
      placeholder="Title"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg placeholder-gray-500 transition-all duration-200"
    />

    <textarea
      onChange={(e) => detailsHandler(e)}
      value={details}
      placeholder="Note details..."
      className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base placeholder-gray-500 resize-y transition-all duration-200"
    ></textarea>

    <button
      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 active:bg-blue-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50"
    >
      Submit
    </button>
  </form>

  {/* Notes Section */}
  <div className="show-notes grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {notes.map((elem, idx) => (
      <div
        key={idx}
        className="relative p-5 rounded-2xl shadow-md border border-amber-200 bg-white/70 
                   backdrop-blur-sm hover:shadow-xl transition-all duration-300 
                   hover:-translate-y-1 hover:bg-white group"
        style={{
          backgroundImage: "url('/src/assets/image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl">
          <h3 className="text-lg font-semibold text-black mb-2 border-b border-amber-300 pb-1">
            {elem.title}
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4 line-clamp-4">
            {elem.details}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500 italic">Note #{idx + 1}</span>
            <button
              onClick={() => deleteNote(idx)}
              className="px-3 py-1.5 rounded-full text-sm font-medium text-white 
                         bg-red-500 hover:bg-red-600 active:bg-red-400 
                         transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

     
    </>
  )
}

export default App
