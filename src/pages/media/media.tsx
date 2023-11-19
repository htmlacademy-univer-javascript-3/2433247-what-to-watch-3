import { Link, useParams } from 'react-router-dom';
import MediaInfo from '../../types/media-info';
import MediaList from '../../types/media-list';

function scoreToGrade(score: number) {
  if (score < 2) {
    return 'Awful';
  } else if (score < 4) {
    return 'Bad';
  } else if (score < 6) {
    return 'Ok';
  } else if (score < 8) {
    return 'Good';
  }

  return 'Very good';
}

function Media({ list }: MediaList): JSX.Element {
  const { id } = useParams();
  const media = list.find((item) => item.id === id) as MediaInfo;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={media.preview} alt={media.title} />
          </div>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{media.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{media.genre}</span>
                <span className="film-card__year">{media.releaseDate}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/films/${media.id}/player`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={`/films/${media.id}/review`} className="btn film-card__button">
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={media.poster}
                alt={media.title}
                width={218}
                height={327}
              />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">
                      Overview
                    </a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">
                      Details
                    </a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">
                      Reviews
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="film-rating">
                <div className="film-rating__score">{media.score}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{scoreToGrade(media.score)}</span>
                  <span className="film-rating__count">{media.ratings}</span>
                </p>
              </div>
              <div className="film-card__text">
                <p>{media.description}</p>
                <p className="film-card__director">
                  <strong>{media.director.join(', ')}</strong>
                </p>
                <p className="film-card__starring">
                  <strong>{media.cast.join(', ')}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {/* TODO */}
        </section>
      </div>
    </>
  );
}
export default Media;
