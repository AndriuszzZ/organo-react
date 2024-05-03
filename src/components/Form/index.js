import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Form.css'

const Form = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX/UI',
        'Mobile',
        'Inovação e Gestão'
    ]


    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu gargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Time" itens={times} />
            </form>
        </section>
    )
}

export default Form