export const resume = {
  name: 'Jirayu Tancharoen',
  nickname: 'Benzene',
  location: 'Samut Prakan, Thailand',
  phone: '086-549-1915',
  email: '595021002000@mail.rmutk.ac.th',
  linkedin: 'https://www.linkedin.com/in/jirayu-t-8bb581252',
  summary: `Full-Stack Software Developer with {years} of experience in building scalable enterprise applications using C#/.NET Core, MongoDB, and Kafka. Seeking a challenging role to leverage my expertise in DevOps tools like ArgoCD and Kubernetes to build scalable enterprise solutions and modernize infrastructure and deliver high-quality software.`,

  experience: [
    {
      company: 'Thai Beverage Public Company Limited',
      position: '.NET Developer',
      location: 'Bangkok, Thailand',
      start: 'Jul 2023',
      end: 'Present',
      startISO: '2023-07-03',
      endISO: 'present',
      bullets: [
        'Developed and maintained enterprise-scale microservices using C# (.NET) and MongoDB, serving high-traffic platforms for ThaiBev and Sermsuk.',
        'Designed and managed CI/CD pipelines using GitLab and ArgoCD, automating deployments to Kubernetes clusters and significantly reducing deployment cycle times.',
        'Improved code quality and reliability by implementing Unit Tests with xUnit and WireMock.Net for mocking external dependencies in Payment Gateway services.',
        'Enhanced system security by resolving critical vulnerabilities (e.g., CVE-2025-55315), upgrading Docker images from SDK to secure ASP.NET runtime versions.',
      ],
    },
    {
      company: 'ALT Plus X Co., Ltd.',
      position: 'Full Stack Developer',
      location: 'Bangkok, Thailand',
      start: 'Jun 2020',
      end: 'Aug 2022',
      startISO: '2020-06-01',
      endISO: '2022-08-31',
      bullets: [
        'Developed responsive e-commerce and CMS web applications using ASP.NET MVC and C#.',
        'Integrated SCB Payment Gateway API (QR Code payment) into web applications, ensuring secure financial transactions and callback processing.',
        'Optimized SQL Server database performance by refining T-SQL queries and stored procedures.',
      ],
    },
    {
      company: 'Advanced Research Group Co., Ltd. [AR Soft.]',
      position: 'Intern',
      roles: ['System Analyst', 'Report Developer', 'Tester'],
      location: 'Bangkok, Thailand',
      start: 'Jun 2019',
      end: 'Oct 2019',
      bullets: [
        'Improved SQL queries and altering stored procedures in SQL Server databases to enhance server performance and user experience.',
        'Assisted in system testing and generating test cases and scenarios, and submitting defects.',
        'Designed and developed report using Jaspersoft for reporting tools.',
      ],
    },
  ],

  education: [
    {
      institution: 'Rajamangala University of Technology Krungthep',
      degree: 'Bachelor of Science in Computer Science',
      start: '2016',
      end: '2019',
    },
  ],

  skills: [
    { category: 'Frontend', items: ['Vue.js', 'JavaScript', 'HTML/CSS', 'Bootstrap'] },
    {
      category: 'Languages & Frameworks',
      items: ['C#', 'ASP.NET Core', 'Java', 'Node.js', 'Python'],
    },
    { category: 'Database', items: ['MongoDB', 'SQL Server', 'T-SQL'] },
    { category: 'DevOps & Cloud', items: ['Kubernetes (K3s)', 'Docker', 'ArgoCD', 'GitLab CI/CD'] },
    {
      category: 'Tools & Testing',
      items: ['Git', 'Jira', 'SonarQube', 'xUnit', 'WireMock', 'Postman'],
    },
  ],

  certificates: [
    {
      date: 'Jun 2023',
      name: 'Certified Professional Data Analyst',
      url: 'https://badgr.com/public/assertions/TjaAjSQCT2iWv9bolBPjrA',
      badge:
        'https://media.badges.parchment.com/uploads/badges/b99be311-e70d-4500-a100-0a7b0db63372.png',
    },
    {
      date: 'Feb 2023',
      name: 'GO Software Engineering Bootcamp 2022',
      url: 'https://credsverse.com/credentials/a103e9bc-3b6b-4bef-826a-4e3e9306a8f1',
      badge:
        'https://media.licdn.com/dms/image/v2/D560BAQF-MagPlJ4H6g/company-logo_200_200/B56Zq.MyGlKAAM-/0/1764127614123/kasikorn_business_technology_group_logo?e=2147483647&v=beta&t=56dnjvVAGKG7F2qXfOwJ51RmmTtimilxxUMqxBs3nws',
    },
    // {
    //   date: 'Oct 2018',
    //   name: 'Information Technology Professional Examination (ITPE)',
    // },
    // {
    //   date: 'Mar 2018',
    //   name: 'Microsoft Technology Associate: Database Administration Fundamentals (MTA)',
    // },
  ],
}
