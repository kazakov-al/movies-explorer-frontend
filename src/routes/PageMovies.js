import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import Movies from '../components/Movies/Movies';
import Footer from '../components/Footer/Footer';

function PageMovies(props) {
  const { movies, handleSearchForm, isProcessing, serverResponse } = props;

  return (
    <>
      <Header />
      <Content>
        <Movies
          movies={movies}
          handleSearchForm={handleSearchForm}
          isProcessing={isProcessing}
          serverResponse={serverResponse}
        />
      </Content>
      <Footer />
    </>
  );
}

export default PageMovies;
