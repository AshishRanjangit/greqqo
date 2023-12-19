// pages/[slug]/[slug].js

import React from 'react';

const DynamicPage = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch the list of dynamic paths at build time
  const paths = [
    { params: { slug: 'example1' } },
    { params: { slug: 'example2' } },
    // Add more dynamic paths as needed
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch data for the specific dynamic path
  const { slug } = params;
  const response = await fetch(`https://api.example.com/posts/${slug}`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}

export default DynamicPage;
