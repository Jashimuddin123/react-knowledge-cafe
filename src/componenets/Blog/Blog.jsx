import { IoBookmark } from "react-icons/io5";
import PropTypes from 'prop-types'; 
const Blog = ({blog,handleBookmark})=> {

const {title,cover_img,posted_date,author,author_img,hashtag,reading_time} = blog;
    return (
        <div className='mb-20'>
        <img className='w-full rounded mb-6' src={cover_img}></img>

        <div className='flex justify-between'>
            <div className='flex gap-4'>
            <img className='rounded-full w-14 h-14' src={author_img}></img>
            <div>
                <h3 className='text-xl'>{author}</h3>
                <p>{posted_date}</p>
            </div>
            </div>
            <div>
             <span>{reading_time} min reed
             <button onClick={() =>handleBookmark(blog)} className="ml-2 mt-4"><IoBookmark /></button>
             </span>
            </div>
        </div>
             <h2>Title: {title}</h2>
             <p>{hashtag}</p>
        </div>
    );
};

Blog.PropTypes ={
    blog:PropTypes.object.isRequired
   
}

export default Blog;