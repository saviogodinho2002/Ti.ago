
type TimerContainerProps={
    currentTimeText?: string;
    timeStamp:string[];
}

export function Timer(props: TimerContainerProps){
   
    return (
        <div id="timer-area">
            <p id="timer-text"> {props.currentTimeText} </p>
            <div id="history-camp">
                <p className="history-camp"> </p>   
               {
                  
                       props.timeStamp.map(time =>
                       {
                        return  <p  key={props.timeStamp.indexOf(time)} className="history-time"> {time} </p>
                       }
                   )
                
               }                  
            </div>
        </div>
    );
}