import Layout from '../components/Layout';
import { API_URL } from '@/config/index';

export default function Home() {
  return (
    <>
      <Layout>
        <h1>Upcoming Events</h1>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = 
}
