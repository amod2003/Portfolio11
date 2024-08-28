import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'E-Commerce Application ',
        description: "E-Commerce Platform: Developed a scalable MERN stack app with dynamic product catalog and advanced search. Used RESTful APIs for real-time updates.Payment & User Management: Integrated secure payment gateways and user authentication.Created an admin dashboard for product and order management.Performance & Scalability: Optimized with SSR, code splitting, and lazy loading. Deployed with Docker and Kubernetes, and used MongoDB Atlas for scalable data management.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS S3',  'EC2','NodeJS','ReactJS','HTML','CSS','TailwindCSS','Docker' ],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Data Visualisation on Heart Disease ',
        description: 'Conducted exploratory data analysis to reveal patterns in cardiovascular health data.Implemented various visualisation techniques, including correlation heat maps and geospatial mapping.Enhanced understanding of risk factors and provided valuable insights for healthcare professionals.',
        tools: ['Pandas', 'NumPy', "Matplotlib", "Sklearn", "Seaborn"],
        role: 'Data Science',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Face Detection and Manipulation with OpenCV',
        description: 'Implemented face detection algorithms using OpenCV for real-time applications.Explored facial feature manipulation techniques for image processing.Gained practical experience in computer vision and image processing.',
        tools: ['OpenCV', 'ML Algorithm'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Human Activity Classifier',
        description: "•	Preprocessed data and implemented feature engineering techniques.Developed and evaluated multiple machine learning models.Analyzed model performance and optimized hyperparameters.",
        tools: ['Pandas', 'NumPy', "Matplotlib", "Sklearn", "Seaborn"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Data Science',
    }
];


