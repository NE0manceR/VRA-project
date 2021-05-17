import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import Pricing from '../pricing/Pricing';
import Gallery from '../common/gallery/Gallery';
import Order from '../common/order/Order';
import Footer from '../../components/footer/Footer';
import './Corporate.scss';

const Corporate = () => {
  

  let photoExample = [
    {
      id: 0,
      photo: '/img/HomePage/gallery/photo2.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 1,
      photo: '/img/HomePage/gallery/photo2.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 2,
      photo: '/img/HomePage/gallery/photo2.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 3,
      photo: '/img/HomePage/gallery/photo2.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 4,
      photo: '/img/HomePage/gallery/photo2.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 5,
      photo: '/img/HomePage/gallery/photo2.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 6,
      photo: '/img/HomePage/gallery/photo2.png',
      link: '/',
      category: 'printing',
    },
  ];

  let iconsArr = [
    { id: 1, icon: '/img/Style/Name=ic-logo.svg', text: 'Логотипи' },
    { id: 2, icon: '/img/Style/Name=ic-business.svg', text: 'Візитки' },
    { id: 3, icon: '/img/Style/Name=ic-colors.svg', text: 'Кольори та шрифти' },
    { id: 4, icon: '/img/Style/Name=ic-notepad.svg', text: 'Блокноти, щоденники' },
    { id: 5, icon: '/img/Style/Name=ic-polo.svg', text: 'Сувенірна продукція' },
    { id: 6, icon: '/img/Style/Name=ic-souvenir.svg', text: 'Фірмовий одяг, посуд' },
  ];

  let [corporate, setCorporate] = useState({});
  let listNumber = 1;
  useEffect(() => {
    fetch(`https://admin.vra.com.ua/corporate`)
      .then((response) => response.json())
      .then((corporate) => {
        setCorporate(corporate);
      });
  }, []);

  return (
    <div className="Corporate showPage">
      <div className="Hero Grid">
        <BreadCrumbs className="Corporate__bread">
          <Link to={'/'}>Головна</Link>
          <span>/</span>
          <Link to={'/services/design'}>Дизайн</Link>
          <span>/</span>
          <Link to={'/'}>Фірмовий стиль</Link>
        </BreadCrumbs>
        <h2 className="Hero__title">Фірмовий стиль</h2>
        <span className="Hero__text">
          Це візуальне представлення вашої компанії, її імідж та цілісне обличчя. Він показує
          унікальність, особливість та цінність бренду, а також є ключовим у побудові маркетингу та
          реклами
        </span>
        <img src="/img/corporate/corporate.png" alt="img" />
      </div>
      <div className="Style-bcg">
        <div className="Style Grid">
          <h5 className="Style Title">
            <span>Основні</span> елементи фірмового <span>стилю</span>
          </h5>
          <div className="Style__icons">
            {corporate.StylesList?.map(({ icon, id, title }) => {
              return (
                <div key={id}>
                  <img src={icon.url} alt="img" />
                  <span>{title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="Step Grid">
        <h5 className="Step__title">Розробка фірмового стилю передбачає:</h5>
        <div className="Step__text-wrap">
          {corporate.StepStyleList?.map(({ id, title }) => {
            return (
              <div key={id}>
                <div className="Step__number-wrap">
                  <span></span>
                  <span>{listNumber++}.</span>
                </div>
                <span className="Step__text">{title}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="Pricing-bcg">
        <div className="Pricing Grid">
          <h5 className="Pricing__title Title">
            <span>Вартість</span> розробки <span>фірмового</span> стилю
          </h5>
          <Pricing arr={corporate.PricesList} classNames="Pricing__pricing" />
        </div>
      </div>
      <div className="Corporate__examples-bcg">
        <div className="Corporate__examples">
          <h2 className="Corporate__examples-title">Приклади робіт</h2>
          <span className="Corporate__examples-description">Приклади фірмового стилю</span>
          <Gallery btn addPhoto={photoExample} className="Corporate__gallery" />
        </div>
      </div>
      <Order></Order>
      <Footer />
    </div>
  );
};

export default Corporate;
