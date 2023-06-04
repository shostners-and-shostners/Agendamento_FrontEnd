import styles from './tAgendamentoProfis.module.css';
import menu from '../../icones/chevron-left.png';
import perfil from '../../img/perfil.png'
import notificar from '../../img/notificar.png'
import block from '../../img/block-func.png'
import filtro from '../../img/filter.png'
//import logo from '../../img/logo.PNG';

//import { useState, useEffect, useRef } from "react";

//import { Link, useNavigate } from "react-router-dom";

const TelaCalendarioProfissional = () => {

    document.title = "Agendamentos Profissional";

    return (
        <div className={styles.fAgendProfissional}>
            <input type='checkbox' id={styles["check_rigth"]} />
            {/* header  começo */}
            <header>
                <div className={styles.esquerda}>
                    <label htmlFor={styles["check"]}>
                        <img src={menu} alt="retunr" className='sidebar_btn' />
                    </label>
                </div>
                <div className={styles.Centro}>
                    <h3>Shostners & Shostners</h3>
                </div>
                <div className={styles.direita}>
                    <a href="/" className="btn_perfil">
                        <img src={perfil} alt="notificar" />
                    </a>
                </div>
            </header>
            {/* final do header */}
            {/* sidebar começo */}
            <div className={styles.sidebar_rigth}>
                <h1>Filtros</h1>
                <br />
                <p>Nome do cliente</p>
                <input type="text" placeholder='Ex: Lara' />
                <br />
                <p>CPF do Cliente</p>
                <input type="text" placeholder='CPF:' />

                <button className='btn_fill'>Filtrar</button>
            </div>
            {/* sidebar  final */}
            <label htmlFor={styles["check_rigth"]} className={styles.filter}>
                    <img src={filtro} alt="filtro" />
                    <h4>Filtro</h4>
            </label>
                <div className='calendario'>
                    <div className={styles.rowTop}>
                        <h4>Seg</h4>
                        <h4>Ter</h4>
                        <h4>Quar</h4>
                        <h4>Quin</h4>
                        <h4>Sex</h4>
                        <h4>Sab</h4>
                        <h4>Dom</h4>
                    </div>
                    <div className={styles.rowBotton}>
                        <h4>28/02</h4>
                        <h4>01/03</h4>
                        <h4>02/03</h4>
                        <h4>03/03</h4>
                        <h4>04/03</h4>
                        <h4>05/03</h4>
                        <h4>06/03</h4>
                    </div>
                </div>
                <a href='/' className={styles.block}> <img src={block} alt="bloquear" /></a>
                <div className={styles.Container}>
            <div className={styles.Card}>
                <div className={styles.Card_Header}>
                        <h2>Cliente: Ana Catarina</h2>
                        <p>Serviços: cabelereira, manicure</p>
                    </div>
                    <div className={styles.Card_Body}>
                        <h3>14:00 - 16:00</h3>
                        <div className={styles.Status}>
                            <h3>Status</h3>
                            <a href="/">Confirmar</a>
                        </div>
                    </div>
                </div>
                <div className={styles.Card}>
                    <div className={styles.Card_Header}>
                        <h2>Cliente: Ana Catarina</h2>
                        <p>Serviços: cabelereira, manicure</p>
                    </div>
                    <div className={styles.Card_Body}>
                        <h3>14:00 - 16:00</h3>
                        <div className={styles.Status}>
                            <h3>Status</h3>
                            <a href="/">Confirmar</a>
                        </div>
                    </div>
                </div>
                <div className={styles.Card}>
                    <div className={styles.Card_Header}>
                        <h2>Cliente: Ana Catarina</h2>
                        <p>Serviços: cabelereira, manicure</p>
                    </div>
                    <div className={styles.Card_Body}>
                        <h3>14:00 - 16:00</h3>
                        <div className={styles.Status}>
                            <h3>Status</h3>
                            <a href="/">Confirmar</a>
                        </div>
                    </div>
                </div>
                <div className={styles.Card}>
                    <div className={styles.Card_Header}>
                        <h2>Cliente: Ana Catarina</h2>
                        <p>Serviços: cabelereira, manicure</p>
                    </div>
                    <div className={styles.Card_Body}>
                        <h3>14:00 - 16:00</h3>
                        <div className={styles.Status}>
                            <h3>Status</h3>
                            <a href="/">Confirmar</a>
                        </div>
                    </div>
                </div>
                <div className={styles.Card}>
                    <div className={styles.Card_Header}>
                        <h2>Cliente: Ana Catarina</h2>
                        <p>Serviços: cabelereira, manicure</p>
                    </div>
                    <div className={styles.Card_Body}>
                        <h3>14:00 - 16:00</h3>
                        <div className={styles.Status}>
                            <h3>Status</h3>
                            <a href="/">Confirmar</a>
                        </div>
                    </div>
                </div>
                <div className={styles.Card}>
                    <div className={styles.Card_Header}>
                        <h2>Cliente: Ana Catarina</h2>
                        <p>Serviços: cabelereira, manicure</p>
                    </div>
                    <div className={styles.Card_Body}>
                        <h3>14:00 - 16:00</h3>
                        <div className={styles.Status}>
                            <h3>Status</h3>
                            <a href="/">Confirmar</a>
                        </div>
                    </div>
                </div>
                <div className={styles.Card}>
                    <div className={styles.Card_Header}>
                        <h2>Cliente: Ana Catarina</h2>
                        <p>Serviços: cabelereira, manicure</p>
                    </div>
                    <div className={styles.Card_Body}>
                        <h3>14:00 - 16:00</h3>
                        <div className={styles.Status}>
                            <h3>Status</h3>
                            <a href="/">Confirmar</a>
                        </div>
                    </div>
                </div>
                <div className={styles.Card}>
                    <div className={styles.Card_Header}>
                        <h2>Cliente: Ana Catarina</h2>
                        <p>Serviços: cabelereira, manicure</p>
                    </div>
                    <div className={styles.Card_Body}>
                        <h3>14:00 - 16:00</h3>
                        <div className={styles.Status}>
                            <h3>Status</h3>
                            <a href="/">Confirmar</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default TelaCalendarioProfissional