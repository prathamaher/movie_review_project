import ReviewItem from "./ReviewItem";

function Reviews() {
  const reviews = [
    {
      title: "Forrest Gump",
      rating: "8",
      reviewer: "prathamesh",
      description: "a great movie tight tight tight",
      modified: "12-02-2005",
    },
    {
      title: "Forrest Gump",
      rating: "8",
      reviewer: "prathamesh",
      description: "a great movie tight tight tight",
      modified: "12-02-2005",
    },
  ];

  const renderedReviewList = reviews.map((review) => {
    return <ReviewItem review={review} />;
  });

  return <div>{renderedReviewList}</div>;
}

export default Reviews;
