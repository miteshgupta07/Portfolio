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
    name: "X",
    link: "https://x.com/mg_mitesh",
    simpleIcon: "https://cdn.simpleicons.org/x",
  },

  // {
  //   name: "Medium",
  //   link: "https://medium.com/@mitesh_gupta",
  //   simpleIcon: "https://cdn.simpleicons.org/medium",
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/mg_mitesh_gupta",
    simpleIcon: "https://cdn.simpleicons.org/instagram",
  },
];

export const technologies = [
  {
    name: "Python",
    iconLink: "https://cdn.simpleicons.org/python",
  },
  {
    name: "LangChain",
    iconLink: "https://cdn.simpleicons.org/langchain",
  },
  {
    name: "Hugging Face",
    iconLink: "https://cdn.simpleicons.org/huggingface",
  },
  {
    name: "MySQL",
    iconLink: "https://cdn.simpleicons.org/mysql",
  },  
  {
    name: "Tensorflow",
    iconLink: "https://cdn.simpleicons.org/tensorflow",
  },
  {
    name: "PyTorch",
    iconLink: "https://cdn.simpleicons.org/pytorch",
  },
  {
    name: "Streamlit",
    iconLink: "https://cdn.simpleicons.org/streamlit",
  },
  {
    name: "Git",
    iconLink: "https://cdn.simpleicons.org/git",
  },
];

export const sections = [
  { idRoute: "#about", name: "About" },
  { idRoute: "#experience", name: "Experience" },
  { idRoute: "#works", name: "Works" },
  { idRoute: "#contact", name: "Contact" },
];

export const companies = [
  "Pantech Prolabs",
  "Pantech Solutions",
];

export const companiesInfo = [
  {
    title: "Artificial Intelligence Intern",
    company: "Pantech Prolabs",
    location: "IND (remote)",
    duration: "July 2022 - August 2022",
    roles: [
      "Developed a chatbot for handling common queries using rule-based algorithms and NLP techniques.",
      "Achieved 85% query resolution rate in testing.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "Pantech Solutions",
    location: "IND (Remote)",
    duration: "June 2022 - July 2022",
    roles: [
      "Designed a fraud detection model for online transactions using supervised learning algorithms.",
      "Detected fraudulent activities with precision 92%.",
    ],
  },
];

export const projects = [
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