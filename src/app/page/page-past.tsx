import React from "react"
export default function app(){
    return(
        <div>
              <header>
        <h1>
            <a href="top.html">Airi Matsuoka</a>
        </h1>
        <nav className="pc-nav">
            <ul className="gnavi">
                <li><a href="top.html">top</a></li>
                <li><a href="about.html">about</a></li>
                <li className="current"><a href="past.html">past</a></li>
                <li><a href="continue.html">continue</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>これまで</h2>
        <div className="cozyspace-wrapper">
            <div className="container">
        　　　　<div className="cozyspace-message">
                <h3>小学生</h3>
                <p>暇なときしていたこと</p>
                <p>読書、ボール遊び</p>
              </div>
              <div className="cozyspace-img2">
                 <img src="/ book_hon_no_mushi_woman.png" width="400px" height="400px" />
              </div>
            </div>
        </div>
        <div className="cozyspace-wrapper">
            <div className="container">
              <div className="cozyspace-img">
                <img src="/画像3.png" width="700px" height="500px" />
              </div>
              <div className="cozyspace-message">
                <h3>中学生</h3>
                <p>部活動</p>
                <p>ハンドボール部</p>
                <p>副部長</p>
                <p>ポジション:左サイド</p>
              </div>
            </div>
        </div>
        <div className="cozyspace-wrapper">
            <div className="container">
        　　　　<div className="cozyspace-message">
                <h3>高校生</h3>
                <p>部活動</p>
                <p>ソフトボール部</p>
                <p>部長</p>
                <p>ポジション:キャッチャー                       </p>
              </div>
              <div className="cozyspace-img">
                <img src="/画像5.png" width="700px" height="500px" />
              </div>
            </div>
        </div>
    </main>
        </div>
    )
}