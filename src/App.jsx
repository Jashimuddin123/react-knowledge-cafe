
import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Blogs from './componenets/Blogs/Blogs'
import Bookmarks from './componenets/Booksmarks/Bookmarks'


function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    
  }

  return (
    <>
     
     <Header></Header>
      
      <div className='md:flex w-9/12 mx-auto '>
      <Blogs 
       handleBookmark={handleBookmark }
       ></Blogs>
      <Bookmarks bookmarks ={bookmarks}></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
