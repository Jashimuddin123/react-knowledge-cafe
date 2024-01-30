
import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Blogs from './componenets/Blogs'
import Bookmarks from './componenets/Bookmarks'


function App() {
  const [bookmarks, setMarks] = useState([])

  const handleAddToBookmark = blog=>{
    console.log('this is blog section');
  }


  return (
    <>
     
     <Header></Header>
      
      <div className='md:flex w-9/12 mx-auto '>
      <Blogs 
       handleAddToBookmark={handleAddToBookmark }
       ></Blogs>
      <Bookmarks></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
