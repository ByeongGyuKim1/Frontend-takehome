import { useEffect, useState } from 'react';


export const Card = (props: any) => { //updateCard, cardsState, cardid, listid, content
    const [content, setContent] = useState<string>(props.content);
    const [firstlist, setFirstlist] = useState<boolean>(true);
    const [lastlist, setLastlist] = useState<boolean>(true);
    console.log('hiss');

    function changeContent(event: any){
        setContent(event.target.value);
        props.updateCard(props.cardid, props.listid, content);
    }
    
    useEffect(() => {
        for (var i = 0; i < props.listsState.length; i++){
            if(props.listsState[i].id > props.listid && props.listsState[0].id === props.listid){
                setFirstlist(false);
            }
            if(props.listsState[i].id < props.listid && i + 2 === props.listsState.length){
                setLastlist(false);
            }
        }
        if (firstlist === true && lastlist === true && props.listsState.length == 1){
            setFirstlist(false);
            setLastlist(false);
        }
    }, []);


    return(
        <div className='flex'>
            {firstlist === true ? (
            <button onClick={props.moveCard('left', 1)}>
                <svg className='ml-2 rotate-180' xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" width='25px' x="0px" y="0px" viewBox="0 0 330 330" >
                    <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"/>
                </svg>  
            </button>) 
            : <div className='ml-[33px]'/>}
            <input className='p-2 m-2 text-lg w-[140px] rounded border-transparent focus:outline-2 focus:outline-blue-400' onChange={changeContent} value={content}></input>
            {lastlist === true ? (
            <button onClick={props.moveCard('right',3)}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" width='25px' x="0px" y="0px" viewBox="0 0 330 330" >
                    <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"/>
                </svg>
            </button>
            ):null}
        </div>
    )
}