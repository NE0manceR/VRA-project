/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './Gallery.scss';
import WhiteBtn from '../buttons/white-btn/White-btn';
import GradientBtn1 from '../buttons/gradient-btn/Gradient-btn';
import { TelegramShareButton, ViberShareButton, EmailShareButton } from 'react-share';
import { Fragment } from 'react';

function Gallery(props) {
  const [linkCopy, setLinkCopy] = useState(false);
  let [photoCount, setPhotoCount] = useState(0);
  let [startCount, setStartCount] = useState(0);
  let [showPhoto, setshowPhoto] = useState(4);

  function copyLink(id) {
    navigator.clipboard.writeText(id);
    setLinkCopy(true);
    setTimeout(() => {
      setLinkCopy(false);
    }, 1300);
  }

  function morePhotoInLogo() {
    setshowPhoto((showPhoto += 5));
  }

  return (
    <div className={`Gallery-wrap ${props.className}`}>
      <div className={`Gallery Gallery-${props.gridNumber}`}>
        {props.items &&
          props.items.map((item) => {
            return (
              <Fragment key={'item.photo.id' + item.photo?.id + '-' + item?.id}>
                {startCount++ <= showPhoto ? (
                  <div
                    className={`Gallery__photo_hover Gallery__photo-${photoCount++}`}
                    style={{
                      animation: `showPhoto 0.3s forwards ${Math.random() * (0.6 - 0.4) + 0.1}s`,
                    }}
                  >
                    <img className="Gallery__blur" src={item.photo?.url} alt="img" />
                    <div className="content-wrap">
                      <span className="descr">{item.description}</span>
                      <GradientBtn1 link={true} to={`/case/${item?.Link}`} className="gallery-btn">
                        Переглянути кейс
                      </GradientBtn1>
                      <div className={`icons icons-info ${linkCopy ? 'icon-copy-text' : ''}`}>
                        <div className="Gallery__share-link">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => {
                              copyLink(`/case/${item?.Link}`);
                            }}
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16 6.5V15.5C16 15.775 15.775 16 15.5 16H6.5C6.225 16 6 15.775 6 15.5V6.5C6 6.224 6.224 6 6.5 6H15.5C15.776 6 16 6.224 16 6.5ZM15.5 4C16.879 4 18 5.122 18 6.5V15.5C18 16.879 16.879 18 15.5 18H6.5C5.122 18 4 16.879 4 15.5V6.5C4 5.122 5.122 4 6.5 4H15.5ZM13 0C13.552 0 14 0.448 14 1C14 1.552 13.552 2 13 2H2V13C2 13.552 1.552 14 1 14C0.448 14 0 13.552 0 13V2.5C0 1.119 1.119 0 2.5 0H13Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <EmailShareButton
                          url={item.Link}
                          className="Demo__some-network__share-button Gallery__share-email"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.65453 15.8242H16.3455C17.2578 15.8242 18 15.0819 18 14.1695V3.8299C18 2.9175 17.2578 2.17529 16.3455 2.17529H1.65453C0.742212 2.17529 0 2.91758 0 3.8299V14.1695C0 15.0819 0.742212 15.8242 1.65453 15.8242ZM1.07754 3.8299C1.07754 3.51123 1.33623 3.25284 1.65453 3.25284H16.3455C16.6639 3.25284 16.9225 3.51123 16.9225 3.8299V14.1695C16.9225 14.4882 16.6638 14.7466 16.3455 14.7466H1.65453C1.33615 14.7466 1.07754 14.4882 1.07754 14.1695V3.8299ZM3.21381 13.9846H2.13627V4.06056L8.86545 8.42928C8.94461 8.48065 9.05531 8.48072 9.13469 8.42914L15.8638 4.06056V13.9846H14.7863V6.04482L9.72131 9.33305C9.50637 9.47249 9.25696 9.54612 9 9.54612C8.74304 9.54612 8.49363 9.47249 8.27884 9.33312L3.21381 6.04482V13.9846Z"
                              fill="white"
                            />
                          </svg>
                        </EmailShareButton>
                        <ViberShareButton
                          url={item.Link}
                          className="Demo__some-network__share-button Gallery__share-viber"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.3666 10.4199C17.9036 5.89964 17.1086 3.04589 15.6746 1.75514L15.6753 1.75439C13.3608 -0.44986 5.5443 -0.77611 2.7753 1.85339C1.5318 3.13964 1.0938 5.02739 1.0458 7.36439C0.997804 9.70214 0.940804 14.0814 5.02155 15.2694H5.0253L5.02155 17.0836C5.02155 17.0836 4.9938 17.8186 5.4633 17.9664C5.969 18.1302 6.21397 17.8372 7.63562 16.1364L7.91355 15.8041C10.7066 16.0464 12.8516 15.4914 13.0953 15.4104C13.1457 15.3935 13.217 15.3748 13.3055 15.3515C14.208 15.1144 16.8966 14.408 17.3666 10.4199ZM8.1888 14.5276C8.1888 14.5276 6.42105 16.7319 5.8713 17.3041C5.6913 17.4901 5.49405 17.4729 5.49705 17.1039C5.49705 16.8616 5.51055 14.0919 5.51055 14.0919C2.1697 13.1345 2.24511 9.62446 2.288 7.62788C2.28953 7.55682 2.29102 7.48768 2.2923 7.42064C2.3298 5.46914 2.6868 3.87089 3.7398 2.79464C6.16905 0.516891 13.0218 1.02614 14.7678 2.66714C16.7107 4.38951 16.2556 8.97333 16.1617 9.91993C16.1524 10.0133 16.1467 10.0713 16.1471 10.0876C15.752 13.379 13.6162 13.8948 12.8475 14.0804L12.8475 14.0804C12.7624 14.1009 12.6942 14.1174 12.6468 14.1331C12.4436 14.2006 10.5573 14.6859 8.1888 14.5276ZM9.16676 3.22314C8.87801 3.22314 8.87801 3.67314 9.16676 3.67689C11.407 3.69414 13.252 5.25564 13.2723 8.11989C13.2723 8.42214 13.7148 8.4184 13.711 8.11614H13.7103C13.6863 5.02989 11.6718 3.24039 9.16676 3.22314ZM12.5524 7.65528C12.5487 7.95753 12.1069 7.94328 12.1137 7.64478C12.1482 6.15453 11.2474 4.98753 9.53744 4.85778C9.24944 4.83678 9.27944 4.38303 9.56819 4.40403C11.5399 4.55178 12.5892 5.95353 12.5524 7.65528ZM11.6416 9.58057C11.2711 9.36607 10.8939 9.49957 10.7379 9.71032L10.4116 10.1326C10.2459 10.3471 9.93614 10.3186 9.93614 10.3186C7.67564 9.72083 7.07114 7.35533 7.07114 7.35533C7.07114 7.35533 7.04339 7.03508 7.25039 6.86333L7.65839 6.52583C7.86239 6.36383 7.99139 5.97383 7.78364 5.59058C7.36516 4.83449 7.0503 4.45193 6.83938 4.19566C6.77057 4.11205 6.71282 4.04189 6.66614 3.97658C6.46664 3.72683 6.16664 3.67058 5.85464 3.83933H5.84789C5.19914 4.21883 4.48889 4.92908 4.71614 5.66033C4.78338 5.79402 4.86038 5.97843 4.95358 6.20163C5.39785 7.26562 6.21019 9.21108 8.08739 10.7461C9.15464 11.6243 10.8436 12.5243 11.5606 12.7321L11.5674 12.7426C12.2739 12.9781 12.9609 12.2401 13.3276 11.5718V11.5666C13.4904 11.2433 13.4364 10.9373 13.1986 10.7371C12.7771 10.3261 12.1411 9.87232 11.6416 9.58057ZM10.9848 7.27C10.9473 6.49675 10.5978 6.12025 9.87701 6.07825C9.58525 6.061 9.61226 5.60725 9.90101 5.6245C10.849 5.677 11.3755 6.2395 11.4235 7.249C11.437 7.55125 10.9983 7.57225 10.9848 7.27Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect width="18" height="18" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </ViberShareButton>

                        <TelegramShareButton
                          url={item.Link}
                          className="Demo__some-network__share-button Gallery__share-telegram"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0)">
                              <path
                                d="M7.06288 11.3856L6.76513 15.5736C7.19113 15.5736 7.37563 15.3906 7.59688 15.1708L9.59413 13.2621L13.7326 16.2928C14.4916 16.7158 15.0264 16.4931 15.2311 15.5946L17.9476 2.86557L17.9484 2.86482C18.1891 1.74282 17.5426 1.30407 16.8031 1.57932L0.835633 7.69257C-0.254117 8.11557 -0.237617 8.72307 0.650383 8.99832L4.73263 10.2681L14.2149 4.33482C14.6611 4.03932 15.0669 4.20282 14.7331 4.49832L7.06288 11.3856Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect width="18" height="18" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </TelegramShareButton>
                      </div>
                    </div>
                  </div>
                ) : null}
              </Fragment>
            );
          })}
      </div>
      {props.btn ? (
        <div className="btn-wrap">
          {showPhoto <= props.addPhoto.length ? (
            <WhiteBtn
              morePhotoInLogo={() => {
                morePhotoInLogo();
              }}
            >
              Переглянути більше
            </WhiteBtn>
          ) : null}
        </div>
      ) : null}
      {props.link ? (
        <div className="btn-wrap">
          {showPhoto <= props.items.length ? <WhiteBtn link>Переглянути більше</WhiteBtn> : null}
        </div>
      ) : null}
    </div>
  );
}

export default Gallery;
