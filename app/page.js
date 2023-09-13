import Image from 'next/image';
import Link from 'next/link';
import styles from '@styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Welcome to Our Next.js Application!</h1>
      <p className={styles.text}>
        Explore Data from JSON Placeholder
      </p>
      <p className={styles.description}>
        Our Next.js application is a powerful tool that allows you to explore and interact with data from JSON Placeholder. JSON Placeholder is a free online REST API that provides you with a wealth of data to work with. Whether you're a developer looking for sample data or a user interested in exploring various datasets, our app has you covered.
      </p>
      <h2 className={styles.featureTitle}>Key Features</h2>
      <ul className={styles.features}>
        <li>Data Exploration: Our home page provides you with easy access to a wide range of data, from user profiles to posts, comments, and more. You can quickly browse through the available datasets and select the ones that interest you the most.</li>
        <li>Interactive Interface: Our app offers an intuitive and interactive interface that allows you to filter, sort, and search through the data effortlessly. You can customize your data viewing experience to find exactly what you need.</li>
        <li>Real-time Updates: We keep our data up-to-date, ensuring that you always have access to the latest information. You can rely on the accuracy and freshness of the data to support your projects and applications.</li>
        <li>Developer-Friendly: For developers, our Next.js app serves as an excellent resource for testing and prototyping. You can easily fetch data from JSON Placeholder and integrate it into your projects with just a few lines of code.</li>
      </ul>
      <h2 className={styles.getStarted}>Get Started</h2>
      <p className={styles.description}>
        Getting started with our Next.js app is as simple as navigating through the datasets on our home page. Whether you're a developer, a data enthusiast, or simply curious about the data available on JSON Placeholder, you'll find our app to be a valuable tool.
      </p>
      <p className={styles.description}>
        Explore, analyze, and enjoy the world of data with our Next.js application. Start your journey today!
      </p>
      <Link href="/ninjas" className={styles.btn}>
        Start Exploring
      </Link>
      
    </div>
  );
}
