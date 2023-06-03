import BaseLayout from "../../components/layouts/BaseLayout";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Portfolios = ({ posts }) => {
  const renderPosts = () => {
    return posts.map((item) => {
      return (
        <li key={item.id}>
          <Link href={`/portfolios/${item.id}`}>{item.title}</Link>
        </li>
      );
    });
  };

  return (
    <BaseLayout>
      <h1>I am Portfolios page</h1>
      <ul>{renderPosts()}</ul>
    </BaseLayout>
  );
};

export default Portfolios;

Portfolios.getInitialProps = async () => {
  let posts = [];
  try {
    const axiosRes = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    posts = axiosRes.data;
  } catch (error) {
    console.error(error.message);
  }

  return {
    posts: posts.slice(0, 10),
  };
};
