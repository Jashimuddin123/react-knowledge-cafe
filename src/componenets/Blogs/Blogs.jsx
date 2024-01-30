import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleBookmark}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3 ">
            <h1>All Blogs :{blogs.length}</h1>
            {
                blogs.map(blog =><Blog
                     key={blogs.id}
                      blog={blog}
                      handleBookmark ={handleBookmark}
                      ></Blog>)
            }
        </div>
    );
};

Blogs.PropTypes={
    handleBookmark:PropTypes.func.isRequired
}

export default Blogs;