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
        fetch(url + "/bookmark/", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: "bearer " + token,
                "Accept":"application/json"
            },
            body: JSON.stringify(mark)
        }).then(response => response.json()).then(data => {
            getBookmark();
        })

    };
    //Update with PUT Bookmark
    const updateBookmark = async (mark, id) => {
        fetch(url + "/bookmark/" + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${token}`
            },
            body: JSON.stringify(mark)
        }).then(response => response.json()).then(data => {
            getBookmark();
        })

    };
    //Delete with DELETE Bookmark
    const deleteBookmark = async (id) => {
        fetch(url + "/bookmark/" + id, {
            method: "delete",
            headers: {
                Authorization: `bearer ${token}`
            },
        }).then(response => response.json()).then(data => {
            getBookmark();
        });
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