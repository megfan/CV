
interface experienceDataProps {
    title: string;
    subtitle?: string;
    duration?: string;
    link?: string;
    description?: string;
    technologies?: string;
    employee: boolean;
    pic?: string;
}
export const experienceDataRight: experienceDataProps[] = [

    {
        title: 'Work for Alubrados Varios',
        subtitle: "Application for Managing Poland's Road and Bridge Infrastructure",
        duration: "2024 / 8 months",
        link: 'www.aluvisagrupo.com',
        description: ' Building responsive, scalable UIs / Creating interactive maps and data visualizations using Open Layers / Ensuring seamless frontend-backend data flow in collaboration with backend developers and GIS specialists / Leveraging Next.js for server-side rendering and performance optimization / Ensuring responsive design and cross-device compatibility /',
        technologies: 'REACT / TYPESCRIPT /TAILWIND CSS / PRIME REACT /REDUX / NEXT.JS',
        employee: true,
        pic: 'assets/1.jpg',
    },
    {
        title: 'Web App for Electronic Invoice Management',
        subtitle: `Cloud-based application for managing electronic invoices integrated with the National e-Invoice System (KSeF).`,
        duration: "2022 - 2024 / 24 months",
        description: ' Designed an intuitive and modern user interface to enhance usability for managing electronic invoices / Developed and implemented solutions for handling complex accounting operations, ensuring accuracy and efficiency in financial processes / Implemented both frontend and backend to ensure high performance and scalability / Refactored state management from context API to Zustand and Mobx, improving performance, and maintainability /',
        technologies: 'REACT / TYPESCRIPT / TAILWIND CSS / GRAPHQL / .NET6 / MOBX / ZUSTAND',
        employee: false,
    },
    {
        title: 'Web Application for an International Discount Supermarket Chain',
        subtitle: "Web app for a global supermarket chain, improving user experience and system efficiency.",
        duration: "2019 - 2021 / 12 months",
        description: ' Created and refined user interfaces and UX designs to ensure an intuitive and engaging user experience / Developed advanced frontend solutions for handling large datasets and complex tables / Collaborated with backend teams to optimize data structures and workflows for improved performance / Focused on scalability, performance, and seamless integration between the frontend and backend systems /',
        technologies: 'REACT / TYPESCRIPT / TAILWIND CSS / GRAPHQL / .NET6 / MOBX / ZUSTAND',
        employee: false,
    },
    {
        title: 'Work for Coders Lab',
        subtitle: "Graphic Designer",
        duration: "2017 - 2018 / 13 months",
        description: "Designed and developed websites, ensuring responsive layouts and optimal user experience (UX/UI). Created visual assets for web interfaces, including icons, buttons, and banners, aligned with brand guidelines. Prepared print materials such as brochures, flyers, and posters, ensuring proper formatting and high-quality output for various formats (e.g., digital, offset printing).",
        link: "www.coderslab.pl",
        technologies: 'PHOTOSHOP / ILLUSTRATOR / AFTER EFFECTS / INDESIGN / FIGMA ',
        employee: true,
        pic: 'assets/codersLab.jpg',
    },
    {
        title: 'Work for Instytut Monitorowania Mediów',
        subtitle: "Graphic Designer",
        duration: "2014 - 2015 / 12 months",
        description: "Managed and updated social media content, creating engaging visuals to enhance brand presence and engagement. Collaborated on branding projects, contributing to the development of a cohesive brand identity across all platforms.",
        link: "www.imm.com.pl",
        technologies: 'PHOTOSHOP / ILLUSTRATOR ',
        employee: true,
    },
    {
        title: 'And some more ...',
        employee: false,
    }
];

export const experienceDataLeft: experienceDataProps[] = [
    {
        title: 'Work for Onwelo',
        duration: "2019 - 2024 / 4 years",
        link: 'www.onwelo.com/pl',
        employee: true,
    },
    {
        title: 'Luxury Car Rental Web and Mobile App',
        subtitle: "Web and mobile app tailored for a luxury car rental service with a focus on premium user experience.",
        duration: "2021 - 2022 / 6 months",
        description: 'Built responsive, user-friendly designs / Developed highly customized layouts and UX solutions / Maintained and enhanced the app for feature updates and improvements /',
        technologies: 'REACT / TYPESCRIPT / TAILWIND CSS / GRAPHQL / .NET6 / MOBX / ZUSTAND',
        employee: false,
    },
    {
        title: 'Work for Fakturownia',
        subtitle: "Online platform allowing quick invoice creation and managing.",
        duration: "2018 / 6 months",
        link: "www.fakturownia.pl",
        description: 'Developing and enhancing the Fakturownia invoicing platform, ensuring a smooth and intuitive user experience / Focusing on simplicity, making sure the application was easy to use and navigable for users /',
        technologies: 'JAVASCRIPT / SCC / SASS / JQUERY',
        employee: true,
    },
    {
        title: 'Work for Clos Brothers',
        subtitle: "Graphic Designer",
        duration: "2015 - 2016 / 11 months",
        link: "www.closbrothers.pl",
        technologies: 'PHOTOSHOP / ILLUSTRATOR / AFTER EFFECTS / INDESIGN',
        employee: true,
    },
    {
        title: 'Work for Granatowi',
        subtitle: "Graphic Designer",
        duration: "2013 - 2014 / 14 months",
        link: "www.closbrothers.pl",
        technologies: 'PHOTOSHOP / ILLUSTRATOR / AFTER EFFECTS / FLESH',
        employee: true,
    }

]