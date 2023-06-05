const { events } = require("./data.json");

export default function handler(req, res) {
    const evt = events.filter(ev => ev.slug === slug)

  if (req.method === "GET") {
    res.status(200).json(evts);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.methos} is not allowed` });
  }
}
