import { useState } from "react";


const Home = () => {
    const [blogs, setBlogs] = useState ([
        {title: 'min hemsida', body: 'loremipsum...', author: 'mario', id: 1},
        {title: 'välkommen till festen', body: 'loremipsum...', author: 'måns', id: 2},
        {title: 'tips o tricks', body: 'loremipsum...', author: 'peter', id: 3}
    ]);
    return (  
        <div className="home">
       {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
        <h2>{ blog.title}</h2>
        <p>written by {blog.author }</p>
       </div>
       ))}
        </div>
    );
}
 
export default Home;