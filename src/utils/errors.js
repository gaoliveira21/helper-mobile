import * as Yup from 'yup';

export default (err, formRef) => {
  const validationErrors = {};
  if (err instanceof Yup.ValidationError) {
    err.inner.forEach((error) => {
      validationErrors[error.path] = error.message;
    });

    formRef.current.setErrors(validationErrors);
  }
};
