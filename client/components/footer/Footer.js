import React, { useState, useEffect } from 'react';
import './Footer.scss';
import { Link as NavLink } from 'react-router-dom';
import { subscriberDataHeaders } from '../../services/dataService';
import { Fragment } from 'react';

const Footer = () => {
  const [footerLink, setFooterLink] = useState();

  useEffect(() => {
    subscriberDataHeaders.subscribe((res) => {
      setFooterLink(res);
    });
  }, []);

  return (
    <div className="Footer-bcg">
      <div className="Footer">
        <div className="Footer__logo-wrap">
          <img src="/img/HomePage/footerLogo.svg" alt="img" />
          <div className="Footer__social-wrap">
            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/vra.com.ua">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 0C7.164 0 0 7.164 0 16C0 24.836 7.164 32 16 32C24.836 32 32 24.836 32 16C32 7.164 24.836 0 16 0ZM16 2.66667C23.352 2.66667 29.3333 8.648 29.3333 16C29.3333 23.352 23.352 29.3333 16 29.3333C8.648 29.3333 2.66667 23.352 2.66667 16C2.66667 8.648 8.648 2.66667 16 2.66667ZM10.6667 13.3333H13.3333V11.0773C13.3333 9.056 14.3973 8 16.7947 8H20V11.3333H18.0773C17.4613 11.3333 17.3333 11.5853 17.3333 12.2227V13.3333H20L19.76 16H17.3333V24H13.3333V16H10.6667V13.3333Z"
                  fill="black"
                />
              </svg>
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/vra.com.ua/?hl=en">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 0C7.164 0 0 7.164 0 16C0 24.836 7.164 32 16 32C24.836 32 32 24.836 32 16C32 7.164 24.836 0 16 0ZM16 2.66667C23.352 2.66667 29.3333 8.648 29.3333 16C29.3333 23.352 23.352 29.3333 16 29.3333C8.648 29.3333 2.66667 23.352 2.66667 16C2.66667 8.648 8.648 2.66667 16 2.66667ZM19.2333 9.48933C18.3893 9.45067 18.136 9.44267 16 9.44267C13.864 9.44267 13.6107 9.44933 12.768 9.488C10.5973 9.58667 9.58667 10.6147 9.488 12.768C9.45067 13.6107 9.44133 13.864 9.44133 16C9.44133 18.136 9.45067 18.3893 9.488 19.232C9.588 21.38 10.5947 22.412 12.768 22.512C13.6107 22.5507 13.864 22.5587 16 22.5587C18.1373 22.5587 18.3893 22.5493 19.2333 22.512C21.404 22.4133 22.4133 21.3827 22.5133 19.232C22.5507 18.3893 22.5587 18.136 22.5587 16C22.5587 13.864 22.5507 13.612 22.5133 12.768C22.4133 10.616 21.4027 9.588 19.2333 9.48933ZM16 8C13.8267 8 13.556 8.00933 12.7013 8.04933C9.79467 8.18267 8.18133 9.79467 8.048 12.7013C8.00933 13.556 8 13.828 8 16C8 18.1733 8.00933 18.4453 8.048 19.2987C8.18133 22.204 9.79467 23.8187 12.7013 23.952C13.556 23.9907 13.8267 24 16 24C18.1733 24 18.4453 23.9907 19.3 23.952C22.2013 23.8187 23.8213 22.2067 23.952 19.2987C23.9907 18.4453 24 18.1733 24 16C24 13.828 23.9907 13.556 23.952 12.7013C23.8213 9.79867 22.2067 8.18133 19.3 8.04933C18.4453 8.00933 18.1733 8 16 8ZM11.892 16C11.892 13.7307 13.732 11.892 16 11.892C18.268 11.892 20.108 13.732 20.108 16C20.108 18.2693 18.268 20.108 16 20.108C13.732 20.108 11.892 18.2693 11.892 16ZM16 18.6667C14.5267 18.6667 13.3333 17.4733 13.3333 16C13.3333 14.528 14.5267 13.3333 16 13.3333C17.472 13.3333 18.668 14.5267 18.668 16C18.668 17.4733 17.472 18.6667 16 18.6667ZM19.3093 11.7307C19.3093 11.2 19.74 10.7707 20.2693 10.7707C20.8013 10.7707 21.2307 11.2 21.2307 11.7307C21.2307 12.2613 20.8 12.6907 20.2693 12.6907C19.7387 12.6907 19.3093 12.26 19.3093 11.7307Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="Footer__links">
          <div className="Footer__link-wrap">
            <NavLink className="Footer__link-title" to={'/case'}>
              Кейси
            </NavLink>
            <NavLink className="Footer__link" to={'/services/design'}>
              Дизайн
            </NavLink>
            <NavLink className="Footer__link" to={'/services/druk'}>
              Друк
            </NavLink>
            <NavLink className="Footer__link" to={'/services/promo-suveniri'}>
              Промо-сувеніри
            </NavLink>
            <NavLink className="Footer__link" to={'/services/vizualna-reklama'}>
              Візуальна реклама
            </NavLink>
            <NavLink className="Footer__link" to={'/services/tekstil'}>
              Текстиль
            </NavLink>
          </div>
          {footerLink?.map((item) => {
            return (
              <div key={item.id} className="Footer__link-wrap">
                {console.log(item.case_categories)}
                {item.linkName === 'Кейси' ? (
                  <NavLink className="Footer__link-title" to={'/case'}>
                    Кейси
                  </NavLink>
                ) : (
                  <NavLink className="Footer__link-title" to={`/services/${item.Link}`}>
                    {item.linkName}
                  </NavLink>
                )}

                    {/* {console.log(item.linkName)} */}
                   {item.case_categories.map((it) => {
                      return (
                        <NavLink
                        
                          className="Footer__link"
                          key={it.id}
                          to={it.linkName === 'Дизайн' ? `/design/${it.Link}` : ``}
                        >
                          {/* /sub-categories/${item.Link} */}
                          {console.log(it.title)}
                         {it.title}
                        </NavLink>
                      );
                    })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="Under">
        <div className="Under__footer-wrap">
          <NavLink className="Under__link" to="/about/payment">
            Способи оплати
          </NavLink>
          <NavLink className="Under__link" to="/about/payment">
            Вимоги до макету
          </NavLink>
          <NavLink className="Under__link" to="/about/faq">
            FAQ
          </NavLink>
          <NavLink className="Under__link" to="/about#contacts">
            Контакти
          </NavLink>
          <span className="Right">© Copyright 2021. VRA All Right Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
