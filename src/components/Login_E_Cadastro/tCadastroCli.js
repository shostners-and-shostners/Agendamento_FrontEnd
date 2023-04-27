import styles from './tCadastroCli.module.css';

import { useState, useEffect } from "react";

import agFetch from '../../axios/config.js';

import { useNavigate } from 'react-router-dom';

let id = 0;

const TelaCadastroUsuario = () => {

    document.title = "Cadastrar Cliente";

    //Requisicoes com a API
    const navigate = useNavigate();

    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [cpf, setCPF] = useState();
    const [telefone, setTelefone] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [confSenha, setConfSenha] = useState();
    const [termos, setTermos] = useState();

    const addID = () => {
        id++;
    }

    const cadCli = async (e) => {
        e.preventDefault();

        //console.log(nome, sobrenome, cpf, telefone, email, senha, confSenha, termos);

        let check = 1;

        if (senha !== confSenha) {
            alert('O campo senha e confirmar senha devem ser iguais!');
            if (check === 1) {
                id--;
                check++;
            }
        }
        else {
            //email repetido
            const post = { nome, sobrenome, cpf, telefone, email, senha, confSenha, termos };

            await agFetch.post("/posts", {
                body: post,
                userId: id
            });

            alert('Dados Cadastrados com Sucesso!')
        }
    };

    return (
        <div className={styles.fCadCliente}>
            <div className={styles.fCadastro}>
                <nav id={styles["cabecalho"]}>
                    <p>Shostners & Shostners</p>
                </nav>
                <div className={styles.cadCliLogo}>Cadastro de Cliente</div>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.fundo}>
                            <form id={styles["formCadastro"]} onSubmit={(e) => cadCli(e)}>
                                <div className={styles.entrada}>
                                    <input type="text" placeholder="*Nome:" title="Digite o seu nome" name="nome" id="nome" required onChange={(e) => setNome(e.target.value)} />
                                    <input type="text" placeholder="*Sobrenome:" title="Digite o seu sobrenome" name="sobrenome" id="sobrenome" required onChange={(e) => setSobrenome(e.target.value)} />
                                    <input type="number"
                                        placeholder="*CPF:"
                                        title="Digite o seu CPF"
                                        name="cpf" id="cpf"
                                        maxLength="11"
                                        onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)
                                                || event.target.value.length > event.target.maxLength - 1) {
                                                event.preventDefault();
                                            }
                                        }}
                                        required onChange={(e) => setCPF(e.target.value)} />

                                    <input type="number"
                                        placeholder="Telefone:"
                                        title="Digite o seu Telefone"
                                        name="tel"
                                        id="tel"
                                        maxLength="11"
                                        onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)
                                                || event.target.value.length > event.target.maxLength - 1) {
                                                event.preventDefault();
                                            }
                                        }}
                                        onChange={(e) => setTelefone(e.target.value)} />
                                    <input type="email" placeholder="*E-mail:" title="Digite o seu E-mail" name="email" id="email" required onChange={(e) => setEmail(e.target.value)} />
                                    <div className="senha">
                                        <input type="password" placeholder="*Senha:" title="Crie uma Senha" name="senha" id="senha" required onChange={(e) => setSenha(e.target.value)} />
                                        <input type="password" placeholder="*Confirmar Senha:" title="Confirme sua Senha" name="confSenha" id="confSenha" required onChange={(e) => setConfSenha(e.target.value)} />
                                    </div>

                                </div>
                                <div className={styles.rodape}>
                                    <span className={styles.condicoes}>
                                        <input type="checkbox" id={styles["termos"]} required onChange={(e) => setTermos(e.target.value)} />
                                        <a href="/" target={'_blank'}>Aceitar termos</a>
                                    </span>
                                    <div className={styles.botoes}>
                                        <input type="submit" id={styles["btnCadastro"]} name="btnCadastro" onClick={addID} value="Cadastrar" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.rodFundo}></div>
        </div>
    )
}

export default TelaCadastroUsuario