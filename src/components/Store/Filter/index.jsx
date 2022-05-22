import { Container } from "./style";

export default function StoreFilter() {

    return (
        <Container>
            <select>
                <option value=''>Ordenar por</option>
                <option value='-1'>Maior Preço</option>
                <option value='1'>Menor Preço</option>
            </select>
        </Container>
    )
}