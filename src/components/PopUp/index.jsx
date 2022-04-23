import { Container } from "./style"

export default function PopUp(props) {
    return(
        <Container>
            <div className={`popup ${props.class}`}>
                <p>{ props.text }</p>
            </div>
        </Container>
    )
}