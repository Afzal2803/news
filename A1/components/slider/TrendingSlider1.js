import Link from "next/link";
import { getFeed } from "@/api/postReducer";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { throttle } from "lodash";

export default function TrendingSlider1() {
  const dispatch = useDispatch();
  const [pages, setpages] = useState(1);
  const { newsFeed } = useSelector((state) => state.post);
  console.log("newsFeed", newsFeed);
  const payload = {
    page: pages,
    limit: 10,
    category: [],
    type: "",
    district: [],
    filter: "",
    mainFeed: true,
  };
  const formatDate = (dateVal) => {
    const date = new Date(dateVal);
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${day} ${months[month]} ${year}`;
  };

  const formatTime = (time) => {
    const currentTime = new Date();
    const pastTime = new Date(time);

    const diffInMs = currentTime - pastTime;
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"} ago`;
    }

    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
    }

    return `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
  };
  useEffect(() => {
    dispatch(getFeed(payload));
  }, []);
  const handlePagination = (act) => {
    if (act === "next") {
      setpages((prevPages) => {
        const newPage = prevPages + 1;
        dispatch(getFeed({ ...payload, page: newPage }));
        return newPage;
      });
    } else {
      setpages((prevPages) => {
        const newPage = prevPages - 1;
        dispatch(getFeed({ ...payload, page: newPage }));
        return newPage;
      });
    }
  };
  const throttledPagination = useCallback(
    throttle((act) => handlePagination(act), 500),
    []
  );
  const truncateDescriptionByLetters = (description, charLimit) => {
    if (description.length > charLimit) {
      return description.slice(0, charLimit) + "...";
    }
    return description;
  };
  console.log("fuidshfniusadjfhnsif", newsFeed.length);
  return (
    <>
      <div className="ta-owl-nav ta-owl-nav__top-right ta-owl-nav__top-right--top-60 position-relative">
        <div className="rcp-slider-wrapper row">
          {newsFeed.map((article, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              {console.log(article, "asdfghj")}
              <article
                className="ta-blog-box ta-thumb-zoom ta-blog-box__style-2 ta-stroke"
                key={index}
              >
                <div className="thumb">
                  {article.type === "video" ? (
                    <video
                      src={article.file}
                      controls
                      // autoPlay
                      style={{
                        width: "30rem",
                        height: "15rem",
                        maxWidth: "100%",
                        zIndex: 2,
                        position: "relative",
                      }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={article.file}
                      alt="blog"
                      style={{
                        width: "30rem",
                        height: "15rem",
                        maxWidth: "100%",
                      }}
                    />
                  )}
                  <div className="ta-blog-box__cats ta-blog-box__cats--right">
                    {/* <Link href="#0">{article.category}</Link> */}
                  </div>
                  {/* <VideoPopup style={1} /> */}
                </div>
                <div className="content">
                  <ul className="ta-blog-box__meta-info meta-infos d-flex justify-content-center align-items-center list-unstyled tfy-neg-30 ta-stroke">
                    <li>
                      <span className="author-wrapper d-flex justify-content-center align-items-center">
                        <span className="by">By</span>
                        <span className="author-name">
                          {article.reporterName}
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>{formatDate(article.date)}</span>
                    </li>
                  </ul>
                  <h3 className="ta-blog-box__title ta-blog-box__title--small ta-border-effect">
                    {article.title}
                  </h3>
                  <div className="excerpt excerpt__small mt-15">
                    <p className="newsdescription">
                      {truncateDescriptionByLetters(article.description, 200)}
                    </p>
                  </div>
                  <div className="readmore d-flex justify-content-between align-items-center">
                    <Link
                      href={`/news/${article?._id}`}
                      className="ta-inline-btn"
                    >
                      Read More <i className="fa fa-long-arrow-right" />
                    </Link>
                    <div className="ta-blog-box__share-info share-info d-flex justify-content-center align-items-center">
                      <ul className="d-flex justify-content-center align-items-center list-unstyled">
                        <i className="fa fa-clock me-2" /> 
                        {formatTime(article.updatedDate)}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
      <div className="pagination-main">
        <button
          className="pagination-button"
          onClick={() => throttledPagination("previous")}
          disabled={pages === 1}
        >
          Previous
        </button>
        <button
          className="pagination-button"
          onClick={() => throttledPagination("next")}
          disabled={newsFeed?.length === 0}
        >
          Next
        </button>
      </div>
    </>
  );
}
