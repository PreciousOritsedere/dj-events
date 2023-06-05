import Head from "next/head";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <head></head>
      {children}
    </div>
  );
}
