import { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Item } from './Item';


const TrelloList = (props: any) => {
    const array2d = () => {
        const ROW = 1;
        const COLUMN = 1;
        const arr = new Array(ROW); 
        for (var i = 0; i < COLUMN; i++) {
            arr[i] = new Array(1);
        }
        arr[0][0] = 1;
        return arr;
    }

    const [countItem, setCountItem] = useState(array2d);
    let countArr = [...countItem];
    let counter = countArr.slice(-1)[0];

    function addItem(){
        counter += 1;
        countArr.push(counter);
        setCountItem(countArr);
    }
    
    return(
        <>
            {props.countList.map(function(i: any){
                return (<div key={i} className='ml-1'>
                    <div className='box-border h-auto w-[230px] border-2 rounded bg-slate-400'>
                        <Header deleteList={props.deleteList}/>
                        <div>
                            {props.children}
                        </div>
                        <Item countItem={countItem}/>
                        <div className='p-1 ml-[10px] mb-[5px]'>
                            <button onClick={addItem}>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" width='13px' height='13px' viewBox="0 0 45.402 45.402">
                                    <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141   c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27   c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435   c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>)
            })}
        </>
            
        
    )
}

export default TrelloList;


/* 
<svg xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" width="50px" viewBox="0 0 1000 1000">
    <path d="M117,607c-59,0-107-48-107-107c0-59,48-107,107-107s107,48,107,107C224,559,176,607,117,607z M117,425.1c-41.3,0-74.9,33.6-74.9,74.9s33.6,74.9,74.9,74.9s74.9-33.6,74.9-74.9S158.3,425.1,117,425.1z"/><path d="M494,607c-59,0-107-48-107-107c0-59,48-107,107-107c59,0,107,48,107,107C601,559,553,607,494,607z M494,425.1c-41.3,0-74.9,33.6-74.9,74.9s33.6,74.9,74.9,74.9c41.3,0,74.9-33.6,74.9-74.9S535.3,425.1,494,425.1z"/><path d="M883,607c-59,0-107-48-107-107c0-59,48-107,107-107s107,48,107,107C990,559,942,607,883,607z M883,425.1c-41.3,0-74.9,33.6-74.9,74.9s33.6,74.9,74.9,74.9s74.9-33.6,74.9-74.9S924.3,425.1,883,425.1z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="459.313px" height="459.314px" viewBox="0 0 459.313 459.314">
	<path d="M459.313,229.648c0,22.201-17.992,40.199-40.205,40.199H40.181c-11.094,0-21.14-4.498-28.416-11.774   C4.495,250.808,0,240.76,0,229.66c-0.006-22.204,17.992-40.199,40.202-40.193h378.936   C441.333,189.472,459.308,207.456,459.313,229.648z"/>
</svg>


right arrow

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 330 330" >
    <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"/>
</svg>

left arrow

<svg className=' rotate-180' xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" width='100px' x="0px" y="0px" viewBox="0 0 330 330" >
            <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"/>
        </svg>



*/