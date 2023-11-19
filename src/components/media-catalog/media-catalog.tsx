import MediaList from '../../types/media-list';
import MediaCard from '../media-card/media-card';


function MediaCatalog({ list }: MediaList): JSX.Element {
  return (
    <div className="catalog__films-list">
      {
        list
          .slice(1)
          .map((media) => (
            <MediaCard
              key={media.title}
              media={media}
            />
          ))
      }
    </div>
  );
}

export default MediaCatalog;
