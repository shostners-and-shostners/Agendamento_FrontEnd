//Este tipo de arquivo e salvo com a extensao .js ou .jsx

import styles from './fotoAdmMen.module.css';

//import { useState, useEffect, useRef } from "react";

//import { useNavigate } from 'react-router-dom';

//import { Link } from "react-router-dom";

const FotoAdmMen = () => {
    //variaveis


    //funcoes

    // Extrai as informações necessárias do usuário
    const nome = "José";

    //const nome = userData.nome;
    //const sobrenome = userData.sobrenome;

    var pnome = '';
    var iniciais = '';

    if (nome && nome.length > 0) {
        iniciais = nome.charAt(0) + nome.charAt(1);
    }

    //conteudo HTML
    return (
        <div id={styles["perfilHamburger"]}>
            {/*<img src={Perfil} alt="perfil" />*/}
            <p>{iniciais}</p>
        </div>
    )
}

export default FotoAdmMen                        