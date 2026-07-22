import { useState, useRef, useEffect } from "react";
import profilePhoto from "../imports/e9e78cec-1ed0-4506-b57a-4ced8f33f256.jpg";
import {
  Menu, X, GraduationCap, Briefcase, Award, FlaskConical,
  BookOpen, Users, Star, Mail, Phone, MapPin, Youtube,
  Linkedin, Facebook, ChevronDown, ChevronUp, ExternalLink, Image as ImageIcon,
  Camera, Plus, FileText, ScrollText, Lock, Trash2, CheckCircle2, Key,
  Download, Search, ArrowUp, Eye, EyeOff, Sparkles, Trophy, Lightbulb, Mic,
  Laptop, User, Quote, GitBranch, Code, Cpu, Database, Shield, LogOut, AlertTriangle,
  Music, Headphones, Play, Pause, Volume2, VolumeX, Disc, ListMusic, Calendar, Clock, Tag, Filter, Globe, Edit
} from "lucide-react";



/* ─── DATA ─────────────────────────────────────────────── */
const EDUCATION = [
  {
    school: "University of the Philippines Cebu",
    degree: "Master of Science in Computer Science",
    period: "2024 – Present",
    details: [],
  },
  {
    school: "Global Consumer Intelligence World 2026 April",
    degree: "Data Science and Artificial Intelligence",
    period: "May 2026 – July 2026",
    details: ["Matsuo Lab, The University of Tokyo", "3-Month Course"],
  },
  {
    school: "Negros Oriental State University",
    degree: "Bachelor of Science in Computer Science",
    period: "2018 – 2022",
    details: [
      "Main Campus, Dumaguete City",
      "Dean's Lister, 1st year to 3rd year",
      "Presidential Awardee, 4th year",
      "Computer Science Organization President, 3rd year and 4th year",
    ],
  },
  {
    school: "Our Lady of the Mountains Mission School Inc.",
    degree: "General Academic Strand with Computer Hardware Servicing",
    period: "2016 – 2018",
    details: ["Senior High School", "Graduated with Honors", "Enfants du Mekong Scholar"],
  },
  {
    school: "Our Lady of the Mountains Mission School Inc.",
    degree: "Junior High School",
    period: "2012 – 2016",
    details: ["Graduated with Honors"],
  },
  {
    school: "Igmamatay Elementary School",
    degree: "Elementary Education",
    period: "2006 – 2012",
    details: ["Graduated with Honors"],
  },
];

const EXPERIENCE = [
  {
    role: "College Instructor",
    org: "University of Negros Occidental-Recoletos",
    period: "June 2023 – Present",
    type: "current",
    bullets: [
      "Teaches Computer Science, Information Technology, Entertainment and Multimedia Computing, and Information Systems-related subjects.",
      "Handles students from different programs including Marketing Management, Hospitality Management, Financial Management, Management Accounting, Real Estate, Accountancy, and Criminology.",
      "Prepares lessons, learning activities, assessments, and student consultations.",
      "Guides students in developing digital literacy, analytical thinking, research, and problem-solving skills.",
      "Courses handled: Living in the Information Technology Era, Data Structures and Algorithms, Automata and Compiler Theory, Algorithms and Complexity, Discrete Structures, Operations Research / Management Science, Introduction to Data Science, and Natural Language Processing.",
    ],
  },
  {
    role: "Sales Manager",
    org: "Sugbo Llave Real Estate Services – Team Bacolod Prime",
    period: "Present",
    type: "current",
    bullets: [
      "Assists clients with real estate inquiries, property promotion, and service coordination.",
      "Supports sales activities through client communication, marketing, and relationship management.",
      "Develops leadership, negotiation, and customer-handling skills in the real estate field.",
    ],
  },
  {
    role: "Customer Service Representative",
    org: "Transcom Bacolod City",
    period: "February 2022 – February 2024",
    type: "past",
    bullets: [
      "Assisted Comcast/Xfinity customers with billing, sales, account concerns, and service retention.",
      "Handled customer inquiries and concerns through clear communication and problem-solving.",
      "Promoted products and services while maintaining customer satisfaction.",
    ],
  },
  {
    role: "Data Encoder / Computer Maintenance Staff / Scholar Assistant Intern",
    org: "Enfants du Mekong Dumaguete Center",
    period: "October 2021 – December 2021",
    type: "past",
    bullets: [
      "Encoded and organized data for office and scholar records.",
      "Assisted staff and scholars with computer-related concerns.",
      "Performed basic computer maintenance, troubleshooting, and system checking.",
    ],
  },
  {
    role: "Student Assistant",
    org: "Negros Oriental State University Main Campus I",
    period: "2019 – 2020",
    type: "past",
    bullets: [
      "Assisted office staff with clerical tasks, printing, photocopying, and documentation.",
      "Supported daily office operations and student-related transactions.",
    ],
  },
  {
    role: "Sales Clerk",
    org: "Lenis Sales Merchandise",
    period: "April 2019 – May 2019",
    type: "past",
    bullets: [
      "Assisted customers with product inquiries and purchases.",
      "Organized stocks and maintained proper product arrangement.",
      "Supported daily store operations and customer service tasks.",
    ],
  },
];

const SKILLS = [
  "Computer Science Instruction",
  "Research and Data Analysis",
  "Public Speaking and Hosting",
  "Guest Speaking and Event Facilitation",
  "Leadership and Community Involvement",
  "Customer Service and Client Communication",
  "Problem-Solving and Critical Thinking",
  "Computer Literacy and Technical Support",
  "Graphic Design and Video Editing",
  "Time Management and Multitasking",
];

const RESEARCH = [
  {
    title: "Deep Learning Approaches to DNA Sequence Classification: A Systematic Review of CNN, LSTM, and Transformer Models",
    year: "2026 MSCS",
    tag: "MSCS",
  },
  {
    title: "A Comparative Critique of Optimization and Bayesian Network Approaches: EFJSP with Parallel Operations and Neurocognitive Disorder Screening",
    year: "2026 MSCS",
    tag: "MSCS",
  },
  {
    title: "Corruption Sentiment Detection in the Philippines: Hybrid SBERT and Association Rule Mining for Subjectivity Awareness",
    year: "2025 MSCS",
    tag: "MSCS",
  },
  {
    title: "SerMax Hybrid QuickSort: Optimizing Efficiency through Bidirectional Partitioning, Priority Queues, and Polynomial Regression-Based Pivot Estimation",
    year: "2026 MSCS",
    tag: "MSCS",
  },
  {
    title: "Unveiling Patterns of Student Attrition and Persistence in CIT: An ARIMA Forecasting and Qualitative Mixed-Methods Study",
    year: "2026 UNOR, Faculty Entry",
    tag: "Faculty",
  },
  {
    title: "Analysis of the Index and Non-Index Crime in the Philippines using K-means (January to May 2018)",
    year: "4th Year College Thesis",
    tag: "Thesis",
  },
  {
    title: "Enfants du Mekong Dumaguete Center Scholarship Web Based Application System",
    year: "3rd Year College Research",
    tag: "Research",
  },
];

const AWARDS_ACADEMIC = [
  "Graduated with Honors in Elementary, Junior High School, and Senior High School",
  "Dean's Lister from 1st year to 3rd year in Bachelor of Science in Computer Science",
  "Presidential Awardee during 4th year college level",
  "Tertiary Education Subsidy Grantee during 3rd year and 4th year college",
  "Enfants du Mekong Scholar from Grade 9 to 4th year college",
];

const AWARDS_LEADERSHIP = [
  "National Adviser, Alliance of Young Leaders – 2026 to Present",
  "National Vice President, Lingkod Pilipinas – 2026 to Present",
  "Secretary-General, Rise Youth Innovative Society – 2026 to Present",
  "President of the Computer Science Organization during 3rd year and re-elected during 4th year college",
  "Enfants du Mekong President during Senior High School",
  "Supreme Student Government Senator during Senior High School",
  "Grade 10 Representative during Junior High School",
  "CAT Advanced Officer / Head Officer during Grade 10",
  "Air Force ROTC cadet under the 528th DAST, NORSU Dumaguete",
  "Board of Director Officer of the NORSU Main Campus Federated Alumni Association, 2025 to 2030",
  "Served as adviser for 2nd year Computer Science and Information Technology students at UNO-R",
  "Purok Napaturan Youth Coordinator",
  "Vicariate of Canlaon Youth Assistant Education – 2025 to Present",
];

const AWARDS_COMMUNITY = [
  "Participated in community service activities for Casa Miani Home for Boys and children with special needs",
  "Joined charity works, including giving assistance to fire incident victims under the Computer Science Organization",
  "Supported online webinars and tutorial services through the Computer Science Organization movement",
];

const AWARDS_RELIGIOUS = [
  "Knights of the Altar Head from Junior High School to Senior High School",
  "Active in the Ministry of Lectors from Senior High School to present",
  "Served in the Ministry of Catechists from Junior High School to Senior High School",
  "Choir member during Junior High School and Senior High School",
];

const AWARDS_SPEAKING = [
  "Experienced in hosting school, community, and college events",
  "Participated in Declamation and Oration activities during Junior and Senior High School, including division-level competitions",
  "Marching band lyrist during Senior High School",
  "Active folk dancer, Zumba dancer, pop dancer, and festival dancer during high school",
  "Joined inter-school contests in dance, performance, and cultural activities",
];

const CERTIFICATIONS = [
  { title: "Enfants Du Mekong Dumaguete NGO (300 hrs) Internship", date: "October 6 – November 4, 2021", org: "Enfants du Mekong" },
  { title: "Enfants Du Mekong Dumaguete NGO (500 hrs) Internship", date: "November 5 – December 24, 2021", org: "Enfants du Mekong" },
  { title: "Consultant of the Web-based Skill Audit System (BSCS Cojena's Group)", date: "February 2021", org: "NORSU" },
  { title: "Coordinator of the College for the Senior High School Immersion", date: "March 2025", org: "UNOR-I" },
  { title: "Delegates for Metropolitan Archdiocese of Caceres National Youth Day (NYD Caceres)", date: "June 2025", org: "Archdiocese" },
  { title: "Computing Society of the Philippines Member", date: "2025 to 2026", org: "CSP" },
  { title: "Employees ARSE 2025 – PILGRIMAGE 2025 Batch 3", date: "July 2025", org: "UNOR-I" },
  { title: "Team Building \"To Infinity and Beyond\"", date: "July 2025", org: "UNOR-I" },
  { title: "Research Concept Hearing", date: "August 2025", org: "UNOR-I" },
  { title: "College of Information Technology 2nd Year Level Adviser", date: "2024 to 2025", org: "UNOR-I" },
  { title: "Tutorial Services for Home of Hope", date: "May 2024", org: "Home of Hope" },
  { title: "Teaching English as a Foreign Language Completion", date: "March 2024", org: "TEFL Professional Institute" },
  { title: "The Hour of Code Completion", date: "", org: "Code Org" },
  { title: "Python 101 for Data Science Completion", date: "November 2025", org: "Cognitive AI" },
  { title: "Coding with AI Completion", date: "", org: "Code Org" },
  { title: "Hosting Certification during Vicariate Youth Day", date: "November 2025", org: "Vicariate of Canlaon" },
  { title: "Certification for Assistant Education", date: "November 2025", org: "Vicariate of Canlaon" },
  { title: "Course Completion for Gemini in Google Drive", date: "December 2025", org: "LinkedIn Learning" },
  { title: "Judge Certification for Purok Tu-od Mini Miss U", date: "June 2024", org: "Purok Tuod" },
  { title: "Judge Certification for Hot Mama", date: "May 2024", org: "Napaturan Youth Council" },
  { title: "Judge Certification for Indigay sa Talento", date: "April 2024", org: "Barangay Codcod SK" },
  { title: "Completion Certification for the Transition Bay for Xfinity Central ACM", date: "April 2022", org: "Transcom Bacolod" },
  { title: "Judge Certification for Mardi Gras", date: "May 2024", org: "Barangay Alijis Council" },
  { title: "Judge Certification for Lubi Miss Gay", date: "December 2024", org: "Purok Lubi Youth Council" },
  { title: "Speakership Certification for Igmamatay Elementary School Graduation", date: "May 2024", org: "Igmamatay Elementary School" },
  { title: "Speakership Certification for Youth Gathering", date: "October 2023", org: "OLMQP Youth" },
  { title: "Judge Certification for Agihis Streetdance and Arena Competition", date: "May 2024", org: "Barangay Alijis SK" },
  { title: "Judge Certification for Grade 11 and 12 Clash of Clubs Contest", date: "November 2024", org: "UNOR-I Integrated School" },
  { title: "Speakership Certification for Tributes of Graduates Program", date: "August 2025", org: "Good Samaritan Outreach Center" },
  { title: "Foundations of Insurance Completion", date: "April 2026", org: "Liberty Mutual Insurance / Coursera" },
  { title: "Real Estate Property Management Completion", date: "April 2026", org: "Coursera" },
  { title: "Traditional Life Insurance Licensing Course Training & Good Moral", date: "April 2026", org: "AXA University Philippine Campus" },
  { title: "Traditional Life Insurance Licensing Course Completion", date: "April 2026", org: "AXA University Philippine Campus" },
  { title: "www AI Class Asean Org Completion", date: "March 2026", org: "AI Ready ASEAN" },
  { title: "Introduction to Data Science Course Completion", date: "April 2026", org: "CISCO Networking Academy" },
  { title: "Python for Data Science Completion", date: "November 2025", org: "IBM" },
  { title: "Speakership during Parish Youth Day 2026", date: "May 2026", org: "OLMQP" },
  { title: "Introduction to Data Science with R Training Completion", date: "June 2026", org: "UP SERDAC" },
  { title: "Facilitator for Diocesan Youth Day", date: "December 2025", org: "Diocese of San Carlos" },
  { title: "Statistician Certification for \"The Break Room: A Feasibility Study on Arts, Sports and Multi-Activity Recreational Entertainment Center in Bacolod City\"", date: "June 2026", org: "UNOR" },
  { title: "Alliance of Young Leaders Membership Certification", date: "June 2026", org: "AYL" },
  { title: "The Break Room Feasibility Study Statistician Certification", date: "June 2026", org: "UNOR BACOLOD" },
];

const TRAININGS: string[] = [
  "1. Poverty Incidence of the Philippines (Negros Oriental Rover Scouts) – September 2020",
  "2. Basic Graphic Editing Using Canva (DICT Luzon Cluster 3 Occidental Mindoro) – December 2021",
  "3. Basic of a Fiber Optic Network (DICT Luzon Cluster 3 Albay) – December 2020",
  "4. Content Development in Education: Gamification (DICT Luzon Cluster 3 Palawan) – November 2020",
  "5. CTRL+ALT+DELETE: Data Privacy and Information Security Awareness for Remote Learning (University of the Philippines, Technology Management Center) – November 2020",
  "6. Regional Orientation on the Safety Seal Certification of HEIs in Region 7 (Commission on Higher Education) – June 2022",
  "7. Orientation on the Role, Importance and Function of the Crisis Management Team of Public and Private Higher Education Institutions in Region VII (Commission on Higher Education) – May 2022",
  "8. Earning in the New Normal, ESL 101 with 51Talk (DICT Luzon Cluster 3) – June 2021",
  "9. Cybersecurity Essentials (DICT Mindanao Cluster 1) – October 2021",
  "10. How Technology Supersedes this New Normal (DICT Luzon Cluster 3 Occidental Mindoro) – September 2020",
  "11. Video Editing using Adobe Photoshop (Creative Nation Academy) – November 2021",
  "12. Data Driven Governance (DICT Luzon Cluster 2, ILCDB) – November 2020",
  "13. Introduction to Web Security Threats (Trend Micro) – December 2020",
  "14. Switching Careers: From Full-time Employment to Online Freelancing (DICT Region 3 Bulacan, ILCDB Tech4ED) – March 2023",
  "15. Fundamentals of Python Programming (Trend Micro) – May 2021",
  "16. Social Media Management for Government Agencies–Communicate and Keep Clients Updated (DICT Visayas Cluster 2, PSA) – October 2020",
  "17. Race for a Covid-19 Vaccine (NORSU CNPAHS) – May 2021",
  "18. The Role of Social Media Marketing in the Tourism and Hospitality Industry (DICT Luzon Cluster 3 Camarines Sur) – June 2021",
  "19. Digital Pedagogy: The Call in the New Normal (DICT Luzon Cluster 3 Camarines Sur) – June 2021",
  "20. Creating Narrated Videos using Narakeet (DICT Luzon Cluster 3 Camarines Sur) – December 2020",
  "21. Video Editing Techniques on Filmora 9: Usage cum Knowledge & Skills Honing (DICT Luzon Cluster 3 Marinduque) – December 2020",
  "22. NORSU FSG Voter's Education Webinar on the Values Formation: 16 Values \"Iboboto ko Maka-Pilipinas\" (PPCRV, NORSU FSG) – May 2022",
  "23. Introduction to Email Threats and Security Attacks (Trend Micro) – November 2020",
  "24. ICT Project Management Training of Trainers (DICT Visayas Cluster 2) – November 2020",
  "25. ReCode: Building your Future in Remote Coding (Zuitt Coding Bootcamp) – November 2020",
  "26. Role of ICT in coping with Stigma with LGBTQIA+ Community (DICT Luzon Cluster 3) – June 2021",
  "27. DigitalJobsPH Workshop for Negros Oriental Residents (DICT Visayas Cluster 2 Region 7&8) – November 2020",
  "28. SARS-CoV2 and Society: The virus, the disease, and its prevention (NORSU CAS) – August 2021",
  "29. Science, Technology and Society Approach in Understanding the Impacts of Digital Technology for Women (DICT Luzon Cluster 3 Masbate) – March 2021",
  "30. 5G Technology for Filipinos (DICT Luzon Cluster 3 Marinduque) – June 2021",
  "31. Tech Trends: Internet of Things Intermediate Session (DICT IV) – March 2023",
  "32. Digital Entrepreneurship for Women: Effectively Sell your Products and Services Online – March 2024",
  "33. Visual Basic.Net Tools for Data Visualization (DICT Luzon Cluster 3 Camarines Norte) – June 2021",
  "34. Google Applications as Tool for Online Teaching (DICT Luzon Cluster 2) – October 2021",
  "35. 21st Century Learning Design: Use of ICT in Learning (DICT Luzon Cluster 3 Camarines Sur) – June 2021",
  "36. Mobile Commerce: Uncovered (Websites Advice) – November 2020",
  "37. Introduction to Arduino (DICT Luzon Cluster 3 Sorsogon) – March 2021",
  "38. WordPress Development for Women (DICT Batangas) – March 2023",
  "39. Vlogging for Sustainable Development (DICT Luzon Cluster 3) – June 2021",
  "40. ICT Trends in Cybersecurity and Big Data Analytics (DICT Region XII) – June 2024",
  "41. Fundamentals of Graphic Design (DICT Luzon Cluster 3 Occidental Mindoro) – December 2020",
  "42. Government Digital Transformation (DICT Region XII) – June 2024",
  "43. AI for Digital Transformation includes Gen AI (Wadhwani Foundation) – June 2024",
  "44. Startup Webinar Series: Protecting your Startup through Intellectual Property Rights (DICT Region VI) – June 2024",
  "45. Data Science in Action: Solving Real-World Problems (Xaltius) – November 2024",
  "46. Promoting Mental Health and Well-being in the Academic Setting: A collaborative Responsibility (UNOR-I) – July 2025",
  "47. AI Ethical Standards and Policies (UNOR-I) – July 2025",
  "48. Extension and Outreach Program (UNOR-I) – July 2025",
  "49. Developing a Culture of Research in Education: Techniques and Perspectives for Teachers (UNOR-I) – July 2025",
  "50. Office Productivity Tools (University of the Philippines ITDC) – June 2025",
  "51. Social Etiquette (UNOR-I) – July 2025",
  "52. Research Seminars, Tools, and Recalibration Trainings: Research Tools (UNOR-I RDO) – September 2024",
  "53. Empowering Digital Workflows with Microsoft Teams (University of the Philippines ITDC) – May 2025",
  "54. Safe Spaces ACT RA11313: Fostering Inclusivity in Educational Institutions (UNOR-I) – July 2025",
  "55. Optimizing Operations through Digital Transformation (Engineering Institute of Technology) – May 2025",
  "56. Keeping It Private: A Citizen's Guide to Data Privacy (DICT Region V Sorsogon) – June 2025",
  "57. Suit Up! A Creative's Guide to Effective Personal Branding and Portfolios – October 2025",
  "58. 25th Philippine Computing Science Congress (University of the Cordilleras) – May 2025",
  "59. Free Coding Bootcamp: Basic Web Development Workshop (Zuitt) – October 2025",
  "60. DevSecOps: Integrating Security into the Software Development Lifecycle (WVSU CICT) – October 2025",
  "61. Shift-Left Security: Building Safer Pipelines with DevSecOps and Automated Checks (WVSU CICT) – October 2025",
  "62. Future-Ready: Digital Skills and Emerging Careers in the Age of AI (DICT Region III Pampanga) – July 2025",
  "63. Info Session: Learn ChatGPT (DICT Sultan Kudarat) – July 2025",
  "64. Human Computer Interaction and User Experience beyond the Screen (WVSU CICT) – October 2025",
  "65. AI + Everyone: Making Everyday Life Smarter (AICERTS, Empowering Transformation) – October 2025",
  "66. Information Session on Digital Citizenship (DICT Caraga Region) – October 2025",
  "67. Introduction to AWS Cloud Computing: Fundamentals and Developer Workflows (WVSU CICT) – October 2025",
  "68. Grow your MSMEs: Making Smart Moves to Elevate Sustainability (DTI Noveleta, Cavite) – October 2025",
  "69. Small Business Big Impact: Digital Marketing Essentials for MSMEs (DTI Silang, Cavite) – October 2025",
  "70. Cloud Migration Strategies for Enterprises (WVSU CICT) – October 2025",
  "71. Internet of Things in Smart Cities (DICT Bataan Region III) – October 2025",
  "72. Designing Data-Driven Inquiries: Formulating Research Questions and Methodologies for Evidence-Based Quantitative Action Research (Rizal Technological University) – October 2025",
  "73. Learn ChatGPT for Government Workforce (DICT Zambales Region III) – October 2025",
  "74. Library Leadership for 21st Century (DOST STII Mini theater Bicutan Taguig City) – October 2025",
  "75. Exploring Educational Realities: Developing Qualitative Research Questions and Frameworks for Contextualized Classroom Inquiry (Rizal Technological University) – October 2025",
  "76. Post Traumatic Growth (Institute of Global Professionals) – November 2020",
  "77. Leadership for All (Institute of Global Professionals) – August 2020",
  "78. Maximize your Potential (Institute of Global Professionals) – December 2020",
  "79. Job Hunting Strategies (Institute of Global Professionals) – December 2020",
  "80. Corporate Communication and Soft Skills (Institute of Global Professionals) – August 2020",
  "81. Battling Distractions During Crisis (Institute of Global Professionals) – December 2020",
  "82. Expert Panel: Teacher Leadership in Action: Learning, Leading, Transforming (British Council, Teaching English Asia) – October 2025",
  "83. Future-Ready Leadership: Harnessing AI and Gen Z's Potential for Transformative Workplaces (World Academy for Research and Development) – October 2025",
  "84. Programming Design Patterns Using TypeScript (Qubit, Gordon College, Olongapo) – October 2025",
  "85. From Code Refactoring to Data Protection: Applying Generative AI in System Development (WVSU CICT) – October 2025",
  "86. Hour of Code (AI Ready ASEAN Programme, DICT Region IVB Marinduque) – November 2025",
  "87. Software Development and Design Thinking (DICT Bataan Region III) – October 2025",
  "88. Hour of Code: Learn AI & Coding the Fun Way! (DICT Mimaropa) – November 2025",
  "89. AI at Work: Smarter Projects, Smarter Teams (Xurpas Inc) – October 2025",
  "90. Cybersecurity for ICT Professionals (DICT Region V Catanduanes) – October 2025",
  "91. Smart Social: Mastering Social Media Management with AI (DICT Region V Catanduanes) – October 2025",
  "92. Mental Health and Corporate Culture (Institute of Global Professionals) – August 2020",
  "93. Securing IOT: Threats, Vulnerabilities, and Defense Mechanisms (PSITE Mimaropa) – October 2025",
  "94. Series of Orientation Seminar UNO-R Orientation Program (UNOR-I) – February 2024",
  "95. Read More, Listen More: The Neglected Path to Fluency (British Council, Teaching English Asia) – October 2025",
  "96. Using Generative AI for Language Teacher Professional Development: Evolving Practices in the Southeast Asian Region (British Council, Teaching English Asia) – October 2025",
  "97. The Role of Language Educators in the Era of AI (British Council, Teaching English Asia) – October 2025",
  "98. ELT and Sustainability – What Should I be doing? (British Council, Teaching English Asia) – October 2025",
  "99. Expert Panel: English skills for an interconnected world (British Council, Teaching English Asia) – October 2025",
  "100. Leading Change: Our Classroom, Our Community – Empowering Teachers in English Education (British Council, Teaching English Asia) – October 2025",
  "101. Technology and Method: a Never-stand-still relationship (British Council, Teaching English Asia) – October 2025",
  "102. Expert Panel: Digital tools to enhance Learning and Teaching (British Council, Teaching English Asia) – October 2025",
  "103. How to Develop Global Skills through Storytelling with Young Children (British Council, Teaching English Asia) – October 2025",
  "104. Trauma-Informed English Language Teaching (British Council, Teaching English Asia) – October 2025",
  "105. Expert Panel: Adapting to Change: Stories from the Field in Southeast Asia (British Council, Teaching English Asia) – October 2025",
  "106. How to be Human: Being ourselves in an AI-mediated world (British Council, Teaching English Asia) – October 2025",
  "107. Feedback Fatigue: Can AI save us from ever more marking? (British Council, Teaching English Asia) – October 2025",
  "108. Click, Create Teach: Making AI Work in the English Classroom (British Council, Teaching English Asia) – October 2025",
  "109. Nanotechnology and Computational Models: Transforming the Future of Biotechnology (WVSU CICT) – October 2025",
  "110. Elevating Teaching with the New Updates of GabAI, your AI Teaching Assistant (Tagpros Education)",
  "111. E-commerce and Digital Payments in the Philippines: A New Era of Growth, Opportunity, and Innovation (WVSU CICT) – November 2025",
  "112. International Teacher Forum: Education for a Borderless World (Madrasah Mu'allimaat Muhammadiyah Yogyakarta Indonesia) – November 2025",
  "113. Behind Every Great Product: Agile Tools, QA, and Collaboration (Qubit, Gordon College) – November 2025",
  "114. SvelteKit – A Framework for Startups (Gordon College) – November 2025",
  "115. Digital Twins: Modelling Reality for Smarter Systems (WVSU CICT) – November 2025",
  "116. A Beginner's Journey into Blockchain and Cryptocurrency (WVSU CICT) – November 2025",
  "117. Intro to Cybersecurity and Network Security (DICT Catanduanes Region V) – October 2025",
  "118. Smart City Initiatives: A Focus on Iloilo City's Vision (WVSU CICT) – November 2025",
  "119. Web Application Security (DICT CAR, ILCDB) – October 2025",
  "120. Special Session on Catholic School Education Leadership in the Time of AI (Tagpros Education) – November 2025",
  "121. Strategies in Teaching History to Gen Alpha Learners (Rex Education) – November 2025",
  "122. The Role of Libraries in Facilitating Digital Cultural Storytelling (DOST STII Bicutan Taguig) – November 2025",
  "123. Balancing Access and Privacy: Upholding the Right to Information in the Digital Age (DOST STII Bicutan Taguig) – November 2025",
  "124. Learning from the Masters: The Importance of Error Management in the Hospitality Industry (University of the Philippines Dilliman) – November 2025",
  "125. WebinOSH Season 2, Episode 18: Safety Starts with Behavior: The Basics of BBS (DOLE, OSH) – November 2025",
  "126. Understanding Smart Contract Deployment (DICT 13 Dinagat Islands) – October 2025",
  "127. Mind the Gap: Interpreting the Variance Between Plans and Performance (University of Baguio) – November 2025",
  "128. Mission Beyond the Campus: Serving the Poor and Transforming Society Aspect: Faith in Action (Rex Education) – November 2025",
  "129. The Quiet Radicalism of Libraries as Civic Infrastructures (DOST STII Bicutan Taguig) – November 2025",
  "130. Basic Python Programming (DICT V Catanduanes) – November 2025",
  "131. The Future of Memory: Safeguarding our Digital Heritage (DOST STII Bicutan Taguig) – November 2025",
  "132. Libraries as Empowerment Spaces: Advancing Gender Equality through Knowledge Access (DOST STII Bicutan Taguig) – November 2025",
  "133. Arch(AI)ve – AI for Archiving and Analysis of Cultural Heritage Objects (DOST STII Bicutan Taguig) – November 2025",
  "134. Google Workspace for Educators/LGU Employees (DICT CAR) – October 2025",
  "135. Digital Leadership in the Age of AI (DICT Region V Bicol) – November 2025",
  "136. Micro-Credentials for Academic Advancement: Strengthening Higher Education with a Global Perspective (Commission on Higher Education Region 6 and 18) – December 2025",
  "137. Educating Ethically with Intelligence and Integrity: AI-Driven Futures in Teaching, Learning, and Research (International Conference on Artificial Intelligence, DLSU Dasmarinas) – February 2026",
  "138. International Conference on Artificial Intelligence Attendance (DLSU Dasmarinas) – February 2026",
  "139. Research Integrity in the Age of AI (University of the Philippines Dilliman) – March 2026",
  "140. From Home to Global: Empowering Women in the Digital Economy (DICT CAR) – March 2026",
  "141. Mini Workshop Pre Conference INOBIST 3rd ICoBAC (Institute for Research and Community Service, University Sangga Buana, Indonesia) – April 2026",
  "142. Safeguarding Health and Advancing Decent Work in Occupational Medicine (DOLE OSH) – March 2026",
  "143. AI for HER: Protecting Women in the Digital Age (DICT Caraga Region, Butuan City) – March 2026",
  "144. CyberHygiene, Orientation for PNPKI Services (DICT Region VI) – February 2026",
  "145. Emerging Threats: AI & Blockchain Safeguards in Staying Safe Online (Tagpros Education) – February 2026",
  "146. Low-Tech and Offline AI Practices for Rural and Disaster Contexts (UP NISMED) – October 2025",
  "147. Data Privacy Awareness Batch 2 (DICT Region III Baler Aurora) – October 2025",
  "148. 2nd Virtual International Research Conference (NORSU CED & Graduate School) – April 2026",
  "149. #MakeClimateAConversation: Integrating Social Work, Gender Justice & Climate Talk (UP Los Banos Laguna) – March 2026",
  "150. AI for Students: Building AI Awareness, Digital Competence, and Future-Ready Skills for Learners (DICT 13) – June 2026",
  "151. Awareness-Raising Campaign on AI Through Hour of Code and AI Class ASEAN (AI Ready ASEAN) – May 2026",
  "152. Empowering Filipino Creativity for Global Animation Excellence (Level UP PH) – June 2026",
  "153. Ripple Effects, Local Responses: Philippine LGUs and the 2026 Energy Emergency (CLRG of UP-NCPAG) – June 2026",
  "154. Quanti Module 3: Descriptive and Inferential Data Analysis Webinar #3: Writing Clear and Accurate Results Sections (University of Northwestern Mindanao) – June 2026",
  "155. 1st National Conference on Education, Business, Technology, and Social Sciences 2026 NCEBTSS2026 (ISTREL) – June 2026",
  "156. 1st National Christian Education Conference 2026 NCEC2026 (ISTREL) – June 2026",
  "157. 3rd ISTREL International Transdisciplinary Research Conference 2026 IITRC2026 (ISTREL) – May 2026",
  "158. 2nd Southeast Asian Conference on Indigenous Peoples 2026 SACIP2026 (ISTREL) – May 2026",
  "159. Introduction to Data Science with R Training (UP SERDAC) – June 2026",
  "160. The 1st International Online Conference on Education Sciences (MDPI Education Sciences) – June 2026",
  "161. International Conference on Artificial Intelligence Appearance (De La Salle University Dasmarinas) – February 2026",
  "162. The Complete Management Playbook: Best Practices from Industry Experts (TESDA and AMACO) – June 2026",
  "163. 2nd Philippine Student Thesis and Capstone Competition 2026 PSTCC2026 (ISTREL) – June 2026",
  "164. 2nd International Conference on Special Needs and Inclusive Education 2026 ICSNIE2026 (ISTREL) – June 2026",
  "165. Leadership Skills in the Age of AI: Shaping the Next Generation of Decision-Makers (LEVEL UP PH) – June 2026",
  "166. Regional International Volunteer Year (IVY) 2026 Celebrations Fora for Negros Island Region (PNVSCA & CHMSU) – June 2026",
  "167. University-Driven Pathway toward Strengthening the Innovation Landscape of Surigao del Norte (DICT Caraga Region) – June 2026",
  "168. WebinOSH Season 3, Episode 09: OSH Compliance Report to DOLE (DOLE OSH) – June 2026",
];

const QUOTES = [
  {
    text: "It is okay to not be okay.",
    sub: "Rest. Breathe. Keep going.",
  },
  {
    text: "It is okay to be tired — just rest.",
    sub: "Recharge, and rise again.",
  },
  {
    text: "I will walk slowly, but I will never walk backward.",
    sub: "Progress is progress, no matter the pace.",
  },
];

/* ─── HELPERS ─────────────────────────────────────────── */
function SectionBadge({ num, label, onBack }: { num: string; label: string; onBack?: () => void }) {
  return (
    <div className="flex items-center justify-between gap-3 mb-8">
      <div className="flex items-center gap-3 flex-1">
        <span className="font-mono text-xs text-primary/60 tracking-widest">{num}</span>
        <span className="font-mono text-xs tracking-[0.25em] uppercase text-primary">{label}</span>
        <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(0,200,255,0.3), transparent)" }} />
      </div>
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider border transition-all duration-300 hover:scale-105 shrink-0"
          style={{
            background: "rgba(0, 200, 255, 0.08)",
            borderColor: "rgba(0, 200, 255, 0.3)",
            color: "#00c8ff",
          }}
        >
          ← Back to Main Dashboard
        </button>
      )}
    </div>
  );
}

/* ─── THEMATIC SECTION BANNER ─────────────────────────── */
function ThematicSectionBanner({
  num,
  label,
  title,
  subtitle,
  icon,
  themeColor,
  gradientTo,
  onBack
}: {
  num: string;
  label: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  themeColor: string;
  gradientTo: string;
  onBack: () => void;
}) {
  return (
    <div className="relative mb-12 overflow-hidden rounded-3xl border p-8 sm:p-12 shadow-2xl transition-all duration-500" style={{ background: `linear-gradient(145deg, #0a1828 0%, #030a16 60%, ${themeColor}08 100%)`, borderColor: `${themeColor}40` }}>
      {/* Top Glowing Gradient Line — Thicker & More Vivid */}
      <div className="absolute top-0 left-0 right-0 h-2" style={{ background: `linear-gradient(90deg, transparent 0%, ${themeColor} 20%, ${gradientTo} 50%, ${themeColor} 80%, transparent 100%)`, boxShadow: `0 2px 20px ${themeColor}60` }} />

      {/* Animated Cyber Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(${themeColor} 1px, transparent 1px), linear-gradient(${themeColor}80 1px, transparent 1px), linear-gradient(90deg, ${themeColor}80 1px, transparent 1px)`,
        backgroundSize: "24px 24px, 48px 48px, 48px 48px",
      }} />

      {/* Dual Ambient Radial Glow Orbs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20 blur-[80px] pointer-events-none animate-pulse" style={{ background: themeColor }} />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-15 blur-[60px] pointer-events-none animate-pulse" style={{ background: gradientTo, animationDelay: "1s" }} />

      {/* Floating Decorative Particles */}
      <div className="absolute top-8 right-[15%] w-3 h-3 rounded-full opacity-40 animate-bounce pointer-events-none" style={{ background: themeColor, animationDuration: "3s" }} />
      <div className="absolute top-[40%] right-[8%] w-2 h-2 rounded-full opacity-30 animate-bounce pointer-events-none" style={{ background: gradientTo, animationDuration: "4s", animationDelay: "0.5s" }} />
      <div className="absolute bottom-12 left-[20%] w-2.5 h-2.5 rounded-full opacity-25 animate-bounce pointer-events-none" style={{ background: themeColor, animationDuration: "3.5s", animationDelay: "1s" }} />

      {/* Diagonal Accent Stripe */}
      <div className="absolute top-0 right-0 w-32 h-full pointer-events-none opacity-[0.06]" style={{
        background: `linear-gradient(135deg, transparent 30%, ${themeColor} 50%, transparent 70%)`,
      }} />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all cursor-pointer hover:scale-105 shadow-lg"
              style={{ background: `${themeColor}18`, color: themeColor, border: `1px solid ${themeColor}45`, boxShadow: `0 0 15px ${themeColor}20` }}
            >
              ← Back
            </button>
            <span className="text-xs font-mono font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-black/60 border text-slate-200 shadow-md" style={{ borderColor: `${themeColor}35` }}>
              Section #{num} · {label}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative shrink-0">
              {/* Rotating ring around icon */}
              <div className="absolute -inset-1.5 rounded-2xl opacity-60 animate-spin pointer-events-none" style={{ background: `conic-gradient(from 0deg, ${themeColor}, transparent, ${gradientTo}, transparent, ${themeColor})`, animationDuration: "8s" }} />
              <div className="relative p-3.5 rounded-2xl border shadow-xl flex items-center justify-center" style={{ background: `${themeColor}20`, borderColor: `${themeColor}50`, color: themeColor, boxShadow: `0 0 25px ${themeColor}30` }}>
                {icon}
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {title}
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* Decorative Theme Crest — Premium Badge */}
        <div className="hidden lg:flex flex-col items-center justify-center p-6 rounded-2xl border bg-black/50 shadow-xl shrink-0 gap-3 min-w-[140px]" style={{ borderColor: `${themeColor}30`, boxShadow: `0 0 30px ${themeColor}10` }}>
          <div className="relative">
            <div className="absolute -inset-3 rounded-full opacity-40 animate-spin pointer-events-none" style={{ background: `conic-gradient(from 0deg, ${themeColor}60, transparent, ${gradientTo}60, transparent)`, animationDuration: "12s" }} />
            <div className="relative w-14 h-14 rounded-full flex items-center justify-center border-2" style={{ background: `${themeColor}15`, borderColor: `${themeColor}50`, color: themeColor }}>
              {icon}
            </div>
          </div>
          <div className="text-center space-y-0.5">
            <span className="text-[9px] font-mono uppercase tracking-widest block text-slate-500">— Hub —</span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider block" style={{ color: themeColor }}>
              {label}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, transparent 5%, ${themeColor}50 30%, ${gradientTo}50 70%, transparent 95%)` }} />
    </div>
  );
}

/* Reusable ambient background layer for themed sections */
function SectionAmbience({ themeColor, gradientTo, floatingIcons }: { themeColor: string; gradientTo: string; floatingIcons?: React.ReactNode[] }) {
  return (
    <>
      {/* Ambient glow orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[120px] pointer-events-none" style={{ background: themeColor }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[100px] pointer-events-none" style={{ background: gradientTo }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[150px] pointer-events-none" style={{ background: `linear-gradient(135deg, ${themeColor}, ${gradientTo})` }} />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(${themeColor} 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }} />

      {/* Side accent lines */}
      <div className="absolute top-20 left-0 w-1 h-40 rounded-r-full pointer-events-none opacity-30" style={{ background: `linear-gradient(to bottom, transparent, ${themeColor}, transparent)` }} />
      <div className="absolute bottom-20 right-0 w-1 h-40 rounded-l-full pointer-events-none opacity-30" style={{ background: `linear-gradient(to bottom, transparent, ${gradientTo}, transparent)` }} />

      {/* Floating decorative icons if provided */}
      {floatingIcons && floatingIcons.map((icon, i) => (
        <div key={i} className="absolute pointer-events-none opacity-[0.06] hidden lg:block" style={{
          top: `${15 + i * 25}%`,
          [i % 2 === 0 ? 'right' : 'left']: `${3 + i * 2}%`,
          animation: `bounce ${3 + i * 0.8}s ease-in-out infinite`,
          animationDelay: `${i * 0.5}s`,
          color: i % 2 === 0 ? themeColor : gradientTo,
        }}>
          {icon}
        </div>
      ))}
    </>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-3xl sm:text-4xl font-bold text-foreground mb-2"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {children}
    </h2>
  );
}

function Bullet({ text, color = "primary" }: { text: string; color?: string }) {
  const c = color === "secondary" ? "#a855f7" : "#00c8ff";
  return (
    <li className="flex gap-2.5 text-sm leading-relaxed" style={{ color: "#6b8caa" }}>
      <span style={{ color: c, marginTop: 4, flexShrink: 0 }}>›</span>
      <span>{text}</span>
    </li>
  );
}

function ExpandList({ items, initial = 10 }: { items: string[]; initial?: number }) {
  const [open, setOpen] = useState(false);
  const shown = open ? items : items.slice(0, initial);
  return (
    <div>
      <ul className="space-y-2">
        {shown.map((t, i) => <Bullet key={i} text={t} />)}
      </ul>
      {items.length > initial && (
        <button
          onClick={() => setOpen(!open)}
          className="mt-4 flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase transition-colors duration-200 hover:opacity-80"
          style={{ color: "#00c8ff" }}
        >
          {open ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          {open ? "Show less" : `Show all ${items.length}`}
        </button>
      )}
    </div>
  );
}

/* ─── CERTIFICATE MODAL WITH SIGNATURE PRIVACY COVER ──── */
function CertModal({
  cert,
  onClose,
  token,
  onUpload,
  uploadStatus,
  onOpenLightbox
}: {
  cert: typeof CERTIFICATIONS[0] & { image_url?: string };
  onClose: () => void;
  token: string | null;
  onUpload: (file: File) => void;
  uploadStatus: string;
  onOpenLightbox?: (src: string, title: string, isCertificate?: boolean) => void;
}) {
  const [shieldActive, setShieldActive] = useState(true);
  const [coverHeight, setCoverHeight] = useState<"25" | "35" | "45">("30");

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(5,14,26,0.92)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-lg p-6 border shadow-2xl"
        style={{ background: "#0a1828", borderColor: "rgba(0,200,255,0.25)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          onClick={onClose}
        >
          <X size={18} />
        </button>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <FileText size={16} style={{ color: "#00c8ff" }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "#00c8ff" }}>Certificate</span>
          </div>

          <button
            type="button"
            onClick={() => setShieldActive(!shieldActive)}
            className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
              shieldActive
                ? "bg-amber-400/20 border border-amber-400/50 text-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.3)]"
                : "bg-slate-800 border border-slate-700 text-slate-400 hover:text-white"
            }`}
            title="Toggle Privacy Shield for Signatures & Signatories"
          >
            <Shield size={12} className={shieldActive ? "text-amber-400 animate-pulse" : ""} />
            {shieldActive ? "🛡️ Privacy Cover: ON" : "Privacy Cover: OFF"}
          </button>
        </div>

        <h3
          className="text-base font-bold text-foreground mb-1 leading-snug"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {cert.title}
        </h3>
        <p className="text-xs font-mono text-muted-foreground mb-1">{cert.org}</p>
        {cert.date && <p className="text-xs text-muted-foreground mb-4">{cert.date}</p>}
        
        {cert.image_url ? (
          <div
            className="relative rounded overflow-hidden border mb-2 flex justify-center bg-black/40 cursor-zoom-in group"
            style={{ borderColor: "rgba(0,200,255,0.2)" }}
            onClick={() => {
              const baseUrl = import.meta.env.VITE_API_URL || (typeof window !== "undefined" && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1" ? "" : "http://localhost:3001");
              const fullSrc = cert.image_url?.startsWith("http") ? cert.image_url : `${baseUrl}${cert.image_url}`;
              if (onOpenLightbox && fullSrc) {
                onOpenLightbox(fullSrc, cert.title, true);
              }
            }}
          >
            <img
              src={cert.image_url.startsWith("http") ? cert.image_url : `${import.meta.env.VITE_API_URL || (typeof window !== "undefined" && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1" ? "" : "http://localhost:3001")}${cert.image_url}`}
              alt={cert.title}
              className="w-full h-auto max-h-[300px] object-contain rounded group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                const target = e.currentTarget;
                if (cert.image_url && !target.src.endsWith(cert.image_url)) {
                  target.src = cert.image_url;
                }
              }}
            />

            {/* Privacy Shield Cover for Signatures & Signatories */}
            {shieldActive && (
              <div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950/95 to-slate-900/80 backdrop-blur-md border-t-2 border-amber-400/60 p-3 flex flex-col items-center justify-center text-center shadow-2xl z-20 pointer-events-none"
                style={{ height: `${coverHeight}%` }}
              >
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-amber-300 tracking-wider uppercase drop-shadow">
                  <Shield size={13} className="text-amber-400 animate-pulse" />
                  Signatures &amp; Signatories Covered
                </div>
                <p className="text-[10px] text-slate-300 font-mono mt-0.5 opacity-90">
                  Protected Privacy Shield — Official Signatures Masked
                </p>
              </div>
            )}

            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider z-30">
              <Eye size={16} /> Click to expand image
            </div>
          </div>
        ) : (
          <div
            className="rounded flex flex-col items-center justify-center gap-3 border-2 border-dashed py-12 mb-2"
            style={{ borderColor: "rgba(0,200,255,0.2)", background: "rgba(0,200,255,0.03)" }}
          >
            <ImageIcon size={36} style={{ color: "rgba(0,200,255,0.3)" }} />
            <p className="text-sm text-muted-foreground text-center">
              Certificate image will be displayed here.
            </p>
            <p className="text-xs text-muted-foreground/60 text-center">
              No image uploaded yet.
            </p>
          </div>
        )}

        {token && (
          <div className="p-4 rounded border mt-4" style={{ background: "rgba(0,200,255,0.02)", borderColor: "rgba(0,200,255,0.15)" }}>
            <p className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: "#00c8ff" }}>Admin Image Upload</p>
            <input
              type="file"
              accept="image/*,application/pdf"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) onUpload(file);
              }}
              className="text-xs text-muted-foreground block w-full file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-black hover:file:opacity-80 file:cursor-pointer"
            />
            {uploadStatus && <p className="text-xs font-mono mt-2" style={{ color: "#00c8ff" }}>{uploadStatus}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── UNIVERSAL HIGH-RES LIGHTBOX MODAL WITH PRIVACY SHIELD ── */
function UniversalLightboxModal({ src, title, isCertificate = false, onClose }: { src: string; title?: string; isCertificate?: boolean; onClose: () => void }) {
  const [zoom, setZoom] = useState(1);
  const isCert = Boolean(isCertificate);
  const [shieldActive, setShieldActive] = useState(isCert);
  const [coverHeight, setCoverHeight] = useState<number>(30); // Percentage from bottom

  useEffect(() => {
    setShieldActive(Boolean(isCertificate));
  }, [isCertificate]);

  return (
    <div
      className="fixed inset-0 z-[120] flex flex-col items-center justify-center p-3 sm:p-6"
      style={{ background: "rgba(3, 9, 20, 0.96)", backdropFilter: "blur(20px)" }}
      onClick={onClose}
    >
      {/* Top Controls Toolbar */}
      <div
        className="w-full max-w-5xl flex flex-wrap items-center justify-between gap-3 py-3 px-4 rounded-xl border mb-3 text-white z-10 shadow-2xl"
        style={{ background: "rgba(10, 26, 48, 0.95)", borderColor: "rgba(0, 200, 255, 0.3)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 truncate">
          <Eye size={16} className="text-cyan-400 shrink-0" />
          <span className="font-mono text-xs tracking-wider uppercase font-bold truncate">
            {title || "Image Lightbox Viewer — SER MAX VLOGS"}
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0 flex-wrap">
          {/* Signature Cover Toggle — Only for certificates with signatures */}
          {isCertificate && (
            <>
              <button
                type="button"
                onClick={() => setShieldActive(!shieldActive)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                  shieldActive
                    ? "bg-amber-400/20 border border-amber-400/60 text-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.35)]"
                    : "bg-slate-800 border border-slate-700 text-slate-400 hover:text-white"
                }`}
                title="Toggle Privacy Cover for Signatures & Signatory Names"
              >
                <Shield size={13} className={shieldActive ? "text-amber-400 animate-pulse" : ""} />
                {shieldActive ? "🛡️ Signatures Cover: ON" : "Signatures Cover: OFF"}
              </button>

              {shieldActive && (
                <div className="flex items-center gap-1 bg-black/50 p-1 rounded-lg border border-amber-500/30 text-[10px] font-mono text-amber-200">
                  <span className="px-1 text-slate-400 uppercase">Cover Height:</span>
                  {[20, 30, 40, 50].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setCoverHeight(pct)}
                      className={`px-1.5 py-0.5 rounded cursor-pointer ${coverHeight === pct ? "bg-amber-400 text-black font-bold" : "hover:bg-white/10 text-slate-300"}`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              )}
            </>
          )}

          <div className="h-4 w-px bg-slate-700" />

          {/* Zoom Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setZoom(z => Math.max(0.6, Number((z - 0.2).toFixed(1))))}
              className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-300 hover:bg-slate-700 transition-colors"
            >
              - Zoom
            </button>
            <span className="text-xs font-mono text-amber-400 min-w-[40px] text-center">{Math.round(zoom * 100)}%</span>
            <button
              type="button"
              onClick={() => setZoom(z => Math.min(2.5, Number((z + 0.2).toFixed(1))))}
              className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-300 hover:bg-slate-700 transition-colors"
            >
              + Zoom
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer ml-1"
            title="Close viewer"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Image Stage Container */}
      <div
        className="relative max-w-5xl max-h-[82vh] w-full flex items-center justify-center overflow-hidden rounded-2xl border p-2 shadow-2xl bg-black"
        style={{ borderColor: "rgba(0, 200, 255, 0.4)", boxShadow: "0 0 50px rgba(0, 200, 255, 0.25)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative inline-block overflow-hidden max-w-full max-h-[78vh]">
          <img
            src={src}
            style={{ transform: `scale(${zoom})`, transition: "transform 0.2s ease-out" }}
            className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl cursor-zoom-in"
            onError={(e) => {
              const target = e.currentTarget;
              if (src.includes("/uploads/")) {
                const clean = "/uploads/" + src.split("/uploads/")[1];
                if (!target.src.endsWith(clean)) {
                  target.src = clean;
                }
              }
            }}
          />

          {/* Privacy Cover Overlay for Signatures & Signatories — ONLY FOR CERTIFICATES */}
          {isCert && shieldActive && (
            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950/95 to-slate-900/85 backdrop-blur-lg border-t-2 border-amber-400/70 p-4 flex flex-col items-center justify-center text-center shadow-2xl z-30 pointer-events-none"
              style={{ height: `${coverHeight}%` }}
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-amber-300 tracking-wider uppercase drop-shadow-md">
                <Shield size={16} className="text-amber-400 animate-pulse" />
                OFFICIAL SIGNATURES &amp; SIGNATORIES COVERED
              </div>
              <p className="text-[11px] text-slate-300 font-mono mt-1 max-w-md leading-tight">
                Privacy Protection Active — Signature &amp; Signatory details covered for security compliance.
              </p>
            </div>
          )}
        </div>
      </div>

      <p className="mt-3 text-[11px] font-mono text-cyan-400/80 tracking-widest uppercase">
        Click outside or press Close to exit viewer
      </p>
    </div>
  );
}

/* ─── FULL SHEET MUSIC & AUDIO PLAYER MODAL ───────────── */
function KaraokeStudioModal({
  song,
  onClose,
  API_URL
}: {
  song: { id: number; title: string; description?: string; lyrics?: string; audio_url?: string };
  onClose: () => void;
  API_URL: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Auto-play music when modal opens
  useEffect(() => {
    if (audioRef.current && song.audio_url) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch((err) => console.warn("Auto-play prevented", err));
    }
  }, [song.audio_url]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const seekToTime = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const rawLines = (song.lyrics || "").split("\n");

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6"
      style={{ background: "rgba(3, 9, 20, 0.96)", backdropFilter: "blur(20px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] rounded-3xl border flex flex-col overflow-hidden shadow-2xl"
        style={{
          background: "linear-gradient(160deg, #0a192f 0%, #030a16 100%)",
          borderColor: "rgba(244, 63, 94, 0.35)",
          boxShadow: "0 0 60px rgba(244, 63, 94, 0.25)"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {song.audio_url && (
          <audio
            ref={audioRef}
            src={`${API_URL}${song.audio_url}`}
            onError={(e) => {
              const target = e.currentTarget;
              if (song.audio_url?.startsWith("/uploads/") && !target.src.includes("/audio/")) {
                target.src = song.audio_url.replace("/uploads/", "/audio/");
                target.play().catch(() => {});
              }
            }}
            onTimeUpdate={() => {
              if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
            }}
            onLoadedMetadata={() => {
              if (audioRef.current) setDuration(audioRef.current.duration);
            }}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          />
        )}

        {/* Top Header */}
        <div className="p-4 sm:p-6 border-b border-rose-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-black/40">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full border-2 border-rose-500/50 bg-gradient-to-tr from-rose-950 to-slate-950 flex items-center justify-center shadow-lg ${isPlaying ? "animate-spin" : ""}`} style={{ animationDuration: "10s" }}>
              <Disc size={22} className="text-rose-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30">
                  📜 Full Lyric Sheet & Audio
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-tight mt-0.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {song.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer self-end sm:self-auto"
          >
            <X size={20} />
          </button>
        </div>

        {/* Audio Player Scrubber Bar */}
        <div className="px-6 py-3 bg-black/60 border-b border-white/5 flex items-center gap-4">
          <button
            onClick={togglePlay}
            disabled={!song.audio_url}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-black font-bold flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0 disabled:opacity-50"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
          </button>

          <div className="flex-1 flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400 shrink-0">{formatTime(currentTime)}</span>
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={(e) => seekToTime(Number(e.target.value))}
              className="w-full accent-rose-500 cursor-pointer h-1.5 rounded-lg bg-slate-800"
            />
            <span className="text-xs font-mono text-slate-400 shrink-0">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Full Sheet Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-6 text-left max-w-3xl mx-auto w-full">
          {song.description && (
            <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-xs sm:text-sm text-rose-200 italic shadow-lg">
              “{song.description}”
            </div>
          )}

          <div className="space-y-4">
            {rawLines.map((line, idx) => {
              const trimmed = line.trim();
              if (!trimmed) return <div key={idx} className="h-3" />;

              const isHeader = trimmed.startsWith("[") || trimmed.startsWith("Verse") || trimmed.startsWith("Chorus") || trimmed.startsWith("Pre-Chorus") || trimmed.startsWith("Bridge") || trimmed.startsWith("Final Chorus") || trimmed.startsWith("Outro") || trimmed.startsWith("Tagline") || trimmed.endsWith(":");
              const isSpokenWord = trimmed.startsWith("\u201c") || trimmed.startsWith('"To everyone') || (trimmed.length > 120 && (trimmed.includes('...') || trimmed.includes('\u2014')));

              if (isHeader) {
                return (
                  <div key={idx} className="pt-4 pb-1">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 shadow-md">
                      {trimmed}
                    </span>
                  </div>
                );
              }

              if (isSpokenWord) {
                return (
                  <div
                    key={idx}
                    className="my-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-500/15 via-rose-500/10 to-amber-500/15 border-2 border-amber-400/80 shadow-[0_0_40px_rgba(251,191,36,0.25)] relative"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-amber-500/20 border border-amber-400/50 text-amber-200 shadow-md">
                        <Quote size={13} /> 🎤 Spoken Word Emphasis
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Quote size={24} className="text-amber-300 shrink-0 mt-1" />
                      <p className="font-serif italic text-base sm:text-lg lg:text-xl text-amber-100 leading-relaxed">
                        {trimmed}
                      </p>
                      <Quote size={24} className="text-amber-300 shrink-0 mt-1 rotate-180" />
                    </div>
                  </div>
                );
              }

              return (
                <p key={idx} className="text-base sm:text-lg font-sans font-medium text-slate-100 leading-relaxed tracking-wide">
                  {trimmed}
                </p>
              );
            })}
          </div>
        </div>

        <div className="p-3 bg-black/80 border-t border-rose-500/20 text-center text-xs font-mono text-slate-400">
          📜 Full Sheet Music View — SER MAX Official Composition
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN APP ────────────────────────────────────────── */
export default function App() {
  const [activeCert, setActiveCert] = useState<typeof CERTIFICATIONS[0] & { image_url?: string } | null>(null);
  const [showAllTrainings, setShowAllTrainings] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; isCertificate?: boolean } | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const openSection = (sectionId: string) => {
    const cleanId = sectionId.replace("#", "");
    setActiveSection(cleanId);
    window.scrollTo(0, 0);
  };

  const resetToDashboard = () => {
    setActiveSection(null);
    window.scrollTo(0, 0);
  };

  // --- API & ADMIN STATE ---
  const API_URL = import.meta.env.VITE_API_URL || (typeof window !== "undefined" && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1" ? "" : "http://localhost:3001");
  const [certsData, setCertsData] = useState<(typeof CERTIFICATIONS[0] & { image_url?: string })[]>(
    CERTIFICATIONS.map(c => ({ ...c, image_url: "" }))
  );
  const [galleryItems, setGalleryItems] = useState<{ id: number; title: string; category?: string; event_date?: string; image_url: string; created_at: string }[]>([]);
  const [galleryCategoryFilter, setGalleryCategoryFilter] = useState<string>("All");
  const [adminPortalOpen, setAdminPortalOpen] = useState(false);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("admin_token"));
  const [messages, setMessages] = useState<any[]>([]);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactStatus, setContactStatus] = useState<{ type: "success" | "error" | null; msg: string }>({ type: null, msg: "" });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [adminTab, setAdminTab] = useState<"messages" | "certificates" | "gallery" | "security" | "songs">("messages");
  const [newGalleryTitle, setNewGalleryTitle] = useState("");
  const [newGalleryCategory, setNewGalleryCategory] = useState("Memories");
  const [newGalleryDate, setNewGalleryDate] = useState("");
  const [newGalleryFile, setNewGalleryFile] = useState<File | null>(null);
  const [certUploadStatus, setCertUploadStatus] = useState<string>("");
  const [galleryUploadStatus, setGalleryUploadStatus] = useState<string>("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  // Password Change State
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [changePassStatus, setChangePassStatus] = useState<{ type: "success" | "error" | null; msg: string }>({ type: null, msg: "" });
  const [isChangingPass, setIsChangingPass] = useState(false);

  // Songs & Audio Player State
  const DEFAULT_INSPIRATIONAL_SONGS = [
    {
      id: 1,
      title: "Walk Through the Storm",
      description: "Original Inspirational Song by SER MAX — A powerful message of hope, endurance, and faith for everyone facing silent battles.",
      audio_url: "/uploads/walk_through_the_storm.mp3",
      lyrics: `Verse 1

There are days the sky turns gray,
When every dream feels far away.
Your tired heart begins to break,
Wondering how much more it can take.

The road is long, the climb is steep,
Some scars are hidden, buried deep.
But every tear you've cried before,
Is building someone stronger than before.

Pre-Chorus

So don't let go, don't lose your flame,
The world will know your name someday.
The night may last a little while,
But morning always finds a smile.

Chorus

Keep fighting, even when you're tired,
Even when your hope has lost its fire.
One more step, one more prayer,
Someone believes you're getting there.

The mountain bows to those who stay,
Who never quit along the way.
Your story isn't over yet,
The sun still rises, don't forget.

Keep fighting...
Your breakthrough's closer than you think.

Verse 2

You've carried burdens no one sees,
Still standing through the strongest breeze.
The strongest souls aren't born from ease,
They're shaped by storms and victories.

It's okay to stop and breathe,
To rest beneath the quiet trees.
Rest is not the same as fear,
You'll stand again, your purpose's near.

Bridge

If your hands are shaking,
Lift them anyway.

If your eyes are crying,
Look toward another day.

Every heartbeat whispers,
"You were made for more."

The battle isn't ending—
It's opening a new door.

Final Chorus

Keep fighting, even when you're broken,
Even when no hopeful words are spoken.
You're stronger than yesterday,
And brighter with each passing day.

No storm can steal what God has planned,
No fear can stop a faithful stand.
Walk slowly if you need to do,
Just never stop believing you.

Outro

When your strength is almost gone,
Borrow hope until the dawn.

When you cannot run...
Walk.

When you cannot walk...
Crawl.

But never...
Never turn back.

Because tomorrow
might become
the day
your miracle begins.

Tagline (Spoken Ending)

"To everyone carrying silent battles... You are seen. You are valued. Rest if you must—but never surrender. Walk slowly if you need to, but never walk backward. Your story is still being written."`
    },
    {
      id: 2,
      title: "Rise & Shine Beyond Limits",
      description: "Original Inspirational Song by SER MAX — An uplifting anthem about perseverance, education, leadership, and lighting the way for others.",
      audio_url: "/uploads/rise_and_shine_beyond_limits.mp3",
      lyrics: `Verse 1

From quiet dreams to brighter days,
Every challenge shaped my ways.
Through every lesson, every climb,
I found my purpose one step at a time.

From classroom halls to open skies,
Knowledge gives our dreams their rise.
We learn, we lead, we lift as one,
Until tomorrow's race is won.

Pre-Chorus

The road is long, the night is cold,
But every heart is made of gold.
Stand back up, don't fear the fall,
Your greatest chapter starts with one small call.

Chorus

Rise and shine beyond the limits,
Break the walls and never quit.
Light the future, lead the way,
Turn your dreams into today.

Lift another, hold the line,
Your success can help others shine.
Together we can change the world,
One brave heart, one dream unfurled.

Verse 2

Every failure taught me grace,
Every setback built my pace.
The strongest people aren't the ones
Who never fall beneath the sun.

They're the souls who choose to stand,
Helping others lend a hand.
Building hope where fear once stayed,
Lighting paths that never fade.

Bridge

Teach with wisdom.
Lead with heart.
Serve with courage.
Dream your part.

When the world says "You can't win,"
Answer with the strength within.

The future isn't built by chance,
It's built by those who choose to advance.

Final Chorus

Rise and shine beyond the limits,
Every dream is worth the risk.
Lead with kindness, stand up tall,
Your light was never meant to fall.

Inspire minds and change a life,
Turn every struggle into light.
Together we can leave our mark,
Be the flame that lights the dark.

Rise and shine...
Beyond limits.`
    },
    {
      id: 3,
      title: "Walk Slowly, Never Backward",
      description: "Original Anthem by SER MAX — An Anthem of Hope, Purpose, and Courage. Encouraging everyone to walk with faith, lift others, and keep moving forward.",
      audio_url: "/uploads/walk_slowly_never_backward.mp3",
      lyrics: `Verse 1

When the mountain stands before my eyes,
And every dream feels far beyond the skies,
I'll carry hope with every step I take,
For every challenge helps my spirit wake.

From humble roads where silent dreamers start,
To classrooms shaping every hopeful heart,
I learned that greatness isn't found in speed,
But in the strength to rise when others need.

Pre-Chorus

The night may whisper, "You should let it go,"
But deep inside, my faith still softly grows.
Every lesson, every scar I've known,
Has built the path that leads me home.

Chorus

I will walk slowly, but I'll never walk backward,
Every step I take will make tomorrow brighter.
Through every storm, through every trial,
I'll keep believing mile by mile.

I'll lift the ones who lost their way,
And help them find a brighter day.
Together we can rise much higher,
One heart, one hope, one endless fire.

Verse 2

I've seen the weight of weary eyes,
The silent tears, the hidden cries.
So if you're tired, then rest awhile,
But never lose your reason to smile.

Knowledge grows when kindness leads,
Hope is planted through our deeds.
The strongest light the world can see,
Begins with those who choose to believe.

Bridge

Keep learning.
Keep serving.
Keep leading.
Keep believing.

The world is changed by those who care,
Who choose to love, who choose to share.

No dream is small.
No life is weak.
The future belongs
To those who seek.

Final Chorus

I will walk slowly, but I'll never walk backward,
Every sunrise brings another answer.
I'll stand for truth, I'll stand for hope,
I'll teach the world we're built to cope.

Through every heart that I inspire,
May courage burn like endless fire.
Our greatest legacy will be,
The lives we changed... faithfully.

Walk slowly...

Never backward...

Keep moving forward.

Spoken Outro

"Success is not about reaching the finish line before everyone else. It is about moving forward with purpose, lifting others along the way, and leaving every life you touch better than you found it. Walk slowly if you must—but never walk backward."`
    }
  ];

  const [songsData, setSongsData] = useState<any[]>(DEFAULT_INSPIRATIONAL_SONGS);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeLyricsSong, setActiveLyricsSong] = useState<any | null>(null);
  const [activeKaraokeSong, setActiveKaraokeSong] = useState<any | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const trackSongPlay = async (songId: number) => {
    if (!songId) return;
    try {
      const res = await fetch(`${API_URL}/api/songs/${songId}/play`, { method: "POST" });
      const data = await res.json();
      if (data.success) {
        setSongsData(prev => prev.map(s => s.id === songId ? { ...s, plays_count: data.plays_count } : s));
      }
    } catch (err) {
      console.warn("Failed to track song play", err);
    }
  };

  // Admin Songs Upload State
  const [newSongTitle, setNewSongTitle] = useState("");
  const [newSongDescription, setNewSongDescription] = useState("");
  const [newSongLyrics, setNewSongLyrics] = useState("");
  const [newSongAudioFile, setNewSongAudioFile] = useState<File | null>(null);
  const [songUploadStatus, setSongUploadStatus] = useState<string>("");

  // Admin Songs Edit State
  const [editingSong, setEditingSong] = useState<any | null>(null);
  const [editSongTitle, setEditSongTitle] = useState("");
  const [editSongDescription, setEditSongDescription] = useState("");
  const [editSongLyrics, setEditSongLyrics] = useState("");
  const [editSongAudioFile, setEditSongAudioFile] = useState<File | null>(null);
  const [editSongStatus, setEditSongStatus] = useState<string>("");

  const startEditingSong = (song: any) => {
    setEditingSong(song);
    setEditSongTitle(song.title || "");
    setEditSongDescription(song.description || "");
    setEditSongLyrics(song.lyrics || "");
    setEditSongAudioFile(null);
    setEditSongStatus("");
  };

  const [certSearch, setCertSearch] = useState("");
  const [trainingSearch, setTrainingSearch] = useState("");

  // Fetch dynamic content on mount
  useEffect(() => {
    fetchCertificates();
    fetchGallery();
    fetchSongs();
  }, []);

  // Fetch admin messages whenever token or tab changes
  useEffect(() => {
    if (token && adminPortalOpen) {
      fetchMessages();
      fetchSongs();
    }
  }, [adminTab, token, adminPortalOpen]);

  const fetchSongs = async () => {
    try {
      const res = await fetch(`${API_URL}/api/songs`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setSongsData(data);
        }
      }
    } catch (e) {
      console.warn("Could not load songs from API, using default songs fallback:", e);
    }
  };

  const fetchCertificates = async () => {
    try {
      const res = await fetch(`${API_URL}/api/certificates`);
      if (res.ok) {
        const dbCerts = await res.json();
        // Merge db images with existing local certifications list
        setCertsData(prev => prev.map(localC => {
          const match = dbCerts.find((dbC: any) => dbC.id === localC.title);
          return match ? { ...localC, image_url: match.image_url } : localC;
        }));
      }
    } catch (e) {
      console.warn("Could not load certificates from API:", e);
    }
  };

  const fetchGallery = async () => {
    try {
      const res = await fetch(`${API_URL}/api/gallery`);
      if (res.ok) {
        const data = await res.json();
        setGalleryItems(data);
      }
    } catch (e) {
      console.warn("Could not load gallery from API:", e);
    }
  };

  const fetchMessages = async () => {
    if (!token) return;
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setMessages(data);
      } else if (res.status === 401 || res.status === 403) {
        handleLogout();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) return;
    setAuthError("");
    setIsLoggingIn(true);
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("admin_token", data.token);
        setToken(data.token);
        setUsername("");
        setPassword("");
        setAuthError("");
      } else {
        setAuthError(data.error || "Authentication failed. Invalid username or password.");
      }
    } catch (err) {
      setAuthError("Unable to reach backend security server.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setToken(null);
    setAuthError("");
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPass || !newPass || !confirmPass) return;
    if (newPass !== confirmPass) {
      setChangePassStatus({ type: "error", msg: "New passwords do not match." });
      return;
    }
    if (newPass.length < 8) {
      setChangePassStatus({ type: "error", msg: "New password must be at least 8 characters long." });
      return;
    }
    setIsChangingPass(true);
    setChangePassStatus({ type: null, msg: "" });

    try {
      const res = await fetch(`${API_URL}/api/auth/change-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ currentPassword: currentPass, newPassword: newPass })
      });
      const data = await res.json();
      if (res.ok) {
        setChangePassStatus({ type: "success", msg: "Password updated successfully! Cryptographically re-hashed with 12 bcrypt rounds." });
        setCurrentPass("");
        setNewPass("");
        setConfirmPass("");
      } else {
        setChangePassStatus({ type: "error", msg: data.error || "Failed to update password." });
      }
    } catch (err) {
      setChangePassStatus({ type: "error", msg: "Server connection error." });
    } finally {
      setIsChangingPass(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;
    setIsSubmittingContact(true);
    setContactStatus({ type: null, msg: "" });

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          subject: contactSubject,
          message: contactMessage
        })
      });
      const data = await res.json();
      if (res.ok) {
        setContactStatus({ type: "success", msg: "Thank you! Your message has been sent successfully." });
        setContactName("");
        setContactEmail("");
        setContactSubject("");
        setContactMessage("");
      } else {
        setContactStatus({ type: "error", msg: data.error || "Submission failed. Please try again." });
      }
    } catch (err) {
      setContactStatus({ type: "error", msg: "Could not connect to the backend server." });
    } finally {
      setIsSubmittingContact(false);
    }
  };

  const handleUploadCertImage = async (certTitle: string, file: File) => {
    if (!file || !token) return;
    setCertUploadStatus("Uploading...");
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", certTitle);

    try {
      const res = await fetch(`${API_URL}/api/certificates/${encodeURIComponent(certTitle)}/upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData
      });
      const data = await res.json();
      if (res.ok) {
        setCertUploadStatus("Uploaded successfully!");
        fetchCertificates();
        // Update currently active cert preview if modal is open
        if (activeCert && activeCert.title === certTitle) {
          setActiveCert(prev => prev ? { ...prev, image_url: data.imageUrl } : null);
        }
      } else {
        setCertUploadStatus(data.error || "Upload failed");
      }
    } catch (err) {
      setCertUploadStatus("Server connection failed");
    }
  };

  const handleUploadGalleryItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGalleryFile || !token) return;
    setGalleryUploadStatus("Uploading memorable photo...");
    const formData = new FormData();
    formData.append("image", newGalleryFile);
    formData.append("title", newGalleryTitle || "Memorable Event");
    formData.append("category", newGalleryCategory || "Memories");
    formData.append("event_date", newGalleryDate || "");

    try {
      const res = await fetch(`${API_URL}/api/gallery/upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData
      });
      const data = await res.json();
      if (res.ok) {
        setGalleryUploadStatus("Memorable photo added successfully!");
        setNewGalleryTitle("");
        setNewGalleryCategory("Memories");
        setNewGalleryDate("");
        setNewGalleryFile(null);
        fetchGallery();
        const fileInput = document.getElementById("gallery-file-input") as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      } else {
        setGalleryUploadStatus(data.error || "Upload failed");
      }
    } catch (err) {
      setGalleryUploadStatus("Server connection failed");
    }
  };

  const handleDeleteGalleryItem = async (id: number) => {
    if (!token) return;
    if (!confirm("Are you sure you want to delete this gallery item?")) return;
    try {
      const res = await fetch(`${API_URL}/api/gallery/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        fetchGallery();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleUploadSong = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSongTitle || !token) return;
    setSongUploadStatus("Uploading song & audio track...");
    const formData = new FormData();
    formData.append("title", newSongTitle);
    formData.append("description", newSongDescription);
    formData.append("lyrics", newSongLyrics);
    if (newSongAudioFile) {
      formData.append("audio", newSongAudioFile);
    }

    try {
      const res = await fetch(`${API_URL}/api/songs/upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData
      });
      const data = await res.json();
      if (res.ok) {
        setSongUploadStatus("Song uploaded successfully!");
        setNewSongTitle("");
        setNewSongDescription("");
        setNewSongLyrics("");
        setNewSongAudioFile(null);
        fetchSongs();
        const fileInput = document.getElementById("song-audio-input") as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      } else {
        setSongUploadStatus(data.error || "Upload failed");
      }
    } catch (err) {
      setSongUploadStatus("Server connection failed");
    }
  };

  const handleDeleteSong = async (id: number) => {
    if (!token) return;
    if (!confirm("Are you sure you want to delete this song?")) return;
    try {
      const res = await fetch(`${API_URL}/api/songs/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        fetchSongs();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateSong = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSong || !token || !editSongTitle) return;
    setEditSongStatus("Updating song & attaching audio track...");
    const formData = new FormData();
    formData.append("title", editSongTitle);
    formData.append("description", editSongDescription);
    formData.append("lyrics", editSongLyrics);
    if (editSongAudioFile) {
      formData.append("audio", editSongAudioFile);
    }

    try {
      const res = await fetch(`${API_URL}/api/songs/${editingSong.id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formData
      });
      const data = await res.json();
      if (res.ok) {
        setEditSongStatus("Song updated successfully!");
        setEditingSong(null);
        fetchSongs();
      } else {
        setEditSongStatus(data.error || "Update failed");
      }
    } catch (err) {
      setEditSongStatus("Server connection failed");
    }
  };

  const handleMarkMessageRead = async (id: number, currentRead: number) => {
    if (!token) return;
    try {
      const res = await fetch(`${API_URL}/api/contact/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ is_read: currentRead ? 0 : 1 })
      });
      if (res.ok) {
        fetchMessages();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteMessage = async (id: number) => {
    if (!token) return;
    if (!confirm("Are you sure you want to delete this message?")) return;
    try {
      const res = await fetch(`${API_URL}/api/contact/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        fetchMessages();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const scrollTo = (href: string) => {
    openSection(href);
    setMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── NAVBAR ─────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ background: "rgba(5,14,26,0.92)", backdropFilter: "blur(12px)", borderColor: "rgba(0,200,255,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <button
            onClick={resetToDashboard}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
                setLightboxImage({ src: "/sermax_logo.jpg", title: "SER MAX Official Logo & Brand" });
              }}
              className="w-9 h-9 rounded-full overflow-hidden border border-cyan-400/40 p-0.5 bg-black/40 group-hover:scale-110 group-hover:border-amber-400 transition-all duration-300 cursor-zoom-in relative"
              title="Click to view SER MAX Logo in high resolution"
            >
              <img src="/sermax_logo.jpg" alt="SER MAX" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="flex flex-col text-left">
              <span
                className="text-sm font-black tracking-wider uppercase text-cyan-400 group-hover:text-white transition-colors"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                SER MAX
              </span>
              <span className="text-[9px] font-mono tracking-widest text-amber-300 uppercase -mt-0.5">VLOGS</span>
            </div>
          </button>

          {/* Clean Right Actions */}
          <div className="flex items-center gap-3">
            {activeSection ? (
              <button
                onClick={resetToDashboard}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/20 hover:scale-105 transition-all cursor-pointer shadow-lg shadow-cyan-500/10"
              >
                ← Return to Dashboard
              </button>
            ) : (
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/30 text-[10px] font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" /> Executive Portfolio Hub
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ── MAIN DASHBOARD (HERO HUB) ────────────────────── */}
      {!activeSection && (
        <section
          className="relative pt-20 pb-20 min-h-screen flex items-center justify-center overflow-hidden transition-all duration-500"
          style={{
            background: "radial-gradient(circle at 50% 30%, hsl(195, 100%, 10%) 0%, hsl(215, 90%, 6%) 50%, hsl(225, 95%, 3%) 90%), #030914",
          }}
        >
          {/* Animated SVG Circuit Lines & Electrical Signal Tracks */}
          <div className="absolute inset-0 pointer-events-none z-0 opacity-40 overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 1400 900" fill="none" preserveAspectRatio="xMidYMid slice">
              {/* Main Circuit Backbone Paths */}
              <path d="M-100 200 L300 200 L450 350 L700 350 L850 200 L1500 200" stroke="rgba(0,200,255,0.25)" strokeWidth="1.5" />
              <path d="M-100 700 L250 700 L400 550 L1000 550 L1150 700 L1500 700" stroke="rgba(251,191,36,0.25)" strokeWidth="1.5" />
              <path d="M200 -100 L200 400 L350 550 L350 1000" stroke="rgba(168,85,247,0.2)" strokeWidth="1.5" />
              <path d="M1200 -100 L1200 400 L1050 550 L1050 1000" stroke="rgba(16,185,129,0.2)" strokeWidth="1.5" />

              {/* Animated Glowing Electric Signals */}
              <path d="M-100 200 L300 200 L450 350 L700 350 L850 200 L1500 200" stroke="#00c8ff" strokeWidth="2.5" className="animate-circuit-signal" />
              <path d="M-100 700 L250 700 L400 550 L1000 550 L1150 700 L1500 700" stroke="#fbbf24" strokeWidth="2.5" className="animate-circuit-signal" style={{ animationDelay: "-2s" }} />
              <path d="M200 -100 L200 400 L350 550 L350 1000" stroke="#a855f7" strokeWidth="2" className="animate-circuit-signal" style={{ animationDelay: "-1s" }} />
              <path d="M1200 -100 L1200 400 L1050 550 L1050 1000" stroke="#10b981" strokeWidth="2" className="animate-circuit-signal" style={{ animationDelay: "-3s" }} />

              {/* Glowing Circuit Nodes */}
              <circle cx="300" cy="200" r="4" fill="#00c8ff" className="animate-ping" style={{ animationDuration: "3s" }} />
              <circle cx="450" cy="350" r="5" fill="#00c8ff" />
              <circle cx="700" cy="350" r="5" fill="#fbbf24" />
              <circle cx="850" cy="200" r="4" fill="#a855f7" className="animate-ping" style={{ animationDuration: "4s" }} />
              <circle cx="250" cy="700" r="4" fill="#fbbf24" />
              <circle cx="400" cy="550" r="5" fill="#10b981" />
              <circle cx="1000" cy="550" r="5" fill="#a855f7" />
              <circle cx="1150" cy="700" r="4" fill="#00c8ff" />
            </svg>
          </div>

          {/* Ambient Drifting CS Binary & Code Stream (Subtle Moving Animations) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
            <div className="absolute top-24 left-8 font-mono text-xs text-cyan-400/30 animate-binary-drift-slow space-y-1 hidden lg:block">
              <p className="tracking-widest">01001101 01000001 01011000</p>
              <p className="text-[10px] text-cyan-300/20">const role = "College Instructor";</p>
              <p className="tracking-widest">01010101 01010010 01001111</p>
            </div>

            <div className="absolute top-64 right-10 font-mono text-xs text-amber-400/30 animate-binary-drift-fast space-y-1 hidden lg:block">
              <p className="tracking-widest">01001101 01010011 01000011 01010011</p>
              <p className="text-[10px] text-amber-300/20">SELECT * FROM education WHERE status = "MSCS";</p>
              <p className="tracking-widest">01000001 01001001 00100000 01000100 01010011</p>
            </div>

            <div className="absolute bottom-36 left-16 font-mono text-xs text-purple-400/30 animate-binary-drift-slow space-y-1 hidden xl:block">
              <p className="text-[10px] text-purple-300/25">async function inspireNextGen() &#123;</p>
              <p className="pl-4 text-[10px] text-purple-300/20">await teach("Data Structures", "NLP", "AI");</p>
              <p className="text-[10px] text-purple-300/25">&#125;</p>
            </div>

            <div className="absolute bottom-20 right-20 font-mono text-xs text-emerald-400/30 animate-binary-drift-fast space-y-1 hidden xl:block">
              <p className="tracking-widest">01010010 01001001 01010011 01000101</p>
              <p className="text-[10px] text-emerald-300/20">"Walk slowly, but never walk backward."</p>
            </div>
          </div>

          {/* Cyber Grid Background Pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage: `
                radial-gradient(rgba(0, 200, 255, 0.8) 1px, transparent 1px),
                linear-gradient(rgba(0, 200, 255, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 200, 255, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px, 48px 48px, 48px 48px",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full text-center z-10">
            
            {/* Circular Profile Portrait with Holographic Animated Rotating Circuit Rings */}
            <div className="flex justify-center mb-6 relative">
              {/* Rotating Holographic Outer Circuit Rings */}
              <div className="absolute -inset-6 sm:-inset-8 rounded-full border border-cyan-400/20 border-dashed animate-holo-rotate pointer-events-none" />
              <div className="absolute -inset-10 sm:-inset-12 rounded-full border border-amber-400/15 border-dotted animate-holo-rotate-rev pointer-events-none" />

              <button
                type="button"
                onClick={() => setLightboxImage({ src: profilePhoto, title: "Maxil S. Urocay — Official Portrait" })}
                className="group relative cursor-pointer focus:outline-none transition-transform duration-500 hover:scale-108 active:scale-95"
                title="Click to view full photo in high resolution"
              >
                <div
                  className="absolute -inset-3 rounded-full opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "conic-gradient(from 0deg, #00c8ff, #a855f7, #fbbf24, #10b981, #00c8ff)",
                  }}
                />
                <div className="relative p-1.5 rounded-full bg-[#030914] border-2 border-amber-400/90 shadow-[0_0_40px_rgba(251,191,36,0.3)] transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={profilePhoto}
                    alt="Maxil S. Urocay"
                    className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover object-top border-2 border-[#00c8ff]/70 shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 text-white">
                    <Camera size={22} className="text-amber-300 animate-bounce" />
                    <span className="text-[9px] font-mono tracking-widest uppercase text-cyan-300 font-bold">View Photo</span>
                  </div>
                </div>
              </button>
            </div>

            {/* Name & Title with Interactive Hover & Click Effects */}
            <h1
              onClick={() => openSection("about")}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase mb-2 transition-all duration-300 hover:text-cyan-300 hover:scale-102 cursor-pointer drop-shadow-lg"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
              title="Click to open About Me section"
            >
              MAXIL S. <span className="text-amber-400 hover:text-amber-300 transition-colors">UROCAY, MSCS</span>
            </h1>
            <p
              onClick={() => openSection("experience")}
              className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-cyan-400 mb-3 hover:text-cyan-200 transition-colors cursor-pointer"
              title="Click to open Professional History section"
            >
              C O L L E G E &nbsp; I N S T R U C T O R
            </p>

            {/* All Professional Roles Badge Chips with Interactive Hover & Section Navigation */}
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto mb-6">
              {[
                { label: "College Instructor", color: "#00c8ff", section: "experience" },
                { label: "Computer Scientist", color: "#a855f7", section: "education" },
                { label: "Event & Program Host", color: "#fbbf24", section: "awards" },
                { label: "Public Speaker", color: "#10b981", section: "awards" },
                { label: "Youth Leader", color: "#ec4899", section: "awards" },
                { label: "Academic & Tech Researcher", color: "#00c8ff", section: "research" },
                { label: "Community Volunteer", color: "#fbbf24", section: "awards" },
              ].map((r, i) => (
                <button
                  key={i}
                  onClick={() => openSection(r.section)}
                  className="text-[11px] font-mono font-semibold px-3.5 py-1 rounded-full border transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-md hover:shadow-lg"
                  style={{
                    background: `${r.color}14`,
                    color: r.color,
                    borderColor: `${r.color}50`,
                    boxShadow: `0 0 15px ${r.color}25`,
                  }}
                  title={`Click to open ${r.label} section`}
                >
                  ✦ {r.label}
                </button>
              ))}
            </div>

            {/* Official Connect & Social Media Bar */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <a
                href="https://www.facebook.com/profile.php?id=61573257042433"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider bg-blue-600/20 border border-blue-500/50 text-blue-300 hover:bg-blue-600/35 hover:scale-108 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all cursor-pointer"
                title="Connect on Official Facebook Profile"
              >
                <Facebook size={15} className="text-blue-400" />
                <span>Facebook Profile</span>
                <ExternalLink size={11} className="opacity-70" />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider bg-sky-600/20 border border-sky-500/50 text-sky-300 hover:bg-sky-600/35 hover:scale-108 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all cursor-pointer"
                title="Connect on Official LinkedIn Profile"
              >
                <Linkedin size={15} className="text-sky-400" />
                <span>LinkedIn Profile</span>
                <ExternalLink size={11} className="opacity-70" />
              </a>

              <a
                href="https://www.youtube.com/@sermaxx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider bg-rose-600/20 border border-rose-500/50 text-rose-300 hover:bg-rose-600/35 hover:scale-108 hover:shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all cursor-pointer"
                title="Watch SER MAX Vlogs & Educational Videos on YouTube @sermaxx"
              >
                <Youtube size={15} className="text-rose-400" />
                <span>YouTube @sermaxx</span>
                <ExternalLink size={11} className="opacity-70" />
              </a>

              <a
                href="mailto:urocaymaxil@gmail.com"
                className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider bg-amber-500/20 border border-amber-400/50 text-amber-300 hover:bg-amber-500/35 hover:scale-108 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all cursor-pointer"
                title="Send Direct Email to Maxil S. Urocay"
              >
                <Mail size={15} className="text-amber-400" />
                <span>urocaymaxil@gmail.com</span>
              </a>
            </div>

            {/* Interactive Tagline Statement */}
            <p
              onClick={() => openSection("about")}
              className="text-xs sm:text-sm italic text-slate-300 max-w-2xl mx-auto mb-8 font-light hover:text-white cursor-pointer transition-colors"
            >
              “Educator. Host. Leader. Innovator. Committed to <span className="text-amber-400 font-semibold underline decoration-amber-400/40">Excellence</span> and <span className="text-cyan-400 font-semibold underline decoration-cyan-400/40">Impact</span>.”
            </p>

            {/* Bio Summary & Loved Quotes Card with Glass Interactivity */}
            <div className="max-w-4xl mx-auto mb-10 grid md:grid-cols-3 gap-4">
              <div
                onClick={() => openSection("about")}
                className="md:col-span-2 p-5 rounded-xl border text-left flex flex-col justify-center transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-cyan-400/50 cursor-pointer group"
                style={{
                  background: "rgba(10, 24, 45, 0.8)",
                  backdropFilter: "blur(14px)",
                  borderColor: "rgba(0, 200, 255, 0.25)",
                  boxShadow: "0 0 25px rgba(0, 200, 255, 0.08)"
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-amber-400 animate-spin" style={{ animationDuration: "6s" }} />
                    <span className="text-xs font-mono tracking-widest uppercase text-amber-400 font-semibold">Executive Summary</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">Explore Profile →</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans group-hover:text-slate-100 transition-colors">
                  A dedicated Computer Science educator, event & program host, public speaker, technology professional, youth leader, and MSCS Candidate with expertise in CS instruction, AI & Data Science research, hosting/emceeing, leadership, and community service. Dedicated to academic excellence, continuous growth, and creating meaningful impact.
                </p>
              </div>

              <div
                onClick={() => openSection("about")}
                className="p-5 rounded-xl border text-left flex flex-col justify-center gap-2.5 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-amber-400/50 cursor-pointer group"
                style={{
                  background: "rgba(10, 24, 45, 0.8)",
                  backdropFilter: "blur(14px)",
                  borderColor: "rgba(251, 191, 36, 0.25)",
                  boxShadow: "0 0 25px rgba(251, 191, 36, 0.08)"
                }}
              >
                <div className="flex items-center justify-between mb-0.5">
                  <div className="flex items-center gap-2">
                    <Quote size={15} className="text-cyan-400" />
                    <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">Favorite Quotes</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs font-semibold text-amber-300 italic group-hover:text-amber-200">“It is okay to not be okay.”</p>
                    <p className="text-[10px] text-slate-400">— Rest. Recharge. Rise again.</p>
                  </div>
                  <div className="border-t border-white/5 pt-1.5">
                    <p className="text-xs font-semibold text-emerald-300 italic group-hover:text-emerald-200">“It is okay to get tired and just rest, not quit.”</p>
                    <p className="text-[10px] text-slate-400">— Take a pause, then keep pressing on.</p>
                  </div>
                  <div className="border-t border-white/5 pt-1.5">
                    <p className="text-xs font-semibold text-cyan-300 italic group-hover:text-cyan-200">“I will walk slowly, but I will never walk backward.”</p>
                    <p className="text-[10px] text-slate-400">— Continuous progress forward.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 11 Glassmorphism Interactive Dashboard Cards Grid with Circuit Hover & Click Animations */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto">
              {[
                { id: "about",          title: "ABOUT ME", icon: <User size={22} />, color: "#00c8ff", desc: "Profile & Overview" },
                { id: "education",      title: "EDUCATIONAL HISTORY", icon: <GraduationCap size={22} />, color: "#a855f7", desc: "MSCS, BSCS, Tokyo Univ" },
                { id: "experience",     title: "PROFESSIONAL HISTORY", icon: <Briefcase size={22} />, color: "#00c8ff", desc: "UNO-R Instructor & Real Estate" },
                { id: "awards",         title: "ACHIEVEMENTS & AWARDS", icon: <Trophy size={22} />, color: "#fbbf24", desc: "Presidential & Deans Awards" },
                { id: "skills",         title: "SKILLS & EXPERTISE", icon: <Lightbulb size={22} />, color: "#ec4899", desc: "CS, Data Science, Hosting" },
                { id: "songs",          title: "INSPIRATIONAL SONGS", icon: <Music size={22} />, color: "#f43f5e", desc: "Karaoke Lyrics & Audio Play" },
                { id: "gallery",        title: "MEMORABLE DAYS & PHOTOS", icon: <Camera size={22} />, color: "#38bdf8", desc: "Official Event Gallery" },
                { id: "awards",         title: "PUBLIC SPEAKING & EVENTS", icon: <Mic size={22} />, color: "#10b981", desc: "Emcee & Event Hosting" },
                { id: "awards",         title: "LEADERSHIP & INVOLVEMENT", icon: <Users size={22} />, color: "#a855f7", desc: "CS Org President & Volunteer" },
                { id: "research",       title: "PROJECTS & RESEARCH", icon: <Laptop size={22} />, color: "#00c8ff", desc: "NLP & AI Academic Papers" },
                { id: "certifications", title: "TRAININGS & CERTIFICATIONS", icon: <BookOpen size={22} />, color: "#fbbf24", desc: "168+ Seminars & Certs" },
                { id: "contact",        title: "CONTACT ME", icon: <Mail size={22} />, color: "#c084fc", desc: "Get in Touch Directly" },
              ].map((card, idx) => (
                <button
                  key={idx}
                  onClick={() => openSection(card.id)}
                  className="group relative p-5 rounded-2xl border flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-108 hover:-translate-y-2 active:scale-95 cursor-pointer shadow-lg hover:shadow-2xl overflow-hidden"
                  style={{
                    background: "rgba(10, 26, 48, 0.8)",
                    backdropFilter: "blur(16px)",
                    borderColor: "rgba(0, 200, 255, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = card.color;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 14px 35px ${card.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0, 200, 255, 0.2)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Subtle Background Glow Node on Hover */}
                  <div
                    className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 pointer-events-none"
                    style={{ background: card.color }}
                  />

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:rotate-6 shadow-md"
                    style={{
                      background: `${card.color}18`,
                      color: card.color,
                      border: `1px solid ${card.color}60`,
                      boxShadow: `0 0 15px ${card.color}30`
                    }}
                  >
                    {card.icon}
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <span
                      className="text-xs font-bold text-slate-100 tracking-wider uppercase text-center group-hover:text-white transition-colors duration-200"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {card.title}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
                      {card.desc}
                    </span>
                  </div>

                  {/* Circuit Accent Bar */}
                  <div
                    className="w-8 h-0.5 rounded-full transition-all duration-300 group-hover:w-24"
                    style={{ background: card.color, boxShadow: `0 0 10px ${card.color}` }}
                  />
                </button>
              ))}
            </div>

            {/* Core Stats Bar */}
            <div
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl overflow-hidden border max-w-4xl mx-auto"
              style={{ borderColor: "rgba(0,200,255,0.15)", background: "rgba(10, 24, 45, 0.6)" }}
            >
              {[
                { num: "168+", label: "Trainings" },
                { num: "42",   label: "Certifications" },
                { num: "7",    label: "Research Works" },
                { num: "2026", label: "MSCS Candidate" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center justify-center py-4 px-4 transition-all duration-300 hover:bg-cyan-500/10 cursor-default"
                  style={{ background: "rgba(0,200,255,0.02)" }}
                >
                  <span
                    className="text-xl sm:text-2xl font-black text-cyan-400"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {s.num}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 mt-0.5 tracking-wider uppercase">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── ACTIVE SECTION FOCUSED TOOLBAR ──────────── */}
      {activeSection && (
        <div
          className="sticky top-14 z-40 py-3 px-4 sm:px-6 border-y flex flex-wrap items-center justify-between gap-3 shadow-xl"
          style={{ background: "rgba(3, 9, 20, 0.95)", backdropFilter: "blur(16px)", borderColor: "rgba(0, 200, 255, 0.25)" }}
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono tracking-widest uppercase text-slate-300">
              Focused Section View: <strong className="text-cyan-400 font-bold">{activeSection.toUpperCase()}</strong>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveSection(null)}
              className="text-xs font-mono px-3.5 py-1 rounded-full border border-slate-700 text-slate-300 hover:border-slate-500 transition-colors"
            >
              Show All Sections
            </button>
            <button
              onClick={resetToDashboard}
              className="flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-cyan-500/10 border border-cyan-400/40 text-cyan-400 hover:bg-cyan-500/20 transition-all font-semibold"
            >
              ← Back to Main Dashboard
            </button>
          </div>
        </div>
      )}

      {/* ── ABOUT ──────────────────────────────────── */}
      {activeSection === "about" && (
        <section id="about" className="py-20 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(0,200,255,0.06) 0%, #050e1a 50%, #030914 100%)" }}>
          <SectionAmbience themeColor="#00c8ff" gradientTo="#a855f7" floatingIcons={[<User size={48} />, <Cpu size={40} />, <Sparkles size={36} />]} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <ThematicSectionBanner
              num="01"
              label="About Me"
              title="Executive Profile & Biography"
              subtitle="A dedicated Computer Science educator, technology researcher, event host, and youth leader committed to academic excellence, innovation, and community empowerment."
              icon={<User size={24} />}
              themeColor="#00c8ff"
              gradientTo="#a855f7"
              onBack={resetToDashboard}
            />

            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-3">
                <H2>Who I Am</H2>
                <p className="text-muted-foreground mt-5 leading-relaxed text-base">
                  A dedicated Computer Science educator, technology professional, youth leader, and lifelong learner with experience in teaching, hosting, public speaking, guest speakerships, research, leadership, customer service, and community movements.
                </p>
                <p className="text-muted-foreground mt-4 leading-relaxed text-base">
                  Skilled in communicating ideas clearly, engaging diverse audiences, conducting academic and technology-related research, and facilitating programs that promote learning, innovation, and youth empowerment. Committed to academic excellence, continuous growth, and creating meaningful impact through education, technology, research, and service.
                </p>
              </div>
              <div className="lg:col-span-2 space-y-3">
                {[
                  { label: "Phone",          val: "0999 148 2129", isLink: false },
                  { label: "Email",          val: "urocaymaxil@gmail.com", isLink: false },
                  { label: "Facebook",       val: "Official Facebook Profile", link: "https://www.facebook.com/profile.php?id=61573257042433", isLink: true },
                  { label: "YouTube Vlogs",  val: "Official Channel @sermaxx", link: "https://www.youtube.com/@sermaxx", isLink: true },
                  { label: "Location",       val: "Bacolod City, Negros Occidental, Philippines", isLink: false },
                  { label: "Languages",      val: "English · Filipino · Cebuano · Hiligaynon", isLink: false },
                  { label: "Current Status", val: "College Instructor & MSCS Candidate", isLink: false },
                ].map((r) => (
                  <div
                    key={r.label}
                    className="p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:border-[#00c8ff]/50 hover:shadow-[0_8px_25px_rgba(0,200,255,0.2)] cursor-pointer"
                    style={{ background: "rgba(10,24,40,0.85)", borderColor: "rgba(0,200,255,0.18)", boxShadow: "0 4px 20px rgba(0,200,255,0.05)" }}
                  >
                    <p className="text-xs font-mono tracking-widest uppercase mb-1" style={{ color: "#00c8ff" }}>{r.label}</p>
                    {r.isLink ? (
                      <a
                        href={r.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-cyan-300 hover:text-white hover:underline flex items-center gap-1.5"
                      >
                        {r.val} <ExternalLink size={12} />
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{r.val}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── EDUCATION ──────────────────────────────── */}
      {activeSection === "education" && (
        <section id="education" className="py-20 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(168,85,247,0.06) 0%, #050e1a 50%, #030914 100%)" }}>
          <SectionAmbience themeColor="#a855f7" gradientTo="#fbbf24" floatingIcons={[<GraduationCap size={48} />, <BookOpen size={40} />, <Star size={36} />]} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <ThematicSectionBanner
              num="02"
              label="Education"
              title="Educational Background & Academic History"
              subtitle="Comprehensive academic journey spanning Master of Science in Computer Science studies, Bachelor's degree, and senior high school honors."
              icon={<GraduationCap size={24} />}
              themeColor="#a855f7"
              gradientTo="#fbbf24"
              onBack={resetToDashboard}
            />
            <div className="mt-10 relative">
              <div
                className="absolute top-0 bottom-0 hidden md:block"
                style={{ left: "1.125rem", width: 2, background: "linear-gradient(to bottom, #a855f7, #a855f730, transparent)", boxShadow: "0 0 10px rgba(168,85,247,0.2)" }}
              />
              <div className="space-y-6">
                {EDUCATION.map((e, i) => (
                  <div key={i} className="md:pl-14 relative">
                    <div
                      className="hidden md:flex absolute left-0 top-5 w-9 h-9 rounded-full items-center justify-center border-2 transition-transform duration-300 hover:scale-125"
                      style={{ background: "#050e1a", borderColor: "#a855f7", color: "#a855f7", boxShadow: "0 0 12px rgba(168,85,247,0.3)" }}
                    >
                      <GraduationCap size={14} />
                    </div>
                    <div
                      className="p-5 sm:p-6 rounded-xl border transition-all duration-300 hover:scale-[1.015] hover:-translate-y-1 hover:border-[#a855f7]/50 hover:shadow-[0_10px_30px_rgba(168,85,247,0.2)] cursor-pointer"
                      style={{ background: "rgba(10,24,40,0.85)", borderColor: "rgba(168,85,247,0.15)" }}
                    >
                      <div className="flex flex-wrap justify-between gap-2 mb-1">
                        <h3
                          className="text-base font-bold text-foreground"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          {e.school}
                        </h3>
                        <span className="text-xs font-mono shrink-0" style={{ color: "#a855f7" }}>{e.period}</span>
                      </div>
                      <p className="text-sm italic text-muted-foreground mb-3">{e.degree}</p>
                      {e.details.length > 0 && (
                        <ul className="space-y-1">
                          {e.details.map((d, j) => <Bullet key={j} text={d} />)}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── EXPERIENCE ─────────────────────────────── */}
      {activeSection === "experience" && (
        <section id="experience" className="py-20 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 20% 60%, rgba(16,185,129,0.06) 0%, #050e1a 50%, #030914 100%)" }}>
          <SectionAmbience themeColor="#10b981" gradientTo="#00c8ff" floatingIcons={[<Briefcase size={48} />, <Users size={40} />, <Award size={36} />]} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <ThematicSectionBanner
              num="03"
              label="Experience"
              title="Professional History & Work Experience"
              subtitle="College instruction, academic course facilitation, program hosting, leadership appointments, and youth organization management."
              icon={<Briefcase size={24} />}
              themeColor="#10b981"
              gradientTo="#00c8ff"
              onBack={resetToDashboard}
            />
            <div className="mt-8 space-y-5">
              {EXPERIENCE.map((e, i) => (
                <div
                  key={i}
                  className="p-5 sm:p-6 rounded-xl border transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
                  style={{
                    background: "rgba(10,24,40,0.85)",
                    borderColor: e.type === "current" ? "rgba(16,185,129,0.25)" : "rgba(16,185,129,0.1)",
                    borderLeft: e.type === "current" ? "3px solid #10b981" : "3px solid rgba(16,185,129,0.3)",
                    boxShadow: e.type === "current" ? "0 4px 20px rgba(16,185,129,0.08)" : "none",
                  }}
                >
                  <div className="flex flex-wrap justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <h3
                        className="text-base font-bold text-foreground"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {e.role}
                      </h3>
                      {e.type === "current" && (
                        <span
                          className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                          style={{ background: "rgba(16,185,129,0.12)", color: "#10b981" }}
                        >
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono shrink-0" style={{ color: "#10b981" }}>{e.period}</span>
                  </div>
                  <p className="text-xs font-mono text-muted-foreground mb-4">{e.org}</p>
                  <ul className="space-y-2">
                    {e.bullets.map((b, j) => {
                      if (b.startsWith("Courses handled:")) {
                        const courses = b.replace("Courses handled: ", "").split(", ");
                        return (
                          <li key={j} className="mt-3 pt-3 border-t border-white/5">
                            <p className="text-xs font-mono uppercase tracking-wider text-[#00c8ff] mb-2">Courses Handled:</p>
                            <div className="flex flex-wrap gap-1.5">
                              {courses.map((course, cIdx) => (
                                <span
                                  key={cIdx}
                                  className="text-xs px-2.5 py-1 rounded-md font-mono"
                                  style={{ background: "rgba(0,200,255,0.08)", color: "#00c8ff", border: "1px solid rgba(0,200,255,0.2)" }}
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </li>
                        );
                      }
                      return <Bullet key={j} text={b} color="secondary" />;
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SKILLS ─────────────────────────────────── */}
      {activeSection === "skills" && (
        <section id="skills" className="py-20 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 80% 40%, rgba(236,72,153,0.06) 0%, #050e1a 50%, #030914 100%)" }}>
          <SectionAmbience themeColor="#ec4899" gradientTo="#a855f7" floatingIcons={[<Lightbulb size={48} />, <Code size={40} />, <Cpu size={36} />]} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <ThematicSectionBanner
              num="04"
              label="Skills & Expertise"
              title="Core Competencies & Technical Mastery"
              subtitle="Programming languages, artificial intelligence algorithms, web frameworks, public speaking, research methodologies, and organizational leadership."
              icon={<Lightbulb size={24} />}
              themeColor="#ec4899"
              gradientTo="#a855f7"
              onBack={resetToDashboard}
            />
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {SKILLS.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-4 rounded-xl border transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-lg cursor-default"
                  style={{ background: "rgba(10,24,40,0.85)", borderColor: "rgba(236,72,153,0.12)", boxShadow: "0 2px 12px rgba(236,72,153,0.04)" }}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ background: i % 3 === 0 ? "#ec4899" : i % 3 === 1 ? "#a855f7" : "#f59e0b", boxShadow: `0 0 8px ${i % 3 === 0 ? '#ec489950' : i % 3 === 1 ? '#a855f750' : '#f59e0b50'}` }}
                  />
                  <span className="text-sm text-foreground font-medium" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RESEARCH ───────────────────────────────── */}
      {activeSection === "research" && (
        <section id="research" className="py-20 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 20%, rgba(0,200,255,0.06) 0%, #050e1a 50%, #030914 100%)" }}>
          <SectionAmbience themeColor="#00c8ff" gradientTo="#ec4899" floatingIcons={[<Laptop size={48} />, <FlaskConical size={40} />, <GitBranch size={36} />]} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <ThematicSectionBanner
              num="05"
              label="Projects & Research"
              title="Academic Research & Technological Innovations"
              subtitle="Published research papers, machine learning models, sentiment analysis studies, bioinformatics tools, and custom algorithms."
              icon={<Laptop size={24} />}
              themeColor="#00c8ff"
              gradientTo="#ec4899"
              onBack={resetToDashboard}
            />
            <p className="text-muted-foreground text-sm mt-1 mb-10">Academic and professional research outputs</p>
            <div className="space-y-4">
              {RESEARCH.map((r, i) => (
                <div
                  key={i}
                  className="flex gap-5 p-5 sm:p-6 rounded-xl border transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
                  style={{ background: "rgba(10,24,40,0.85)", borderColor: "rgba(0,200,255,0.12)", boxShadow: "0 2px 12px rgba(0,200,255,0.04)" }}
                >
                  <span
                    className="text-3xl font-black shrink-0 w-10 text-right leading-none mt-0.5"
                    style={{ fontFamily: "'Orbitron', sans-serif", color: "rgba(0,200,255,0.2)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm sm:text-base text-foreground leading-relaxed font-medium" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {r.title}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span
                        className="text-[10px] font-mono px-2 py-0.5 rounded"
                        style={{ background: "rgba(168,85,247,0.12)", color: "#a855f7" }}
                      >
                        {r.tag}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">{r.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── AWARDS ─────────────────────────────────── */}
      {(activeSection === "awards" || activeSection === "speaking" || activeSection === "leadership") && (
        <section id="awards" className="py-20 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(251,191,36,0.06) 0%, #050e1a 50%, #030914 100%)" }}>
          <SectionAmbience themeColor="#fbbf24" gradientTo="#10b981" floatingIcons={[<Trophy size={48} />, <Star size={40} />, <Award size={36} />]} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <ThematicSectionBanner
              num="06"
              label="Awards & Honors"
              title="Achievements, Honors & Leadership Awards"
              subtitle="Academic excellence awards, youth leadership distinctions, hackathon honors, community outreach recognition, and public speaking accomplishments."
              icon={<Trophy size={24} />}
              themeColor="#fbbf24"
              gradientTo="#10b981"
              onBack={resetToDashboard}
            />
            <div className="mt-8 grid md:grid-cols-2 gap-5">
              {[
                { icon: <GraduationCap size={15} />, title: "Academic Awards",             items: AWARDS_ACADEMIC,   color: "#00c8ff" },
                { icon: <Users size={15} />,         title: "Leadership",                   items: AWARDS_LEADERSHIP,  color: "#a855f7" },
                { icon: <Star size={15} />,           title: "Community Service & Outreach", items: AWARDS_COMMUNITY,   color: "#10b981" },
                { icon: <BookOpen size={15} />,       title: "Religious & Ministry",         items: AWARDS_RELIGIOUS,   color: "#f59e0b" },
                { icon: <Award size={15} />,          title: "Public Speaking & Cultural",   items: AWARDS_SPEAKING,    color: "#00c8ff" },
              ].map((g, i) => (
                <div
                  key={i}
                  className="p-5 sm:p-6 rounded-xl border transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
                  style={{ background: "rgba(10,24,40,0.85)", borderColor: `${g.color}20`, borderTop: `2px solid ${g.color}60`, boxShadow: `0 2px 15px ${g.color}08` }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span style={{ color: g.color }}>{g.icon}</span>
                    <h3
                      className="text-sm font-bold uppercase tracking-wider"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: g.color }}
                    >
                      {g.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {g.items.map((it, j) => <Bullet key={j} text={it} />)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CERTIFICATIONS ─────────────────────────── */}
      {activeSection === "certifications" && (
        <section id="certifications" className="py-20 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 40% 30%, rgba(245,158,11,0.06) 0%, #050e1a 50%, #030914 100%)" }}>
          <SectionAmbience themeColor="#f59e0b" gradientTo="#00c8ff" floatingIcons={[<Award size={48} />, <Shield size={40} />, <CheckCircle2 size={36} />]} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <ThematicSectionBanner
              num="07"
              label="Certifications"
              title="Memberships, Certifications & Credentials"
              subtitle="Verified professional certifications, organizational memberships, and accredited completion certificates."
              icon={<Award size={24} />}
              themeColor="#f59e0b"
              gradientTo="#00c8ff"
              onBack={resetToDashboard}
            />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <p className="text-muted-foreground text-sm">
                Click any certificate card to view details and attach your certificate image.
              </p>
              <div className="relative w-full md:w-80 shrink-0">
                <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={certSearch}
                  onChange={(e) => setCertSearch(e.target.value)}
                  placeholder="Filter 42+ certifications..."
                  className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#0a1828] border border-[#00c8ff]/20 text-xs text-foreground focus:outline-none focus:border-[#00c8ff]/50 transition-colors"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certsData
                .filter(c => !certSearch || c.title.toLowerCase().includes(certSearch.toLowerCase()) || c.org.toLowerCase().includes(certSearch.toLowerCase()))
                .map((c, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCert(c)}
                  className="text-left p-4 rounded-xl border group transition-colors duration-200"
                  style={{ background: "#0a1828", borderColor: "rgba(0,200,255,0.1)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,200,255,0.3)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,200,255,0.1)"; }}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <ScrollText size={14} className="shrink-0 mt-0.5" style={{ color: "#00c8ff" }} />
                    <ExternalLink size={12} className="shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: "#00c8ff" }} />
                  </div>
                  <p className="text-sm font-semibold text-foreground leading-snug mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {c.title}
                  </p>
                  <p className="text-xs font-mono text-muted-foreground">{c.org}</p>
                  {c.date && <p className="text-xs text-muted-foreground/60 mt-0.5">{c.date}</p>}
                  {c.image_url && (
                    <div className="mt-2 text-[10px] font-mono text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Attached
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TRAININGS ──────────────────────────────── */}
      {activeSection === "trainings" && (
        <section id="trainings" className="py-20 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 70% 70%, rgba(245,158,11,0.06) 0%, #050e1a 50%, #030914 100%)" }}>
          <SectionAmbience themeColor="#f59e0b" gradientTo="#10b981" floatingIcons={[<BookOpen size={48} />, <ScrollText size={40} />, <GraduationCap size={36} />]} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <ThematicSectionBanner
              num="08"
              label="Trainings & Seminars"
              title="Trainings, Seminars & Continuous Learning"
              subtitle="168+ completed training programs, professional seminars, webinars, and technical workshops in technology, education, leadership, and research."
              icon={<BookOpen size={24} />}
              themeColor="#f59e0b"
              gradientTo="#10b981"
              onBack={resetToDashboard}
            />
            <div className="flex flex-col md:flex-row md:items-center justify-end gap-4 mb-6">
              <div className="relative w-full md:w-80 shrink-0">
                <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={trainingSearch}
                  onChange={(e) => setTrainingSearch(e.target.value)}
                  placeholder="Search 168 trainings..."
                  className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#0a1828] border border-[#00c8ff]/20 text-xs text-foreground focus:outline-none focus:border-[#00c8ff]/50 transition-colors"
                />
              </div>
            </div>
            <div
              className="p-5 sm:p-6 rounded-xl border"
              style={{ background: "#0a1828", borderColor: "rgba(0,200,255,0.1)" }}
            >
              <ul className="space-y-2.5">
                {(trainingSearch
                  ? TRAININGS.filter(t => t.toLowerCase().includes(trainingSearch.toLowerCase()))
                  : showAllTrainings
                  ? TRAININGS
                  : TRAININGS.slice(0, 20)
                ).map((t, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: "#6b8caa" }}>
                    <span style={{ color: "#00c8ff", marginTop: 4, flexShrink: 0 }}>›</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              {!trainingSearch && !showAllTrainings && (
                <button
                  onClick={() => setShowAllTrainings(true)}
                  className="mt-5 flex items-center gap-2 text-xs font-mono tracking-widest uppercase transition-colors duration-200 hover:opacity-80"
                  style={{ color: "#00c8ff" }}
                >
                  <ChevronDown size={13} /> Show all {TRAININGS.length} trainings
                </button>
              )}
              {!trainingSearch && showAllTrainings && (
                <button
                  onClick={() => setShowAllTrainings(false)}
                  className="mt-5 flex items-center gap-2 text-xs font-mono tracking-widest uppercase transition-colors duration-200 hover:opacity-80"
                  style={{ color: "#00c8ff" }}
                >
                  <ChevronUp size={13} /> Show less
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── MEMORABLE DAYS & PHOTOS ─────────────────── */}
      {activeSection === "gallery" && (
        <section id="gallery" className="py-20 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(56,189,248,0.06) 0%, #050e1a 50%, #030914 100%)" }}>
          <SectionAmbience themeColor="#38bdf8" gradientTo="#fbbf24" floatingIcons={[<Camera size={48} />, <ImageIcon size={40} />, <Calendar size={36} />]} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <ThematicSectionBanner
              num="09"
              label="Memorable Days"
              title="Memorable Days & Life Moments"
              subtitle="A visual chronicle of milestones, leadership summits, youth gatherings, speaking engagements, and unforgettable moments."
              icon={<Camera size={24} />}
              themeColor="#38bdf8"
              gradientTo="#fbbf24"
              onBack={resetToDashboard}
            />

            <div className="flex items-center justify-between gap-4 mb-6">
              {token && (
                <button
                  onClick={() => {
                    setAdminPortalOpen(true);
                    setAdminTab("gallery");
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider bg-sky-500/10 border border-sky-500/30 text-sky-400 hover:bg-sky-500/20 transition-all shrink-0 cursor-pointer ml-auto"
                >
                  <Plus size={14} /> Add Memorable Photo
                </button>
              )}
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {["All", "Academic", "Leadership", "Hosting & Events", "Community", "Memories"].map((cat) => {
                const count = cat === "All"
                  ? galleryItems.length
                  : galleryItems.filter(item => (item.category || "Memories") === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setGalleryCategoryFilter(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                      galleryCategoryFilter === cat
                        ? "bg-sky-500 text-black font-bold shadow-lg shadow-sky-500/20"
                        : "bg-[#0a1828] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${galleryCategoryFilter === cat ? "bg-black/20 text-black font-bold" : "bg-slate-800 text-slate-400"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Photo Cards Wall */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {galleryItems
                .filter(item => galleryCategoryFilter === "All" || (item.category || "Memories") === galleryCategoryFilter)
                .map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setLightboxImage({ src: `${API_URL}${item.image_url}`, title: `${item.title}${item.event_date ? ` (${item.event_date})` : ''}` })}
                    className="group relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden border flex flex-col justify-end transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_35px_rgba(56,189,248,0.2)] cursor-pointer"
                    style={{ borderColor: "rgba(56, 189, 248, 0.2)", background: "#0a1828" }}
                  >
                    <img
                      src={`${API_URL}${item.image_url}`}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050e1a] via-[#050e1a]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur border border-sky-400/30 text-sky-300">
                        {item.category || "Memories"}
                      </span>
                      {item.event_date && (
                        <span className="text-[10px] font-mono text-slate-300 px-2 py-0.5 rounded bg-black/60 backdrop-blur flex items-center gap-1">
                          <Calendar size={10} className="text-amber-400" /> {item.event_date}
                        </span>
                      )}
                    </div>

                    {/* Bottom Info */}
                    <div className="relative p-4 z-10 flex flex-col gap-1">
                      <p className="text-sm font-bold text-white leading-snug drop-shadow-md">{item.title}</p>
                      
                      <div className="flex items-center justify-between mt-1 pt-2 border-t border-white/10">
                        <span className="text-[10px] font-mono text-sky-400 flex items-center gap-1 font-semibold group-hover:underline">
                          <Eye size={12} /> View Full Photo
                        </span>
                        {token && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteGalleryItem(item.id);
                            }}
                            className="text-[10px] font-mono text-red-400 hover:text-red-300 transition-colors flex items-center gap-1 uppercase tracking-wider"
                          >
                            <Trash2 size={10} /> Delete
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              
              {/* Placeholder Empty Slots if few items */}
              {Array.from({ length: Math.max(0, 4 - galleryItems.length) }).map((_, i) => (
                <div
                  key={`placeholder-${i}`}
                  onClick={() => {
                    if (token) {
                      setAdminPortalOpen(true);
                      setAdminTab("gallery");
                    }
                  }}
                  className="group relative aspect-square rounded-2xl border-2 border-dashed flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:border-sky-400/40"
                  style={{ borderColor: "rgba(56, 189, 248, 0.15)", background: "rgba(56, 189, 248, 0.02)" }}
                >
                  <Camera size={26} className="text-sky-400/40 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-xs font-mono text-center px-4 text-sky-400/50">
                    {token ? "Upload Memorable Photo" : `Memorable Slot #${galleryItems.length + i + 1}`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── INSPIRATIONAL SONGS & MUSIC ─────────────── */}
      {activeSection === "songs" && (
        <section id="songs" className="py-20 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 30% 40%, rgba(244,63,94,0.06) 0%, #050e1a 50%, #030914 100%)" }}>
          <SectionAmbience themeColor="#f43f5e" gradientTo="#fbbf24" floatingIcons={[<Music size={48} />, <Headphones size={40} />, <Disc size={36} />]} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <ThematicSectionBanner
              num="10"
              label="Inspirational Songs"
              title="Motivations & Original Songs"
              subtitle="Uplifting anthems, original music, and interactive karaoke lyrics studio to empower, heal, and motivate."
              icon={<Music size={24} />}
              themeColor="#f43f5e"
              gradientTo="#fbbf24"
              onBack={resetToDashboard}
            />

            <div className="flex items-center justify-end mb-6">
              {token && (
                <button
                  onClick={() => {
                    setAdminPortalOpen(true);
                    setAdminTab("songs");
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider bg-rose-500/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500/20 transition-all shrink-0 cursor-pointer"
                >
                  <Plus size={14} /> Upload New Song
                </button>
              )}
            </div>

            {songsData.length === 0 ? (
              <div className="p-12 rounded-2xl border text-center font-mono text-slate-400" style={{ background: "#0a1828", borderColor: "rgba(0,200,255,0.15)" }}>
                No songs uploaded yet. Click "Upload New Song" in the Admin Portal to add music and lyrics!
              </div>
            ) : (
              <div className="space-y-10">
                {/* Song Card Boxes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {songsData.map((song, idx) => (
                    <div
                      key={song.id}
                      onClick={() => {
                        setActiveKaraokeSong(song);
                        trackSongPlay(song.id);
                      }}
                      className={`p-6 sm:p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative overflow-hidden group shadow-2xl cursor-pointer ${
                        currentSongIndex === idx
                          ? "bg-gradient-to-br from-[#0c1e36] via-[#050e1a] to-[#12081d] border-rose-500/40 shadow-[0_0_30px_rgba(244,63,94,0.15)]"
                          : "bg-[#0a1828] border-slate-800 hover:border-rose-500/50 hover:scale-[1.015]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-rose-500/40 bg-gradient-to-tr from-slate-950 to-slate-900 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 shadow-lg ${
                              currentSongIndex === idx && isPlaying ? "animate-spin" : ""
                            }`}
                            style={{ animationDuration: "10s" }}
                            title="Click to open Karaoke Studio"
                          >
                            <Disc size={32} className="text-rose-400" />
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-300 font-bold border border-rose-500/20">
                                Song Box #{idx + 1}
                              </span>
                              <span className="text-[10px] font-mono text-amber-300 bg-amber-400/10 border border-amber-400/30 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                                <Headphones size={10} /> {song.plays_count || 0} Plays
                              </span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-white leading-tight group-hover:text-rose-300 transition-colors" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                              {song.title}
                            </h3>
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveKaraokeSong(song);
                            trackSongPlay(song.id);
                          }}
                          className="px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-rose-500 text-black border border-rose-400 hover:bg-rose-400 transition-all cursor-pointer shrink-0 flex items-center gap-1.5 shadow-lg"
                        >
                          <ScrollText size={14} /> Open Full Music Sheet
                        </button>
                      </div>

                      {song.description && (
                        <p className="text-xs text-slate-300 italic mb-6 leading-relaxed bg-black/30 p-3.5 rounded-xl border border-white/5">
                          “{song.description}”
                        </p>
                      )}

                      {/* Song Box Bottom Actions */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveKaraokeSong(song);
                              trackSongPlay(song.id);
                            }}
                            className="px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer bg-rose-500 text-black hover:bg-rose-400 shadow-lg"
                          >
                            <Play size={14} /> Play Audio &amp; Read Sheet
                          </button>

                          {token && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                startEditingSong(song);
                                setAdminPortalOpen(true);
                                setAdminTab("songs");
                              }}
                              className="px-3.5 py-2 rounded-xl text-xs font-mono text-cyan-300 bg-cyan-400/10 border border-cyan-400/30 hover:bg-cyan-400/20 transition-all cursor-pointer flex items-center gap-1.5"
                            >
                              <Edit size={13} /> Edit Song &amp; Audio
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Main Player Scrubber Card */}
                {songsData[currentSongIndex] && (
                  <div
                    className="p-6 rounded-3xl border relative overflow-hidden shadow-2xl"
                    style={{ background: "#0a1828", borderColor: "rgba(244, 63, 94, 0.25)" }}
                  >
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Disc size={28} className={`text-rose-400 ${isPlaying ? "animate-spin" : ""}`} />
                        <div>
                          <p className="text-xs font-mono text-rose-400 uppercase font-semibold">Now Playing</p>
                          <h4 className="text-base font-bold text-white">{songsData[currentSongIndex].title}</h4>
                        </div>
                      </div>

                      {songsData[currentSongIndex]?.audio_url && (
                        <audio
                          ref={audioRef}
                          controls
                          src={`${API_URL}${songsData[currentSongIndex].audio_url}`}
                          className="w-full sm:w-auto min-w-[280px] rounded-lg"
                          onError={(e) => {
                            const current = songsData[currentSongIndex];
                            const target = e.currentTarget;
                            if (current?.audio_url?.startsWith("/uploads/") && !target.src.includes("/audio/")) {
                              target.src = current.audio_url.replace("/uploads/", "/audio/");
                            }
                          }}
                          onPlay={() => setIsPlaying(true)}
                          onPause={() => setIsPlaying(false)}
                          onEnded={() => setIsPlaying(false)}
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── CONTACT ────────────────────────────────── */}
      {activeSection === "contact" && (
        <section id="contact" className="py-20 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 60% 30%, rgba(192,132,252,0.06) 0%, #050e1a 50%, #030914 100%)" }}>
          <SectionAmbience themeColor="#c084fc" gradientTo="#00c8ff" floatingIcons={[<Mail size={48} />, <Phone size={40} />, <MapPin size={36} />]} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <ThematicSectionBanner
              num="11"
              label="Contact Me"
              title="Get in Touch & Send a Message"
              subtitle="Feel free to reach out for research collaborations, speaking engagements, project inquiries, or professional networking."
              icon={<Mail size={24} />}
              themeColor="#c084fc"
              gradientTo="#00c8ff"
              onBack={resetToDashboard}
            />
          <div className="mt-10 grid lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              {[
                { icon: <Phone size={16} />,   label: "Phone",    val: "0999 148 2129",                          href: "tel:09991482129" },
                { icon: <Mail size={16} />,    label: "Email",    val: "urocaymaxil@gmail.com",                  href: "mailto:urocaymaxil@gmail.com" },
                { icon: <MapPin size={16} />,  label: "Address",  val: "Blk 26 Lot 94, Deca Homes Granada, Barangay Granada, Bacolod City, Negros Occidental, 6100, Philippines", href: undefined },
                { icon: <Linkedin size={16} />, label: "LinkedIn", val: "linkedin.com/in/maxilurocay143",         href: "https://www.linkedin.com/in/maxilurocay143/" },
                { icon: <Youtube size={16} />,  label: "YouTube",  val: "youtube.com/@sermaxx",                   href: "https://www.youtube.com/@sermaxx" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 items-start p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  style={{ background: "rgba(10,24,40,0.85)", borderColor: "rgba(192,132,252,0.15)", boxShadow: "0 2px 12px rgba(192,132,252,0.04)" }}
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded-lg shrink-0"
                    style={{ background: "rgba(192,132,252,0.1)", color: "#c084fc" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-foreground transition-colors hover:text-primary"
                      >
                        {item.val}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground leading-relaxed">{item.val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={handleContactSubmit}
              className="p-8 rounded-xl border flex flex-col gap-4 shadow-xl"
              style={{ background: "rgba(10,24,40,0.85)", borderColor: "rgba(192,132,252,0.2)", boxShadow: "0 4px 30px rgba(192,132,252,0.06)" }}
            >
              <h3
                className="text-xl font-bold text-foreground"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Send a Message
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                Fill out the form below or email me directly at <a href="mailto:urocaymaxil@gmail.com" className="text-primary hover:underline">urocaymaxil@gmail.com</a>.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 rounded bg-black/40 border border-muted-foreground/20 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded bg-black/40 border border-muted-foreground/20 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Subject</label>
                <input
                  type="text"
                  value={contactSubject}
                  onChange={(e) => setContactSubject(e.target.value)}
                  placeholder="Inquiry Topic"
                  className="w-full px-4 py-2.5 rounded bg-black/40 border border-muted-foreground/20 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="How can I help you?"
                  className="w-full px-4 py-2.5 rounded bg-black/40 border border-muted-foreground/20 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              {contactStatus.type && (
                <div
                  className={`p-3.5 rounded text-xs font-medium border ${
                    contactStatus.type === "success"
                      ? "bg-green-500/10 border-green-500/20 text-green-400"
                      : "bg-red-500/10 border-red-500/20 text-red-400"
                  }`}
                >
                  {contactStatus.msg}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmittingContact}
                className="self-start px-6 py-3 text-sm font-semibold rounded transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  background: "linear-gradient(135deg, #00c8ff, #0080aa)",
                  color: "#050e1a",
                  boxShadow: "0 0 20px rgba(0,200,255,0.2)",
                }}
              >
                {isSubmittingContact ? "Sending..." : "Submit Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
      )}

      {/* ── FOOTER ─────────────────────────────────── */}
      <footer
        className="border-t py-8"
        style={{ background: "#050e1a", borderColor: "rgba(0,200,255,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLightboxImage({ src: "/sermax_logo.jpg", title: "SER MAX Official Logo & Brand" })}
              className="w-9 h-9 rounded-full overflow-hidden border border-cyan-400/40 p-0.5 bg-black/40 hover:scale-110 hover:border-amber-400 transition-all duration-300 cursor-zoom-in shrink-0 shadow-lg"
              title="Click to view SER MAX Logo in high resolution"
            >
              <img src="/sermax_logo.jpg" alt="SER MAX" className="w-full h-full object-cover rounded-full" />
            </button>
            <div>
              <p
                className="text-xs font-mono tracking-widest uppercase"
                style={{ color: "#00c8ff" }}
              >
                Maxil S. Urocay (SER MAX)
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">© 2026 · All rights reserved</p>
              <button
                onClick={() => setAdminPortalOpen(true)}
                className="mt-1 text-[10px] font-mono tracking-wider uppercase text-muted-foreground/30 hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Lock size={10} /> Admin Dashboard
              </button>
            </div>
          </div>
          <p
            className="text-xs font-mono text-center"
            style={{ color: "rgba(0,200,255,0.4)" }}
          >
            "I will walk slowly, but I will never walk backward."
          </p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/maxilurocay143/" target="_blank" rel="noreferrer"
              className="transition-colors hover:text-primary" style={{ color: "#6b8caa" }}>
              <Linkedin size={16} />
            </a>
            <a href="https://www.youtube.com/@sermaxx" target="_blank" rel="noreferrer"
              className="transition-colors hover:text-primary" style={{ color: "#6b8caa" }}>
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </footer>

      {/* ── CERT MODAL ─────────────────────────────── */}
      {activeCert && (
        <CertModal
          cert={activeCert}
          onClose={() => {
            setActiveCert(null);
            setCertUploadStatus("");
          }}
          token={token}
          onUpload={(file) => handleUploadCertImage(activeCert.title, file)}
          uploadStatus={certUploadStatus}
          onOpenLightbox={(src, title) => setLightboxImage({ src, title })}
        />
      )}

      {/* ── ADMIN PORTAL OVERLAY ──────────────────── */}
      {adminPortalOpen && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          style={{ background: "rgba(3,9,20,0.96)", backdropFilter: "blur(16px)" }}
        >
          <div
            className="w-full max-w-4xl rounded-2xl border flex flex-col h-[88vh] overflow-hidden shadow-2xl"
            style={{ background: "#050e1a", borderColor: "rgba(0,200,255,0.25)", boxShadow: "0 0 50px rgba(0,200,255,0.15)" }}
          >
            {/* Header */}
            <div className="p-4 sm:p-5 border-b flex items-center justify-between" style={{ borderColor: "rgba(0,200,255,0.15)", background: "rgba(10,26,48,0.6)" }}>
              <div className="flex items-center gap-2.5">
                <Shield size={18} className="text-cyan-400 animate-pulse" />
                <span className="font-mono text-sm tracking-widest uppercase font-bold text-white">
                  SER MAX Admin Portal
                </span>
                {token && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Authenticated
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                {token && (
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono uppercase tracking-wider bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-colors"
                    title="Logout session"
                  >
                    <LogOut size={12} /> Logout
                  </button>
                )}
                <button
                  onClick={() => setAdminPortalOpen(false)}
                  className="text-muted-foreground hover:text-white transition-colors p-1"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {!token ? (
              /* ── DEDICATED AUTHENTICATION GATEWAY ── */
              <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 overflow-y-auto">
                <div className="w-full max-w-md p-8 rounded-2xl border shadow-2xl relative overflow-hidden" style={{ background: "#0a1828", borderColor: "rgba(0, 200, 255, 0.25)" }}>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-400" />
                  
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center border mb-3" style={{ background: "rgba(0,200,255,0.08)", borderColor: "rgba(0,200,255,0.3)" }}>
                      <Lock size={26} className="text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-extrabold text-white tracking-wide uppercase font-mono">
                      Security Gateway
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 font-mono">
                      Enter authorized admin credentials to unlock portal.
                    </p>
                  </div>

                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-cyan-400 mb-1.5 font-semibold">
                        Admin Username
                      </label>
                      <input
                        type="text"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="e.g. admin"
                        className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-cyan-400 mb-1.5 font-semibold">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••••••"
                          className="w-full pl-4 pr-10 py-2.5 rounded-lg bg-black/50 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>

                    {authError && (
                      <div className="p-3.5 rounded-lg border bg-red-500/10 border-red-500/30 text-red-400 text-xs font-mono flex items-center gap-2">
                        <AlertTriangle size={16} className="shrink-0" />
                        <span>{authError}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isLoggingIn}
                      className="w-full py-3 rounded-lg font-mono text-xs uppercase tracking-widest font-bold text-black transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 cursor-pointer"
                      style={{
                        background: "linear-gradient(135deg, #00c8ff, #0099cc)",
                        boxShadow: "0 0 20px rgba(0,200,255,0.3)"
                      }}
                    >
                      {isLoggingIn ? "Verifying Credentials..." : "Authenticate & Unlock"}
                    </button>
                  </form>

                  <div className="mt-6 pt-4 border-t border-white/5 text-center">
                    <p className="text-[10px] font-mono text-slate-500">
                      Protected by 12-round <span className="text-amber-400">bcrypt</span> cryptographic password hashing &amp; JWT session verification.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* ── AUTHENTICATED WORKSPACE ── */
              <div className="flex-1 flex flex-col min-h-0">
                {/* Tabs */}
                <div className="flex border-b overflow-x-auto" style={{ borderColor: "rgba(0,200,255,0.15)", background: "rgba(5,14,26,0.6)" }}>
                  {[
                    { id: "messages", label: `Messages (${messages.length})` },
                    { id: "certificates", label: "Certificates" },
                    { id: "gallery", label: "Gallery Management" },
                    { id: "songs", label: `Songs (${songsData.length})` },
                    { id: "security", label: "Security & Password" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setAdminTab(tab.id as any)}
                      className={`px-5 sm:px-6 py-3.5 text-xs font-mono tracking-wider uppercase border-b-2 shrink-0 transition-colors cursor-pointer ${
                        adminTab === tab.id
                          ? "border-cyan-400 text-cyan-400 font-bold bg-cyan-500/10"
                          : "border-transparent text-slate-400 hover:text-white"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <div className="flex-1 overflow-y-auto p-6 min-h-0">
                  {adminTab === "messages" && (
                    <div className="space-y-4">
                      {messages.length === 0 ? (
                        <div className="text-center py-12 text-sm text-slate-400 font-mono">No contact inquiries received yet.</div>
                      ) : (
                        messages.map((msg) => (
                          <div
                            key={msg.id}
                            className="p-5 rounded-xl border flex flex-col md:flex-row gap-4 justify-between items-start"
                            style={{
                              background: msg.is_read ? "rgba(255,255,255,0.01)" : "rgba(0,200,255,0.04)",
                              borderColor: msg.is_read ? "rgba(255,255,255,0.08)" : "rgba(0,200,255,0.2)"
                            }}
                          >
                            <div className="space-y-2 flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="text-sm font-bold text-white">{msg.name}</span>
                                <span className="text-xs text-cyan-400 font-mono">({msg.email})</span>
                                {!msg.is_read && (
                                  <span className="text-[10px] bg-cyan-400/20 text-cyan-300 font-mono px-2 py-0.5 rounded-full font-bold">NEW</span>
                                )}
                              </div>
                              <p className="text-xs font-mono text-slate-400">Subject: {msg.subject}</p>
                              <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                              <p className="text-[10px] font-mono text-slate-500">{new Date(msg.created_at).toLocaleString()}</p>
                            </div>
                            <div className="flex gap-2 shrink-0">
                              <button
                                onClick={() => handleMarkMessageRead(msg.id, msg.is_read)}
                                className={`px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-wider transition-colors border ${
                                  msg.is_read
                                    ? "border-slate-700 text-slate-400 hover:bg-white/5"
                                    : "border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10"
                                }`}
                              >
                                {msg.is_read ? "Mark Unread" : "Mark Read"}
                              </button>
                              <button
                                onClick={() => handleDeleteMessage(msg.id)}
                                className="px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-wider bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-colors"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  )}

                  {adminTab === "certificates" && (
                    <div className="space-y-4">
                      <p className="text-xs text-slate-400 font-mono mb-4">
                        To attach or update a high-resolution image for any certificate, find it in the list below and choose a file.
                      </p>
                      <div className="divide-y divide-white/5">
                        {certsData.map((c) => (
                          <div key={c.title} className="py-4 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
                            <div className="flex-1">
                              <h5 className="text-sm font-semibold text-white">{c.title}</h5>
                              <p className="text-xs text-slate-400 font-mono mt-0.5">{c.org} {c.date && `· ${c.date}`}</p>
                              {c.image_url ? (
                                <a
                                  href={`${API_URL}${c.image_url}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-[10px] font-mono text-cyan-400 hover:underline mt-1 inline-flex items-center gap-1"
                                >
                                  View Uploaded File <ExternalLink size={10} />
                                </a>
                              ) : (
                                <span className="text-[10px] font-mono text-slate-500 mt-1 block">No image attached</span>
                              )}
                            </div>
                            <div className="shrink-0 w-full sm:w-auto">
                              <input
                                type="file"
                                accept="image/*,application/pdf"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) handleUploadCertImage(c.title, file);
                                }}
                                className="text-xs text-slate-400 file:mr-3 file:py-1 file:px-2.5 file:rounded file:border-0 file:text-[10px] file:font-semibold file:bg-cyan-400 file:text-black hover:file:opacity-80 file:cursor-pointer"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {adminTab === "gallery" && (
                    <div className="space-y-6">
                      <form onSubmit={handleUploadGalleryItem} className="p-5 rounded-xl border space-y-4 max-w-lg" style={{ borderColor: "rgba(56,189,248,0.2)", background: "rgba(56,189,248,0.03)" }}>
                        <h5 className="text-sm font-bold uppercase tracking-wider text-sky-400 font-mono">Upload New Memorable Photo</h5>
                        <div>
                          <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">Event / Photo Title</label>
                          <input
                            type="text"
                            required
                            value={newGalleryTitle}
                            onChange={(e) => setNewGalleryTitle(e.target.value)}
                            placeholder="e.g. National Youth Summit 2025"
                            className="w-full px-3 py-2 rounded-lg bg-black/50 border border-slate-700 text-xs text-white focus:outline-none focus:border-sky-400 transition-colors"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">Category</label>
                            <select
                              value={newGalleryCategory}
                              onChange={(e) => setNewGalleryCategory(e.target.value)}
                              className="w-full px-3 py-2 rounded-lg bg-black/50 border border-slate-700 text-xs text-white focus:outline-none focus:border-sky-400 transition-colors font-mono"
                            >
                              <option value="Memories">Memories</option>
                              <option value="Academic">Academic</option>
                              <option value="Leadership">Leadership</option>
                              <option value="Hosting & Events">Hosting &amp; Events</option>
                              <option value="Community">Community</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">Event Date (Optional)</label>
                            <input
                              type="text"
                              value={newGalleryDate}
                              onChange={(e) => setNewGalleryDate(e.target.value)}
                              placeholder="e.g. June 2025"
                              className="w-full px-3 py-2 rounded-lg bg-black/50 border border-slate-700 text-xs text-white focus:outline-none focus:border-sky-400 transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">Image File</label>
                          <input
                            id="gallery-file-input"
                            type="file"
                            required
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) setNewGalleryFile(file);
                            }}
                            className="text-xs text-slate-400 file:mr-3 file:py-1 file:px-2.5 file:rounded file:border-0 file:text-[10px] file:font-semibold file:bg-sky-400 file:text-black hover:file:opacity-80 file:cursor-pointer"
                          />
                        </div>
                        {galleryUploadStatus && <p className="text-xs font-mono text-sky-400">{galleryUploadStatus}</p>}
                        <button
                          type="submit"
                          className="px-5 py-2.5 text-xs font-semibold font-mono uppercase rounded-lg bg-sky-400 text-black hover:bg-sky-300 transition-colors cursor-pointer"
                        >
                          Upload Memorable Photo
                        </button>
                      </form>

                      <div>
                        <h5 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Current Gallery Items ({galleryItems.length})</h5>
                        {galleryItems.length === 0 ? (
                          <div className="text-xs text-slate-400 font-mono py-6">No gallery items uploaded yet.</div>
                        ) : (
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {galleryItems.map((item) => (
                              <div key={item.id} className="relative aspect-square border rounded-xl overflow-hidden group border-slate-800">
                                <img src={`${API_URL}${item.image_url}`} alt={item.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-between">
                                  <p className="text-xs font-semibold text-white line-clamp-3">{item.title}</p>
                                  <button
                                    onClick={() => handleDeleteGalleryItem(item.id)}
                                    className="self-start text-[10px] font-mono text-red-400 hover:text-red-300 uppercase tracking-wider flex items-center gap-1"
                                  >
                                    <Trash2 size={10} /> Delete
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {adminTab === "songs" && (
                    <div className="space-y-6">
                      <form onSubmit={handleUploadSong} className="p-5 rounded-xl border space-y-4 max-w-lg" style={{ borderColor: "rgba(244,63,94,0.3)", background: "rgba(244,63,94,0.03)" }}>
                        <h5 className="text-sm font-bold uppercase tracking-wider text-rose-400 font-mono">Upload New Inspirational Song</h5>
                        <div>
                          <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">Song Title</label>
                          <input
                            type="text"
                            required
                            value={newSongTitle}
                            onChange={(e) => setNewSongTitle(e.target.value)}
                            placeholder="e.g. Walk Slowly, Never Backward"
                            className="w-full px-3 py-2 rounded-lg bg-black/50 border border-slate-700 text-xs text-white focus:outline-none focus:border-rose-400 transition-colors font-sans"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">Motivational Description / Theme</label>
                          <input
                            type="text"
                            value={newSongDescription}
                            onChange={(e) => setNewSongDescription(e.target.value)}
                            placeholder="e.g. An anthem dedicated to steady progress and hope..."
                            className="w-full px-3 py-2 rounded-lg bg-black/50 border border-slate-700 text-xs text-white focus:outline-none focus:border-rose-400 transition-colors font-sans"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">Song Lyrics</label>
                          <textarea
                            rows={5}
                            value={newSongLyrics}
                            onChange={(e) => setNewSongLyrics(e.target.value)}
                            placeholder="Paste or write full song lyrics here..."
                            className="w-full px-3 py-2 rounded-lg bg-black/50 border border-slate-700 text-xs text-white focus:outline-none focus:border-rose-400 transition-colors resize-none font-mono"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">Audio File (.mp3, .wav, .m4a)</label>
                          <input
                            id="song-audio-input"
                            type="file"
                            accept="audio/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) setNewSongAudioFile(file);
                            }}
                            className="text-xs text-slate-400 file:mr-3 file:py-1 file:px-2.5 file:rounded file:border-0 file:text-[10px] file:font-semibold file:bg-rose-500 file:text-black hover:file:opacity-80 file:cursor-pointer"
                          />
                        </div>

                        {songUploadStatus && <p className="text-xs font-mono text-rose-400">{songUploadStatus}</p>}

                        <button
                          type="submit"
                          className="px-5 py-2.5 text-xs font-semibold font-mono uppercase rounded-lg bg-rose-500 text-black hover:bg-rose-400 transition-colors cursor-pointer"
                        >
                          Upload Song &amp; Lyrics
                        </button>
                      </form>

                      <div>
                        <h5 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-mono">Current Songs ({songsData.length})</h5>
                        {songsData.length === 0 ? (
                          <div className="text-xs text-slate-400 font-mono py-6">No songs added yet.</div>
                        ) : (
                          <div className="space-y-3">
                            {songsData.map((song) => (
                              <div key={song.id} className="p-4 rounded-xl border border-slate-800 bg-black/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                                <div className="space-y-1 flex-1">
                                  <h6 className="text-sm font-bold text-white">{song.title}</h6>
                                  {song.description && <p className="text-xs text-slate-400 italic">“{song.description}”</p>}
                                  <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono text-slate-500">
                                    <span>{song.audio_url ? "🎵 Audio Attached" : "⚠️ No Audio"}</span>
                                    <span>·</span>
                                    <span>{song.lyrics ? "📜 Lyrics Attached" : "⚠️ No Lyrics"}</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                  <button
                                    onClick={() => startEditingSong(song)}
                                    className="px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-wider bg-rose-500/20 border border-rose-500/40 text-rose-300 hover:bg-rose-500/30 transition-colors flex items-center gap-1 cursor-pointer"
                                  >
                                    <Edit size={12} /> Edit / Attach Music
                                  </button>
                                  <button
                                    onClick={() => handleDeleteSong(song.id)}
                                    className="px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-wider bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-colors flex items-center gap-1 cursor-pointer"
                                  >
                                    <Trash2 size={12} /> Delete
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {adminTab === "security" && (
                    <div className="max-w-lg space-y-6">
                      <div className="p-6 rounded-xl border" style={{ background: "rgba(10,26,48,0.7)", borderColor: "rgba(0,200,255,0.2)" }}>
                        <div className="flex items-center gap-2 mb-4">
                          <Shield size={20} className="text-amber-400" />
                          <h4 className="text-base font-bold text-white uppercase font-mono">
                            Security &amp; Password Settings
                          </h4>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed mb-6 font-sans">
                          Update your admin account password. Passwords are stored using <strong className="text-amber-400">bcrypt with 12 salt rounds</strong> for cryptographic protection against GPU brute force cracking.
                        </p>

                        <form onSubmit={handleChangePassword} className="space-y-4">
                          <div>
                            <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 mb-1">
                              Current Password
                            </label>
                            <input
                              type="password"
                              required
                              value={currentPass}
                              onChange={(e) => setCurrentPass(e.target.value)}
                              placeholder="Enter current password"
                              className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 mb-1">
                              New Strong Password (min 8 characters)
                            </label>
                            <input
                              type="password"
                              required
                              minLength={8}
                              value={newPass}
                              onChange={(e) => setNewPass(e.target.value)}
                              placeholder="Enter new strong password"
                              className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 mb-1">
                              Confirm New Password
                            </label>
                            <input
                              type="password"
                              required
                              minLength={8}
                              value={confirmPass}
                              onChange={(e) => setConfirmPass(e.target.value)}
                              placeholder="Re-enter new password"
                              className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                            />
                          </div>

                          {changePassStatus.type && (
                            <div
                              className={`p-3.5 rounded-lg text-xs font-mono border ${
                                changePassStatus.type === "success"
                                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                                  : "bg-red-500/10 border-red-500/30 text-red-400"
                              }`}
                            >
                              {changePassStatus.msg}
                            </div>
                          )}

                          <button
                            type="submit"
                            disabled={isChangingPass}
                            className="px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-black transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer"
                            style={{ background: "linear-gradient(135deg, #fbbf24, #d97706)" }}
                          >
                            {isChangingPass ? "Hashing & Updating Password..." : "Update Admin Password"}
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── LYRICS VIEWER MODAL ────────────────────── */}
      {activeLyricsSong && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4"
          style={{ background: "rgba(3, 9, 20, 0.95)", backdropFilter: "blur(16px)" }}
          onClick={() => setActiveLyricsSong(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] rounded-2xl p-6 sm:p-8 border overflow-y-auto shadow-2xl"
            style={{ background: "#0a1828", borderColor: "rgba(244, 63, 94, 0.3)", boxShadow: "0 0 50px rgba(244, 63, 94, 0.2)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer"
              onClick={() => setActiveLyricsSong(null)}
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <ScrollText size={18} className="text-rose-400" />
              <span className="font-mono text-xs tracking-widest uppercase font-bold text-rose-400">Song Lyrics &amp; Motivation</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {activeLyricsSong.title}
            </h3>

            {activeLyricsSong.description && (
              <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-200 italic mb-6">
                “{activeLyricsSong.description}”
              </div>
            )}

            <div className="prose prose-invert max-w-none text-slate-200 leading-relaxed font-mono text-xs sm:text-sm whitespace-pre-wrap bg-black/40 p-6 rounded-xl border border-slate-800">
              {activeLyricsSong.lyrics || "No lyrics provided yet."}
            </div>
          </div>
        </div>
      )}

      {/* ── EDIT SONG MODAL ───────────────────────── */}
      {editingSong && (
        <div
          className="fixed inset-0 z-[130] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setEditingSong(null)}
        >
          <div
            className="relative w-full max-w-xl p-6 sm:p-8 rounded-3xl border bg-[#0a1828] border-rose-500/40 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-rose-500/20 pb-3">
              <div className="flex items-center gap-2">
                <Music size={18} className="text-rose-400" />
                <h4 className="text-sm font-bold font-mono text-white uppercase tracking-wider">
                  Edit Song Details &amp; Attach Audio Track
                </h4>
              </div>
              <button onClick={() => setEditingSong(null)} className="text-slate-400 hover:text-white p-1">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleUpdateSong} className="space-y-4">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                  Song Title
                </label>
                <input
                  type="text"
                  required
                  value={editSongTitle}
                  onChange={(e) => setEditSongTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-slate-700 text-xs text-white focus:outline-none focus:border-rose-400 font-sans"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                  Motivational Description / Theme
                </label>
                <input
                  type="text"
                  value={editSongDescription}
                  onChange={(e) => setEditSongDescription(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-slate-700 text-xs text-white focus:outline-none focus:border-rose-400 font-sans"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                  Song Lyrics Sheet
                </label>
                <textarea
                  rows={8}
                  value={editSongLyrics}
                  onChange={(e) => setEditSongLyrics(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-slate-700 text-xs text-white focus:outline-none focus:border-rose-400 font-mono text-xs resize-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                  Attach / Replace Audio File (.mp3, .wav)
                </label>
                <input
                  type="file"
                  accept="audio/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setEditSongAudioFile(file);
                  }}
                  className="text-xs text-slate-400 file:mr-3 file:py-1 file:px-2.5 file:rounded file:border-0 file:text-[10px] file:font-semibold file:bg-rose-500 file:text-black hover:file:opacity-80 file:cursor-pointer"
                />
                {editingSong.audio_url && (
                  <p className="text-[10px] font-mono text-emerald-400 mt-1.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Currently Attached Audio: {editingSong.audio_url}
                  </p>
                )}
              </div>

              {editSongStatus && <p className="text-xs font-mono text-rose-400">{editSongStatus}</p>}

              <div className="flex items-center gap-3 justify-end pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setEditingSong(null)}
                  className="px-4 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase bg-rose-500 text-black hover:bg-rose-400 shadow-lg cursor-pointer"
                >
                  Save Changes &amp; Attach Audio
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── KARAOKE STUDIO SYNCHRONIZED LYRICS MODAL ──────── */}
      {activeKaraokeSong && (
        <KaraokeStudioModal
          song={activeKaraokeSong}
          onClose={() => setActiveKaraokeSong(null)}
          API_URL={API_URL}
        />
      )}

      {/* ── UNIVERSAL HIGH-RES LIGHTBOX MODAL ───────────── */}
      {lightboxImage && (
        <UniversalLightboxModal
          src={lightboxImage.src}
          title={lightboxImage.title}
          isCertificate={lightboxImage.isCertificate}
          onClose={() => setLightboxImage(null)}
        />
      )}

      {/* ── BACK TO TOP BUTTON ───────────────────── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full border bg-[#0a1828]/90 text-primary border-primary/30 backdrop-blur shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
        title="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}
