// certificates.js
const certificatesData = [
  {
    title: "Edusave Good Progress Award 2023",
    description:
      "Awarded by the Ministry of Education for demonstrating significant improvement in academic performance and demonstrating good conduct.",
    icon: "./Assets/Logo/LOGO_MOE.png",
    image: "./Assets/Certificates/CERT_EdusaveGoodProgressAward2023.jpg",
  },
  {
    title: "Edusave Character Award 2023",
    description:
      "Awarded for demonstrating exemplary character, leadership qualities, and consistent contribution to school values.",
    icon: "./Assets/Logo/LOGO_MOE.png",
    image: "./Assets/Certificates/CERT_EdusaveCharacterAward.jpg",
  },
  {
    title: "Most Improved Student (Mathematics) 2023",
    description: "Awarded for achieving the Most Improvement in Mathematics.",
    icon: "./Assets/Logo/LOGO_DUNEARN.png",
    image: "./Assets/Certificates/CERT_MostImprovedStudent.jpg",
  },
  {
    title: "Most Resilient Student for Chemistry",
    description:
      "Awarded for being the moest resilient in my class for Chemistry.",
    icon: "./Assets/Logo/LOGO_DUNEARN.png",
    image: "./Assets/Certificates/CERT_ResilientChem.jpg",
  },
  {
    title: "Vice-Head Of Discipline Of 20th Student Council",
    description:
      "Appointed as Vice-Head of Discipline, responsible for maintaining discipline and promoting leadership within the student body.",
    icon: "./Assets/Logo/LOGO_DUNEARN.png",
    image:
      "./Assets/Certificates/CERT_StudentCouncilDiciplineVice-Head2024.jpg",
  },
  {
    title: "Junior Student Councillor Of The 19th Student Council",
    description:
      "Served as a Junior Student Councillor, contributing to student welfare, engagement, and representation in school affairs.",
    icon: "./Assets/Logo/LOGO_DUNEARN.png",
    image: "./Assets/Certificates/CERT_JuniorStudentCouncil2023.jpg",
  },
  {
    title: "Audio-Visual Representative Of 1 Topaz",
    description:
      "Appointed as the Audio-Visual Representative for class 1 Topaz, overseeing multimedia activities and contributing to class events.",
    icon: "./Assets/Logo/LOGO_DUNEARN.png",
    image: "./Assets/Certificates/CERT_AudioVisualRepresentative.jpg",
  },
  {
    title: "Vice Chairperson of Class",
    description:
      "Served as Vice Chairperson of the class, assisting with leadership and facilitating communication between students and teachers.",
    icon: "./Assets/Logo/LOGO_DUNEARN.png",
    image: "./Assets/Certificates/CERT_ViceChairperson.jpg",
  },
  {
    title: "Certificate of Completion for Aeronautics APLM",
    description:
      "Successfully completed the Aeronautics Applied Learning Module (APLM), gaining knowledge in aeronautical principles and engineering.",
    icon: "./Assets/Logo/LOGO_JUSTFLYIT.png",
    image: "./Assets/Certificates/CERT_AeronauticsAPLM.jpg",
  },
  {
    title: "Young Engineer Award",
    description:
      "Awarded for demonstrating exceptional problem-solving skills and interest in engineering principles.",
    icon: "./Assets/Logo/LOGO_SP.png",
    image: "./Assets/Certificates/CERT_YoungEngineerAward.jpg",
  },
  {
    title: "Contribution To Dunearn Environment Champion Programme 2024",
    description:
      "Awarded for contributions to the Dunearn Environment Champion Programme, including planting trees in support of Singapore's OneMillionTrees movement.",
    icon: "./Assets/Logo/LOGO_DUNEARN.png",
    image: "./Assets/Certificates/CERT_ContrubutionToEnvironmentChampion.jpg",
  },
  {
    title: "Certificate On The Completion Of The Questa Club",
    description:
      "Completed the Questa Club, a program focused on developing leadership and teamwork skills.",
    icon: "./Assets/Logo/LOGO_QUESTA.png",
    image: "./Assets/Certificates/CERT_QuestaClub.jpg",
  },

  {
    title: "Python Fundamentals Udemy Course",
    description: "Udemy Course teaching foundational Python",
    icon: "./Assets/Logo/LOGO_UDEMY.png",
    image: "./Assets/Certificates/PYTHON-FUNDAMENTALS.png",
  },
  {
    title: "Python Zero to Hero Udemy Course",
    description: "Udemy Course teaching foundational Python",
    icon: "./Assets/Logo/LOGO_UDEMY.png",
    image: "./Assets/Certificates/PYTHON-ZEROTOHERO.png",
  },
  {
    title: "Front-End Web Development Udemy Course",
    description:
      "Udemy Course teaching both HTML and CSS suitable for Front-End Web Development",
    icon: "./Assets/Logo/LOGO_UDEMY.png",
    image: "./Assets/Certificates/WEBDEV_COURSE.png",
  },
  {
    title: "Arduino Udemy Course",
    description: "Udemy Course teaching about foundations of arduino",
    icon: "./Assets/Logo/LOGO_UDEMY.png",
    image: "./Assets/Certificates/ARDUINO_COURSE.png",
  },
];

function createCertificateCard(certificate) {
  return `
    <div class="certificate-card">
      <div class="certificate-card-left">
        <img src="${certificate.icon}" class="certificate-card-icon" alt="${certificate.title}">
      </div>
      <div class="certificate-card-right">
        <div class="certificate-card-title">${certificate.title}</div>
        <div class="certificate-card-description">${certificate.description}</div>
        <a href="${certificate.image}" class="button" target="_blank">View Certificate</a>
      </div>
    </div>
  `;
}

function renderCertificates() {
  const container = document.getElementById("certificates-container");
  certificatesData.forEach((certificate) => {
    container.innerHTML += createCertificateCard(certificate);
  });
}

// Render certificates when DOM is loaded
document.addEventListener("DOMContentLoaded", renderCertificates);
