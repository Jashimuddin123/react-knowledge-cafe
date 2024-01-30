

import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks,readingTime}) => {
  return (
    <div className='md:w-1/3 bg'>
    <div >
          <h2 className='text-white border border-red-600 bg-green-700 rounded w-full text-white mx-10 mb-6 p-4 text-center mt-4 text-2xl'>ReadingTime: {readingTime}</h2>
                </div>

       <div  className=" w-full bg-black mx-10 p-6 ">
       <h1 className='text-3xl text-white underline text-center  '>Bookmark:{bookmarks.length}</h1>
                 {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                 }
       </div>
               
        </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks

