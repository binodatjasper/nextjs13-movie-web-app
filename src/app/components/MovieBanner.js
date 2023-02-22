import HilightMovieList from "./HilightMovieList";
import MovieList from "./MovieList";

export default function MovieBanner() {
    return (
        <section className="movie-banner">
            <div className="container">
                <div className="movie-banner-content">
                    <div className="movie-banner-title">
                        <h2><span>NEW ITEMS</span> OF THIS SEASON</h2>
                    </div>
                    <div className="movie-banner-list">
                        <MovieList />
                    </div>
                    <div className="movie-hilight-list">
                        <HilightMovieList />
                    </div>
                </div>
            </div>
        </section>
    );
}