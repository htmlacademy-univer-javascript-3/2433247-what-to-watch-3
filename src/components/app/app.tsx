import Main from '../../pages/main/main';
import MediaInfo from '../../types/media-info';

export default function App({ mediaList }: { mediaList: ReadonlyArray<MediaInfo> }) {
  return <Main mediaList={mediaList}/>;
}
