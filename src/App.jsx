
import './App.css'
import Header from './Header/Header'
import Blogs from './componenets/Blogs'
import Bookmarks from './componenets/Bookmarks'


function App() {


  return (
    <>
     
     <Header></Header>
      
      <div className='md:flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
