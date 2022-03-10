type ButtonContainerProps = {
    listOfFunctions: any;
    btnAtributes: any;
}

export function ButtonContainer(props: ButtonContainerProps){

    return(
        <div id="button-area">
            <button id="startstop" className={props.btnAtributes} onClick={props.listOfFunctions[0]}> { props.btnAtributes == "btn-nonclick"?"iniciar":"pausar" } </button>
            <button id="capture" className="btn-nonclick" onClick={props.listOfFunctions[1]}>salvar</button>
            <button id="reset" className="btn-nonclick" onClick={props.listOfFunctions[2]}>resetar Timer</button>
            <button id="reset" className="btn-nonclick" onClick={props.listOfFunctions[3]}>resetar Historico</button>
            
      </div>
    );
}