import { useState, useEffect } from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import { useRouter } from "next/router";

const Portfolio = () => {
  const router = useRouter();

  return (
    <BaseLayout>
      <h1>I am Portfolio page</h1>
      <h2>{router.query.id}</h2>
    </BaseLayout>
  );
};

export default Portfolio;
