import { useState } from 'react';

export const Header = (props: any) => {
    const [title, setTitle] = useState<string>('title');
    const [clickTitle, setClickTitle] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);

    const changeTitle = (event: any) => {
        setTitle(event.target.value);
    }


    return(
        <div className='pl-3 py-2 flex'>
            <input type='text' className='p-1 font-semibold w-[160px] outline-0 bg-transparent focus:bg-white focus:outline-2 focus:outline-blue-400' value={title} onClick={()=>setClickTitle(!clickTitle)} onChange={changeTitle}/>
            <div className='pl-4'>
                <button onClick={() => props.deleteList()}>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" width="20px" height="30px" viewBox="0 0 459.313 459.314">
                        <path d="M459.313,229.648c0,22.201-17.992,40.199-40.205,40.199H40.181c-11.094,0-21.14-4.498-28.416-11.774   C4.495,250.808,0,240.76,0,229.66c-0.006-22.204,17.992-40.199,40.202-40.193h378.936   C441.333,189.472,459.308,207.456,459.313,229.648z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

/*
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">

    <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" width="50px" viewBox="0 0 256 256">
                        <path d="M 86.5 48.5 h -83 C 1.567 48.5 0 46.933 0 45 s 1.567 -3.5 3.5 -3.5 h 83 c 1.933 0 3.5 1.567 3.5 3.5 S 88.433 48.5 86.5 48.5 z"/><path d="M494,607c-59,0-107-48-107-107c0-59,48-107,107-107c59,0,107,48,107,107C601,559,553,607,494,607z M494,425.1c-41.3,0-74.9,33.6-74.9,74.9s33.6,74.9,74.9,74.9c41.3,0,74.9-33.6,74.9-74.9S535.3,425.1,494,425.1z"/><path d="M883,607c-59,0-107-48-107-107c0-59,48-107,107-107s107,48,107,107C990,559,942,607,883,607z M883,425.1c-41.3,0-74.9,33.6-74.9,74.9s33.6,74.9,74.9,74.9s74.9-33.6,74.9-74.9S924.3,425.1,883,425.1z"/>
                    </svg>
	<path d="M 86.5 48.5 h -83 C 1.567 48.5 0 46.933 0 45 s 1.567 -3.5 3.5 -3.5 h 83 c 1.933 0 3.5 1.567 3.5 3.5 S 88.433 48.5 86.5 48.5 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,29,27); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
	<path d="M 86.5 48.5 h -83 C 1.567 48.5 0 46.933 0 45 s 1.567 -3.5 3.5 -3.5 h 83 c 1.933 0 3.5 1.567 3.5 3.5 S 88.433 48.5 86.5 48.5 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,29,27); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>

</svg>*/