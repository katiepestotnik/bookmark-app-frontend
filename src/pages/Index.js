//import dependencies
import { useState } from "react";
import {Link} from "react-router-dom"

//create a function that will take in props
function Index(props) {
    //create state to hold bookmark data
    const [newBookmark, setBookmark] = useState({
        title: "",
        url: "",
  });
//   create handleChange function for bookmarks
  const handleChange = (event) => {
      setBookmark({ ...newBookmark, [event.target.name]: event.target.value });
  };

  //create handle submit function for bookmarks
  //BONUS lab feature - reset bookmark input field in "form" 
  //to clear after creating the new bookmark
  const handleSubmit = (event) => {
    event.preventDefault(); //prevent refresh
    props.createBookmark(newBookmark);
    setBookmark({
        title: "",
        url: "",
    });
  };

 //next, loaded fxn
  const loaded = () => {
    return <section className="container">{props.bookmark.map((bookmark) => (
      <div key={bookmark._id}>
        <Link to={`/bookmark/${bookmark._id}`} className="container-links"><h1>{bookmark.title}</h1></Link>
      </div>
      ))
      }
      </section>
  };

  //loading function
  const loading = () => {
    return <h1>One moment, loading...</h1>;
  };

  //want to return the title and url of new bookmark
  return (
    <section className="full-page-style">
      <form onSubmit={handleSubmit}>
        <input
          className="input-style"
          type="text"
          value={newBookmark.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          className="input-style"
          type="text"
          value={newBookmark.url}
          name="url"
          placeholder="url"
          onChange={handleChange}
        />
    
        <input className="button-style"type="submit" value="Add Bookmark" />
      </form>
      {props.bookmark ? loaded() : loading()}
    </section>
  );
}

//export
export default Index;
