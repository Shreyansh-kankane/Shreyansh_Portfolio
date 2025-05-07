import { Experience } from '@/types/experience';

const experiences: Experience[] = [
  {
    name: 'Software Development Intern',
    duration: 'Oct 2024 - Present',
    company: 'Vizal.ai',
    url: 'https://vizal.ai/',
    description: 'Developed a Saas product for the company. Implemented AI based video calling and messaging application which can integerated on websites and shopify.'
  },
  {
    name: 'Software Development Intern',
    duration: '5 March 2024 - July 2024',
    company: 'Truminds Software System',
    url: 'https://truminds.com/',
    description: 'Implemented object detection for Coca-Cola products using open-source YOLOv8 across 1,000+ social media videos. Automate web scraping scripts for YouTube and Instagram to fetch videos. Developed data visualizations in Grafana with Postgres database, enhancing insights on data. Created a user-friendly interface for data retrieval and reporting using Streamlit and FastAPI. Developed a full stack project involving Postgres, Grafana, Kafka, Docker, YOLOv8, OpenAI Whisper, Selenium, FastAPI, and Streamlit.'
  },
  {
    name: 'Backend Developer',
    duration: 'Jan 2024 - March 2024',
    company: 'Datsol Solutions',
    url: 'https://datsolsolutions.com',
    description:
      'Designed WhatsApp chatbot to manage defaulted payments, leveraging open-source Mistral AI LLM model. Engineered personalised user interactions by retrieving and storing user information in SQL database. Integrated WhatsApp with the Turn.io messaging platform.'
  },
];

export { experiences };
