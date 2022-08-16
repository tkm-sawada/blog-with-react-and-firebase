import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'



const Navber = ({ isAuth }) => {
  return (
    <header className="bg-white text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <FontAwesomeIcon icon={faBlog} className="mr-2"/>
          <span className="ml-3 text-xl">簡単ブログ</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            <FontAwesomeIcon icon={faHouse} className="mr-2"/>ホーム
          </Link>
        { isAuth &&
          <Link to="/createpost" className="mr-5 hover:text-gray-900">
            <FontAwesomeIcon icon={faFilePen} className="mr-2"/>記事投稿
          </Link>
        }
        </nav>
        { !isAuth ? (
        <Link to="/login" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          <FontAwesomeIcon icon={faArrowRightToBracket} className="mr-2"/>ログイン
        </Link>
        ) : (
        <Link to="/logout" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          <FontAwesomeIcon icon={faArrowRightToBracket} className="mr-2"/>ログアウト
        </Link>
        )}
      </div>
    </header>
  )
}

export default Navber