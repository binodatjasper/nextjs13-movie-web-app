'use client';
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function MovieCard({ title, category, rating, src }) {
    const router = useRouter();

    return (
        <div className="movie-card">
            <div className="movie-card-thumbnail">
                <Image src={src} alt="" width={261} height={387} />
                <a onClick={() => router.push('/movies/movie-details')} className="movie-link">
                    <span>View Details</span>
                </a>
            </div>
            <div className="movie-card-detail">
                <h4 className="title">{title}</h4>
                <p className="category">{category}</p>
                <span className="rating"><img src="/images/star.svg" alt="" /> {rating}</span>
            </div>
        </div>
    );
}