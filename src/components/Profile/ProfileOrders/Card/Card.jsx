export const Card = ({ order, index, onCollapse, active }) => {
  const { date, deliveryAddress, amount, status, orderItems } = order;

  return (
    <>
      <div className={`profile-orders__item ${active === index && 'active'}`}>
        <div className='profile-orders__row'>
          <div className='profile-orders__col'>
            <span className='profile-orders__col-mob'>Fecha</span>
            <span className='profile-orders__item-date'>{date}</span>
          </div>
          <div className='profile-orders__col'>
            <span className='profile-orders__col-mob'>Direccion de envio</span>
            <span className='profile-orders__item-addr'>{deliveryAddress}</span>
          </div>
          <div className='profile-orders__col'>
            <span className='profile-orders__col-mob'>Cantidad</span>
            <span className='profile-orders__item-price'>${amount}</span>
          </div>
          <div className='profile-orders__col'>
            <span className='profile-orders__col-mob'>Estatus</span>
            <span
              className={`profile-orders__col-${
                status.delivered ? 'delivered' : 'onway'
              }`}
            >
              {status.onWay
                ? 'on it’s way'
                : status.delivered
                ? 'DELIVERED'
                : null}
            </span>
            <span
              onClick={() => onCollapse(index)}
              className='profile-orders__col-btn'
            ></span>
          </div>
        </div>
        <div className='profile-orders__content'>
          <ul>
            {orderItems.map((item, index) => (
              <li key={index}>
                {item.name}
                <span>${item.price}</span>
              </li>
            ))}
            <li>
              Metodos de pago:
              <span>Tarjeta de credito: **** **** **** 1633</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
