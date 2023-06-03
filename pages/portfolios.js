import BaseLayout from "../components/layouts/BaseLayout";
import { useState, useEffect } from "react";
import axios from "axios";

const Portfolios = ({ posts }) => {
  const renderPosts = () => {
    return posts.map((item) => {
      return <li key={item.id}>{item.id}</li>;
    });
  };

  return (
    <BaseLayout>
      <h1>I am Portfolio page</h1>
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
