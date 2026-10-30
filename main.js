        const translations = {
            en: {
                hero_tagline: "Backend developer building with LLMs",
                proof1_value: "18.7 h/day",
                proof1_label: "of wasted robot time found",
                proof2_value: "3 → 17",
                proof2_label: "affected accounts found by measuring",
                proof3_value: "14-panel",
                proof3_label: "Grafana dashboard on a Quarkus connector",
                btn_cv: "Download CV",
                impact_title: "Impact",
                impact1_title: "Lead crawler reprocessing loop",
                impact1_problem: "Old leads were deleted by MongoDB's TTL and re-extracted every cycle.",
                impact1_metric: "18.7 h/day",
                impact1_metric_label: "of robot time wasted on one account; new leads waited 42 min (median).",
                impact1_fix: "Built a <strong>Redis \"already seen\" memory</strong>, with no production DB changes. Real robot, 3rd cycle: <strong>0 re-extractions</strong>.",
                impact2_title: "AI-assisted investigation",
                impact2_problem: "An incident was reported as affecting 3 accounts.",
                impact2_metric: "3 → 17",
                impact2_metric_label: "affected accounts once I measured.",
                impact2_fix: "Investigated with <strong>Claude Code + MCP agents</strong> over MongoDB, PostgreSQL, Loki and Prometheus.",
                impact3_title: "Observability",
                impact3_problem: "A restart path was silently losing leads.",
                impact3_metric: "14 panels",
                impact3_metric_label: "Grafana dashboard on a Quarkus connector.",
                impact3_fix: "Added <strong>Micrometer/Prometheus metrics</strong> and the dashboard to the connector, plus crawler metrics, which is where I found that restart path.",
                flow_title: "SeuCorre AI flow",
                flow_checkin: "Weekly check-in",
                flow_decision: "needs rewrite?",
                flow_no: "no",
                flow_keep: "keep plan",
                flow_yes: "yes",
                flow_parse: "JSON parse",
                flow_rule: "10% rule",
                flow_guardrail: "guardrail",
                flow_saved: "saved plan",
                link_ai: "How the AI works →",
                about_title: "About Me",
                about_text: "Backend developer at <strong>Syonet</strong>, on the lead intake squad of an automotive CRM, and a Systems for Internet student at IFSul. Before that I taught programming to kids and teenagers.<br>Currently learning: <strong>Python, LangGraph and LLM evals</strong>.",
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
                contact_btn: "Say Hello"
            },
            pt: {
                hero_tagline: "Desenvolvedor backend construindo com LLMs",
                proof1_value: "18,7 h/dia",
                proof1_label: "de tempo de robô desperdiçado, encontrado",
                proof2_value: "3 → 17",
                proof2_label: "contas afetadas, encontradas medindo",
                proof3_value: "14 painéis",
                proof3_label: "dashboard Grafana num conector Quarkus",
                btn_cv: "Baixar CV",
                impact_title: "Impacto",
                impact1_title: "Loop de reprocessamento no crawler de leads",
                impact1_problem: "Leads antigos eram apagados pelo TTL do MongoDB e extraídos de novo a cada ciclo.",
                impact1_metric: "18,7 h/dia",
                impact1_metric_label: "de robô desperdiçado numa conta; lead novo esperava 42 min (mediana).",
                impact1_fix: "Construí uma <strong>memória de \"já visto\" no Redis</strong>, sem mexer no banco de produção. Robô real, 3º ciclo: <strong>0 re-extrações</strong>.",
                impact2_title: "Investigação assistida por IA",
                impact2_problem: "Um incidente foi reportado com 3 contas afetadas.",
                impact2_metric: "3 → 17",
                impact2_metric_label: "contas afetadas, depois de medir.",
                impact2_fix: "Investiguei com <strong>Claude Code + agentes MCP</strong> sobre MongoDB, PostgreSQL, Loki e Prometheus.",
                impact3_title: "Observabilidade",
                impact3_problem: "Um caminho de reinício perdia leads em silêncio.",
                impact3_metric: "14 painéis",
                impact3_metric_label: "dashboard Grafana num conector Quarkus.",
                impact3_fix: "Adicionei <strong>métricas Micrometer/Prometheus</strong> e o dashboard ao conector, além de métricas no crawler, onde encontrei esse caminho de reinício.",
                flow_title: "Fluxo da IA do SeuCorre",
                flow_checkin: "Check-in semanal",
                flow_decision: "precisa reescrever?",
                flow_no: "não",
                flow_keep: "mantém plano",
                flow_yes: "sim",
                flow_parse: "parse do JSON",
                flow_rule: "regra dos 10%",
                flow_guardrail: "guardrail",
                flow_saved: "plano salvo",
                link_ai: "Como a IA funciona →",
                about_title: "Sobre Mim",
                about_text: "Desenvolvedor backend na <strong>Syonet</strong>, no squad de captação de leads de um CRM automotivo, e estudante de Sistemas para Internet no IFSul. Antes disso fui professor de programação para crianças e adolescentes.<br>Estudando agora: <strong>Python, LangGraph e evals de LLM</strong>.",
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
                contact_btn: "Diga Olá"
            }
        };

        // Globals
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
            
            // Save preference
            localStorage.setItem('lang', lang);
        }

        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'pt' : 'en';
            setLanguage(newLang);
        });

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
        });
