export const CheckoutStep3 = () => {
  return (
    <>
      {/* <!-- BEING CHECKOUT STEP Three -->  */}
      <div className='checkout-purchase checkout-form'>
        <h4>
          OCASO te agradece
          <br />
          por tu compra!
        </h4>
        <p>
          Consequat minim ipsum aliquip quis ullamco aliquip consequat aliquip
          sit eu enim duis qui. Velit minim tempor non aliquip officia cillum.
          Irure Lorem do enim sint in commodo. Ea ea nostrud labore mollit nisi.
          Cupidatat esse minim mollit qui velit esse voluptate. Excepteur ad
          officia dolore amet magna ipsum dolor incididunt excepteur ad non. Ea
          ea qui irure excepteur est consectetur amet est exercitation in.
        </p>
        <ul className='checkout-purchase__list'>
          <li>
            <span>Numero de orden</span>B-125724_75
          </li>
          <li>
            <span>Estatus de orden</span>Esperando Pago
          </li>
          <li>
            <span>Reservado para</span>22.09.2020
          </li>
          <li>
            <span>Fecha de envio esperada</span>20.09.2020
          </li>
        </ul>
        <a href='#' className='checkout-purchase__link'>
          Imprimir documento -
        </a>
      </div>
      {/* <!-- CHECKOUT STEP TWO EOF -->  */}
    </>
  );
};
