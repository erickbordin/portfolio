const textElement = document.getElementById('typewriter');
        
        const translations = {
            en: {
                hero_greeting: "Hi, I am",
                btn_projects: "View Projects",
                about_title: "About Me",
                about_text: "My journey is focused on creating efficient software solutions, with preference in <strong>Back-End</strong> development through academic projects using <strong>Java</strong> and <strong>REST APIs</strong>. I also have a solid foundation in low-level languages like <strong>C and C++</strong>, and I am proficient in using <strong>Git</strong> for version control in collaborative environments.<br><br>I am seeking my <strong>first professional opportunity</strong> to apply and expand my skills. I have a strong interest in software architecture and my goal is to grow within the field and become a reference in Software Engineering.",
                skills_title: "Tech Stack",
                lang_title: '<i class="fas fa-code"></i> Languages',
                framework_title: '<i class="fas fa-layer-group"></i> Frameworks',
                data_title: '<i class="fas fa-database"></i> Data & Tools',
                projects_title: "Selected Projects",
                desc_picpay: "Implementation of a high-concurrency financial transfer system. The challenge was to ensure transaction integrity between users and merchants while consuming external authorization services. I used <strong>Transaction Management</strong> for atomicity and a layered architecture.",
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
                about_text: "Minha jornada foca na criação de soluções de software eficientes, com preferência em desenvolvimento <strong>Back-End</strong> através de projetos acadêmicos usando <strong>Java</strong> e <strong>APIs REST</strong>. Tenho base sólida em linguagens de baixo nível como <strong>C e C++</strong>, e domino o uso de <strong>Git</strong> para controle de versão.<br><br>Busco minha <strong>primeira oportunidade profissional</strong> para aplicar e expandir minhas habilidades. Tenho forte interesse em arquitetura de software e meu objetivo é crescer na área e me tornar referência em Engenharia de Software.",
                skills_title: "Habilidades",
                lang_title: '<i class="fas fa-code"></i> Linguagens',
                framework_title: '<i class="fas fa-layer-group"></i> Frameworks',
                data_title: '<i class="fas fa-database"></i> Dados & Tools',
                projects_title: "Projetos",
                desc_picpay: "Implementação de um sistema de transferências financeiras de alta concorrência. O desafio foi garantir a integridade das transações entre usuários e lojistas consumindo serviços externos de autorização. Usei <strong>Gerenciamento de Transações</strong> para atomicidade e arquitetura em camadas.",
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