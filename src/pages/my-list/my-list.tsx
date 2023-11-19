import MediaCatalog from '../../components/media-catalog/media-catalog';
import MediaInfo from '../../types/media-info';

function MyList({ mediaList }: { mediaList: ReadonlyArray<MediaInfo> }): JSX.Element {
  return (
    <div className="user-page">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MediaCatalog list={mediaList} />
      </section>
    </div>
  );
}

export default MyList;
