import { FaInstagram, FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import getUuid from "uuid-by-string";
export const HEADER_CURSOR_CLASS_NAME = "heading_cursor";
export const clientsArray: ImageObject[] = [
  {
    id: 1,
    src: "/img/client_logos/agentaio.svg",
    alt: "AgentIO",
  },
  {
    id: 2,
    src: "/img/client_logos/chopcast.svg",
    alt: "Chopcast",
  },
  {
    id: 3,
    src: "/img/client_logos/tesla.svg",
    alt: "Tesla",
  },
  {
    id: 4,
    src: "/img/client_logos/medtronic.svg",
    alt: "Medtronic",
  },
  {
    id: 5,
    src: "/img/client_logos/lyftrondata.svg",
    alt: "Lyftrondata",
  },
  {
    id: 6,
    src: "/img/client_logos/voiceai.svg",
    alt: "Voice AI",
  },
  {
    id: 7,
    src: "/img/client_logos/firststep.svg",
    alt: "Firststep.io",
  },

  {
    id: 12,
    src: "/img/client_logos/agentaio.svg",
    alt: "AgentIO",
  },
  {
    id: 23,
    src: "/img/client_logos/chopcast.svg",
    alt: "Chopcast",
  },
  {
    id: 34,
    src: "/img/client_logos/tesla.svg",
    alt: "Tesla",
  },
  {
    id: 45,
    src: "/img/client_logos/medtronic.svg",
    alt: "Medtronic",
  },
  {
    id: 56,
    src: "/img/client_logos/lyftrondata.svg",
    alt: "Lyftrondata",
  },
  {
    id: 68,
    src: "/img/client_logos/voiceai.svg",
    alt: "Voice AI",
  },
  {
    id: 79,
    src: "/img/client_logos/firststep.svg",
    alt: "Firststep.io",
  },
];

export const techStack = {
  frontend: [
    {
      id: 1,
      src: "/icons/frontend/react.svg",
      alt: "React",
      span: 1,
    },
    {
      id: 2,
      src: "/icons/frontend/nextjs.svg",
      alt: "Next.js",
      span: 2,
    },
    {
      id: 3,
      src: "/icons/frontend/css.svg",
      alt: "CSS",
      span: 2,
      width: 82,
    },
    {
      id: 4,
      src: "/icons/frontend/html.svg",
      alt: "HTML",
      span: 1,
    },
    {
      id: 5,
      src: "/icons/frontend/vuejs.svg",
      alt: "Vue JS",
      span: 1,
    },
    {
      id: 6,
      src: "/icons/frontend/bootstrap.svg",
      alt: "Bootstrap",
      span: 2,
    },
  ],
  backend: [
    {
      id: 1,
      src: "/icons/backend/nodejs.svg",
      alt: "Node.js",
      span: 1,
    },
    {
      id: 2,
      src: "/icons/backend/django.svg",
      alt: "Django",
      span: 2,
    },
    {
      id: 3,
      src: "/icons/backend/fastapi.svg",
      alt: "Fast Api",
      span: 2,
    },
    {
      id: 4,
      src: "/icons/backend/flask.svg",
      alt: "Flask",
      span: 1,
    },
    {
      id: 5,
      src: "/icons/backend/python.svg",
      alt: "Python",
      span: 1,
    },
    {
      id: 6,
      src: "/icons/backend/scrapy.svg",
      alt: "Scrapy",
      span: 2,
    },
    {
      id: 7,
      src: "/icons/backend/elixir.svg",
      alt: "Elixir",
      span: 2,
    },
    {
      id: 9,
      src: "/icons/backend/beautifulsoap.svg",
      alt: "Beautiful Soap",
      span: 1,
    },
  ],
  database: [
    {
      id: 1,
      src: "/icons/database/mysql.svg",
      alt: "MySQL",
      span: 1,
    },
    {
      id: 2,
      src: "/icons/database/postgresql.svg",
      alt: "PostgreSQL",
      span: 2,
    },
    {
      id: 3,
      src: "/icons/database/mongodb.svg",
      alt: "MongoDB",
      span: 2,
    },
    {
      id: 5,
      src: "/icons/database/msql.svg",
      alt: "MSQL",
      span: 1,
    },
    {
      id: 6,
      src: "/icons/database/redis.svg",
      alt: "Redis",
      span: 1,
    },
    {
      id: 7,
      src: "/icons/database/couchdb.svg",
      alt: "CouchDB",
      span: 2,
    },
  ],
  devops: [
    {
      id: 1,
      src: "/icons/devops/git.svg",
      alt: "Git",
      span: 1,
    },
    {
      id: 2,
      src: "/icons/devops/github.svg",
      alt: "GitHub",
      span: 2,
    },
    {
      id: 3,
      src: "/icons/devops/travisci.svg",
      alt: "TravisCI",
      span: 2,
    },
    {
      id: 4,
      src: "/icons/devops/docker.svg",
      alt: "Docker",
      span: 1,
    },
    {
      id: 5,
      src: "/icons/devops/kubernetes.svg",
      alt: "Kubernetes",
      span: 1,
    },
    {
      id: 6,
      src: "/icons/devops/openshift.svg",
      alt: "OpenShift",
      span: 2,
    },
    {
      id: 7,
      src: "/icons/devops/terraform.svg",
      alt: "Terraform",
      span: 2,
    },
    {
      id: 9,
      src: "/icons/devops/ubuntu.svg",
      alt: "Ubuntu",
      span: 1,
    },
  ],
};

export const socialIcons: ImageObject2[] = [
  {
    id: 1,
    component: (props) => <FaFacebook {...props} />,
    alt: "Facebook",
  },
  {
    id: 2,
    component: (props) => <FaInstagram {...props} />,
    alt: "Instagram",
  },
  {
    id: 3,
    component: (props) => <FaLinkedinIn {...props} />,
    alt: "Linkedin",
  },
];

export const shells = [
  [
    {
      src: "textures/git.png",
      id: getUuid("textures/git.png"),
      name: "Git",
      description:
        "Version control system for tracking changes in code, widely used in collaborative software development with a large and active user community.",
    },
    {
      src: "textures/kubernetes.png",
      id: getUuid("textures/kubernetes.png"),
      name: "Kubernetes",
      description:
        "Open-source container orchestration platform, enabling automated deployment, scaling, and management of containerized applications, embraced by a diverse and growing community.",
    },
    {
      src: "textures/travisci.png",
      id: getUuid("textures/travisci.png"),
      name: "Travis CI",
      description:
        "Cloud-based continuous integration service for automating the testing and building of software projects, widely adopted for its simplicity and seamless GitHub integration.",
    },
    {
      src: "textures/docker.png",
      id: getUuid("textures/docker.png"),
      name: "Docker",
      description:
        "Platform for automating the deployment of applications inside lightweight, portable containers, known for its efficiency and facilitating consistent development environments.",
    },
    {
      src: "textures/github.png",
      id: getUuid("textures/github.png"),
      name: "GitHub",
      description:
        "Web-based platform for version control using Git, offering a collaborative environment for software development, widely utilized for code hosting and collaboration.",
    },
    {
      src: "textures/terraform.png",
      id: getUuid("textures/terraform.png"),
      name: "Terraform",
      description:
        "Infrastructure as Code (IaC) tool for building, changing, and versioning infrastructure efficiently, supported by a vibrant community and widely adopted in cloud environments.",
    },
    {
      src: "textures/ubuntu.png",
      id: getUuid("textures/ubuntu.png"),
      name: "Ubuntu",
      description:
        "Popular open-source Linux distribution known for its user-friendly interface, stability, and extensive community support, widely used in both server and desktop environments.",
    },
    {
      src: "textures/openshift.png",
      id: getUuid("textures/openshift.png"),
      name: "Openshift",
      description:
        "Enterprise Kubernetes platform that provides container orchestration, developer and operational tools, and enhanced security features, preferred for building and managing applications.",
    },
  ],
  [
    {
      src: "textures/mysql.png",
      id: getUuid("textures/mysql.png"),
      name: "MySQL",
      description:
        "Popular open-source relational database management system, known for its reliability, ease of use, and strong community support.",
    },
    {
      src: "textures/msql.png",
      id: getUuid("textures/msql.png"),
      name: "Microsoft SQL Server",
      description:
        "Robust and widely-used relational database management system by Microsoft, featuring comprehensive features and extensive community resources.",
    },
    {
      src: "textures/postgresql.png",
      id: getUuid("textures/postgresql.png"),
      name: "PostgreSQL",
      description:
        "Powerful open-source relational database system with a focus on extensibility and standards compliance, favored for its advanced features and active developer community.",
    },
    {
      src: "textures/mongodb.png",
      id: getUuid("textures/mongodb.png"),
      name: "MongoDB",
      description:
        "NoSQL database known for its flexibility and scalability, widely adopted in modern web development for handling diverse and large datasets.",
    },
    {
      src: "textures/redis.png",
      id: getUuid("textures/redis.png"),
      name: "Redis",
      description:
        "In-memory data structure store, used as a caching mechanism and message broker, known for its speed and versatility, with a large and active user community.",
    },
    {
      src: "textures/couchdb.png",
      id: getUuid("textures/couchdb.png"),
      name: "CouchDB",
      description:
        "Distributed NoSQL database known for its seamless multi-node architecture and ease of use, favored for scalable and fault-tolerant applications.",
    },
  ],
  [
    {
      src: "textures/react.png",
      id: getUuid("textures/react.png"),
      name: "React.js",
      description:
        "JavaScript library for building user interfaces, maintained by Facebook, with a vast developer community, efficient component-based architecture, and widespread adoption.",
    },
    {
      src: "textures/nextjs.png",
      id: getUuid("textures/nextjs.svg"),
      name: "Next.js",
      description:
        "React-based framework for building static and dynamic web applications, known for its simplicity, speed, and seamless integration with React.",
    },
    {
      src: "textures/html.png",
      id: getUuid("textures/html.png"),
      name: "HTML5",
      description:
        "Latest version of the Hypertext Markup Language, offering enhanced multimedia and interactive capabilities, widely adopted for modern web development.",
    },
    {
      src: "textures/css.png",
      id: getUuid("textures/css.png"),
      name: "CSS3",
      description:
        "Latest version of Cascading Style Sheets, providing advanced styling capabilities for web pages, widely used in conjunction with HTML5 for modern web design.",
    },
    {
      src: "textures/bootstrap.png",
      id: getUuid("textures/bootstrap.png"),
      name: "Bootstrap",
      description:
        "Front-end framework for building responsive and visually appealing web pages quickly, known for its extensive pre-designed components and ease of integration.",
    },
    {
      src: "textures/vuejs.png",
      id: getUuid("textures/vuejs.png"),
      name: "Vue.js",
      description:
        "Progressive JavaScript framework for building user interfaces, known for its simplicity, flexibility, and ease of integration into existing projects.",
    },
  ],
  [
    {
      src: "textures/django.png",
      id: getUuid("textures/django.png"),
      name: "Django",
      description:
        "High-level Python web framework that encourages rapid development and clean, pragmatic design, used by a large community of developers for building robust and scalable web applications.",
    },
    {
      src: "textures/fastapi.png",
      id: getUuid("textures/fastapi.png"),
      name: "FastAPI",
      description:
        "Modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints, known for its simplicity and speed.",
    },
    {
      src: "textures/nodejs.png",
      id: getUuid("textures/nodejs.png"),
      name: "Node.js",
      description:
        "JavaScript runtime built on Chrome's V8 engine, designed for building scalable network applications, known for its speed and efficiency in handling concurrent connections.",
    },
    {
      src: "textures/scrapy.png",
      id: getUuid("textures/scrapy.png"),
      name: "Scrapy",
      description:
        "Open-source and collaborative web crawling framework for Python, used for extracting the data needed from websites, widely adopted for data mining and scraping.",
    },
    {
      src: "textures/beautifulsoap.png",
      id: getUuid("textures/beautifulsoap.png"),
      name: "Beautiful Soap",
      description:
        "Python library for pulling data out of HTML and XML files, widely used for web scraping tasks due to its simplicity and effectiveness.",
    },
    {
      src: "textures/python.png",
      id: getUuid("textures/python.png"),
      name: "Python",
      description:
        "High-level, general-purpose programming language known for its readability and versatility, widely used in web development, data science, and automation.",
    },
    {
      src: "textures/flask.png",
      id: getUuid("textures/flask.png"),
      name: "Flask",
      description:
        "Lightweight and flexible Python web framework, known for its simplicity and ease of use, favored for building small to medium-sized web applications.",
    },
    {
      src: "textures/elixir.png",
      id: getUuid("textures/elixir.png"),
      name: "Elixir",
      description:
        "Functional programming language designed for building scalable and maintainable applications, known for its fault-tolerance and efficient concurrency model.",
    },
  ],
];

export interface ImageObject {
  id: number;
  src: string;
  alt: string;
  span?: number;
  width?: number;
}
export interface ImageObject2 {
  id: number;
  component: React.FC<React.SVGProps<SVGSVGElement>>;
  alt: string;
  span?: number;
  width?: number;
}
