import React from "react";
export default function app() {
  return (
    <div>
      <header>
        <h1>
          <a href="top.html">Airi Matsuoka</a>
        </h1>
        <nav className="pc-nav">
          <ul className="gnavi">
            <li><a href="top.html">top</a></li>
            <li className="current"><a href="about.html">about</a></li>
            <li><a href="past.html">past</a></li>
            <li><a href="continue.html">continue</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h3>自己紹介</h3>
        <div className="tape-box">
          <div className="tape"></div>
          <p>名前</p>
          <h4>松岡愛梨</h4>
        </div>

        <div className="tape-box2">
          <div className="tape2"></div>
          <p>出身</p>
          <h4>富山県<img src="/istockphoto-842082264-612x612.jpg" alt="景色" width="150" height="150" className="float" /><img src="/toyama_7_kencho-mei_g.png" alt="富山地図" width="150" height="150" className="img-right" /></h4>
        </div>

        <div className="tape-box">
          <div className="tape"></div>
          <p>趣味</p>
          <h4>動画視聴、読書</h4>
        </div>
        <div className="tape-box">
          <div className="tape"></div>
          <p>やりたいこと</p>
          <h4>バイト、旅行</h4>
        </div>
      </main>
    </div>
  )
}