import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const logout = () => {
    //Googleでログイン
    signOut(auth).then(() => {
      //ローカルストレージの認証情報をクリア
      localStorage.clear();
      //認証解除
      setIsAuth(false);
      //リダイレクト
      navigate("/login");
    });
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container lg:w-1/3 md:w-1/2 w-full px-5 py-14 mx-auto frex justify-center">
        <div className="rounded bg-white shadow-lg p-8 flex flex-col mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">ログアウトする</h2>
          <button onClick={logout} className="text-white bg-gray-600 border-0 py-2 px-8 focus:outline-none hover:bg-gray-500 rounded text-lg">ログアウト</button>
        </div>
      </div>
    </section>
  )
}

export default Logout