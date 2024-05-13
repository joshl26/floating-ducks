"use client";

import { Suspense } from "react";
import Ducks from "./Ducks";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden ">
      <div className="w-screen h-screen ">
        <Ducks />
      </div>
    </main>
  );
}
