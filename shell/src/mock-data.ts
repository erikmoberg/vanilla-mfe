import { ProductModel } from "./components/models/product-model";

export const mockData: ProductModel[] = [
    {
        id: "6f2e6e62-5d67-4a5d-9e48-9a8440aa958b",
        title: "Data Science Summit 2023",
        startDate: "2023-11-01",
        endDate: "2023-11-03",
        location: "New York, USA",
        img: "https://www.datasciencecentral.com/photo/data-science-summit",
        website: "https://datasciencesummit.com/",
        description:
            "The Data Science Summit is a three-day conference dedicated to exploring the latest trends, tools, and techniques in data science. The event features keynote speeches, panel discussions, and workshops led by leading experts in the field of data science. Attendees can expect to learn about the latest advances in machine learning, data mining, natural language processing, and other areas of data science, and how to apply these techniques in their work. The event will take place in New York City, USA, from November 1-3, 2023.",
        priceSEK: 12000,
        priceEUR: 1200,
        type: "conference",
        searchTerms: [
            "data science",
            "machine learning",
            "data mining",
            "natural language processing",
            "keynote speeches",
            "workshops",
            "panel discussions",
            "New York",
        ],
    },
    {
        id: "c7e57b0a-5a3b-4830-93cf-26a18ff1c9df",
        title: "JSNation Conference 2023",
        startDate: "2023-06-01",
        endDate: "2023-06-05",
        location: "Amsterdam, The Netherlands",
        img: "https://do3z7e6uuakno.cloudfront.net/uploads/event/logo/1121338/790e66ea6dfedbc95370df7084f6bb5d.png",
        website: "https://jsnation.com/",
        description:
            "JSNation is a 2-day event focusing exclusively on JavaScript development. At our conference, inspiring talks meet fresh ideas and good people with summer Amsterdam in the background. In 2023 the format of the event will be hybrid, with the first day – June 1 – streamed from the Amsterdam venue including hybrid networking features and interactive entertainment; and second day – June 5, as well as the numerous free workshops, streamed to the global audience online.",
        priceSEK: 10000,
        priceEUR: 1000,
        type: "conference",
        searchTerms: [
            "conference",
            "amsterdam",
            "javascript",
            "talks",
            "hybrid",
            "js",
            "development",
            "workshops",
            "networking",
        ],
    },
    {
        id: "89258f51-c2a2-4c07-ba38-bf48c9d8e1d1",
        title: "React Summit 2023",
        startDate: "2023-07-10",
        endDate: "2023-07-11",
        location: "Hyderabad, India",
        img: "https://reactsummit.com/images/ReactSummit2023_Twitter.png",
        website: "https://reactsummit.com/",
        description:
            "React Summit is a two-day conference for React enthusiasts, where you can meet and learn from other engineers and leading experts on the subject. The event features a great line-up of speakers, workshops, and opportunities for networking. Attendees will have the opportunity to learn the latest techniques and strategies, explore new frameworks and technologies, and build meaningful connections in the community.",
        priceSEK: 9000,
        priceEUR: 900,
        type: "conference",
        searchTerms: [
            "conference",
            "react",
            "india",
            "javascript",
            "workshops",
            "networking",
            "javascript",
        ],
    },
    {
        id: "d0a2f849-19b5-4ed7-b889-ea521d81b002",
        title: "AI Summit 2023",
        startDate: "2023-09-15",
        endDate: "2023-09-16",
        location: "Paris, France",
        img: "https://www.aisummit.com/france/wp-content/uploads/2022/10/AISummit-2023.jpg",
        website: "https://www.aisummit.com/france/",
        description:
            "The AI Summit is the world's leading event for Artificial Intelligence applications in business. The event will be held in Paris, France from September 15-16, 2023. The summit will feature keynote speeches, workshops, and panel discussions from leading experts in the field of AI. The format of the event will be hybrid, with the first day – September 15 – held in person at the Paris venue, and the second day – September 16 – streamed to a global audience online. Attendees can expect to learn about the latest trends, strategies, and tools in the field of AI, and how to implement them in their businesses to drive growth and innovation.",
        priceSEK: 8000,
        priceEUR: 800,
        type: "conference",
        searchTerms: [
            "AI",
            "artificial intelligence",
            "business",
            "Paris",
            "keynote speeches",
            "workshops",
            "panel discussions",
            "hybrid",
            "growth",
            "innovation",
        ],
    },
    {
        id: "8e2af665-6c20-49e1-95ba-df381186d02c",
        title:
            "Building Modern Frontend Architecture: From Monolith to Micro Frontends",
        author: "Jane Doe",
        publisher: "O'Reilly Media",
        isbn: "9781492075601",
        img: "https://covers.oreillystatic.com/images/9781492075601/cat.gif",
        website:
            "https://learning.oreilly.com/library/view/building-modern-frontend/9781492075601/",
        description:
            "This book explores how to build modern frontend architecture with a focus on micro frontends. You'll learn how to create modular, scalable, and maintainable frontend applications using modern technologies like React, Vue.js, Web Components, and more. Through practical examples and case studies, you'll gain a deep understanding of how to design and build effective frontend architectures that can grow and evolve over time.",
        priceSEK: 350,
        priceEUR: 35,
        type: "book",
        searchTerms: [
            "book",
            "frontend architecture",
            "micro frontends",
            "modular",
            "scalable",
            "maintainable",
            "React",
            "Vue.js",
            "Web Components",
            "javascript",
        ],
    },
    {
        id: "f9dbf63b-6e2e-47f7-aee2-6f85d6ec72a8",
        title: "JS Conf EU 2023",
        startDate: "2023-05-20",
        endDate: "2023-05-20",
        location: "Berlin, Germany",
        img: "https://www.mindera.com/wp-content/uploads/2021/07/JSConf-EU-2023.png",
        website: "https://2023.jsconf.eu/",
        description:
            "JS Conf EU is a one-day conference dedicated to exploring the latest trends, techniques, and tools in JavaScript development. The event features world-class speakers, interactive workshops, and opportunities for networking with other developers in the community. This year's conference will be held in Berlin, Germany, and will cover topics ranging from front-end frameworks to serverless architecture and beyond. Join us for an exciting day of learning and sharing with some of the brightest minds in the industry.",
        priceSEK: 2000,
        priceEUR: 200,
        type: "conference",
        searchTerms: [
            "javascript",
            "berlin",
            "workshops",
            "networking",
            "front-end",
            "serverless architecture",
        ],
    },
    {
        id: "47f5b40a-343d-4d3d-b3c3-2f7c1d4c1f7d",
        title: "React Native Workshop",
        instructor: "John Smith",
        startDate: "2023-06-15",
        startTime: "13:00",
        endTime: "17:00",
        location: "Stockholm, Sweden",
        img: "https://reactnative.dev/img/header_logo.svg",
        website: "https://www.reactnativeworkshop.com/",
        description:
            "In this hands-on workshop, you'll learn how to build mobile apps using React Native. You'll start by creating a simple app and gradually work your way up to more complex projects. By the end of the workshop, you'll have a solid understanding of how to use React Native to build high-quality mobile apps that can run on both iOS and Android. This workshop is perfect for anyone who wants to take their mobile app development skills to the next level!",
        priceSEK: 1500,
        priceEUR: 150,
        type: "workshop",
        searchTerms: [
            "react native",
            "mobile app development",
            "hands-on",
            "instructor-led",
            "iOS",
            "Android",
            "javascript",
        ],
    },
    {
        id: "b05140fc-84de-4d9e-8eb8-7246cda47fa7",
        title:
            "Full Stack Web Development with Node.js and React: Build Scalable and Robust Web Applications",
        author: "John Smith",
        publisher: "Packt Publishing",
        isbn: "9781789956873",
        img: "https://static.packt-cdn.com/products/9781789956873/cover/smaller",
        website:
            "https://www.packtpub.com/product/full-stack-web-development-with-node-js-and-react/9781789956873",
        description:
            "This book provides a comprehensive guide to building full-stack web applications with Node.js and React. You'll learn how to build a RESTful API with Node.js and connect it to a React frontend to create a scalable and robust web application. Through practical examples and case studies, you'll gain a deep understanding of how to design and build effective full-stack web applications that can handle large amounts of traffic and data.",
        priceSEK: 450,
        priceEUR: 45,
        type: "book",
        searchTerms: [
            "book",
            "full-stack web development",
            "Node.js",
            "React",
            "RESTful API",
            "scalable",
            "robust",
            "web application",
            "javascript",
        ],
    },
    {
        id: "03c88147-3847-45ce-a2a6-64d6cde84b7e",
        title:
            "Data Science with Python: Explore the World of Data Science with Python and Jupyter Notebook",
        author: "Mary Johnson",
        publisher: "Manning Publications",
        isbn: "9781617298664",
        img: "https://images.manning.com/720/960/resize/book/1/6e717e13-fdc3-4501-9f3d-d3b50f8f5c15/Johnson-Data-HI.png",
        website: "https://www.manning.com/books/data-science-with-python",
        description:
            "This book is a practical guide to data science with Python and Jupyter Notebook. You'll learn how to analyze and visualize data using popular Python libraries like Pandas, NumPy, and Matplotlib. Through practical examples and case studies, you'll gain a deep understanding of how to use Python for data science and how to build effective data-driven applications.",
        priceSEK: 300,
        priceEUR: 30,
        type: "book",
        searchTerms: [
            "book",
            "data science",
            "Python",
            "Jupyter Notebook",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "data analysis",
            "data visualization",
            "data-driven applications",
        ],
    },
    {
        id: "a3dbefba-c9e5-4eb6-b187-6cb5bafe1f7d",
        title:
            "The Lean Startup: How Today’s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
        author: "Eric Ries",
        publisher: "Currency",
        isbn: "978-0307887894",
        img: "https://images-na.ssl-images-amazon.com/images/I/51WIKlio9qL._SX329_BO1,204,203,200_.jpg",
        website:
            "https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898",
        description:
            "The Lean Startup is a guide to building and growing successful businesses in today's fast-paced world. Author Eric Ries introduces the Lean Startup methodology, which emphasizes continuous innovation and customer feedback. Through practical examples and case studies, Ries shows how entrepreneurs can use the Lean Startup approach to build businesses that are both profitable and sustainable over the long term.",
        priceSEK: 200,
        priceEUR: 20,
        type: "book",
        searchTerms: [
            "book",
            "entrepreneurship",
            "innovation",
            "Lean Startup",
            "customer feedback",
            "profitability",
            "sustainability",
        ],
    },
    {
        id: "b44f3c18-4b4b-4b25-b7e9-22c35f3b2f12",
        title: "The Art of Learning: An Inner Journey to Optimal Performance",
        author: "Josh Waitzkin",
        publisher: "Free Press",
        isbn: "978-0743277464",
        img: "https://images-na.ssl-images-amazon.com/images/I/51WEbiI8+JL._SX328_BO1,204,203,200_.jpg",
        website:
            "https://www.amazon.com/Art-Learning-Journey-Optimal-Performance/dp/0743277465",
        description:
            "The Art of Learning is a book about achieving peak performance in any field through the power of learning. Author Josh Waitzkin, a former chess prodigy and martial arts champion, shares his personal journey of mastering different disciplines and offers practical advice on how to develop a learning mindset, overcome obstacles, and achieve excellence. Through anecdotes and insights, Waitzkin shows how to apply the principles of learning to any area of life.",
        priceSEK: 150,
        priceEUR: 15,
        type: "book",
        searchTerms: [
            "book",
            "learning",
            "peak performance",
            "personal growth",
            "Josh Waitzkin",
            "martial arts",
            "chess",
            "excellence",
        ],
    },
    {
        id: "5a5dd5fc-1c67-42d9-bc47-054918fcd8a1",
        title: "Python for Data Science Workshop",
        instructor: "Sarah Johnson",
        startDate: "2023-08-01",
        startTime: "09:00",
        endTime: "16:00",
        location: "Berlin, Germany",
        img: "https://www.python.org/static/community_logos/python-logo-master-v3-TM.png",
        website: "https://www.pythonworkshops.com/data-science/",
        description:
            "This workshop is designed for beginners who want to learn Python for data science. You'll learn the basics of Python programming and then move on to data analysis and visualization with Python libraries like Pandas, Matplotlib, and Seaborn. By the end of the workshop, you'll be able to use Python to analyze and visualize data, and create beautiful data visualizations.",
        priceSEK: 2000,
        priceEUR: 200,
        type: "workshop",
        searchTerms: [
            "python",
            "data science",
            "data analysis",
            "data visualization",
            "pandas",
            "matplotlib",
            "seaborn",
            "Berlin",
        ],
    },
    {
        id: "bd86276a-2ab6-437d-96f8-29c0b92e05d1",
        title: "Agile Scrum Workshop",
        instructor: "Mike Davis",
        startDate: "2023-09-12",
        startTime: "10:00",
        endTime: "16:00",
        location: "London, UK",
        img: "https://www.scrum.org/themes/custom/scrumporg/logo.png",
        website: "https://www.agileworkshops.com/scrum/",
        description:
            "This workshop is designed for individuals and teams who want to learn about Agile Scrum methodology. You'll learn about the principles of Agile Scrum and how to apply them in real-world projects. You'll also learn about Agile Scrum roles, ceremonies, and artifacts. By the end of the workshop, you'll have a solid understanding of Agile Scrum and be able to apply it in your own projects.",
        priceSEK: 2500,
        priceEUR: 250,
        type: "workshop",
        searchTerms: [
            "agile",
            "scrum",
            "project management",
            "teamwork",
            "London",
            "instructor-led",
            "hands-on",
        ],
    },
    {
        id: "93b93d7a-6d33-4c3a-93a3-98bf12f67a9d",
        title: "Machine Learning Workshop",
        instructor: "Sarah Lee",
        startDate: "2023-08-12",
        startTime: "09:00",
        endTime: "16:00",
        location: "Berlin, Germany",
        img: "https://www.techopedia.com/images/uploads/mlimage.jpg",
        website: "https://www.machinelearningworkshop.com/",
        description:
            "In this workshop, you'll learn the basics of machine learning and how to apply it to real-world problems. You'll learn about supervised and unsupervised learning, as well as common algorithms like decision trees and neural networks. You'll also learn how to use popular machine learning libraries like scikit-learn and TensorFlow. By the end of the workshop, you'll be able to build your own machine learning models and apply them to real-world problems. This workshop is perfect for anyone who wants to get started with machine learning.",
        priceSEK: 2000,
        priceEUR: 200,
        type: "workshop",
        searchTerms: [
            "machine learning",
            "supervised learning",
            "unsupervised learning",
            "decision trees",
            "neural networks",
            "scikit-learn",
            "TensorFlow",
            "data science",
            "Berlin",
        ],
    },
];
