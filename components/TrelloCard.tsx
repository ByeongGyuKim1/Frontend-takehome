import { Card } from './Card'

export const TrelloCard = (props: any) => {

    return(
        <>
            {props.filtercards.map(function(i: any, index: any){
                return(
                    <div key={index}>
                        <Card listsState={props.listsState} updateCard={props.updateCard} cardsState={props.cardsState} cardid={i.id} listid={i.listid} content={i.content}/>
                    </div>
                )
            })}

        </>
    )
}