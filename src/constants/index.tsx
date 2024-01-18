import { FaInstagram, FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import getUuid from "uuid-by-string";

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
      src: "textures/react.png",
      id: getUuid("textures/react.png"),
      name: "Reactjs",
    },
    {
      src: "textures/nextjs.png",
      id: getUuid("textures/nextjs.svg"),
      name: "Nextjs",
    },
    {
      src: "textures/html.png",
      id: getUuid("textures/html.png"),
      name: "HTML5",
    },
    {
      src: "textures/css.png",
      id: getUuid("textures/css.png"),
      name: "CSS3",
    },
    {
      src: "textures/bootstrap.png",
      id: getUuid("textures/bootstrap.png"),
      name: "Bootstrap",
    },

    {
      src: "textures/vuejs.png",
      id: getUuid("textures/vuejs.png"),
      name: "Vuejs",
    },
  ],
  [
    {
      src: "textures/django.png",
      id: getUuid("textures/django.png"),
      name: "Django",
    },
    {
      src: "textures/fastapi.png",
      id: getUuid("textures/fastapi.png"),
      name: "Fastapi",
    },
    {
      src: "textures/nodejs.png",
      id: getUuid("textures/nodejs.png"),
      name: "Nodejs",
    },
    {
      src: "textures/scrapy.png",
      id: getUuid("textures/scrapy.png"),
      name: "Scrapy",
    },
    {
      src: "textures/python.png",
      id: getUuid("textures/python.png"),
      name: "Python",
    },
    {
      src: "textures/flask.png",
      id: getUuid("textures/flask.png"),
      name: "Flask",
    },

    {
      src: "textures/elixir.png",
      id: getUuid("textures/elixir.png"),
      name: "Elixir",
    },
  ],

  [
    {
      src: "textures/mysql.png",
      id: getUuid("textures/mysql.png"),
      name: "mysql",
    },
    {
      src: "textures/msql.png",
      id: getUuid("textures/msql.png"),
      name: "msql",
    },
    {
      src: "textures/postgresql.png",
      id: getUuid("textures/postgresql.png"),
      name: "postgresql",
    },
    {
      src: "textures/mongodb.svg",
      id: getUuid("textures/mongodb.png"),
      name: "mongodb",
    },
    {
      src: "textures/redis.png",
      id: getUuid("textures/redis.png"),
      name: "redis",
    },
    {
      src: "textures/couchdb.png",
      id: getUuid("textures/couchdb.png"),
      name: "couchdb",
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
