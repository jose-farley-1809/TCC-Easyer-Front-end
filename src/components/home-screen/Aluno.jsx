import style from './Aluno.module.css'
export function Aluno(){
    return (
        <div className={`shadow p-3 mb-5 bg-white rounded ${style.cd}`}>
            <h1 className={`${style.title}`}>Vagas disponíveis</h1>
            <div className={`${style.cards}`}>
                <div className={`shadow p-3 mb-5 bg-white rounded ${style.cardContainer}`}>
                    <div className={`${style.cardImage}`}></div>
                    <div className={`${style.cardContent}`}>
                        <h2 className={`${style.cardProfessor}`}><b>Professor:</b> Marcos Augusto dos Santos</h2>
                        <h2 className={`${style.cardProfessor}`}><b>Vagas:</b> 4</h2>
                    </div>
                    
                    <button className={`btn btn-success ${style.btnRequisitar}`}>Requisitar</button>
                </div>
                <div className={`shadow p-3 mb-5 bg-white rounded ${style.cardContainer}`}>
                <div className={`${style.cardImage}`}></div>
                <div className={`${style.cardContent}`}>
                    <h2 className={`${style.cardProfessor}`}><b>Professor:</b> Marcos Augusto dos Santos</h2>
                    <h2 className={`${style.cardProfessor}`}><b>Vagas:</b> 3</h2>
                </div>
                
                <button className={`btn btn-success ${style.btnRequisitar}`}>Requisitar</button>
            </div>
            <div className={`shadow p-3 mb-5 bg-white rounded ${style.cardContainer}`}>
                <div className={`${style.cardImage}`}></div>
                <div className={`${style.cardContent}`}>
                    <h2 className={`${style.cardProfessor}`}><b>Professor:</b> Marcos Augusto dos Santos</h2>
                    <h2 className={`${style.cardProfessor}`}><b>Vagas:</b> 2</h2>
                </div>
                
                <button className={`btn btn-success ${style.btnRequisitar}`}>Requisitar</button>
            </div>
         
            </div>
          
            
        </div>
    )
}