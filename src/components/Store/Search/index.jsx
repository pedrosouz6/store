import { BsSearch } from 'react-icons/bs';

import { Container } from "./style";

export default function StoreSearch() {
    return (
        <Container>
            <input type="text" placeholder="Procure o que quiser" />
            <i><BsSearch /></i>
        </Container>
    )
}