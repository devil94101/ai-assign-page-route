"use client";
import ModelDetail from "@/components/ModelDetail/ModelDetail";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  return <ModelDetail id={id as string} />;
};

export default Page;
