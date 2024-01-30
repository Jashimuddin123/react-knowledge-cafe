
import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Blogs from './componenets/Blogs/Blogs'
import Bookmarks from './componenets/Booksmarks/Bookmarks'


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRed = time=>{
    const nrewReadingTime = readingTime +  time;
    setReadingTime(nrewReadingTime)
  }

  return (
    <>
     
     <Header></Header>
      
      <div className='md:flex w-9/12 mx-auto '>
      <Blogs 
       handleBookmark={handleBookmark }
       handleMarkAsRed={handleMarkAsRed}
       ></Blogs>
      <Bookmarks bookmarks ={bookmarks}
      readingTime={readingTime}></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
