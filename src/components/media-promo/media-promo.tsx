import MediaInfo from '../../types/media-info';

function MediaPromo({ media }: {
    media: MediaInfo;
}): JSX.Element {
  return (
    <div className="film-card__info">
      <div className="film-card__poster">
        <img
          src={media.poster}
          alt={media.name}
          width={218}
          height={327}
        />
      </div>
      <div className="film-card__desc">
        <h2 className="film-card__title">{media.name}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{media.genre || '$genre'}</span>
          <span className="film-card__year">{media.date || '$date'}</span>
        </p>
        <div className="film-card__buttons">
          <button className="btn btn--play film-card__button" type="button">
            <svg viewBox="0 0 19 19" width={19} height={19}>
              <use xlinkHref="#play-s" />
            </svg>
            <span>Play</span>
          </button>
          <button className="btn btn--list film-card__button" type="button">
            <svg viewBox="0 0 19 20" width={19} height={20}>
              <use xlinkHref="#add" />
            </svg>
            <span>My list</span>
            <span className="film-card__count">9</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MediaPromo;
