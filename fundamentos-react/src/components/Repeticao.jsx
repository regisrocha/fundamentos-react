import '../data/products.js'
import products from '../data/products.js'

export default (props) => {

    function getProdutosListItem() {
        return products.map(prod => {
            return <li key={prod.id}>
                {prod.id} - {prod.nome} - {prod.preco}
                </li>
        });
    }

    return (
        <div>
            <h2>Repeticao</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}