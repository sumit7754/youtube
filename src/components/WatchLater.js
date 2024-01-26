import { useSelector } from 'react-redux';
import SearchVideoCard from './SearchVideoCard';
import { Link } from 'react-router-dom';

const WatchLater = () => {
  const List = useSelector((store) => store.watchLater.list);
  return (
    <div>
      {List.map((item) => (
        <Link key={item.id} to={'/watch?v=' + item.id}>
          <SearchVideoCard info={item} />
        </Link>
      ))}
    </div>
  );
};

export default WatchLater;
