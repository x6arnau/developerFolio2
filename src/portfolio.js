/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Arnau Núñez",
  title: "Hi all, I'm Arnau",
  subTitle: emoji(
    "A passionate Multiplatform Application Developer 🚀 with expertise in building applications using Python, Java, C#, and database technologies like MySQL and MongoDB."  ),
  resumeLink:
    "https://drive.google.com/file/d/1eoWHJQ3WXIQWSskblHMkOWkE4noCHGRP/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/X6amau",
  linkedin: "https://www.linkedin.com/in/arnaun13/",
  gmail: "afnaun3@gmail.com",
  gitlab: "https://gitlab.com/Xarnau13",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "VERSATILE DEVELOPER EXPLORING MULTIPLATFORM TECHNOLOGIES",
  skills: [
    emoji("⚡ Develop robust and scalable applications for web and mobile platforms"),
    emoji("⚡ Design and manage databases with MySQL, MongoDB, and Oracle"),
    emoji("⚡ Problem-solving with a logical and creative approach")
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-code" // No specific C# icon, using generic code icon
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-android" // Using Android icon as a proxy for Kotlin
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf" // No specific MongoDB icon, using leaf as proxy
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Institut Provençana",
      logo: require("./assets/images/provenLogo.png"), // Replace with actual logo path
      subHeader: "Técnico Superior de Desarrollo de Aplicaciones Multiplataforma",
      duration: "September 2023 - Present",
      desc: "Currently pursuing a higher technician degree in multiplatform application development.",
      descBullets: [
        "Specializing in Python, Java, C#, and database management",
        "Level 5 EQF-MEC"
      ]
    },
    {
      schoolName: "Oracle Academy",
      logo: require("./assets/images/oracleLogo.png"), // Replace with actual logo path
      subHeader: "Databases for Developers: Foundations",
      duration: "September 2024 - December 2024",
      desc: "Completed online course on database foundations.",
      descBullets: ["Focused on SQL and database design"]
    },
    {
      schoolName: "Oracle Academy",
      logo: require("./assets/images/oracleLogo.png"), // Replace with actual logo path
      subHeader: "Analytic SQL for Developers",
      duration: "September 2024 - December 2024",
      desc: "Completed online course on analytic SQL techniques.",
      descBullets: ["Advanced SQL querying and analysis"]
    },
    {
      schoolName: "Estany de la Ricarda",
      logo: require("./assets/images/estanyLogo.png"), // Replace with actual logo path
      subHeader: "Bachillerato Científico Tecnológico",
      duration: "September 2021 - June 2023",
      desc: "Completed scientific-technological baccalaureate.",
      descBullets: ["Level 4 EQF-MEC"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Programming (Python/Java/C#)",
      progressPercentage: "85%"
    },
    {
      Stack: "Database Management",
      progressPercentage: "80%"
    },
    {
      Stack: "Web Development (HTML/CSS)",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Certifications and Achievements I've Earned",
  achievementsCards: [
    {
      title: "Databases for Developers: Foundations",
      subtitle: "Completed foundational database course from Oracle Academy.",
      image: require("./assets/images/oracleLogo.png"), // Replace with actual logo path
      imageAlt: "Oracle Academy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://academy.oracle.com/es" // Placeholder, replace with actual link if available
        }
      ]
    },
    {
      title: "Analytic SQL for Developers",
      subtitle: "Completed advanced SQL course from Oracle Academy.",
      image: require("./assets/images/oracleLogo.png"), // Replace with actual logo path
      imageAlt: "Oracle Academy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://academy.oracle.com/es" // Placeholder, replace with actual link if available
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+34 629 61 39 46",
  email_address: "arnaunl3@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "x6Arnau", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
