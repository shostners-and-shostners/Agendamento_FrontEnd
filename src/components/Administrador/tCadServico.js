import styles from'./tCadServico.module.css';
import menu from '../../img/Menu Rounded.png';
import perfil from  '../../img/perfil.png'
import notificar from '../../img/notificar.png'
import catergory1 from  '../../img/Component 51.png'
import catergory2 from  '../../img/Component 52.png'
import catergory3 from  '../../img/Component 53.png'
import catergory4 from  '../../img/Component 54.png'
import catergory5 from  '../../img/Component 55.png'


const telaCadServico = () => {
    document.title ="Cadastrar Serviço";

    return (
        <div className={styles.fCadServico}>
             <input type='checkbox' id={styles["check"]}/>
             {/* header  começo */}
             <header>
                <div className={styles.esquerda}>
                    <label  for = {styles["check"]}>
                        <img src = {menu} alt = "retunr"  className='sidebar_btn'/>
                    </label>
                </div>
                <div className={styles.Centro}>
                    <h3>Shostners & Shostners</h3>
                </div>
                <div className={styles.direita}>
                    <a href="/" className="btn_perfil">
                        <img src= {perfil} alt="notificar" />
                    </a>
                    <a href="/" className="btn_noticia">
                        <img src= {notificar} alt="notificar" />
                    </a>
                </div>
            </header>
            {/* final do header */}
            {/* sidebar começo */}
            <div className={styles.sidebar}>
                <a href="/tPesqFunc">Profissionais</a>
                <a href="/tPesqCli">Clientes</a>
                <a href="/tAgendamentosADM">Agendamentos</a>
                <a href="/tAgendarADM">Agendar</a>
                <a href="/tServADM">Serviços</a>
                <a href="/tMenuDBADM">Perfil</a>
                <div className={styles.interprise}>
                    <h3>Qual empresa?</h3>
                </div>
            </div>
            {/* sidebar  final */}
            <div className={styles.main}>
                <div className={styles.Container}>
                  <h1>Cadastro de Serviços</h1>
                  <div className={styles.dados}>
                    <input type="text" className={styles.texto} placeholder='Categoria'/>
                    <input type="text" className={styles.texto} placeholder='Nome'/>
                    <input type="text" className={styles.texto} placeholder='Tempo'/>
                  </div>
                  <div className={styles.finsh}>
                    <input type="text" className={styles.texto} placeholder='R$'/>
                    <br/>
                    <a href="/">Cadastrar</a>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default telaCadServico