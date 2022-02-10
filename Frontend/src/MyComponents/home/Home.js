import React from 'react'
import him from '../home/assests/im.png'
import her from '../home/assests/her.png'
import explore from '../home/assests/explore.png'
import Product from './Product'
import './Home.css'

const product = {
  name: "hoddie",
  price: "$11",
  img: [
    {
      url: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6c%2F15%2F6c150d060d3d1aa95459daf18fd28d23f183c429.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    },
  ],
  id: Math.random().toString,
};

function Home() {
    return (
      <div>
        <div className="tagline">
          <p className="tagline1">With an outstanding style, only for you</p>
          <p className="tagline2">Exclusively designed for you</p>
        </div>
        <div className="poster">
          <img className="him" src={him} alt="" />
          <img className="her" src={her} alt="" />
        </div>
        <div className="explore">
          <div className="explore__content">
            <p className="eline">Exclusive collection 2022</p>
            <p className="eline2">Be Exclusive</p>
            <p className="eline3">
              The best everyday option in a Super Saver range within a
              reasonable price. It is our responsibility to keep you 100 percent
              stylish. Be smart & trendy with us.
            </p>
            <div className="btnrap">
              <button className="btn">Explore</button>
            </div>
          </div>
          <div>
            <img className="eimg" src={explore} alt="" />
          </div>
        </div>
        <div className="popular_product_list">
          <div className="pheadingrap">
            <div className="pheading">Popular products</div>
          </div>
          <div className="pcontainer">
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
          </div>
        </div>
      </div>
    );
}

export default Home
