import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import getApiData from 'helpers/helpers';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  const getReviews = async () => {
    try {
      const { data } = await getApiData(`movie/${id}/reviews`);
      setReviews(data.results);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getReviews();
    // eslint-disable-next-line
  }, []);

  if (!reviews) {
    return;
  }

  if (reviews.length === 0) {
    return <p>We don`t have reviews for this movies</p>;
  }

  return (
    <ul>
      {reviews &&
        reviews.map(({ content, author }) => (
          <li key={author}>
            <div>
              <h4>{author}</h4>
              <p> {content}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Reviews;
