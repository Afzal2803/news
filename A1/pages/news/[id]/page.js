"use client";
import styles from "../page.module.css";
import { useEffect, useState } from "react";
import { use } from "react";
import axios from "axios";

export default function Page({ params }) {
  const resolvedParams = use(params);
  const [news, setNews] = useState(null); // Use `null` initially to differentiate between no data and empty data
  const [error, setError] = useState(null); // State to track errors
  console.log(error);
  const { id } = resolvedParams;

  useEffect(() => {
    axios
      .get(`https://dev.a1flashnews.com/post/getPostById/${id}`)
      .then((res) => {
        console.log("response", res)
        if (res?.data?.success) {
          const post = res?.data?.post;
          post.formattedDate = new Date(post.updatedDate).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          });
          setNews(post);
          setError(null);
        } else {
          setError("Failed to fetch news."); // Custom error message
        }
      })
      .catch((err) => {
        // Handle errors
        console.log(err, "errrtyuiotyuio");
        setError(err.response?.data?.message);
        console.log(error, "errrrr", err.response?.data);
        // setNews(null); // Clear news data if there's an error
      });
  }, [id]);

  return (
    <>
      <div className={styles.header}><img src="/A1-Logo.svg" alt="Logo " /></div>
      {error ? ( // Check if there's an error
        <div className={styles.error} style={{ marginTop: "100px" }}>
          {/* <p>{error}</p> */}
          <img src="/notFound.png" alt="404" style={{ width: "100%", maxWidth: "500px", display: "block", margin: "auto" }} />
        </div>
      ) : news ? (
        <div className={styles.wrapContainer}>
          <div className={styles.newsContainer}>
            <div className={styles.newsImage}>
              <img src={news?.file} alt="News Image" />
              {/* <img src="/images/2.jpg" alt="News Image" /> */}
            </div>
            <div className={styles.newsContent}>
              <div className={styles.reporterdatemain}>
                <p>
                  {news?.reporterName} |{" "}

                  {news?.location} |{" "}
                </p>
                <span>{news?.formattedDate}</span>
              </div>
              <h2 className={styles.newsHeading}>{news?.title}</h2>
              <p className={styles.newsdescription}>{news?.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div><p>Loading...</p></div> // Show loading state while fetching data
      )}
    </>
  );
}
