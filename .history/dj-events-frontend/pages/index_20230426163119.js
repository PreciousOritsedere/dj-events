import Layout from "../components/Layout";
import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";

export default function Home({ events }) {
  console.log(events);
  return (
    <>
      <Layout>
        <h1>Upcoming Events</h1>
        {events.length === 0 && <h3> No events to show </h3>}

        {events.map((evt) => {
          return (<EventItem key={evt.id}>{evt.name} />;
        })}
      </Layout>
    </>
  );
}

// Will run every time we come to this page
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
    // for when the data changes
    revalidate: 1,
  };
}
