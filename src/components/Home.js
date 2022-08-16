import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase';

const Home = ({ isAuth }) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setPostList(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPost();
  }, []);

  // 削除ボタン
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-14 mx-auto">
        <div className="p-4 w-full">
            {postList.map((post) => {
              return (
                <div key={post.id}  className="h-full border-2 border-gray-200 border-opacity-60 bg-white rounded-lg overflow-hidden shadow-lg mb-8">
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{post.title}</h1>
                    <p className="leading-relaxed mb-3">{post.postText}</p>
                    <div className="flex justify-between flex-wrap ">
                      <div>@{post.author.username}</div>
                      {isAuth && post.author.id === auth.currentUser.uid && (
                      <button onClick={() => handleDelete(post.id)} className="text-white bg-red-600 py-1 px-2 focus:outline-none hover:bg-red-800 rounded text-sm">削除</button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  )
}

export default Home