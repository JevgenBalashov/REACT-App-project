import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleAddBasketClick,
  handleDeleteBasketClick,
  // handleFavoritesClick,
} from 'src/redux/reducers/productsThunk';
import { handleFavoritesClick } from 'src/redux/extraReducers/handleFavoritesClick';

import { openModal } from 'src/redux/reducers/modalReducer';
import { StarIco } from 'src/UI/Icons/StarIco/StarIco';
import { StarEmptyIco } from 'src/UI/Icons/StarEmptyIco/StarEmptyIco';
import { MinusIco } from 'src/UI/Icons/MinusIco/MinusIco';
import { PlusIco } from 'src/UI/Icons/PlusIco/PlusIco';
import { selectorGetProducts } from 'src/redux/selectors/selectors';
import { ToggleProductsViewContext } from 'src/contexts/contexts';
import styles from './Product.module.scss';

export const Product = ({ product }) => {
  const dispatch = useDispatch();

  // get toggleViewProducts from context
  const { toggleView } = useContext(ToggleProductsViewContext);
  const classView = toggleView ? styles.grid : styles.layout;

  // set product data
  const { favorites, productsInBasket } = useSelector(selectorGetProducts);
  const { id, name, price, imgUrl, article, color } = product;

  // check favorites
  const isFavorites = favorites.includes(id);

  // check basket
  const searchItem = productsInBasket.find((item) => item.id === id);
  const isBasket = searchItem?.count;

  // create an action function to use in modal
  const addToBasket = dispatch(() => handleAddBasketClick(id));
  const deleteToBasket = dispatch(() => handleDeleteBasketClick(id));

  // create content for modal - add product
  const handleAddProduct = () => {
    dispatch(
      openModal({
        header: 'Хотите добавить товар в корзину ?',
        closeButton: true,
        name,
        price,
        action: [
          {
            text: 'Ok',
            backgroundColor: '#1c8646',
            actionBasket: addToBasket,
          },
          {
            text: 'Cancel',
            backgroundColor: '#1c8646',
            actionBasket: null,
          },
        ],
      })
    );
  };

  // create content for modal - delete product
  const handleDeleteProduct = () => {
    dispatch(
      openModal({
        header: 'Хотите удалить товар из корзины ?',
        closeButton: true,
        name,
        price,
        action: [
          {
            text: 'Ok',
            backgroundColor: '#cc1934',
            actionBasket: deleteToBasket,
          },
          {
            text: 'Cancel',
            backgroundColor: '#cc1934',
            actionBasket: null,
          },
        ],
      })
    );
  };

  return (
    <>
      <div className={[styles.ProductContainer, classView].join(' ')}>
        <div className={styles.Product}>
          <span className={styles.star}>
            {isFavorites && (
              <span
                onClick={() => {
                  dispatch(handleFavoritesClick(id));
                }}
              >
                <StarIco width={34} fill={'#ffda12'} />
              </span>
            )}

            {!isFavorites && (
              <span
                onClick={() => {
                  dispatch(handleFavoritesClick(id));
                }}
              >
                <StarEmptyIco width={34} fill={'#ffda12'} />
              </span>
            )}
          </span>
          <div className={styles.body}>
            <div className={styles.img}>
              <img src={`./img/appleproduct/${imgUrl}`} alt="" />
            </div>
            <div className={styles.title}>{name}</div>
            <div className={styles.article}>
              <span className={styles.articleText}>Артикул</span>:&nbsp;
              <span className={styles.articleValue}>{article}</span>
            </div>
            <div className={styles.color}>
              <span className={styles.colorText}>Колір</span>:&nbsp;
              <span className={styles.colorValue}>{color}</span>
            </div>
          </div>
          <div className={styles.price}>
            <span className={styles.sum}>{price}</span>
            <span className={styles.currency}> ₴</span>
          </div>
          <div className={styles.bottom}>
            <div className={styles.actions}>
              <span className={styles.inBasketTxt}>Кошик:</span>
              <span className={styles.inBasketCount}>{isBasket || 0}</span>
              <span className={styles.basket}>
                {isBasket && (
                  <span onClick={handleDeleteProduct}>
                    <MinusIco width={20} fill={'#cc1934'} />
                  </span>
                )}
                <span onClick={handleAddProduct}>
                  <PlusIco width={20} fill={'#1c8646'} />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    price: PropTypes.number,
    imgUrl: PropTypes.string,
    article: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
};

Product.defaultProps = {
  product: {
    name: '',
    price: 0,
    imgUrl: '',
    article: '',
    color: '',
  },
};
