function showProfile() {
    var bodyHTML = `
        <nav id="navbar">
            <i class="fas fa-home" onclick="showHomePage()"></i>
            <i class="fas fa-tasks" onclick="showProjects()"></i>
            <i class="fas fa-envelope" onclick="showContact()"></i>
        </nav>
        <div id="profile-container">
            <div id="skill-container">
                <div class="skill-sub-cont">
                    <div class="skill-title">SKILLS</div>
                    <div class="progressBar">
                        <label>HTML</label>
                        <progress value="85" max="100"></progress>
                    </div>
                    <div class="progressBar">
                        <label>CSS</label>
                        <progress value="82" max="100"></progress>
                    </div>
                    <div class="progressBar">
                        <label>JavaScript</label>
                        <progress value="80" max="100"></progress>
                    </div>
                    <div class="progressBar">
                        <label>PHP</label>
                        <progress value="75" max="100"></progress>
                    </div>
                    <div class="progressBar">
                        <label>C++</label>
                        <progress value="95" max="100"></progress>
                    </div>
                    <div class="progressBar">
                        <label>C</label>
                        <progress value="90" max="100"></progress>
                    </div>
                    <div class="progressBar">
                        <label>Python</label>
                        <progress value="50" max="100"></progress>
                    </div>
                    <div class="progressBar">
                        <label for="microsoft-sql-server">Microsoft SQL Server</label>
                        <progress id="microsoft-sql-server" value="85" max="100"></progress>
                    </div>
                    <div class="progressBar">
                        <label for="postgresql">PostgreSQL</label>
                        <progress id="postgresql" value="80" max="100"></progress>
                    </div>
                    <div class="progressBar">
                        <label for="oracle">Oracle</label>
                        <progress id="oracle" value="80" max="100"></progress>
                    </div>
                    <div class="progressBar">
                        <label for="source-control">Source Control</label>
                        <progress id="source-control" value="95" max="100"></progress>
                    </div>
                    <div class="progressBar">
                        <label for="oop">OOP</label>
                        <progress id="oop" value="65" max="100"></progress>
                    </div>
                    <div class="progressBar">
                        <label for="solid-methodology">Solid Methodology</label>
                        <progress id="solid-methodology" value="60" max="100"></progress>
                    </div>
                    <div class="progressBar">
                        <label for="vs-code">VS Code</label>
                        <progress id="vs-code" value="80" max="100"></progress>
                    </div>
                    <div class="progressBar">
                        <label for="chrome-dev-tools">Chrome Dev Tools</label>
                        <progress id="chrome-dev-tools" value="95" max="100"></progress>
                    </div>
                </div>
                <div class="skill-sub-cont">
                    <div class="skill-title">LANGUAGES</div>
                    <div class="progressBar">
                        <label for="english">English</label>
                        <progress id="english" value="80" max="100"></progress>
                    </div>
                    <div class="progressBar">
                        <label for="bangla">Bangla</label>
                        <progress id="bangla" value="95" max="100"></progress>
                    </div>
                </div>
                <div class="skill-sub-cont">
                    <div class="skill-title">INTERESTS</div>
                    <div>
                        Programming, Travelling, Books, People
                    </div>
                </div>
                <div class="skill-sub-cont">
                    <div class="skill-title">ONLINE ACTIVITY</div>
                    <div>
                        <a href="https://codeforces.com/profile/Soomanib_037" target="_blank">CodeForces</a>
                    </div>
                </div>
            </div>
            <div id="experience-container">
                <div id="job-experience" class="experience-sub-cont">
                    <div class="experience-type">
                        <i class="fas fa-briefcase"></i>
                        WORK EXPERIENCE
                    </div>
                    <div class="job-experience-sub-cont">
                        <div class="experience-title">Software Engineer</div>
                        <div class="institution-title">Enosis Solutions</div>
                        <div class="institution-link"><a href="https://www.enosisbd.com" target="_blank">www.enosisbd.com</a></div>
                        <div>Sep 2020 - Present</div>
                        <div class="description">
                            <span>Major Responsibilities:</span>
                            <ul>
                                <li>Full Stack Web Development on SaaS platform</li>
                                <li>Hybrid Mobile App Development</li>
                                <li>Source Control and Conflict Resolution</li>
                                <li>Build and Deployment</li>
                                <li>Documentation</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="academic-experience" class="experience-sub-cont">
                    <div class="experience-type">
                        <i class="fas fa-user-graduate"></i>
                        EDUCATION
                    </div>
                    <div class="academic-experience-sub-cont">
                        <div class="experience-title">Bachelor of Science (Engineering) in Computer Science and Engineering</div>
                        <div class="institution-title">Khulna University of Engineering & Technology</div>
                        <div class="institution-link"><a href="https://kuet.ac.bd" target="_blank">www.kuet.ac.bd</a></div>
                        <div>Mar 2016 - Mar 2020</div>
                        <div class="description">
                            <span>Core Courses:</span>
                            <ul>
                                <li>Structural Programming, Object Oriented Programming, Advanced Programming</li>
                                <li>Web Programming, Software Development</li>
                                <li>Algorithm and Data Structures</li>
                                <li>Discrete Mathematics, Linear Algebra, Probability and Statistics</li>
                                <li>Machine Learning, Artificial Intelligence, Data Mining, Natural Language Processing</li>
                                <li>Computer Networks, Computer Networks and Security</li>
                            </ul>
                        </div>
                    </div>
                    <div class="academic-experience-sub-cont">
                        <div class="experience-title">Higher School Certificate</div>
                        <div class="institution-title">Savar Cantonment Public School & College</div>
                        <div class="institution-link"><a href="http://www.scpsc.edu.bd/" target="_blank">www.scpsc.edu.bd</a></div>
                        <div>Jun 2013 - Apr 2015</div>
                        <div class="description">
                            <span>Core Courses:</span> Physics, Chemistry, Mathematics, Higher Mathematics, Biology
                        </div>
                    </div>
                    <div class="academic-experience-sub-cont">
                        <div class="experience-title">Secondary School Certificate</div>
                        <div class="institution-title">Savar Cantonment Public School & College</div>
                        <div class="institution-link"><a href="http://www.scpsc.edu.bd/" target="_blank">www.scpsc.edu.bd</a></div>
                        <div>Jan 2011 - Mar 2013</div>
                        <div class="description">
                            <span>Core Courses:</span>: Physics, Chemistry, Mathematics, Biology
                        </div>
                    </div>
                </div>
                <div id="certificates" class="experience-sub-cont">
                    <div class="experience-type">
                        <i class="fas fa-certificate"></i>
                        CERTIFICATES
                    </div>
                    <div class="certificates-sub-cont">
                        <div class="experience-title">CISCO Certified Network Associate (Routing & Switching)</div>
                        <div class="institution-title">CISCO</div>
                        <div class="institution-link"><a href="https://www.netacad.com/academy/1062" target="_blank">www.netacad.com/academy/1062</a></div>
                        <div>Nov 2020</div>
                        <div class="description">
                            <span>Courses:</span>
                            <ul>
                                <li>CCNA R&S: Routing and Switching Essentials</li>
                                <li>CCNA R&S: Connecting Networks</li>
                                <li>CCNA R&S: Introduction to Networks</li>
                                <li>CCNA R&S: Scaling Networks</li>
                            </ul>
                        </div>
                    </div>
                    <div class="certificates-sub-cont">
                        <div class="experience-title">Fundamental Information Technology Engineers Examination (ITEE-FE)</div>
                        <div class="institution-title">Bangladesh Computer Council</div>
                        <div class="institution-link"><a href="http://bditec.gov.bd/" target="_blank">www.bditec.gov.bd</a></div>
                        <div>Oct 2018</div>
                    </div>
                </div>
                <div id="achievements" class="experience-sub-cont">
                    <div class="experience-type">
                        <i class="fas fa-trophy"></i>
                        AWARDS
                    </div>
                    <div class="achievements-sub-cont">
                        <div class="experience-title">Champion at Inter Department Indoor Games (Chess-Female) -2020</div>
                        <div class="institution-title">Khulna University of Engineering & Technology</div>
                        <div>Mar 2020</div>
                    </div>
                    <div class="achievements-sub-cont">
                        <div class="experience-title">Champion at Rokeya Hall Indoor Games (Chess-Female) -2020</div>
                        <div class="institution-title">Khulna University of Engineering & Technology</div>
                        <div>Oct 2019</div>
                    </div>
                    <div class="achievements-sub-cont">
                        <div class="experience-title">Samsung EDGE Program Runners-Up</div>
                        <div class="institution-title">Samsung R&D BD</div>
                        <div>Jan 2018</div>
                    </div>
                </div>
                <div id="extra-curricular-activities" class="experience-sub-cont">
                    <div class="experience-type">
                        <i class="fas fa-hands-helping"></i>
                        EXTRA CURRICULAR ACTIVITIES
                    </div>
                    <div class="extra-curricular-activities-sub-cont">
                        <div class="experience-title">Assistant General Secretary</div>
                        <div class="institution-title">Dream-Voluntary Blood Donation Society of KUET</div>
                        <div class="institution-link"><a href="https://www.facebook.com/DreamKuet/" target="_blank">www.facebook.com/DreamKuet</a></div>
                        <div>Mar 2016 - Mar 2020</div>
                    </div>
                    <div class="extra-curricular-activities-sub-cont">
                        <div class="experience-title">EX-COM Member</div>
                        <div class="institution-title">IEEE Student Branch KUET</div>
                        <div class="institution-link"><a href="https://www.ieeekuetsb.org/" target="_blank">www.ieeekuetsb.org</a></div>
                        <div>Jan 2019 - Jan 2020</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    saveToBodyHTML(bodyHTML);
}
