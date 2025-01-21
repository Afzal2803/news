import Link from "next/link";
// import VideoPopup from "../elements/VideoPopup";
import { getFeed } from "@/api/postReducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TrendingSlider1() {
  const dispatch = useDispatch();
  const { newsFeed } = useSelector((state) => state.post);
  console.log("newsFeed", newsFeed);
  const payload = {
    page: 1,
    limit: 10,
    category: [],
    // categorie.length > 0 && hint !== 'Regional' ? [...categorie] : {},
    type: "",
    // typeFeed !== '' ? typeFeed : '',
    district: [],
    // hint === 'Regional' ? regional : [],
    filter: "",
    mainFeed: true,
    // hint === 'Regional' ? false : true,
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
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    let hoursData = hours > 12 ? hours - 12 : hours;
    let finalHours = (hoursData + "").length == 1 ? `0${hoursData}` : hoursData;

    return ` ${finalHours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
  };
  useEffect(() => {
    dispatch(getFeed(payload));
  }, []);
  const truncateDescriptionByLetters = (description, charLimit) => {
    if (description.length > charLimit) {
      return description.slice(0, charLimit) + "...";
    }
    return description;
  };
  //  const {nkkk} = useSelector((state) => state.get);

  //  console.log(nkkk,"neews")
  return (
    <>
      <div className="ta-owl-nav ta-owl-nav__top-right ta-owl-nav__top-right--top-60 position-relative">
        <div className="rcp-slider-wrapper row">
          {newsFeed.map((article, index) => (
            <div className="col-md-4 mb-4">
              <article
                className="ta-blog-box ta-thumb-zoom ta-blog-box__style-2 ta-stroke"
                key={index}
              >
                <div className="thumb">
                  {article.type === "video" ? (
                      <video
                        src={article.file}
                        controls
                        autoPlay
                        style={{
                          width: "30rem",
                          height: "15rem",
                          maxWidth: "100%",
                          zIndex:2,
                          position:"relative"
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
                      <Link
                        href="#0"
                        className="author-wrapper d-flex justify-content-center align-items-center"
                      >
                        <span className="by">By</span>
                        <span className="author-name">
                          {article.reporterName}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#0">{formatDate(article.date)}</Link>
                    </li>
                    {/* <li>
                                        <Link href="#0">
                                            <i className="fa fa-clock" /> {article.readTime}
                                        </Link>
                                    </li> */}
                  </ul>
                  <h3 className="ta-blog-box__title ta-blog-box__title--small ta-border-effect">
                    <Link href="/blog-details">{article.title}</Link>
                  </h3>
                  <div className="excerpt excerpt__small mt-15">
                    <p>
                      {truncateDescriptionByLetters(article.description, 200)}
                    </p>
                  </div>
                  <div className="bottom-wrapper pt-20 d-flex justify-content-between align-items-center mt-30">
                    <Link href="/blog-details" className="ta-inline-btn">
                      Read More <i className="fa fa-long-arrow-right" />
                    </Link>
                    <div className="ta-blog-box__share-info share-info d-flex justify-content-center align-items-center">
                      <ul className="d-flex justify-content-center align-items-center list-unstyled">
                        <Link href="#0">
                          <i className="fa fa-clock" /> {article.readTime}
                        </Link>
                        {/* <li>
                                                <i className="fa fa-heart" /> {article.likes}
                                            </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
