
import PropTypes from 'prop-types'

const Bookmark = ({bookmark})=> {
    const {title} = bookmark;
  return (
    <div className='bg-slate-300 mt-4 rounded-lg p-4'>
    <h3 className='text-2xl'>{title}</h3>
    </div>
  )
}

Bookmark.propTypes = {
 bookmark:PropTypes.object
}

export default Bookmark