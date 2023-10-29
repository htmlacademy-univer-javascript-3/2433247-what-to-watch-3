import MediaInfo from '../../types/media-info';

function MediaCard({ media }: {
  media: MediaInfo;
}): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={media.preview}
          alt={media.name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
          {media.name}
        </a>
      </h3>
    </article>
  );
}

export default MediaCard;
