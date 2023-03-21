import Dropdown from 'react-dropdown';

const countries = [
  { label: 'Country 1', value: '1' },
  { label: 'Country 2', value: '2' },
];
export const CheckoutStep1 = ({ onNext }) => {
  return (
    <>
      {/* <!-- BEING CHECKOUT STEP ONE -->  */}
      <div className='checkout-form'>
        <form onClick={(e) => e.preventDefault()}>
          <div className='checkout-form__item'>
            <h4>Tu informacion</h4>
            <div className='box-field'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your name'
              />
            </div>
            <div className='box-field'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your last name'
              />
            </div>
            <div className='box-field__row'>
              <div className='box-field'>
                <input
                  type='tel'
                  className='form-control'
                  placeholder='Enter your phone'
                />
              </div>
              <div className='box-field'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Enter your mail'
                />
              </div>
            </div>
          </div>
          <div className='checkout-form__item'>
            <h4>Informacion de entrega</h4>

            <Dropdown
              options={countries}
              className='react-dropdown'
              onChange={(option) => console.log(option.value)}
              placeholder='Select a country'
            />
            <div className='box-field__row'>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter the city'
                />
              </div>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter the address'
                />
              </div>
            </div>
            <div className='box-field__row'>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Delivery day'
                />
              </div>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Delivery time'
                />
              </div>
            </div>
          </div>
          <div className='checkout-form__item'>
            <h4>Nota</h4>
            <div className='box-field box-field__textarea'>
              <textarea
                className='form-control'
                placeholder='Order note'
              ></textarea>
            </div>
            <label className='checkbox-box checkbox-box__sm'>
              <input type='checkbox' />
              <span className='checkmark'></span>
              Crear una cuenta
            </label>
          </div>
          <div className='checkout-buttons'>
            {/* <button className='btn btn-grey btn-icon'>
              {' '}
              <i className='icon-arrow'></i> back
            </button> */}
            <button onClick={onNext} className='btn btn-icon btn-next'>
              Siguiente <i className='icon-arrow'></i>
            </button>
          </div>
        </form>
      </div>
      {/* <!-- CHECKOUT STEP ONE EOF -->  */}
    </>
  );
};
