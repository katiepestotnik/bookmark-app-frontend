//import dependencies
import { useState } from "react";
import {Link} from "react-router-dom"

//create a function that will take in props
function Index(props) {
    //create state to hold bookmark data
    const [newBookmark, setNewBookmark] = useState({
        title: "",
        url: "",
  });
//   create handleChange function for bookmarks
  const handleChange = (event) => {
      setNewBookmark({ ...newBookmark, [event.target.name]: event.target.value });
  };

  //create handle submit function for bookmarks
  //BONUS lab feature - reset bookmark input field in "form" 
  //to clear after creating the new bookmark
  const handleSubmit = (event) => {
    event.preventDefault(); //prevent refresh
    props.createNewBookmark(newBookmark);
    setNewBookmark({
        title: "",
        url: "",
    });
  };

 //next, loaded fxn
  const loaded = () => {
    return props.bookmarks.map((bookmark) => (
      <div className="bookmark" key={bookmark._id}>
        <Link to={`/bookmark/${bookmark._id}`}><h1>{bookmark.title}</h1></Link>
      </div>
    ));
  };

  //loading function
  const loading = () => {
    return <h1>One moment, loading...</h1>;
  };

  //want to return the title and url of new bookmark
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newBookmark.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newBookmark.url}
          name="url"
          placeholder="url"
          onChange={handleChange}
        />
    
        <input type="submit" value="Add Bookmark" />
      </form>
      {props.bookmark ? loaded() : loading()}
    </section>
  );
}

//export
export default Index;
