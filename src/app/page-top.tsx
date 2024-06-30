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
                <li className="current"><a href="top.html">top</a></li>
                <li><a href="about.html">about</a></li>
                <li><a href="past.html">past</a></li>
                <li><a href="continue.html">continue</a></li>
            </ul>
        </nav>
    </header>
    
    <p className="TextTyping">自己紹介</p>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="></script>
<script src="top.js"></script>
</div>
    )
}