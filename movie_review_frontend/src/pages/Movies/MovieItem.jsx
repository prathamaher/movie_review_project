import { useNavigate } from "react-router-dom";

function MovieItem({ movie }) {
  const navigate = useNavigate();

  const handleReviewClick = () => {
    navigate(`/create-review/${movie.title}`, {
      state: { movie },
    });
  };

  return (
    <div className="card m-3">
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">
          Release Date : <span>{movie.releaseDate}</span>
        </p>
        <button onClick={handleReviewClick} className="btn btn-primary">
          Review this movie
        </button>
      </div>
    </div>
  );
}

export default MovieItem;
