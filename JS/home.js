function showHomePage() {
    var bodyHTML = `
        <div id = "intro-container">
            <div id = "intro-container-box">
                <div id="intro-image-cont">
                    <div id="intro-image">
                        <div class="hair">
                            <div class="left-strand"></div>
                        </div>
                        <div class="optical-box">
                            <div class="left-glass"></div>
                            <div class="glass-connector"></div>
                            <div class="right-glass"></div>
                        </div>
                        <div id="table"></div>
                        <div id="laptop"></div>
                    </div>
                    <div id="intro-content">
                        <header id="name">
                            SOOMANIB KAMRUZZAMAN
                        </header>
                        <p id="about-me">
                            Hello! Welcome to my portfolio! I am a software engineer specialized in web development, algorithm and data structures. Have a look-around my portfolio. Contact me if you have any problems to solve!
                        </p>
                        <nav id="nav">
                            <span class="nav-button" onclick="showProjects()">Projects</span><span>|</span>
                            <span class="nav-button" onclick="showProfile()">Profile</span><span>|</span>
                            <span class="nav-button" onclick="showContact()">Contact Me</span>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    `;

    saveToBodyHTML(bodyHTML);
}