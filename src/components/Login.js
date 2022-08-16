import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const loginInWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth,provider).then((result) => {
      //ローカルストレージに認証情報をセット
      localStorage.setItem("isAuth", true);
      //認証済み
      setIsAuth(true);
      //リダイレクト
      navigate("/");
    });
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container lg:w-1/3 md:w-1/2 w-full px-5 py-14 mx-auto frex justify-center">
        <div className="rounded bg-white shadow-lg p-8 flex flex-col mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">サインイン</h2>
          <button onClick={loginInWithGoogle} className="text-black bg-white border border-gray-400 py-2 px-8 focus:outline-none hover:bg-gray-200 rounded text-lg">Googleでログイン</button>
        </div>
      </div>
    </section>
  )
}

export default Login