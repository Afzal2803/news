"use client";
import styles from "../../pages/news/page.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router"; // Import useRouter
import Header3 from "@/components/layout/header/Header3";
import Preloader from "@/components/elements/Preloader";
import Layout from "@/components/layout/Layout";

export default function Page() {
  const { query } = useRouter(); // Access the query object from useRouter
  const { id } = query; // Destructure the 'id' from query
  
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return; // Exit early if 'id' is not yet available (e.g., on first render)

    axios
      .get(`https://dev.a1flashnews.com/post/getPostById/${id}`)
      .then((res) => {
        if (res?.data?.success) {
          const post = res.data.post;
          post.formattedDate = new Date(post.updatedDate).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          });
          setNews(post);
          setError(null);
        } else {
          setError("Failed to fetch news.");
        }
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setError(err.response?.data?.message || "An error occurred while fetching news.");
      });
  }, [id]);

  return (
    <>
    <Layout headerStyle={3}>
    {/* <div className={styles.headerWrapper}>
            <Header3 />
          </div> */}
      {/* <div className={styles.header}><img src="/images/A1-Logo.svg" alt="Logo " /></div> */}
      {error ? (
        <div className={styles.error} style={{ marginTop: "0px" }}>
          <img src="/images/notFound.png" alt="404" style={{ width: "100%", maxWidth: "500px", display: "block", margin: "auto" }} />
        </div>
      ) : news ? (
        <div className={styles.wrapContainer}>
          <div className={styles.newsContainer}>
          <div className={styles.newsImage}>
              {news.type === "video" ? (
                <video
                  src={news.file}
                  controls
                  autoPlay
                  style={{
                    maxWidth: "100%",
                    zIndex: 2,
                    position: "relative",
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={news?.file} alt="News Image" />
              )}
            </div>
            <div className={styles.newsContent}>
              <div className={styles.reporterdatemain}>
                <p>
                  {news.reporterName} | {news.location} |
                </p>
                <span>{news.formattedDate}</span>
              </div>
              <h2 className={styles.newsHeading}>{news.title}</h2>
              <p className={styles.newsdescription}>{news.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>  <Preloader/></div>
      )}
      </Layout>
    </>
  );
}
