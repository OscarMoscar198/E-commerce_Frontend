import footerNavData from 'data/footer/footerNav';
import paymentMethodData from 'data/footer/payment';
import socialData from 'data/social';
import Link from 'next/link';
import { NavCol } from './NavCol/NavCol';

export const Footer = () => {
  const footerLogo = '/assets/img/footer-logo.svg';

  const footerNav = [...footerNavData];
  const footerSocial = [...socialData];
  const paymentMethods = [...paymentMethodData];

  return (
    <>
      {/* <!-- BEGIN FOOTER --> */}
      <footer className='footer'>
        <div className='wrapper'>
          <div className='footer-top'>
            <div className='footer-top__social'>
              <span>Encuentranos aqui:</span>
              <ul>
                {footerSocial.map((social, index) => (
                  <li key={index}>
                    <a href={social.path}>
                      <i className={social.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='footer-top__logo'>
              <Link href='/'>
                <a>
                  <img src={footerLogo} className='js-img' alt='' />
                </a>
              </Link>
            </div>

            {/* Payment method */}
            <div className='footer-top__payments'>
              <span>Metodos de pago:</span>
              <ul>
                {paymentMethods.map((payment, index) => (
                  <li key={index}>
                    <img src={payment.icon} className='js-img' alt='' />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='footer-nav'>
            {/* Footer Nav */}
            {footerNav.map((nav, index) => (
              <NavCol nav={nav} key={index} />
            ))}
            <div className='footer-nav__col'>
              <span className='footer-nav__col-title'>Contacto</span>
              <ul>
                <li>
                  <i className='icon-map-pin'></i> 277 Av. Central Entre 5ta y 4to Pte
                  29020, Tuxtla Gutierrez, Chiapas
                </li>
                <li>
                  <i className='icon-smartphone'></i>
                  <div className='footer-nav__col-phones'>
                    <a href='tel:+52 9611234567'>+52 9611234567</a>
                    <a href='tel:+52 962345678'>+52 96123456785</a>
                  </div>
                </li>
                <li>
                  <i className='icon-mail'></i>
                  <a href='mailto:info@beshop.com'>ocaso@grupoocaso.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer-copy'>
            <span>&copy; Derechos reservados. OCASO {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
      {/* <!-- FOOTER EOF   --> */}
    </>
  );
};
