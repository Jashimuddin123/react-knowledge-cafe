

import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks,readingTime}) => {
  return (
    <div className="md:w-1/3  bg-black mx-16 mt-6 text-center ">
        <div>
            <h2 className='text-yellow-600 text-white text-3xl'>ReadingTime: {readingTime}</h2>
        </div>
                 <h1 className='text-3xl text-white px-8 underline'>Bookmark:{bookmarks.length}</h1>
                 {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                 }
        </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks