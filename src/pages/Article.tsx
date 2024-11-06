import { useEffect, useState } from "react";
import "../styles/Articles.css";

interface Article {
  [key: string]: {
    Title: string;
    Category: string;
    Message: string;
    Timestamp: string;
  };
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("../Data/articles.json");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const latestArticleId = articles[articles.length - 1]?.id;

  return (
    <section className="container">
      <div className="blog-landing">
        <div className="blog-header-img">
          <img src="" alt="" />
        </div>
        <div className="blog-article-container">
          <div className="blog-article">
            <div className="article">
              <div className="article-header">
                <h1 className="article-title">
                  Unlocking the Power of Android: A Comprehensive Guide
                </h1>
              </div>
              <div className="article-body">
                <h2>Introduction</h2>
                <p>
                  In the ever-evolving landscape of technology, Android stands
                  out as a true trailblazer. With its open-source nature and
                  widespread adoption, Android has become synonymous with
                  innovation, powering a myriad of devices globally. This blog
                  post will delve into the rich world of Android, exploring its
                  history, key features, and the limitless possibilities it
                  offers to both developers and users.
                </p>
                <h2>Evolution of Android</h2>
                <h3>A Glimpse into the Past</h3>
                <p>
                  Android's journey began in 2003 when Andy Rubin, Rich Miner,
                  Nick Sears, and Chris White founded Android Inc. Google later
                  acquired the company in 2005, setting the stage for Android's
                  meteoric rise. The first commercial Android device, the HTC
                  Dream, was released in 2008, marking the beginning of a new
                  era in mobile technology.
                </p>
                <h3>Milestones and Versions</h3>
                <p>
                  Android has undergone several iterations since its inception,
                  with each version introducing new features and capabilities.
                  The following table provides a brief overview of the various
                  Android versions released to date.
                </p>
                <h2>Key Features of Android</h2>
                <h3>Open-Source</h3>
                <p>
                  Android is an open-source platform, meaning that its source
                  code is freely available for modification and redistribution.
                  This allows developers to customize the operating system to
                  suit their needs, resulting in a highly flexible and adaptable
                  platform.
                </p>
                <h3>Customizability</h3>
                <p>
                  Android's open-source nature enables developers to customize
                  the operating system to suit their needs. This results in a
                  highly flexible and adaptable platform, allowing users to
                  tailor their experience according to their preferences.
                </p>
                <h3>Security</h3>
                <p>
                  Android is built on top of the Linux kernel, which provides a
                  robust security framework. This ensures that the operating
                  system is protected from external threats, safeguarding user
                  data and privacy.
                </p>
                <h3>Compatibility</h3>
                <p>
                  Android is compatible with a wide range of devices, including
                  smartphones, tablets, smartwatches, and televisions. This
                  allows users to enjoy a seamless experience across multiple
                  devices, making Android a truly versatile platform.
                </p>
                <h3>Connectivity</h3>
                <p>
                  Android supports a wide range of connectivity options,
                  including Wi-Fi, Bluetooth, NFC, and USB. This allows users to
                  connect to a variety of devices, enabling them to share data
                  and media seamlessly.
                </p>
              </div>
              <div className="article-footer">
                <div className="share-border-line">
                  <div></div>
                </div>
                <div className="share-links">
                  <ul>
                    <li>
                      <a href="">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fas fa-link"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="share-border-line">
                  <div></div>
                </div>
              </div>
            </div>
            <div className="article-navigator">
              <div className="post-navigator">
                {latestArticleId === latestArticleId ? (
                  <div className="post-nav-label">
                    <h1>All Caught Up</h1>
                  </div>
                ) : (
                  <a href="">
                    <div className="post-nav-label">
                      <h1>Next Article</h1>
                    </div>
                    <div className="post-nav-icon">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
