import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fallback from '../../assets/fallback.png';

import getApiData from 'helpers/helpers';
import Loader from 'components/Loader';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  const getCast = async () => {
    try {
      const { data } = await getApiData(`movie/${id}/credits`);
      setCast(data.cast);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getCast();
    window.scrollBy({
      top: window.innerHeight - 76,
      behavior: 'smooth',
    });
    // eslint-disable-next-line
  }, []);

  if (cast?.length === 0) {
    return <p>We don`t have info about cast for this movies</p>;
  }
  return cast ? (
    <ul>
      {cast.map(({ name, profile_path, character }) => (
        <li key={name}>
          <div>
            {profile_path && (
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : fallback
                }
                alt={name}
                width="150px"
                height="200px"
              />
            )}
            <h4>{name}</h4>
            <p> Character: {character}</p>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <Loader />
  );
};
export default Cast;
