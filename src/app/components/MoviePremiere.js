"use client"
import { useRouter } from 'next/navigation';
import Slider from "react-slick";
import MovieCard from "./MovieCard";

export default function MoviePremiere() {
    const router = useRouter();

    const PremiereSliders = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    let movieList = [
        {
            title: "Benched",
            slug: 'benched',
            category: "Comedy",
            rating: 7.1,
            image: "/images/movie_poster_1.jpg"
        },
        {
            title: "Whitney",
            slug: 'whitney',
            category: "Romance Drama",
            rating: 6.3,
            image: "/images/movie_poster_2.jpg"
        },
        {
            title: "Blind Spotting",
            slug: 'blind-spotting',
            category: "Comedy Drama",
            rating: 7.9,
            image: "/images/movie_poster_3.jpg"
        },
        {
            title: "I Dream in Another Language",
            slug: 'i-dream-in-another-language',
            category: "Action Triler",
            rating: 8.4,
            image: "/images/movie_poster_4.jpg"
        },
        {
            title: "Benched",
            slug: 'benched',
            category: "Comedy",
            rating: 7.1,
            image: "/images/movie_poster_5.jpg"
        },
        {
            title: "Whitney",
            slug: 'whitney',
            category: "Romance Drama",
            rating: 6.3,
            image: "/images/movie_poster_6.jpg"
        },
        {
            title: "Benched",
            slug: 'benched',
            category: "Comedy",
            rating: 7.1,
            image: "/images/movie_poster_1.jpg"
        },
        {
            title: "Whitney",
            slug: 'whitney',
            category: "Romance Drama",
            rating: 6.3,
            image: "/images/movie_poster_2.jpg"
        },
        {
            title: "Blind Spotting",
            slug: 'blind-spotting',
            category: "Comedy Drama",
            rating: 7.9,
            image: "/images/movie_poster_3.jpg"
        },
        {
            title: "I Dream in Another Language",
            slug: 'i-dream-in-another-language',
            category: "Action Triler",
            rating: 8.4,
            image: "/images/movie_poster_4.jpg"
        },
        {
            title: "Benched",
            slug: 'benched',
            category: "Comedy",
            rating: 7.1,
            image: "/images/movie_poster_5.jpg"
        },
        {
            title: "Whitney",
            slug: 'whitney',
            category: "Romance Drama",
            rating: 6.3,
            image: "/images/movie_poster_6.jpg"
        }
    ];

    return (
        <section className="movie-premiere">
            <div className="container">
                <div className="movie-premiere-title" data-aos="fade-up">
                    <h2>Expected premiere</h2>
                </div>
                <div className="movie-premiere-content" data-aos="fade-up">
                    <Slider {...PremiereSliders}>
                        {
                            movieList.map((item, index) => {
                                return (
                                    <div key={index} className="item">
                                        <MovieCard title={item.title} slug={item.slug} category={item.category} rating={item.rating} src={item.image} />
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>
                <div className="movie-premiere-load-more">
                    <a onClick={() => router.push('/movies')}>SHOW MORE</a>
                </div>
            </div>
        </section>
    );
}