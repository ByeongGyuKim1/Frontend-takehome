import { useState } from 'react';


export const Item = (props: any) => {
    const [itemName, setItemName] = useState<string>('item1');
    
    const changeItemName = (event: any) => {
        setItemName(event.target.value);
    }

    return(
        <>
            {props.countItem.map(function(i: any){
                return(<input key={i} className='border-2 p-2 m-2 text-lg w-[180px] bg-transparent border-transparent focus:bg-white focus:outline-2 focus:outline-blue-400' value={itemName} onChange={changeItemName}></input>
                )
            })}

        </>
    )
}