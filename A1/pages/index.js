import HeroSlider1 from "@/components/slider/HeroSlider1";
import Layout from "@/components/layout/Layout";
import TrendingSlider1 from "@/components/slider/TrendingSlider1";
import { useState } from "react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Layout headerStyle={3} footerStyle={3}>
        {/* Featured blog section */}
        <HeroSlider1 />
        
        {/* Trending posts section */}
        <div className="rcp-area pt-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="ta-section-heading ta-section-heading__long-border mb-50">
                  <h2 className="ta-title ta-title--mid pr-130">
                    <span className="ta-title__tag">Trending news</span>
                    <span className="ta-long-border" />
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <TrendingSlider1 />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
