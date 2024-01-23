import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import store from '../utils/store';
import {
  faBarsStaggered,
  faClapperboard,
  faClockRotateLeft,
  faFilm,
  faFire,
  faHome,
  faMusic,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay, faCircleUser, faClock, faNewspaper } from '@fortawesome/free-regular-svg-icons';

const Slidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="py-4  w-56 h-full  overflow-y-scroll fixed top-[3.8rem] bg-white ">
      <ul>
        <Link to="/">
          <li className="flex py-2 border-0 rounded-xl cursor-pointer hover:bg-gray-100 last:mb-2 ">
            <div>
              <FontAwesomeIcon icon={faHome} />
            </div>
            <div className="ml-5 text-gray-700">Home</div>
          </li>
        </Link>
        <li className="flex py-2 border-0 rounded-xl cursor-pointer hover:bg-gray-100 last:mb-2">
          <div>
            <FontAwesomeIcon icon={faCirclePlay} />
          </div>
          <div className="ml-5 text-gray-700">Shorts</div>
        </li>
        <li className="flex py-2 border-0 rounded-xl cursor-pointer hover:bg-gray-100 last:mb-2 ">
          <div>
            <FontAwesomeIcon icon={faClapperboard} />
          </div>
          <div className="ml-5 text-gray-700">Subscriptions</div>
        </li>
      </ul>

      <div className="mt-3">
        <div className="mb-1  flex items-center">
          <span className="text-lg font-semibold mr-1">You</span>
          <i className="fa-solid fa-chevron-right fa-sm"></i>
        </div>
        <ul>
          <li className="flex py-2 border-0 rounded-xl cursor-pointer hover:bg-gray-100 last:mb-2 ">
            <div>
              <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <div className="ml-5 text-gray-700">Your Channel</div>
          </li>
          <li className="flex py-2 border-0 rounded-xl cursor-pointer hover:bg-gray-100 last:mb-2">
            <div>
              <FontAwesomeIcon icon={faClockRotateLeft} />
            </div>
            <Link to="/history">
              <div className="ml-5 text-gray-700">History</div>
            </Link>
          </li>
          <li className="flex py-2 border-0 rounded-xl cursor-pointer hover:bg-gray-100 last:mb-2 ">
            <div>
              <FontAwesomeIcon icon={faVideo} />
            </div>
            <div className="ml-5 text-gray-700">Your Videos</div>
          </li>
          <li className="flex py-2 border-0 rounded-xl cursor-pointer hover:bg-gray-100 last:mb-2 ">
            <div>
              <FontAwesomeIcon icon={faFilm} />
            </div>
            <div className="ml-5 text-gray-700">Your Courses</div>
          </li>
          <li className="flex py-2 border-0 rounded-xl cursor-pointer hover:bg-gray-100 last:mb-2 ">
            <div>
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="ml-5 text-gray-700">Watch Later</div>
          </li>
        </ul>
      </div>

      <div className="mt-3">
        <div className="mb-1  flex items-center">
          <span className="text-lg font-semibold mr-1">Explore</span>
          <i className="fa-solid fa-chevron-right fa-sm"></i>
        </div>
        <ul>
          <li className="flex py-2 border-0 rounded-xl cursor-pointer hover:bg-gray-100 last:mb-2 ">
            <div>
              <FontAwesomeIcon icon={faFire} />
            </div>
            <div className="ml-5 text-gray-700">Trending</div>
          </li>
          <li className="flex py-2 border-0 rounded-xl cursor-pointer hover:bg-gray-100 last:mb-2">
            <div>
              <FontAwesomeIcon icon={faMusic} />
            </div>
            <div className="ml-5 text-gray-700">Music</div>
          </li>
          <li className="flex py-2 border-0 rounded-xl cursor-pointer hover:bg-gray-100 last:mb-2 ">
            <div>
              <FontAwesomeIcon icon={faFilm} />
            </div>
            <div className="ml-5 text-gray-700">Films</div>
          </li>
          <li className="flex py-2 border-0 rounded-xl cursor-pointer hover:bg-gray-100 last:mb-2 ">
            <div>
              <FontAwesomeIcon icon={faBarsStaggered} />
            </div>
            <Link to="/Live">
              <div className="ml-5 text-gray-700">Live</div>
            </Link>
          </li>
          <li className="flex py-2 border-0 rounded-xl cursor-pointer hover:bg-gray-100 last:mb-2 ">
            <div>
              <FontAwesomeIcon icon={faNewspaper} />
            </div>
            <div className="ml-5 text-gray-700">News</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Slidebar;
