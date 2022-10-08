import {useEffect} from 'react';
import {useForm} from 'react-hook-form';

import Form from "../Form/Form";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import validations from '../../utils/validations';

import './SearchForm.css';

function SearchForm(props) {
  const { handleSearchForm, shortMoviesStatus, handleShortFilms, isProcessing } = props;

  const {
    register,
    formState: {
      errors,
    },
    watch,
    setValue,
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
  });
  const [ movieName ] = watch(['movie']);
  const {
    movie: movieRules,
  } = validations;

  function onSubmit() {
    handleSearchForm(movieName);

    localStorage.setItem('movieSearch', movieName);
  }

  useEffect(() => {
    const saveValue = localStorage.getItem('movieSearch');

    if (location.pathname === '/movies' && saveValue) {
      setValue('movie', localStorage.getItem('moviesSearch'))
    }
  }, []);

  return (
    <Form
      className="search-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="search-form__item">
        <input
          {...register('movie', {
            required: movieRules.required
          })}
          className="search-form__field"
          placeholder="Фильм"
        />

        <button
          className="search-form__submit"
          aria-label="Найти"
          disabled={isProcessing}
        />

        { errors?.movie && <span className="search-form__error">{ errors?.movie?.message }</span> }
      </div>

      <FilterCheckbox
        handleShortFilms={handleShortFilms}
        shortMoviesStatus={shortMoviesStatus}
      />
    </Form>
  );
}

export default SearchForm;
