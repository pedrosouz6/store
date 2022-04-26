import { Container } from "./style";

export default function StoreAllProductsFilter() {
    return (
        <Container>

            <select>
                <option>Ordenar por</option>
                <option>Maior Preço</option>
                <option>Menor Preço</option>
            </select>

        </Container>
    )
}