export const socialLinks = [
  {
    name: "Github",
    link: "https://github.com/miteshgupta07",
    simpleIcon: "https://cdn.simpleicons.org/github",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mitesh-gupta",
    simpleIcon: "https://cdn.simpleicons.org/logmein",
  },
  {
    name: "Upwork",
    link: "https://www.upwork.com/freelancers/~0159c66ea60d0cb067?mp_source=share",
    simpleIcon: "https://cdn.simpleicons.org/upwork",
  },
  {
    name: "Fiverr",
    link: "https://www.fiverr.com/s/pd445jZ",
    simpleIcon: "https://cdn.simpleicons.org/fiverr",
  },
  {
    name: "X",
    link: "https://x.com/mg_mitesh",
    simpleIcon: "https://cdn.simpleicons.org/x",
  },

  {
    name: "Medium",
    link: "https://medium.com/@mitesh_gupta",
    simpleIcon: "https://cdn.simpleicons.org/medium",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/mg_mitesh_gupta",
    simpleIcon: "https://cdn.simpleicons.org/instagram",
  },

];

export const technologies = [
  {
    name: "AWS",
    iconLink: "svgs/amazon-aws.svg",
  },
  {
    name: "FastAPI",
    iconLink: "https://cdn.simpleicons.org/fastapi",
  },
  {
    name: "LangChain",
    iconLink: "https://cdn.simpleicons.org/langchain/green",
  },
  {
    name: "Python",
    iconLink: "https://cdn.simpleicons.org/python",
  },
  {
    name: "Docker",
    iconLink: "https://cdn.simpleicons.org/docker",
  },
  {
    name: "Streamlit",
    iconLink: "https://cdn.simpleicons.org/streamlit",
  },
  {
    name: "Hugging-Face",
    iconLink: "https://cdn.simpleicons.org/huggingface",
  },
  {
    name: "MySQL",
    iconLink: "https://cdn.simpleicons.org/mysql",
  },
  {
    name: "MLFlow",
    iconLink: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/ml-flow-wordmark-dark.svg",
  },
  {
    name: "PyTorch",
    iconLink: "https://cdn.simpleicons.org/pytorch",
  },
  {
    name: "Tensorflow",
    iconLink: "https://cdn.simpleicons.org/tensorflow",
  },
  {
    name: "Git",
    iconLink: "https://cdn.simpleicons.org/git",
  },

];

export const sections = [
  { idRoute: "/#about", name: "About" },
  { idRoute: "/#experience", name: "Experience" },
  { idRoute: "/#works", name: "Works" },
  { idRoute: "/#contact", name: "Contact" },
];

export const companies = [
  "Vaultpay Solutions",
  "Dataminds Labs",
  "Pantech Prolabs",
  "Pantech Solutions",
];

export const companiesInfo = [
  {
    title: "AI Engineer",
    company: "Vaultpay Solutions Pvt. Ltd. (MyRidez)",
    short_desc: "Worked on AI/ML solutions for the company’s ride-hailing platform — MyRidez",
    location: "On-site, Ludhiana, India",
    duration: "April 2025 - Present",
    roles: [
    "Dynamic Surge Pricing Model: Built & deployed ML-based pricing engine (FastAPI) using real-time weather, traffic & demand data; boosted peak-period revenue.",
    "Multilingual Customer Support Chatbot: Developed LLM-powered support bot for 10+ Indian languages (Firestore integration, prompt-injection safe); cut first-response time to <5 s and removed manual query handling.",
    "Ride Demand Prediction System: Designed two-stage ML pipeline to forecast high-demand zones in Ludhiana; powered driver heatmaps & increased rides in busy areas.",
    "Document Verification Model: Created CV+OCR KYC system for multiple document types; reduced onboarding time by ~70% and minimized manual work."
  ],

  },
  {
    title: "Data Science Intern",
    company: "DataMinds Labs",
    short_desc:"",
    location: "India (remote)",
    duration: "January 2025 - March 2025",
    roles: [
      "Developed waterborne disease prediction models using machine learning algorithms.",
      "Achieved a Mean Absolute Error (MAE) of 0.53, demonstrating high model accuracy.",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company: "Pantech Prolabs",
    short_desc:"",
    location: "India (remote)",
    duration: "July 2022 - August 2022",
    roles: [
      "Developed a chatbot for handling common queries using rule-based algorithms and NLP techniques.",
      "Achieved 85% query resolution rate in testing.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "Pantech Solutions",
    short_desc:"",
    location: "India (Remote)",
    duration: "June 2022 - July 2022",
    roles: [
      "Designed a fraud detection model for online transactions using supervised learning algorithms.",
      "Detected fraudulent activities with precision 92%.",
    ],
  },
];

export const projects = [
  {
    name: "ResearchMate",
    type: "Personal Project",
    description:"Research Mate is an open-source AI tool designed to streamline academic and research workflows. It leverages advanced generative AI with Retrieval-Augmented Generation (RAG) and intelligent agents to offer powerful features",
    image: "/ResearchMate.png",
    liveLink: "https://researchmate-chatbot.streamlit.app/",
    stacks: ["FAISS", "Python", "Streamlit", "Langchain"],
  },

  {
    name: "SketchGen",
    type: "Personal Project",
    description:"SketchGen is an Image-to-Image Translation tool that transforms hand-drawn sketches and prompts into realistic images using a pre-trained Stable Diffusion model.",
    image: "/SketchGen.png",
    liveLink: "https://sketchgen.streamlit.app/",
    stacks: ["Hugging-Face", "Python", "Streamlit", "Stable-Diffusion"],
  },
  {
    name: "IntelliChat",
    type: "Personal Project",
    description:"IntelliChat is a conversational AI chatbot with persistent history and multi-language support. Built using Streamlit, LangChain, and ChatGroq, it provides context-aware, customizable responses in five languages.",
    image: "/IntelliChat.png",
    liveLink: "https://intellichat-chatbot.streamlit.app/",
    stacks: ["Groq", "LangChain", "Python", "Streamlit"],
  },
  {
    name: "Plant Guard",
    type: "Featured Project",
    description:"Plant Guard is a smart plant disease detection tool that uses image recognition to identify plant diseases and suggest treatments, helping gardeners and farmers keep their plants healthy.",
    image: "/PlantGuard.png",
    liveLink: "https://plant-guard.streamlit.app/",
    stacks: ["Tensorflow","Computer-Vision", "Streamlit", "Python"],
  },

  {
    name: "Automatic License Plate Detection",
    type: "Personal Project",
    description:"An automatic license plate recognition system that uses computer vision to detect and read vehicle license plates, providing automated vehicle identification for access control, parking management, and security applications.",
    image: "/ALPR.png",
    liveLink: "https://github.com/miteshgupta07/Automatic-License-Plate-Recognition-System",
    stacks: ["Computer-Vision", "OCR", "Python"],
  },
  {
    name: "Sentiment Analysis",
    type: "Personal Project",
    description:"A sentiment analysis system employing LSTM and CNN architectures to accurately classify and analyze sentiment from text data, providing insights into opinions and emotions expressed in various content.",
    image: "/Sentiment Analysis.png",
    liveLink: "https://github.com/miteshgupta07/Sentiment-Analysis-Using-CNN-and-LSTM",
    stacks: ["NLP", "Deep-Learning", "Python"],
  },
  {
    name: "Covid-19 Dashboard",
    type: "Personal Project",
    description:"A Streamlit dashboard for COVID-19 reporting that provides real-time updates, visualizations, and analysis of global and local COVID-19 data to track the pandemic's progress and impact.",
    image: "/Covid.png",
    liveLink:"https://covid-19-report-dashboard.streamlit.app/",
    stacks: ["Streamlit", "Python", "Pandas"],
  },
  {
    name: "CaptImage",
    type: "Personal Project",
    description:"CAPT-IMAGE is an advanced image captioning tool that generates descriptive captions for images using deep learning techniques. It utilizes a combination of VGG16 for feature extraction and LSTM for generating meaningful captions.",
    image: "CaptImage.png",
    liveLink:"https://github.com/miteshgupta07/Capt-Image",
    stacks: ["Tensorflow", "CNN", "Python", "Streamlit"],
  },
  {
    name: "ATS Scoring System",
    type: "Personal Project",
    description:"An ATS (Applicant Tracking System) scoring system that evaluates and ranks resumes based on keyword matching and relevance.",
    image: "/ATS.png",
    liveLink: "https://github.com/miteshgupta07/ATS-Scoring-System",
    stacks: ["NLP", "Spacy", "Python"],
  },
  ,
];