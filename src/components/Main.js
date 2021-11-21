import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';
import Header from "../components/Header";

const Main = (props) => {
    //STATE to hold API data
    const [bookmark, setBookmark] = useState(null);
    const URL = "https://bookmark-app-backend.herokuapp.com/bookmark/";
    const getBookmark = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setBookmark(data);
    };
    //Create with POST Bookmark
    const createBookmark = async (mark) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mark)
        });
        getBookmark();
    };
    //Update with PUT Bookmark
    const updateBookmark = async (mark, id) => {
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mark)
        });
        getBookmark();
    };
    //Delete with DELETE Bookmark
    const deleteBookmark = async (id) => {
        await fetch(URL + id, {
            method: "delete"
        });
        getBookmark();
    };
    useEffect(() => getBookmark(), []);
    return (
        <>
        <Header/>
        <main>
            <Switch>
                <Route exact path="/bookmark">
                    <Index bookmark={bookmark}
                        createBookmark={createBookmark} />
                </Route>
                <Route
                    path="/bookmark/:id"
                    render={(rp) => (
                        <Show
                            {...rp}
                            bookmark={bookmark}
                            updateBookmark={updateBookmark}
                            deleteBookmark={deleteBookmark}
                        />
                    )}
                />
            </Switch>
            </main>
            </>
    );
};
export default Main;