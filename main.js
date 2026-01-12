const textElement = document.getElementById('typewriter');
        
        const translations = {
            en: {
                hero_greeting: "Hi, I am",
                btn_projects: "View Projects",
                about_title: "About Me",
                about_text: "Currently, I work as a <strong>Programming Instructor</strong>, teaching Logic, Python, and <strong>SQL</strong>. This role has sharpened my algorithmic thinking and ability to explain complex technical concepts, skills I consider essential for a developer.<br>While teaching builds my foundation, my career focus is on <strong>Java Back-End Engineering</strong>. <br>I go beyond academic theory by simulating enterprise environments in my personal projects. I build scalable solutions using <strong>Java 21</strong>, <strong>Spring Boot</strong> for RESTful APIs, and<strong>   Docker</strong> for containerization. I alting.<br>I so prioritize code quality with <strong>JUnit 5</strong> tesam now looking to transition into a <strong>Intern Back-End</strong> role to apply this technical dedication toreal-world business challenges.",
                skills_title: "Tech Stack",
                lang_title: '<i class="fas fa-code"></i> Languages',
                framework_title: '<i class="fas fa-layer-group"></i> Frameworks',
                data_title: '<i class="fas fa-database"></i> Data & Tools',
                projects_title: "Selected Projects",
                desc_picpay: "This project is a robust solution for a financial transfer system, designed to ensure <strong>data integrity</strong> and handle high-concurrency scenarios. Unlike simple CRUD applications, this API focuses on the strict correctness of financial transactions using <strong>ACID principles</strong>. </br>  Built with <strong>Java 21</strong> and <strong>Spring Boot</strong>, the system implements complex business logic to validate transactions between Common Users and Merchants. It leverages <strong>Spring Transaction Management</strong> to guarantee atomicity and integrates with external mock services for authorization, following a clean <strong>Layered Architecture</strong>.",
                title_chatbot: "School Management Chatbot",
                desc_chatbot: 'Automation system for the "Código Kid" unit to reduce manual secretarial work. I developed a conversational web interface that allows automated checking of student logins, deadlines, and class rescheduling.',
                desc_market: "Application focused on robust modeling of Sales and Products using pure Object-Oriented Programming. Focuses on the correct application of Polymorphism, Inheritance, and Encapsulation for retail business rules.",
                contact_title: "Get In Touch",
                contact_subtitle: "Want to chat? Just send me a direct message. I am open to new opportunities and collaborations!",
                contact_btn: "Say Hello",
                phrases: ["Back-End Developer.", "Java & Spring Boot.", "Problem Solver.", "Out of the box solutions."]
            },
            pt: {
                hero_greeting: "Olá, eu sou",
                btn_projects: "Ver Projetos",
                about_title: "Sobre Mim",
                about_text: "Atualmente, atuo como <strong>Instrutor de Programação</strong>, ensinando Lógica, Python e <strong>SQL</strong>. Essa função aprimorou meu pensamento algorítmico e a habilidade de explicar conceitos técnicos complexos, competências que considero essenciais para um desenvolvedor. <br>Enquanto o ensino constrói minha base, meu foco de carreira é a <strong>Engenharia Back-End com Java</strong>.<br> Vou além da teoria acadêmica simulando ambientes corporativos em meus projetos pessoais. Construo soluções escaláveis utilizando <strong>Java 21</strong>, <strong>Spring Boot</strong> para APIs RESTful e <strong>Docker</strong> para conteinerização. Também priorizo a qualidade de código com testes em <strong>JUnit 5</strong>. <br> Agora, busco a transição para atuar como <strong>Estagiário Back-End</strong>, aplicando essa dedicação técnica em desafios reais de negócio.",
                skills_title: "Habilidades",
                lang_title: '<i class="fas fa-code"></i> Linguagens',
                framework_title: '<i class="fas fa-layer-group"></i> Frameworks',
                data_title: '<i class="fas fa-database"></i> Dados & Tools',
                projects_title: "Projetos",
                desc_picpay: "Este  projeto é uma solução robusta para um sistema de transferências financeiras, projetado para garantir a <strong>integridade de dados</strong> e lidar com cenários de concorrência. Diferente de aplicações CRUD simples, esta API foca na correção estrita das transações utilizando <strong>princípios ACID</strong>.<br>Construído com <strong>Java 21</strong> e <strong>Spring Boot</strong>, o sistema implementa regras de negócio complexas para validar transações entre Usuários Comuns e Lojistas. O projeto utiliza o <strong>Gerenciamento Transacional do Spring</strong> para garantir a atomicidade e integra-se com serviços externos para autorização, seguindo uma <strong>Arquitetura em Camadas</strong> limpa.",
                title_chatbot: "Chatbot de Gestão Escolar",
                desc_chatbot: 'Sistema de automação para a unidade "Código Kid" visando reduzir o trabalho manual da secretaria. Desenvolvi uma interface web conversacional que permite verificação automática de logins, prazos e reposição de aulas.',
                desc_market: "Aplicação focada na modelagem robusta de Vendas e Produtos usando Programação Orientada a Objetos pura. Foca na aplicação correta de Polimorfismo, Herança e Encapsulamento para regras de negócio de varejo.",
                contact_title: "Entre em Contato",
                contact_subtitle: "Quer bater um papo? Basta me enviar uma mensagem. Estou aberto a novas oportunidades e colaborações!",
                contact_btn: "Diga Olá",
                phrases: ["Desenvolvedor Back-End.", "Java & Spring Boot.", "Resolvedor de Problemas.", "Soluções criativas."]
            }
        };

        // Globals
        let phrases = translations.en.phrases; 
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;
        let currentLang = 'en';

        /* --- LANGUAGE LOGIC --- */
        const langToggle = document.getElementById('lang-toggle');
        const langText = document.getElementById('lang-text');
        
        function setLanguage(lang) {
            currentLang = lang;
            // Update static text
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang][key]) {
                    element.innerHTML = translations[lang][key];
                }
            });

            // Update button
            langText.textContent = lang === 'en' ? 'EN' : 'PT';
            
            // Update Typewriter phrases
            phrases = translations[lang].phrases;
            
            // Save preference
            localStorage.setItem('lang', lang);
        }

        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'pt' : 'en';
            setLanguage(newLang);
        });

        /* --- HERO TYPEWRITER --- */
        function type() {
            const currentPhrase = phrases[phraseIndex % phrases.length];

            if (isDeleting) {
                textElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50;
            } else {
                textElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                typeSpeed = 2000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex++;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }

        /* --- THEME TOGGLE --- */
        const toggleBtn = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const htmlDoc = document.documentElement;

        function updateIcon(theme) {
            if (theme === 'light') {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }

        toggleBtn.addEventListener('click', () => {
            const currentTheme = htmlDoc.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlDoc.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateIcon(newTheme);
        });

        /* --- ACTIVE NAV --- */
        function setActive(element) {
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            element.classList.add('active');
        }

        const sections = document.querySelectorAll('section, header');
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            document.querySelectorAll('.nav-item[href^="#"]').forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href').includes(current)) {
                    a.classList.add('active');
                }
            });
        });

        /* --- INIT --- */
        document.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme') || 'dark';
            htmlDoc.setAttribute('data-theme', savedTheme);
            updateIcon(savedTheme);

            const savedLang = localStorage.getItem('lang') || 'en';
            setLanguage(savedLang);

            type();
        });
