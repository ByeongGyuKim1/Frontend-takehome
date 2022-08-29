import { createContext, SetStateAction, useState, Dispatch, useEffect } from 'react';

type ListItem = {

}

const ListItemContext = createContext<ListItem>({


})

interface Props {
    children : JSX.Element | JSX.Element[];
}

const ListItemProvider = ({ children }: Props) => {


    return(
        <ListItemContext.Provider
            value={{

            }}>

            {children}
        </ListItemContext.Provider>
    )
}

export { ListItemContext, ListItemProvider };

