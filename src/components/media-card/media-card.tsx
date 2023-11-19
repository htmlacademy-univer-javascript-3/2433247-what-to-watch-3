import { Link } from 'react-router-dom';
import MediaInfo from '../../types/media-info';

type MediaProps = {
  media: MediaInfo;
}

function MediaCard({ media }: MediaProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <Link className="small-film-card__link" to={`/films/${media.id}`}>
        <div className="small-film-card__image">
          <img
            src={media.preview}
            alt={media.title}
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-film-card__title">
          {media.title}
        </h3>
      </Link>
    </article>
  );
}

export default MediaCard;
