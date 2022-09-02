import { useState } from 'react';

export const Header = (props: any) => {
    const [title, setTitle] = useState<string>(props.list.title);
    const changeTitle = (event: any) => {
        setTitle(event.target.value);
        props.updateList(props.list.id, title);
    }

    return(
        <div className='pl-3 py-2 flex'>
            <input type='text' className='p-1 font-semibold w-[160px] outline-0 bg-transparent focus:bg-white focus:outline-2 focus:outline-blue-400' value={title} onChange={changeTitle}/>
            <div className='pl-4'>
                <button onClick={() => props.deleteList(props.list.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" width="20px" height="30px" viewBox="0 0 459.313 459.314">
                        <path d="M459.313,229.648c0,22.201-17.992,40.199-40.205,40.199H40.181c-11.094,0-21.14-4.498-28.416-11.774   C4.495,250.808,0,240.76,0,229.66c-0.006-22.204,17.992-40.199,40.202-40.193h378.936   C441.333,189.472,459.308,207.456,459.313,229.648z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}
