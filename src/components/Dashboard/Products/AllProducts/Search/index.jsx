import { Container } from "./style"

export default function DashboardProductsAllProductsSearch() {
    return (
        <Container>
            <div className="search--product">
                <input type="text" placeholder="Nome do produto" />
            </div>

            <select>
                <option>Marca</option>
            </select>

            <select>
                <option>Categoria</option>
            </select>

            <select>
                <option>Status</option>
                <option>Ativo</option>
                <option>Desativo</option>
            </select>
        </Container>
    )
}