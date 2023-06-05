import Layout from "@/components/Layout";
import styles from "../styles/404.module.css";
import Link from 'next/link';

export default function NotFound() {
  return <Layout title='Page Not Found'>
    <div className={styles.error}>
        <h1></h1>
    </div>
  </Layout>;
}
