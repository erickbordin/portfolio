const textElement = document.getElementById('typewriter');
        
        const translations = {
            en: {
                hero_greeting: "Hi, I am",
                btn_projects: "View Projects",
                about_title: "About Me",
                about_text: "Backend developer at <strong>Syonet</strong>, on the lead intake squad of an automotive CRM, and a Systems for Internet student at IFSul.<br>My focus today is putting <strong>LLMs into real software</strong>: model calls with guardrails, retries and fallback, and production systems I can measure with <strong>Micrometer, Prometheus and Grafana</strong>. At work I build with <strong>Java, Quarkus and Java EE</strong>, and I investigate production with AI agents (<strong>Claude Code + MCP</strong>).<br>Before that I taught programming to kids and teenagers, which taught me to explain complex things simply.<br>Currently learning: Python, LangGraph and LLM evals.",
                skills_title: "Tech Stack",
                ai_title: '<i class="fas fa-robot"></i> AI',
                title_seucorre: "SeuCorre — AI Running Coach",
                desc_seucorre: "AI-powered running coach that generates and adapts training plans with LLMs. The model sits behind a <strong>provider interface</strong> switchable by configuration (<strong>Claude</strong>, local <strong>Ollama</strong> or a no-AI mode), and every plan it produces passes a <strong>deterministic guardrail</strong> — the 10% weekly-volume rule — before reaching the user. Model calls have <strong>timeout, retry with exponential backoff</strong> and a dedicated failure path.",
                lang_title: '<i class="fas fa-code"></i> Languages',
                framework_title: '<i class="fas fa-layer-group"></i> Frameworks',
                data_title: '<i class="fas fa-database"></i> Data & Tools',
                projects_title: "Selected Projects",
                desc_picpay: "This project is a robust solution for a financial transfer system, designed to ensure <strong>data integrity</strong> and handle high-concurrency scenarios. Unlike simple CRUD applications, this API focuses on the strict correctness of financial transactions using <strong>ACID principles</strong>. </br>  Built with <strong>Java 21</strong> and <strong>Spring Boot</strong>, the system implements complex business logic to validate transactions between Common Users and Merchants. It leverages <strong>Spring Transaction Management</strong> to guarantee atomicity and integrates with external mock services for authorization, following a clean <strong>Layered Architecture</strong>.",
                title_psychology: "Psychology Practice Manager",
                desc_psychology: "Full-stack system for independent psychologists: daily agenda, patients, session notes, weekly recurring appointments and a full <strong>audit trail</strong> of every change. The session design keeps the access token <strong>only in memory</strong>, uses an HttpOnly refresh cookie with <strong>rotation and reuse detection</strong>, and shares a single refresh promise so concurrent 401s don't look like token theft. Java 21 + Spring Boot API tested with <strong>Testcontainers</strong>; TypeScript frontend.",
                title_chatbot: "School Management Chatbot",
                desc_chatbot: 'Automation system for the "Código Kid" unit to reduce manual secretarial work. I developed a conversational web interface that allows automated checking of student logins, deadlines, and class rescheduling.',
                contact_title: "Get In Touch",
                contact_subtitle: "Want to chat? Just send me a direct message. I am open to new opportunities and collaborations!",
                contact_btn: "Say Hello",
                phrases: ["Backend Developer.", "LLMs & AI Agents.", "Java · Quarkus · Spring Boot.", "Observability-minded."]
            },
            pt: {
                hero_greeting: "Olá, eu sou",
                btn_projects: "Ver Projetos",
                about_title: "Sobre Mim",
                about_text: "Desenvolvedor backend na <strong>Syonet</strong>, no squad de captação de leads de um CRM automotivo, e estudante de Sistemas para Internet no IFSul.<br>Meu foco hoje é colocar <strong>LLMs em software de verdade</strong>: chamadas ao modelo com guardrails, retry e fallback, e sistemas em produção que eu consigo medir com <strong>Micrometer, Prometheus e Grafana</strong>. No trabalho construo com <strong>Java, Quarkus e Java EE</strong> e investigo produção com agentes de IA (<strong>Claude Code + MCP</strong>).<br>Antes disso fui professor de programação para crianças e adolescentes, o que me ensinou a explicar coisas complexas de forma simples.<br>Estudando agora: Python, LangGraph e evals de LLM.",
                skills_title: "Habilidades",
                ai_title: '<i class="fas fa-robot"></i> IA',
                title_seucorre: "SeuCorre — Coach de Corrida com IA",
                desc_seucorre: "Coach de corrida com IA que gera e adapta planos de treino com LLMs. O modelo fica atrás de uma <strong>interface de provider</strong> trocável por configuração (<strong>Claude</strong>, <strong>Ollama</strong> local ou modo sem IA), e todo plano que ele produz passa por um <strong>guardrail determinístico</strong> — a regra dos 10% de volume semanal — antes de chegar ao usuário. As chamadas ao modelo têm <strong>timeout, retry com backoff exponencial</strong> e caminho de falha dedicado.",
                lang_title: '<i class="fas fa-code"></i> Linguagens',
                framework_title: '<i class="fas fa-layer-group"></i> Frameworks',
                data_title: '<i class="fas fa-database"></i> Dados & Tools',
                projects_title: "Projetos",
                desc_picpay: "Este  projeto é uma solução robusta para um sistema de transferências financeiras, projetado para garantir a <strong>integridade de dados</strong> e lidar com cenários de concorrência. Diferente de aplicações CRUD simples, esta API foca na correção estrita das transações utilizando <strong>princípios ACID</strong>.<br>Construído com <strong>Java 21</strong> e <strong>Spring Boot</strong>, o sistema implementa regras de negócio complexas para validar transações entre Usuários Comuns e Lojistas. O projeto utiliza o <strong>Gerenciamento Transacional do Spring</strong> para garantir a atomicidade e integra-se com serviços externos para autorização, seguindo uma <strong>Arquitetura em Camadas</strong> limpa.",
                title_psychology: "Gestão de Consultório de Psicologia",
                desc_psychology: "Sistema full-stack para psicólogos autônomos: agenda do dia, pacientes, anotações de sessão, consultas em série semanal e <strong>trilha de auditoria</strong> de toda alteração. O desenho da sessão mantém o access token <strong>só em memória</strong>, usa cookie de refresh HttpOnly com <strong>rotação e detecção de reuso</strong> e compartilha uma única promise de renovação para que 401 concorrentes não pareçam roubo de token. API em Java 21 + Spring Boot testada com <strong>Testcontainers</strong>; frontend em TypeScript.",
                title_chatbot: "Chatbot de Gestão Escolar",
                desc_chatbot: 'Sistema de automação para a unidade "Código Kid" visando reduzir o trabalho manual da secretaria. Desenvolvi uma interface web conversacional que permite verificação automática de logins, prazos e reposição de aulas.',
                contact_title: "Entre em Contato",
                contact_subtitle: "Quer bater um papo? Basta me enviar uma mensagem. Estou aberto a novas oportunidades e colaborações!",
                contact_btn: "Diga Olá",
                phrases: ["Desenvolvedor Backend.", "LLMs & Agentes de IA.", "Java · Quarkus · Spring Boot.", "Observabilidade em produção."]
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
