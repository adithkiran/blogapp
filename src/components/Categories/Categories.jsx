import React, { useEffect, useState } from "react";
import "../../components/Categories/Categories.css";
import listpost from "../../components/Assets/ListPostPic.png";
import profilepic from "../../components/Assets/profilepic.png";

const Categories = () => {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setPosts(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  //-------* Category list *---------//
  const tabs = posts.map((Category) => Category.category);
  console.log(tabs);
  const categoryItems = new Set(tabs);
  console.log(categoryItems);

  const handlerSelectCategory = (item) => {
    console.log(item)
    const harman = posts.filter((gh)=>(
      gh.category === item
    ))
    console.log(harman)
    setPosts(harman)

    // 
  }
  

  return (
    <>
      <div className="catagory-List">
        {Array.from(categoryItems).map((item) => (
          <button onClick={()=> handlerSelectCategory(item)} className="catagory">{item}</button>
        ))}
      </div>

      <h1>Latest Post</h1>

      <div className="main-page-lists">
        {posts.map((singlepost, index) => (
          <div key={index} className="main-page-post">
            <img className="main-post-pic" src={listpost} alt="posts" />
            <div className="post-labels">{singlepost.category}</div>
            <p className="main-page-post-title">{singlepost.title}</p>

            <div className="main-cover-profile-timestamp">
              <img className="profile-pic" src={profilepic} alt="profilepic" />
              <h5>{singlepost.authorFullName}</h5>
              <h5>{singlepost.postedDate}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
