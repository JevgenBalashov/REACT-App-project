import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { validationSchema } from './schemas';
import InputMask from 'react-input-mask';
import { actionBuy } from 'src/redux/extraReducers/actionBuy';
import { selectorGetProducts } from 'src/redux/selectors/selectors';
import styles from './FormBuy.module.scss';

export const FormBuy = ({ productsBasket }) => {
  const dispatch = useDispatch();

  const { productsInBasket } = useSelector(selectorGetProducts);

  const modifyProductsArray = productsBasket.map((product) => {
    return {
      ...product,
      count: productsInBasket.find((item) => item.id === product.id).count,
    };
  });

  const onSubmit = async (values, actions) => {
    dispatch(actionBuy({ ...values, items: modifyProductsArray }));

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.setSubmitting(false);
    actions.resetForm();
  };

  const initialValues = {
    name: '',
    lastName: '',
    age: '',
    address: '',
    phone: '',
  };

  return (
    <div className={styles.FormBuy}>
      <h1>Придбати товар ?</h1>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form className={styles.FormBody} autoComplete="off">
              {/* name */}
              <div className={styles.FieldContainer}>
                <Field
                  className={
                    errors.name && touched.name ? `${styles.inputError}` : ''
                  }
                  type="text"
                  name="name"
                  placeholder="Імʼя"
                />
                {errors.name && touched.name ? (
                  <div className={styles.messageError}>{errors.name}</div>
                ) : null}
              </div>

              {/* lastName */}
              <div className={styles.FieldContainer}>
                <Field
                  className={
                    errors.lastName && touched.lastName
                      ? `${styles.inputError}`
                      : ''
                  }
                  type="text"
                  name="lastName"
                  placeholder="Прізвище"
                />
                {errors.lastName && touched.lastName ? (
                  <div className={styles.messageError}>{errors.lastName}</div>
                ) : null}
              </div>

              {/* age */}
              <div className={styles.FieldContainer}>
                <Field
                  className={
                    errors.age && touched.age ? `${styles.inputError}` : ''
                  }
                  type="text"
                  name="age"
                  placeholder="ВІК"
                />
                {errors.age && touched.age ? (
                  <div className={styles.messageError}>{errors.age}</div>
                ) : null}
              </div>

              {/* address */}
              <div className={styles.FieldContainer}>
                <Field
                  className={
                    errors.address && touched.address
                      ? `${styles.inputError}`
                      : ''
                  }
                  type="text"
                  name="address"
                  placeholder="Адреса доставки"
                />
                {errors.address && touched.address ? (
                  <div className={styles.messageError}>{errors.address}</div>
                ) : null}
              </div>

              {/* phone */}
              <div className={styles.FieldContainer}>
                <Field name="phone">
                  {({ field }) => (
                    <InputMask
                      {...field}
                      className={
                        errors.phone && touched.phone
                          ? `${styles.inputError}`
                          : ''
                      }
                      mask="(999)999-99-99"
                      placeholder="Мобільный телефон"
                    />
                  )}
                </Field>
                {errors.phone && touched.phone ? (
                  <div className={styles.messageError}>{errors.phone}</div>
                ) : null}
              </div>

              <button className={styles.FormSubmit} type="submit">
                Купити
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
