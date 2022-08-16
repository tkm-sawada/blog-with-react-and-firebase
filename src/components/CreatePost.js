import React, { useEffect, useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();
  const navigate = useNavigate();

  const createPost = async() => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });

    //リダイレクト
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth){
      navigate("/login");
    }
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-14 mx-auto">
        <div className="py-10 rounded bg-white shadow-lg">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">記事を投稿する</h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="title" className="leading-7 text-sm text-gray-600">タイトル</label>
                  <input type="text" id="title" name="title" placeholder="タイトルを入力" 
                         onChange={(e) => setTitle(e.target.value)} 
                         className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="postedText" className="leading-7 text-sm text-gray-600">投稿</label>
                  <textarea id="postedText" name="postedText" placeholder="投稿内容を入力" 
                            onChange={(e) => setPostText(e.target.value)} 
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button onClick={createPost} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">投稿する</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreatePost