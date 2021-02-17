import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteproduct } from '../../actions/productaction'
import { FaShoppingCart } from 'react-icons/fa'
import { RiDeleteBin3Fill } from 'react-icons/ri'

const ProductItem = (props) => {
    const { id, name, price } = props;
    const dispatch = useDispatch()

    const removeproduct = (id) => {
        const confirm = window.confirm("are u sure")
        if (confirm) {
            dispatch(deleteproduct(id))
        }

    }


    return (
        <div>

            <div className="card" style={{ width: '300px' }}>
                <div className="card-body">
                    <div className="jumbotron">
                        <h6><FaShoppingCart /></h6>
                        <h6>Name-{name}</h6>
                        <p>price-{price}rs</p>
                        <button className="btn btn-danger" onClick={() => { removeproduct(id) }}><RiDeleteBin3Fill /></button>

                    </div>
                </div>
            </div>
            <hr />

        </div>
    )
}
export default ProductItem