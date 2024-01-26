import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toogleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/contant';
import { cacheResults } from '../utils/searchSlice';
import { Link } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const dispatch = useDispatch();

  const color = useSelector((store) => store.color.toggle);

  const searchCatch = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCatch[searchQuery]) {
        setSuggestions(searchCatch[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      }),
    );
  };

  const handleScroll = () => {
    dispatch(toogleMenu());
  };

  const list = useSelector((store) => store.History.List);

  console.log(list);

  return (
    <div className={`grid grid-flow-col p-2 m-2 ${color ? 'dark' : 'light'}`}>
      <div className="flex items-center col-span-1 cursor-pointer">
        <img
          onClick={handleScroll}
          className="h-8"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="Menu Icon"
        />
        <img
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="YouTube Logo"
        />
      </div>

      <div className="col-span-10 flex justify-center items-center relative">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full p-2"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {suggestions.length > 0 && (
          <ul className="absolute top-full transform -translate-x-8 w-1/2 border bg-white  rounded-lg shadow-md p-2 m-1 text-lg ">
            {suggestions.map((suggestion, index) => (
              <li className="px-2 px=1  cursor-pointer hover:peer-hover:first-line:" key={index}>
                <Link to={'/seachResult?n=' + suggestion}> ⌕ {suggestion}</Link>
              </li>
            ))}
          </ul>
        )}

        <Link to={'/seachResult?n=' + searchQuery}>
          <button className="border border-gray-400 rounded-r-full p-2">Search</button>
        </Link>
      </div>

      <div className="flex items-center col-span-1 justify-end">
        <img
          className="h-8"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
          alt="Profile Image"
        />
      </div>
    </div>
  );
};

export default Header;
