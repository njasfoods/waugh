"use client";
import GetStartedNav from "@/components/Layout/GetStartedNav";

import Link from "next/link";
import { useRouter } from "next/navigation";

function GettingStartedTemplate({ children }) {
  const router = useRouter();
  return (
    <section className="">
      <GetStartedNav/>
      <div className="bg-accent pt-[11vh]">{children}</div>
    </section>
  );
}
export default GettingStartedTemplate;
