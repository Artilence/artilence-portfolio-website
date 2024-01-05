import FacebookIcon from "../components/shared/icons/FacebookIcon";
import InstagramIcon from "../components/shared/icons/InstagramIcon";
import LinkedInIcon from "../components/shared/icons/LinkedInIcon";

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
    },
    {
      id: 2,
      src: "/icons/frontend/nextjs.svg",
      alt: "Next.js",
    },
    {
      id: 3,
      src: "/icons/frontend/css.svg",
      alt: "CSS",
    },
    {
      id: 4,
      src: "/icons/frontend/html.svg",
      alt: "HTML",
    },
    {
      id: 5,
      src: "/icons/frontend/vuejs.svg",
      alt: "Vue JS",
    },
    {
      id: 6,
      src: "/icons/frontend/bootstrap.svg",
      alt: "Bootstrap",
    },
  ],
  backend: [
    {
      id: 1,
      src: "/icons/backend/nodejs.svg",
      alt: "Node.js",
    },
    {
      id: 2,
      src: "/icons/backend/django.svg",
      alt: "Django",
    },
    {
      id: 3,
      src: "/icons/backend/fastapi.svg",
      alt: "Fast Api",
    },
    {
      id: 4,
      src: "/icons/backend/flask.svg",
      alt: "Flask",
    },
    {
      id: 5,
      src: "/icons/backend/python.svg",
      alt: "Python",
    },
    {
      id: 6,
      src: "/icons/backend/scrapy.svg",
      alt: "Scrapy",
    },
    {
      id: 7,
      src: "/icons/backend/elixir.svg",
      alt: "Elixir",
    },
    {
      id: 8,
      src: "/icons/backend/selenium.svg",
      alt: "Selenium",
    },
    {
      id: 9,
      src: "/icons/backend/beautifulsoap.svg",
      alt: "Beautiful Soap",
    },
  ],
  database: [
    {
      id: 1,
      src: "/icons/database/mysql.svg",
      alt: "MySQL",
    },
    {
      id: 2,
      src: "/icons/database/postgresql.svg",
      alt: "PostgreSQL",
    },
    {
      id: 3,
      src: "/icons/database/mongodb.svg",
      alt: "MongoDB",
    },
    {
      id: 5,
      src: "/icons/database/msql.svg",
      alt: "MSQL",
    },
    {
      id: 6,
      src: "/icons/database/redis.svg",
      alt: "Redis",
    },
    {
      id: 7,
      src: "/icons/database/couchdb.svg",
      alt: "CouchDB",
    },
  ],
  devops: [
    {
      id: 1,
      src: "/icons/devops/git.svg",
      alt: "Git",
    },
    {
      id: 2,
      src: "/icons/devops/github.svg",
      alt: "GitHub",
    },
    {
      id: 3,
      src: "/icons/devops/travisci.svg",
      alt: "TravisCI",
    },
    {
      id: 4,
      src: "/icons/devops/docker.svg",
      alt: "Docker",
    },
    {
      id: 5,
      src: "/icons/devops/kubernetes.svg",
      alt: "Kubernetes",
    },
    {
      id: 6,
      src: "/icons/devops/openshift.svg",
      alt: "OpenShift",
    },
    {
      id: 7,
      src: "/icons/devops/terraform.svg",
      alt: "Terraform",
    },
    {
      id: 8,
      src: "/icons/devops/aws.svg",
      alt: "AWS",
    },
    {
      id: 9,
      src: "/icons/devops/ubuntu.svg",
      alt: "Ubuntu",
    },
  ],
};

export const socialIcons: ImageObject2[] = [
  {
    id: 1,
    component: (props) => <FacebookIcon {...props} />,
    alt: "Facebook",
  },
  {
    id: 2,
    component: (props) => <InstagramIcon {...props} />,
    alt: "Instagram",
  },
  {
    id: 3,
    component: (props) => <LinkedInIcon {...props} />,
    alt: "Linkedin",
  },
];

export interface ImageObject {
  id: number;
  src: string;
  alt: string;
}
export interface ImageObject2 {
  id: number;
  component: React.FC<React.SVGProps<SVGSVGElement>>;
  alt: string;
}
