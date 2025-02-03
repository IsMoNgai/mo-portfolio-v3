import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    mongodb,
    git,
    docker,
    starbucks,
    tesla,
    selfcar,
    dcbot,
    paintcv,
    threejs,
    clang,
    java,
    linux,
    python,
    doubtless,
    coilgun,
    simonsay,
    trade,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "c++",
      icon: clang,
    },
    {
      name: "linux",
      icon: linux,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Cognify",
      company_name: "UC Berkeley AI Hackathon",
      icon: starbucks,
      link: "https://devpost.com/software/cognify-cn1ldo?ref_content=user-portfolio&ref_feature=in_progress",
      iconBg: "#383E56",
      date: "June 2024",
      points: [
        "Led a team of 4 to build a ReactJS full-stack web app to streamline project management by integrating AI-driven insights and automated documentation generation, tailored specifically for neurodivergent developers",
        "Leveraged Hume AI’s Sentiment Analysis and Voice AI to develop new approaches for detecting stress and anxiety, providing real-time emotional support and improving user engagement",
        "Engineered an AI-powered project planner using OpenAI LLM API, generating over 20 related tasks and scheduling suggestions, shortening project planning time by 30%",
        "Employed LangChain API and a RAG model based on GitHub commits to automate documentation, decreasing time spent on manual documentation by 50%",
      ],
    },
    {
      title: "Software Team Member",
      company_name: "UBC Open Robotics",
      icon: tesla,
      link: "https://openrobotics.ca/",
      iconBg: "#E6DEDD",
      date: "Sep 2023 - present",
      points: [
        "Designed a line-following robot with OnShape and engineered an advanced motor attachment mechanism",
        "Formulated PID algorithms for robot line tracing and motor speed control, increasing efficiency by 20% and accuracy by 15%",
        "Created detailed CAD designs for 7 critical robot components, attaining a 25% increase in manufacturing precision and reducing assembly errors by 80%",
        "Mastered batch printing techniques to accelerate rapid prototyping and enhance manufacturing speed, achieving a 40% reduction in prototyping time",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Self Driving Car Simulation",
      description:
        "This platform allows users to learn and experiment with neural networks by uploading real-world map data or creating custom virtual road maps. Users can design their own roads, train a neural network to drive a virtual car, and observe how the car navigates through the map.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: selfcar,
      source_code_link: "https://ismongai.github.io/self-driving-car/self_driving_car_simulation/world/",
    },
    {
      name: "Open CV Painter",
      description:
        "Developed an interactive painter using OpenCV, allowing users to draw smoothly with their fingers. The project integrates advanced OpenCV modules for hand recognition, face mesh, and face detection, enhancing the user experience with real-time interaction and responsiveness.",
      tags: [
        {
          name: "opencv",
          color: "blue-text-gradient",
        },
        {
          name: "mediapipe",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: paintcv,
      source_code_link: "https://github.com/IsMoNgai/Open-CV/tree/main",
    },
    {
      name: "Quanta",
      description:
        "A custom chart UI built using Lightweight Charts. The chart data is provided by the Interactive Brokers API (IBAPI), allowing for real-time market analysis. The scripts also include calculations for the slope of moving averages, enhancing technical analysis and strategy development on the TradingView platform. I will integrate a trade bot with it in the future.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pandas",
          color: "green-text-gradient",
        },
        {
          name: "ibapi",
          color: "pink-text-gradient",
        },
      ],
      image: trade,
      source_code_link: "https://github.com/IsMoNgai/quanta",
    },
    {
      name: "Discord Bot",
      description:
        "A Discord bot designed to assist the Minecraft server guild. It extracts, processes, and manages website data with finesse, a feat achieved through Beautiful Soup for scraping and Pandas for manipulation. A relatively substantial project I have made.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pandas",
          color: "green-text-gradient",
        },
        {
          name: "beautifulsoup",
          color: "pink-text-gradient",
        },
      ],
      image: dcbot,
      source_code_link: "https://github.com/IsMoNgai/Discord-bot",
    },
    {
      name: "Doubtless-forum",
      description:
        "I'm developing a forum using Django backend. I started with a tutorial to create the template and will soon redesign it with added features and templates. This is an ongoing project. I will keep updating it in the future!",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: doubtless,
      source_code_link: "https://github.com/IsMoNgai/Doubtless-forum",
    },
    {
      name: "Simon Game",
      description:
        "For the APS160 course project, I utilized TinkerCad simulation to craft a Simon game. This involved programming the Arduino UNO to handle game logic. The experience enhanced my circuit design, microcontroller programming, and critical thinking skills. You can try the simulation!",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        {
          name: "arduino",
          color: "green-text-gradient",
        },
      ],
      image: simonsay,
      source_code_link: "https://github.com/IsMoNgai/SimonSays",
    },
    {
      name: "Coil Gun",
      description:
        "A coil gun and chronograph fashioned for a captivating physics project. The very essence of this endeavor is to unveil the slug's velocity.To ensure accuracy, I've created not one, but two different types of chronographs for this experiment.",
      tags: [
        {
          name: "soldering",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "circuit design",
          color: "pink-text-gradient",
        },
      ],
      image: coilgun,
      source_code_link: "https://ismongai.github.io/mo-portfolio/coil-gun.html",
    },
  ];
  
  export { technologies, experiences, projects };