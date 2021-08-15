function showProjects() {
    var bodyHTML = `
        <nav id="navbar">
            <i class="fas fa-home" onclick="showHomePage()"></i>
            <i class="fas fa-id-card-alt" onclick="showProfile()"></i>
            <i class="fas fa-envelope" onclick="showContact()"></i>
        </nav>
        <table id = "projects-container">
            <tbody>
                <tr class="project">
                    <td class="project-image-cont">
                        <a href="https://radhima.github.io/PostgreSQL/" target="_blank"><img class="project-image" src="img\\postgresql.png"/></a>
                    </td>
                    <td class="project-desc-cont">
                        <ul>
                            <li class="project-title">
                                Blog on PostgreSQL Basics
                            </li>
                            <li class="project-overview">
                                <p>
                                    A database is created on PostgreSQL for an Art Store, and a blog is created so that any new learner can easily understand PostgreSQL Basics.
                                </p>
                            </li>
                            <li class="project-tech">
                                <ul>
                                    <li>PostgreSQL</li>
                                </ul>
                            </li>
                        </ul>
                    </td>
                </tr>

                <tr class="project">
                    <td class="project-image-cont">
                        <img class="project-image disabled" src="img\\machine-translation.png"/>
                    </td>
                    <td class="project-desc-cont">
                        <ul>
                            <li class="project-title">
                                Machine Translation from English to Bangla using Neural Networks
                            </li>
                            <li class="project-overview">
                                <p>
                                    A machine translator is created using GRU based RNN encoder-decoder model with Bahdanau attention.  A BLEU score of 50.06 is obtained.
                                </p>
                            </li>
                            <li class="project-tech">
                                <ul>
                                    <li>Python3.0</li>
                                    <li>Kaggle</li>
                                </ul>
                            </li>
                            <p>
                                Due to submission to conference, the source code for this thesis cannot be shown.
                            </p>
                        </ul>
                    </td>
                </tr>

                <tr class="project">
                    <td class="project-image-cont">
                        <a href="https://github.com/Radhima/RooflessHouse'\" target="_blank"><img class="project-image" src="img\\house.png"/></a>
                    </td>
                    <td class="project-desc-cont">
                        <ul>
                            <li class="project-title">
                                Roofless House Graphical Environment
                            </li>
                            <li class="project-overview">
                                <p>
                                    A roofless brick house with windmill on table top is created. Translation, rotation and scaling are available for the environment. Interactive camera view with yaw, pitch, roll, camera rotation and walking is available. Interactive light and spot-light are also created. Texture is added to objects and Koch curve is applied.
                                </p>
                            </li>
                            <li class="project-tech">
                                <ul>
                                    <li>C++</li>
                                    <li>OpenGL</li>
                                    <li>CodeBlocks</li>
                                </ul>
                            </li>
                        </ul>
                    </td>
                </tr>

                <tr class="project">
                    <td class="project-image-cont">
                        <a href="https://github.com/Radhima/Art-Store-Database" target="_blank"><img class="project-image" src="img\\art-store.jpg"/></a>
                    </td>
                    <td class="project-desc-cont">
                        <ul>
                            <li class="project-title">
                                Art Store Database
                            </li>
                            <li class="project-overview">
                                <p>
                                    This is an art store database management for a typical store which sells art supplies. The system is made with Oracle-11g DBMS. It includes trigger, loop, PL-SQL, procedure and functions.
                                </p>
                            </li>
                            <li class="project-tech">
                                <ul>
                                    <li>Oracle11g</li>
                                    <li>PL-SQL</li>
                                </ul>
                            </li>
                        </ul>
                    </td>
                </tr>

                <tr class="project">
                    <td class="project-image-cont">
                        <a href="https://github.com/Radhima/AutomatedDoorLock" target="_blank"><img class="project-image" src="img\\doorlock.png"/></a>
                    </td>
                    <td class="project-desc-cont">
                        <ul>
                            <li class="project-title">
                                Automated Door Lock
                            </li>
                            <li class="project-overview">
                                <p>
                                    Using Python2, RFID reader, Raspberry Pi3 an automated door-lock system is created, which gives the user SMS-alert when anyone enters into their house using a reader. Information of the reader is added into a MySQL database. Unauthorized access is denied.
                                </p>
                            </li>
                            <li class="project-tech">
                                <ul>
                                    <li>Python2.0</li>
                                    <li>RFID</li>
                                    <li>Raspberry Pi 3</li>
                                    <li>MySQL</li>
                                </ul>
                            </li>
                        </ul>
                    </td>
                </tr>
                
                <tr class="project">
                    <td class="project-image-cont">
                        <a href="https://github.com/Radhima/Compiler_Design" target="_blank"><img class="project-image" src="img\\compiler-design.png"/></a>
                    </td>
                    <td class="project-desc-cont">
                        <ul>
                            <li class="project-title">
                                Compiler Design
                            </li>
                            <li class="project-overview">
                                <p>
                                    A programming language grammar is defined. A parser is created for the grammar. An input-output example for possible test-cases is given.
                                </p>
                            </li>
                            <li class="project-tech">
                                <ul>
                                    <li>C</li>
                                    <li>Yacc</li>
                                    <li>Flex</li>
                                    <li>Bison</li>
                                </ul>
                            </li>
                        </ul>
                    </td>
                </tr>

                <tr class="project">
                    <td class="project-image-cont">
                        <a href="https://github.com/Radhima/khulna_v1" target="_blank"><img class="project-image" src="img\\khulna.jpg"/></a>
                    </td>
                    <td class="project-desc-cont">
                        <ul>
                            <li class="project-title">
                                Khulna City Website
                            </li>
                            <li class="project-overview">
                                <p>
                                    Khulna is a major city in the south-western region of Bangladesh. In this website, all the information regarding Khulna city is displayed. This includes restaurants, shopping centers, hospitals, administrative services etc. There is also a community forum where the citizens can chat. The website is built with ASP.NET framework.
                                </p>
                            </li>
                            <li class="project-tech">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Microsoft SQL Server</li>
                                    <li>ASP.NET</li>
                                    <li>C#</li>
                                </ul>
                            </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    `;

    saveToBodyHTML(bodyHTML);
}