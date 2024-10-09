import './cart-item.styles.scss'

const CartItem = ({ CartItem }) => {
    const { name, imageUrl, quantity} = CartItem;
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt="" />
            <span>{quantity}</span>
        </div>
    );
};

export default CartItem;