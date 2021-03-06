import PopularTvShows from './popularTvShows';
import PopularMovies from './popularMovies';
import Detail from './detail';

interface Store {
    popularTvShows: PopularTvShows,
    popularMovies: PopularMovies,
    selectedItem: Detail,
    similarItems: PopularMovies,
}
export default Store;
