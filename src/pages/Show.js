// Show.js

// import dependencies
import { useState } from 'react';
import { Link } from 'react-router-dom';


//set show function to take in props
function Show(props) {
    //first, we need to set id variable, a bookmarks variable, and an individual bookmark variable
    
    const id = props.match.params.id;

    //save bookmarks as variable to make it easier
    const bookmarks = props.bookmark;

    //we are in the Show function, so now find the individual bookmark to show
    const bookmark = bookmarks.find((specificBookmark) => {
        return specificBookmark._id === id //gives a boolean
    });
    //since we know the bookmark to edit, we can pass that in
    const [editBookmark, setEditBookmark] = useState(bookmark);

    //handle change function
    const handleChange = (event) => {
        setEditBookmark({
        ...editBookmark, [event.target.name]: event.target.value
        });
    };

    //handle submit function
    const handleSubmit = (event) => {
        event.preventDefault() //prevents page refresh
        props.updateBookmark(editBookmark, bookmark._id);
        props.history.push('/'); //back to index
    }

    //remove a bookmark
    const removeBookmark = () => {
        props.deleteBookmark(bookmark._id);
        props.history.push('/'); //back to index
    }

    //goals - create div that can be targeted for styling, 
    //with displayed bookmark info, i.e. a few static headers
    //add a button option for removing bookmark
    //on submit, want to edit values of title and url to update bookmark
    return <section className='full-page-style'>
        <form onSubmit={handleSubmit}>
            <input
                className="input-style"
                type="text"
                value={editBookmark.title}
                name="title"
                placeholder="title"
                onChange={handleChange}
            />
            <input
                className="input-style"
                type="text"
                value={editBookmark.url}
                name="url"
                placeholder="url"
                onChange={handleChange}
            />
            <input
                className="button-style"
                type="submit"
                value="update"
                name="submit"
            />
        </form>
        <div className="show-background">
        <h1 className="show-headers">{bookmark.title}</h1>
        <h2 className="show-headers">{bookmark.url}</h2>
        </div>
        <button onClick={removeBookmark}id="delete" className="button-style">Delete Bookmark</button>
        
    </section>
} 
    
export default Show

