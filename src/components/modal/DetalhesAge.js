import React from "react";

const BACKGROUND_STYLE ={
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0,0,0, 0.7)',
    zIndex: '1000'
}

const MODAL_STYLE ={
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    padding: '25px 30px',
    backgroundColor: '#fff',
    borderRadius:  '10px',
    display: 'flex',
    flexDirection: 'column',
    alingItens: 'center',

}

const  HEADER_STYLE ={
    color: '#3293CA',
    textAlign: 'center',
}
const  DOIS_STYLE ={
    color: '#3293CA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0'
}



const BTN_STYLE ={
    backgroundColor: '#3293CA',
    color: '#fff',
    height: '30px',
    width: '100px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '15px',
    margin: 'auto'
}
const STATUS_STYLE ={
    fontSize: '14px',
    color: '#fff',
    backgroundColor: 'green',
    padding: '5px',
    width: '100px',
    height: '30px',
    borderRadius: '15px',
    marginLeft: '1rem',
}

const TEXT_STATUS_STYLE ={
    margin: '0px',
}
const INFO_STYLE ={
    fontSize: '20px',
    margin: '0px',
}

const INFOS_STYLE ={
    textAlign: 'center',
    margin: '1rem'
}

export default function Modal({isOpen, setDetalheOpen, children }) {

    if(isOpen){
        return(
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <h3 style={HEADER_STYLE}>Detalhes do Agendamento</h3>
                    <div style={INFOS_STYLE}>
                        <p style={INFO_STYLE}>Cod. XXX</p>
                        <p style={INFO_STYLE}>Cliente: Ana Catarina</p>
                        <p style={INFO_STYLE}>funcionario: Ana Catarina</p>
                        <br/>
                        <p style={INFO_STYLE}>09/05/2023 - 14:00 até as 16:00</p>
                    </div>
                    
                    <br/>
                    <h3 style={HEADER_STYLE}>Serviços</h3>
                    <div style={INFOS_STYLE}>
                        <p style={INFO_STYLE}>Categorias: Corte de cabelo</p>
                        <p style={INFO_STYLE}>Serviços: Corte de cabelo chanel</p>
                    </div>
                    
                    <div style={DOIS_STYLE}>
                        <h4 style={TEXT_STATUS_STYLE}>Status: </h4>
                        <select style={STATUS_STYLE}>
                            <option value="" key="">Confirmar</option>
                        </select>
                    </div>                   
                    <button onClick={setDetalheOpen} style={BTN_STYLE}>Fechar</button>
                </div>
            </div>
            
        )
    }
    
    return null
}