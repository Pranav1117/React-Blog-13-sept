import React from "react";
import { data } from "../Utilities/ContextApi/ContextData";
import { useContext } from "react";
import HeaderCompo from "../Components/HeaderCompo";
import { Link } from "react-router-dom";
import "./Pages.css";
function Fitness() {
  const [detail] = useContext(data);

  return (
    <>
      <HeaderCompo />
      <h2 className="page-titles-right">Fitness Stories</h2>
      <div className="section-container">
        <div className="left-section">
          {" "}
          {detail
            .filter((item) => item.category === "Fitness")
            .map((i, index) => {
              console.log(i, index);
              return (
                <div key={index} className="left-section-info-container">
                  <div className="left-section-avatar">
                    <Link to={`/article/${i.id}`}>
                      <img
                        className="pages-topics-images"
                        alt="logo"
                        src={i.image}
                      ></img>
                    </Link>
                  </div>
                  <div className="info">
                    <h2 className="left-section-name">{i.name}</h2>
                    
                    <p className="left-section-para">{i.desc}</p>
                    <div className="left-sec-slash-wrapper">
                      <span className="left-sec-cat">{i.category + " "} /</span>
                      <span className="left-sec-postdate">
                        {" " + i.postdate}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="right-section">
          <h2 className="page-titles-left">Top Post</h2>

          <div className="right-sec-big-post">
            {detail
              .filter((item) => item.category === "Fitness" && item.id === 14)
              .map((item, index) => {
                return (
                  <>
                  <Link to={`/article/${item.id}`}><img
                      className="right-sec-big-avatar"
                      src={item.image}
                      alt="logo"
                    /></Link>
                    

                    <div className="">
                      <span className="right-sec-big-name">{item.name}</span>
                      
                    </div>
                  </>
                );
              })}
          </div>
              <hr/>

          <div className="right-sec-small-post">
            {detail
              .filter((item) => item.category === "Fitness")
              .map((i, index) => {
                return (
                  <div key={index} className="right-section-info-container">
                    <div className="right-section-avatar">
                      <Link to={`/article/${i.id}`}>
                        <img
                          alt="logo"
                          src={i.image}
                          className="right-sec-avatar-first"
                          /*style={{
                          width: 500,
                          height: 150,
                          borderRadius: 10,
                          marginRight: 40,
                        }}*/
                        ></img>
                      </Link>
                    </div>
                    <div className="right-section-info">
                      <h3 className="right-section-name"> {i.name}</h3>
                     
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="advertisement-container">Advertisement</div>
      </div>
    </>
  );
}

export default Fitness;
