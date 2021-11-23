import { useEffect, useState, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';
import Header from "../components/Header";
import { Context } from "../Global";

const Main = (props) => {
    //global state
    const [state, setState] = useContext(Context);
    console.log("this is state", state)
    const { url, token } = state;
    //STATE to hold API data
    const [bookmark, setBookmark] = useState(null);
    const getBookmark = async () => {
        const response = await fetch(url + "/bookmark/", {
            method: 'get',
            headers: {
                Authorization: "bearer " + token,
                "Content-Type": "application/json",
                "Accept":"application/json"
            }
        });
        console.log(`this is response${response}`)
        const data = await response.json();
        console.log(`this is data:${data}`)
        setBookmark(data);
        console.log(`this is bookmark:${bookmark}`)
    };
    //Create with POST Bookmark
    const createBookmark = async (mark) => {
        await fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: "bearer " + token,
                "Accept":"application/json"
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