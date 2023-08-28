import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'src/redux/reducers/modalReducer';
import { selectorGetModalState } from 'src/redux/selectors/selectors';
import { Button } from '../Button/Button';
import styles from './MyModal.module.scss';

export function MyModal() {
  const dispatch = useDispatch();

  // get modal data
  const { isOpen, header, closeButton, name, price, action } = useSelector(
    selectorGetModalState
  );

  // function for close modal
  const handleModalClose = () => dispatch(closeModal());

  // create class for modal
  const rootClasses = [styles.myModal];
  if (isOpen) rootClasses.push(styles.active);

  return (
    <div className={rootClasses.join(' ')} onClick={handleModalClose}>
      <div
        className={styles.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.myModalHeader}>
          <h1 className={styles.myModalTitle}>{header}</h1>
          {closeButton && (
            <div className={styles.myModalCloseBtn} onClick={handleModalClose}>
              ✖
            </div>
          )}
        </div>
        <div className={styles.myModalBody}>
          <div className={styles.modalAddBasket}>
            <div className={styles.title}>{name}</div>
            <div className={styles.price}>
              <span className={styles.sum}>{price}</span>
              <span className={styles.currency}> ₴</span>
            </div>
          </div>
        </div>
        <div className={styles.myModalAction}>
          {action.map((btn) => (
            <Button
              key={btn.text}
              text={btn.text}
              backgroundColor={btn.backgroundColor}
              onClick={() => {
                btn.actionBasket && dispatch(btn.actionBasket);
                handleModalClose();
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
