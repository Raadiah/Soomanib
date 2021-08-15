function showContact() {
    var bodyHTML = `
        <div id = "contact-container">
            <p id="contact-me">
                Any queries? Please feel free to connect.
            </p>
            <nav id="nav">
                <i class="fas fa-home" onclick="showHomePage()"></i>
                <a href="https://www.linkedin.com/in/soomanib/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                <a href="mailto:radhimask@gmail.com" target="_blank"><i class="fas fa-at"></i></a>
                <a href="https://github.com/Radhima" target="_blank"><i class="fab fa-github"></i></a>
            </nav>
		</div>
    `;

    saveToBodyHTML(bodyHTML);
}