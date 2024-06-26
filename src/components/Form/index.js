import Botao from '../Botao'
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

    const saveCard = (event) => {
        event.preventDefault()
        console.log('Salvando card')
    }

    return (
        <section className="form">
            <form onSubmit={saveCard}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu gargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Form