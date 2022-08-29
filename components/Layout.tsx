import Outerbox from './Outerbox';
import { useEffect, useState } from 'react';



export const Layout = (props: any) => {
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

    const [countList, setCountList] = useState(array2d);
    console.log(countList);
    let countArr = [countList];
    var counter = Number(countArr[0].slice(-1)[0]);
    console.log(counter)
    
    

    function addList(){
        if(counter === 0 || isNaN(counter) === true){
            setCountList(array2d);
            countArr = [countList];
            counter = Number(countArr[0].slice(-1)[0]);
            console.log('error1');
            console.log(countList)
        }
        counter += 1;
        countArr[0].push(counter);
        setCountList(countArr[0]);
        console.log(counter);
        console.log(countArr);
        console.log(countList);
    }

    function deleteList(){
        counter -= 1;
        countArr[0].pop();
        setCountList(countArr[0]);
        console.log(counter);
        console.log(countArr);
        console.log(countList);
    }


    return(
        <>
        
            <div className='flex'>
                <div className='flex p-4 text-4xl font-bold italic'>Trello</div>
                <button onClick={addList}>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" width="30px" height="30px" viewBox="0 0 45.402 45.402">
                        <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141   c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27   c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435   c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
                    </svg>
                </button>
            </div>
            <div className='flex box-content w-screen h-max p-6 border-4 border-none'>
                <Outerbox countList={countList[0]} deleteList={deleteList}/>
            </div>
        </>
        
    )
}