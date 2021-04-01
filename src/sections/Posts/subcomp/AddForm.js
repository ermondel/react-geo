import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { cleanCategories } from '@lib/str';

const FormField = (props) => {
  let inputClassName = 'add-form__input';
  let textareaClassName = 'add-form__textarea';

  let errorMessage;
  let inputElement;

  if (props.error) {
    if (
      (props.error.type === 'required' && props.touched) ||
      props.error.type === 'other'
    ) {
      inputClassName = `${inputClassName} ${inputClassName}--error`;
      textareaClassName = `${textareaClassName} ${textareaClassName}--error`;
      errorMessage = <div className='add-form__error'>{props.error.message}</div>;
    }
  }

  switch (props.type) {
    case 'textarea':
      inputElement = (
        <textarea
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          className={textareaClassName}
          onChange={props.onChange}
          onBlur={props.onBlur}
        ></textarea>
      );
      break;

    default:
      inputElement = (
        <input
          type='text'
          name={props.name}
          value={props.value}
          autoComplete='off'
          placeholder={props.placeholder}
          className={inputClassName}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      );
  }

  return (
    <label className='add-form__label'>
      <div className='add-form__field'>
        <div className='add-form__element'>{inputElement}</div>
        <div className='add-form__info'>
          {errorMessage}
          <div className='add-form__counter'>
            {props.value ? props.value.length : 0}/{props.maxLength}
          </div>
        </div>
      </div>
    </label>
  );
};

const FormControl = ({ isValid, dirty, isValidating, isSubmitting }) => {
  const activeSubmitBtn = isValid && dirty && !isValidating && !isSubmitting;

  return (
    <div className='add-form__actions'>
      <Link to='/posts' className='add-form__dlink-back'>
        Cancel and return to the list
      </Link>
      <button type='submit' disabled={!activeSubmitBtn} className='add-form__btn-submit'>
        Save
      </button>
    </div>
  );
};

const AddForm = (props) => {
  const maxLength = {
    title: 80,
    categories: 80,
    content: 450,
  };

  return (
    <Formik
      initialValues={{ title: '', categories: '', content: '' }}
      validate={(values) => {
        const errors = {};

        if (!values.title) {
          errors.title = { type: 'required', message: 'You must enter title' };
        } else if (values.title.length > maxLength.title) {
          errors.title = {
            type: 'other',
            message: `Must be ${maxLength.title} characters or less`,
          };
        }

        if (!values.categories) {
          errors.categories = { type: 'required', message: 'You must enter categories' };
        } else if (values.categories.length > maxLength.categories) {
          errors.categories = {
            type: 'other',
            message: `Must be ${maxLength.categories} characters or less`,
          };
        }

        if (!values.content) {
          errors.content = { type: 'required', message: 'You must enter content' };
        } else if (values.content.length > maxLength.content) {
          errors.content = {
            type: 'other',
            message: `Must be ${maxLength.content} characters or less`,
          };
        }

        return errors;
      }}
      onSubmit={(values) => {
        values.categories = cleanCategories(values.categories);
        props.onSubmit(values);
      }}
    >
      {(props) => {
        return (
          <form className='add-form' onSubmit={props.handleSubmit}>
            <FormField
              type='input'
              name='title'
              value={props.values.title}
              placeholder='Enter title *'
              error={props.errors.title}
              touched={props.touched.title}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              maxLength={maxLength.title}
            />
            <FormField
              type='input'
              name='categories'
              value={props.values.categories}
              placeholder='Enter categories * (comma separated values)'
              error={props.errors.categories}
              touched={props.touched.categories}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              maxLength={maxLength.categories}
            />
            <FormField
              type='textarea'
              name='content'
              value={props.values.content}
              placeholder='Enter content *'
              error={props.errors.content}
              touched={props.touched.content}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              maxLength={maxLength.content}
            />
            <FormControl
              dirty={props.dirty}
              isValid={props.isValid}
              isValidating={props.isValidating}
              isSubmitting={props.isSubmitting}
            />
          </form>
        );
      }}
    </Formik>
  );
};

export default AddForm;
