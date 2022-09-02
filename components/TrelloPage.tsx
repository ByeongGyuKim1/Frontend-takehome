import { FC, useState } from "react";

interface Board {
    id: number;
    name: string;
    lanes: Lane[];
}

interface Lane {
    id: number;
    name: string;
    cards: Card[];
}

interface Card {
    id: number;
    task: string;
}

const DEFAUILT_CARD: Card = { id: 0, task: 'sample todo' }
const DEFAUILT_LANE: Lane = { id: 0, name: 'title', cards: [DEFAUILT_CARD] }
const DEFAULUT_BOARD: Board = { id: 0, name: 'default board', lanes: [DEFAUILT_LANE] };


const CardList: FC<{ laneId: number, position: string, cards: Card[]; onClickMoveButton: (direction: string, laneId: number, cardid: number) => void; onClickAddButton: (laneId: number) => void; onChangeCard: (task: string, laneid: number, cardid: number) => void; onClickDeleteButton: (laneId: number, cardid: number) => void;}> = ({ laneId, position, cards, onChangeCard, onClickMoveButton, onClickAddButton, onClickDeleteButton }) => {
    const [task, setTask] = useState<string>('');

    const cardList = cards.map((card) => { 
        function onChangeCardTask (event: any) {
            setTask(event.target.value);
            onChangeCard(task, laneId, card.id);
        }

        return (
        <div key={card.id} className='flex ml-2 items-center'>
            {(position === 'middle' || position === 'last') &&
                <button onClick={() => onClickMoveButton('left', laneId, card.id)} >
                    <svg className='rotate-180' xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" width='25px' x="0px" y="0px" viewBox="0 0 330 330" >
                        <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"/>
                    </svg>  
                </button>
            }
            {(position === 'first' || position === 'none') && 
                <div className="ml-[25px]"></div>
            }
            
            <div className='ml-1 flex items-center border-1 border-solid bg-slate-500 rounded p-2 w-[180px] mt-2'>
                <input className='bg-slate-500 w-[120px] focus:outline-2 focus:bg-slate-300 focus:outline-blue-400' value={card.task} onChange={onChangeCardTask}/>
                <button onClick={() => onClickDeleteButton(laneId, card.id)} className='p-2 ml-2'>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" width="15px" height="20px" viewBox="0 0 459.313 459.314">
                    <path d="M459.313,229.648c0,22.201-17.992,40.199-40.205,40.199H40.181c-11.094,0-21.14-4.498-28.416-11.774   C4.495,250.808,0,240.76,0,229.66c-0.006-22.204,17.992-40.199,40.202-40.193h378.936   C441.333,189.472,459.308,207.456,459.313,229.648z"/>
                </svg>
            </button>
            </div>
            {(position === 'first' || position === 'middle') &&
                <button className="ml-1 mt-[4px]" onClick={() => onClickMoveButton('right', laneId, card.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" width='25px' x="0px" y="0px" viewBox="0 0 330 330" >
                        <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"/>
                    </svg>
                </button>
            }
        </div>
        ) 
    })

    return (
        <>
        <div className="text-lg w-[140px] rounded focus:outline-2 focus:outline-blue-400">
            {cardList}
        </div>
        <button onClick={() => onClickAddButton(laneId)} className='flex text-sm font-semibold items-center border-2 p-2 py-1 mt-3 ml-2 rounded bg-blue-500'>
            <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" width='13px' height='13px' viewBox="0 0 45.402 45.402">
                <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141   c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27   c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435   c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
            </svg>
            <div>Add a card</div>
        </button>
        </>
        

    )
}

const LaneList: FC<{ lanes: Lane[]; onClickMoveButton: (direction: string, laneId: number, cardid: number) => void; onChangeCard: (task: string, laneid: number, cardid: number) => void; onChangeLane: (name: string, laneId: number) => void; onClickAddLaneButton: () => void; onClickDeleteLaneButton: (id: number) => void; onClickAddCardButton: (laneId: number) => void; onClickDeleteCardButton: (laneId: number, cardid: number) => void; }> = ({ lanes, onClickMoveButton, onChangeCard, onChangeLane, onClickAddLaneButton, onClickDeleteLaneButton, onClickAddCardButton, onClickDeleteCardButton }) => {
    const [name, setName] = useState<string>('');

    const laneList = lanes.map((lane, i) => {

        async function onChangeCardTask (event: any) {
            setName(event.target.value);
            onChangeLane(name, lane.id);
        }
        
        return (
            <div key={lane.id} className='w-[250px] h-auto ml-4 pb-2 border-[1px] rounded border-solid bg-white'>
                <div className='flex-row'>
                    <div className="flex m-6">
                        <input type='text' className='font-semibold text-xl w-[160px] outline-0 bg-transparent focus:bg-slate-300 focus:outline-2 focus:outline-blue-400' value={lane.name} onChange={onChangeCardTask}/>
                        <button onClick={() => onClickDeleteLaneButton(lane.id)} className='ml-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" width="20px" height="30px" viewBox="0 0 459.313 459.314">
                                <path d="M459.313,229.648c0,22.201-17.992,40.199-40.205,40.199H40.181c-11.094,0-21.14-4.498-28.416-11.774   C4.495,250.808,0,240.76,0,229.66c-0.006-22.204,17.992-40.199,40.202-40.193h378.936   C441.333,189.472,459.308,207.456,459.313,229.648z"/>
                            </svg>
                        </button>
                    </div>
                    {i === 0 && i === lanes.length - 1 && <CardList laneId={lane.id} position={'none'} cards={lane.cards} onClickMoveButton={onClickMoveButton} onClickAddButton={onClickAddCardButton} onClickDeleteButton={onClickDeleteCardButton} onChangeCard={onChangeCard} />}
                    {i === 0 && i !== lanes.length - 1 && <CardList laneId={lane.id} position={'first'} cards={lane.cards} onClickMoveButton={onClickMoveButton} onClickAddButton={onClickAddCardButton} onClickDeleteButton={onClickDeleteCardButton} onChangeCard={onChangeCard} />}
                    {i !== 0 && i !== lanes.length - 1 && <CardList laneId={lane.id} position={'middle'} cards={lane.cards} onClickMoveButton={onClickMoveButton} onClickAddButton={onClickAddCardButton} onClickDeleteButton={onClickDeleteCardButton} onChangeCard={onChangeCard} />}
                    {i !== 0 && i === lanes.length - 1 && <CardList laneId={lane.id} position={'last'} cards={lane.cards} onClickMoveButton={onClickMoveButton} onClickAddButton={onClickAddCardButton} onClickDeleteButton={onClickDeleteCardButton} onChangeCard={onChangeCard} />}
                    
                </div>
                
                {i === lanes.length - 1 && 
                <button onClick={onClickAddLaneButton} className='flex text-sm font-semibold items-center border-2 p-2 py-1 mt-3 ml-2 rounded bg-blue-500'>
                    <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" width='13px' height='13px' viewBox="0 0 45.402 45.402">
                        <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141   c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27   c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435   c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
                    </svg>
                    <div>Add a lane</div>
                </button>}
            </div>
        )
    });

    return (
        <div style={{ display: 'flex' }}>
            {laneList}
        </div>
    )
}

export const TrelloPage = () => {
    const [board, setBoard] = useState<Board>(DEFAULUT_BOARD);
    console.log(board);
    function handleChangeLaneName(name: string, laneId: number) {
        const targetLaneIndex = board.lanes.findIndex(lane => lane.id === laneId);
        
        const newLane = { id: laneId, name: name, cards: board.lanes[targetLaneIndex].cards};
        const newLanes = [...board.lanes.slice(0, targetLaneIndex), newLane, ...board.lanes.slice(targetLaneIndex + 1)];

        setBoard({ ...board, lanes: newLanes});
    }

    function handleChangeCardTask(task: string, laneid: number, cardid: number) {
        const targetLaneIndex = board.lanes.findIndex(lane => lane.id === laneid);
        const targetCardIndex = board.lanes[targetLaneIndex].cards.findIndex(card => card.id === cardid);


        const newCards = [...board.lanes[targetLaneIndex].cards.slice(0, targetCardIndex), {id: cardid, task: task}, ...board.lanes[targetLaneIndex].cards.slice(targetCardIndex + 1)];
        const newLane = {...board.lanes[targetLaneIndex], cards: newCards};
        const newLanes = [...board.lanes.slice(0, targetLaneIndex), newLane, ...board.lanes.slice(targetLaneIndex + 1)]
        setBoard({...board, lanes: newLanes});

    }

    function handleClickAddLaneButton() {
        setBoard((board) => {
            const lastLane = board.lanes[board.lanes.length - 1];
            return { ...board, lanes: [...board.lanes, { id: lastLane.id + 1, name: 'new lane', cards: [] }] }
        })
    }

    function handleClickDeleteLaneButton(laneId: number) {
        if (confirm('REALLY?')) {
            const targetLaneIndex = board.lanes.findIndex(lane => lane.id === laneId);
            if (targetLaneIndex === -1) {
                return;
            }

            setBoard((board) => {
                return {
                    ...board,
                    lanes: [...board.lanes.slice(0, targetLaneIndex), ...board.lanes.slice(targetLaneIndex + 1)]
                }
            })
        }
    }

    function handleClickAddCardButton(laneId: number) { // 접근할 때 숫자만 보고 접근하면 안됨
        const targetLaneIndex = board.lanes.findIndex(lane => lane.id === laneId);
        if (targetLaneIndex === -1) {
            return;
        }
        const newCard: Card = {id: Math.random(), task: 'new task'};

        const newCards = [...board.lanes[targetLaneIndex].cards, newCard];
        const newLane = { ...board.lanes[targetLaneIndex], cards: newCards };
        const newLanes = [...board.lanes.slice(0, targetLaneIndex), newLane, ...board.lanes.slice(targetLaneIndex + 1)];



        setBoard({ ...board, lanes: newLanes});

    }

    function handleClickDeleteCardButton(laneId: number, cardid: number) {
        const targetLaneIndex = board.lanes.findIndex(lane => lane.id === laneId);
        const targetCardIndex = board.lanes[targetLaneIndex].cards.findIndex(card => card.id === cardid);
        if (targetLaneIndex === -1) {
            return;
        }
        if (targetCardIndex === -1) {
            return;
        }
        const newCards = [...board.lanes[targetLaneIndex].cards.slice(0, targetCardIndex), ...board.lanes[targetLaneIndex].cards.slice(targetCardIndex + 1)];
        const newLane = {...board.lanes[targetLaneIndex], cards: newCards};
        const newLanes = [...board.lanes.slice(0, targetLaneIndex), newLane, ...board.lanes.slice(targetLaneIndex + 1)]
        setBoard({...board, lanes: newLanes});
    }

    function handleClickMoveButton(direction: string, laneId: number, cardid: number) {
        const targetLaneIndex = board.lanes.findIndex(lane => lane.id === laneId);
        const targetCardIndex = board.lanes[targetLaneIndex].cards.findIndex(card => card.id === cardid);
        
        if (direction === 'left') {
            const cardMove: Card = board.lanes[targetLaneIndex].cards[targetCardIndex];
            const newCard1 = [...board.lanes[targetLaneIndex].cards.slice(0, targetCardIndex), ...board.lanes[targetLaneIndex].cards.slice(targetCardIndex + 1)];
            const newCard2 = [...board.lanes[targetLaneIndex - 1].cards, cardMove];
            const newLane1 = {...board.lanes[targetLaneIndex], cards: newCard1};
            const newLane2 = {...board.lanes[targetLaneIndex - 1], cards: newCard2};
            const newLanes = [...board.lanes.slice(0, targetLaneIndex - 1), newLane2, newLane1, ...board.lanes.slice(targetLaneIndex + 1)];
            setBoard({...board, lanes: newLanes});
        }

        else if(direction === 'right') {
            const cardMove: Card = board.lanes[targetLaneIndex].cards[targetCardIndex];
            const newCard1 = [...board.lanes[targetLaneIndex].cards.slice(0, targetCardIndex), ...board.lanes[targetLaneIndex].cards.slice(targetCardIndex + 1)];
            const newCard2 = [...board.lanes[targetLaneIndex + 1].cards, cardMove];
            const newLane1 = {...board.lanes[targetLaneIndex], cards: newCard1};
            const newLane2 = {...board.lanes[targetLaneIndex + 1], cards: newCard2};
            const newLanes = [...board.lanes.slice(0, targetLaneIndex), newLane1, newLane2, ...board.lanes.slice(targetLaneIndex + 2)];
            setBoard({...board, lanes: newLanes});
        }
    }


    return (
        <div>
            <div className='flex items-center'>
                <div className='p-4 text-4xl font-bold italic'>Trello</div>
                <div className='text-2xl font-bold'>{`Hello ${board.name}`}</div>
            </div>
            <LaneList lanes={board.lanes}  onClickMoveButton={handleClickMoveButton} onChangeCard={handleChangeCardTask} onChangeLane={handleChangeLaneName} onClickAddLaneButton={handleClickAddLaneButton} onClickDeleteLaneButton={handleClickDeleteLaneButton} onClickAddCardButton={handleClickAddCardButton} onClickDeleteCardButton={handleClickDeleteCardButton}/>
        </div>
    )
}