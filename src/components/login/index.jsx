import style from './index.module.css'
export function Login(){
    return (
        <div className={`shadow-lg p-3 mb-5 bg-white rounded ${style.container}`}>
             <h1 className={style.titulo}>Login</h1>
            <div className={style.containerInput}>
                <div className={`input-group mb-3`}>
                    <div className={`input-group-prepend`}>
                        <span className={`input-group-text`}>
                        <span className={`material-symbols-outlined ${style.icon}`}>mail</span>
                        </span>
                    </div>
                    <input type="email" className={`form-control`}placeholder="E-mail" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className={`input-group mb-3`}>
                    <div className={`input-group-prepend`}>
                        <span className={`input-group-text`}>
                        <span className={`material-symbols-outlined ${style.icon}`}>key</span>
                        </span>
                    </div>
                    <input type="password" className={`form-control`}placeholder="Senha" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
            </div>             
             <button className={`btn btn-success ${style.btnEnviar}`}>Entrar</button>
            <span className={style.signUpMessage}>Não possui uma conta? <a className={style.link} href="#">Cadastre-se.</a></span>
        </div>
       
    )}