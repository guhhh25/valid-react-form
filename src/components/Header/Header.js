import { Container } from "./styledHeader"
import { Content }  from './styledHeader'
import styles from './Header.module.css'




import Logo from './../imgs/logotipo.png'
import Celular from './../imgs/celular.png'

 
export default function Header(props){
    return (
       <Container className={styles.container}>
           <Content>
           <img src={Logo}/>
           <h2 className={styles.title}>CRIE SEU E-COMMERCE</h2>
           <p className={styles.boldText}>Chegou a hora de criar seu e-commerce com os especialistas da SmileShop.</p>
           <p className={styles.normalText}>Preencha o formulário abaixo que um consultor entrará em contato!</p>
           <img src={Celular} className={styles.Cell}/>
           </Content>
       </Container>
    )
}