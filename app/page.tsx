"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [timePassed, setTimePassed] = useState<string>("");
  const [afterKirk, setAfterKirk] = useState<string>("");

  useEffect(() => {
    const targetDate = new Date("2025-09-10T00:00:00Z");

    const updateTime = () => {
      const now = new Date();

      let years = now.getUTCFullYear() - targetDate.getUTCFullYear();

      const anniversary = new Date(targetDate);
      anniversary.setUTCFullYear(targetDate.getUTCFullYear() + years);

      if (now < anniversary) {
        years--;
        anniversary.setUTCFullYear(targetDate.getUTCFullYear() + years);
      }

      const remainingTime = now.getTime() - anniversary.getTime();
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

      setTimePassed(
        `${years} ${years === 1 ? "year" : "years"} ${days} ${days === 1 ? "day" : "days"}`
      );

      setAfterKirk(`${years} After Kirk`);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-2xl text-white">
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-white/10 bg-black/50 p-8 backdrop-blur-sm">
        <h1 className="text-3xl font-bold">How Much Time has passed since the death of Charlie Kirk?</h1>
        <p className="text-4xl font-bold">{timePassed}</p>
        <br />
        <h2 className="text-2xl font-bold">{afterKirk}</h2>
      </div>

      <footer className="mt-8 text-center text-sm text-white/50">
        <p>
          Made by <a href="https://x.com/b3ni_15" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            b3ni_15
          </a>
        </p>
        <p>(Without any relation to Charlie Kirk or his organization, this is just a fun project to see how much time has passed since his death.) NO AI was used!!!</p>
      </footer>
    </main>
  );
}