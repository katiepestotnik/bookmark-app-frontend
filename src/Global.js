//tutorial from https://www.youtube.com/watch?v=Jzdm4kOrZ0c&list=PLY6oTPmKnKbZsBHeBGNL9suAPIJdLaVk9&index=8

import { useState, createContext } from 'react';

const initalState = {
    url: "http://localhost:3000",
    token: null
};

export const Context = createContext();

const Global = ({ children }) => {
    const [state, setState] = useState(initalState);
    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    );
};
export default Global;
