import { Container } from "./style"

export default function PopUpMessage(props) {
    return(
        <Container>
            <div className={`popup ${props.class}`}>
                <p>{ props.text }</p>
            </div>
        </Container>
    )
}