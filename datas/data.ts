export const socialLinks = [

  {
    name: "LeetCode",
    link: "https://leetcode.com/u/mgmiteshgupta134/",
    simpleIcon: "https://cdn.simpleicons.org/leetcode",
  },
  {
    name: "Kaggle",
    link: "https://www.kaggle.com/mgmitesh",
    simpleIcon: "https://cdn.simpleicons.org/kaggle",
  },
  {
    name: "Github",
    link: "https://github.com/miteshgupta07",
    simpleIcon: "https://cdn.simpleicons.org/github/white",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mitesh-gupta",
    simpleIcon: "/svgs/linkedin.svg",
  },
  {
    name: "X",
    link: "https://x.com/mg_mitesh",
    simpleIcon: "https://cdn.simpleicons.org/x/white",
  },
  {
    name: "Medium",
    link: "https://medium.com/@mitesh_gupta",
    simpleIcon: "https://cdn.simpleicons.org/medium/white",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/miitesh_gupta",
    simpleIcon: "https://cdn.simpleicons.org/instagram",
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
];

//  Website of icon https://thesvg.org/

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
    iconLink: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/langgraph-langchain/color.svg",
  },
  {
    name: "LangGraph",
    iconLink: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/langchain-corporate/default.svg",
  },
  {
    name: "Python",
    iconLink: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/python/default.svg",
  },
  {
    name: "Docker",
    iconLink: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/docker-badge/default.svg",
  },
  {
    name: "Kubernetes",
    iconLink: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/kubernetes/default.svg",
  },
  {
    name: "Streamlit",
    iconLink: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/streamlit/default.svg",
  },
  {
    name: "Hugging-Face",
    iconLink: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/hugging-face/default.svg",
  },
  {
    name: "MySQL",
    iconLink: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/mysql/wordmark-light.svg",
  },
  {
    name: "PostgreSQL",
    iconLink: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/postgresql/default.svg",
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
    name: "MCP",
    iconLink: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/model-context-protocol/default.svg",
  },
  {
    name: "Git",
    iconLink: "https://cdn.simpleicons.org/git",
  },

];

export const sections = [
  { idRoute: "/#about", name: "About" },
  { idRoute: "/#skills", name: "Skills" },
  { idRoute: "/#experience", name: "Experience" },
  { idRoute: "/#works", name: "Works" },
  { idRoute: "/#contact", name: "Contact" },
];

export const companies = [
  "Vaultpay Solutions",
  "Dataminds Labs"
];

export const companiesInfo = [
  {
    title: "AI Engineer",
    company: "Vaultpay Solutions Pvt. Ltd. (MyRidez)",
    short_desc: "Worked on AI/ML solutions for the company’s ride-hailing platform — MyRidez",
    location: "On-site, Ludhiana, India",
    duration: "March 2025 - Present",
    roles: [
    "Dynamic Surge Pricing Model: Developed and deployed a real-time surge-pricing ML service using traffic, weather, and demand signals, increasing peak-period revenue by 23%.",
    "Multilingual Customer Support Chatbot: Built and deployed an LLM-powered chatbot supporting 10+ Indian languages, integrated with Firebase Firestore and protected against prompt injection; achieved p95 latency <2s, eliminating manual",
    "Document Verification System: Developed and deployed a computer vision and OCR-powered document verification system supporting multiple ID types; reduced onboarding time by ~70% and automated nearly all manual verificat.",
    "Ride Demand Prediction System: Designed and deployed a two-stage ML pipeline combining classification and regression to forecast high-demand zones; increased driver ride fulfillment by 18% in peak-demand areas through real-time app heatmap integration."
  ],

  },
  {
    title: "Data Science Intern",
    company: "DataMinds Labs",
    short_desc:"",
    location: "India (remote)",
    duration: "January 2025 - February 2025",
    roles: [
      "Waterborne Disease Prediction: Developed a machine learning model to predict waterborne disease outbreaks using data from Tanzania, Africa and achieved a Mean Absolute Error (MAE) of 0.53, demonstrating high model accuracy.",
    ],
  },
];
export const projects = [
  {
    name: "MyRidez AI Solutions",
    type: "Industry Project",
    description: "Worked on production AI systems at MyRidez, and developed a surge pricing system, multilingual customer support automation, demand forecasting, and OCR-based document verification, improving revenue efficiency, response times, and onboarding workflows at scale.",
    image: "/myridez.webp",
    liveLink: "https://play.google.com/store/apps/details?id=com.myridez.usersappps&pcampaignid=web_share",
    stacks: [
      "AWS",
      "FastAPI",
      "Firebase",
      "OCR",
      "ML",
      "Computer-Vision",
    ],
  },

  {
    name: "ResearchMate",
    type: "Personal Project",
    description:"ResearchMate is an open-source, production-ready AI research assistant for document-grounded question answering. It combines a FastAPI backend, evaluated Retrieval-Augmented Generation (RAG), and optional agent workflows to deliver accurate, reliable, and transparent responses over research documents.",
    image: "/ResearchMate.png",
    liveLink: "https://researchmate.me/",
    stacks: ["AWS", "Langchain", "Streamlit", "FastAPI","FAISS"],
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
    name: "Plant Guard",
    type: "Featured Project",
    description:"Plant Guard is a smart plant disease detection tool that uses image recognition to identify plant diseases and suggest treatments, helping gardeners and farmers keep their plants healthy.",
    image: "/PlantGuard.png",
    liveLink: "https://plant-guard.streamlit.app/",
    stacks: ["Tensorflow","Computer-Vision", "Streamlit", "Python"],
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
    name: "Sentiment Analysis",
    type: "Personal Project",
    description:"A sentiment analysis system employing LSTM and CNN architectures to accurately classify and analyze sentiment from text data, providing insights into opinions and emotions expressed in various content.",
    image: "/Sentiment Analysis.png",
    liveLink: "https://github.com/miteshgupta07/Sentiment-Analysis-Using-CNN-and-LSTM",
    stacks: ["NLP", "Deep-Learning", "Python"],
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
  {
    name: "Covid-19 Dashboard",
    type: "Personal Project",
    description:"A Streamlit dashboard for COVID-19 reporting that provides real-time updates, visualizations, and analysis of global and local COVID-19 data to track the pandemic's progress and impact.",
    image: "/Covid.png",
    liveLink:"https://covid-19-report-dashboard.streamlit.app/",
    stacks: ["Streamlit", "Python", "Pandas"],
  }
];
