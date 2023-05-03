import button from "react-bootstrap/button";
import "./search.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const SearchYoutube = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {}, []);

  const handleSearch = async () => {
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "25",
        key: "AIzaSyABohGV4_qtzFmA3sfmfMQBJSe3Z_c9tkw",
        type: "video",
        q: query,
      },
    });
    console.log(res);
    if (res && res.data && res.data.items) {
      let rawData = res.data.items;
      let result = [];
      if (rawData && rawData.length > 0) {
        rawData.map((item) => {
          let object = {};
          object.id = item.id.videoId;
          object.title = item.snippet.title;
          object.author = item.snippet.channelTitle;
          object.description = item.snippet.description;
          object.publishTime = item.snippet.publishTime;
          result.push(object);
        });
      }
      setVideos(result);
    }
  };

  return (
    <div className="search-youtube">
      <div className="title">Search Youtube</div>
      <div>
        <div className="search">
          {/* AIzaSyABohGV4_qtzFmA3sfmfMQBJSe3Z_c9tkw */}
          <input
            type="text"
            placeholder="Search youtube"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="bigcontainer">
          {videos &&
            videos.length > 0 &&
            videos.map((item) => {
              return (
                <div className="container" key={item.id}>
                  <iframe
                    className="container-video"
                    // width="967"
                    // height="544"
                    src={`https://www.youtube.com/embed/${item.id}`}
                    title="#30 Full KHÔNG CHE &#39;Chức Năng Search Youtube&#39; Với React Hook và Google APIs Từ A đến Z"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <div className="container-text">
                    <div className="container-text-title">{item.title}</div>
                    <div className="container-text-addinfor">
                      <div>5N lượt xem</div>
                      <div>
                        * Publish At:
                        {moment(item.publishTime).format(
                          ` hh:mm:ss : YYYY-MM-DD`
                        )}
                      </div>
                    </div>
                    <div className="container-text-author">{item.author}</div>
                    <div className="container-text-description">
                      {item.description}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default SearchYoutube;
