import Layout from "../components/Layout";
import { API_URL } from "@/config/index";

export default function Home({events}) {
  console.log(events);
  return (
    <>
      <Layout>
        <h1>Upcoming Events</h1>
      </Layout>
    </>
  );
}
Will run every time we come to this 
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  

  return {
    props: {events},
  };
}
