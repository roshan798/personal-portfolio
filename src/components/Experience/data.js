export const experiences = [
    {
        id: 'tcs-2024',
        company: 'Tata Consultancy Services',
        companyUrl: 'https://www.tcs.com',
        role: 'Systems Engineer (Java Developer)',
        type: 'full-time',
        location: 'Kolkata, India',
        locationType: 'onsite',
        startDate: 'Oct 2024',
        endDate: 'Present',
        description:
            'Engineering production-grade Java/Spring Boot microservices for a large-scale BFSI insurance platform processing 100K+ daily policy transactions.',
        bullets: [
            'Engineered production-grade backend microservices for a large-scale insurance platform processing <strong>100K+ daily policy transactions</strong> across multiple lines of business.',
            'Implemented complex business logic within a centralized Business Rules Engine (BRE) across <strong>17 financial products</strong>, automating dynamic premium calculations and underwriting validations — reducing policy change turnaround times by <strong>60%</strong>.',
            'Designed robust RESTful APIs for policy lifecycle operations and optimized complex PL/SQL stored procedures, improving query execution time by <strong>30–40%</strong> and reducing downstream errors by <strong>25%</strong>.',
        ],
        techStack: [
            'Java',
            'Spring Boot',
            'Spring Data JPA',
            'PL/SQL',
            'REST APIs',
            'Gradle',
        ],
        show: true,
    },

    // ── Template for a future role ─────────────────────────────────────────────
    // {
    //   id: "company-year",
    //   company: "Company Name",
    //   companyUrl: "https://company.com",
    //   role: "Your Role",
    //   type: "full-time",
    //   location: "City, Country",
    //   locationType: "hybrid",
    //   startDate: "Jan 2026",
    //   endDate: "Present",
    //   description: "One-line summary shown in the card header.",
    //   bullets: [
    //     "Key achievement or responsibility with <strong>metric</strong>.",
    //   ],
    //   techStack: ["Tech1", "Tech2"],
    //   show: true,
    // },
]
