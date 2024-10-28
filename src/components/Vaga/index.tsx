import styles from './Vaga.module.css'

import { Link, Titulo, VagaContainer } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <VagaContainer className={styles.vaga}>
    <Titulo className={styles.vagaTitulo}>{props.titulo}</Titulo>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <Link className={styles.vagaLink} href="#">
      Ver detalhes e candidatar-se
    </Link>
  </VagaContainer>
)

export default Vaga
