import { Container } from "./style"

export default function PopUp(props) {
    return(
        <Container>
            <div className='popup'>
                <p>{ props.text }</p>
            </div>
        </Container>
    )
}