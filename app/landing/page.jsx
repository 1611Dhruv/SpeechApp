"use client";
import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function LandingPage() {
  const { user } = useUser();
  return (
    <div className="mt-20 flex flex-col items-center">
      <h1 className="text-black text-8xl font-bold text-center mb-8 justify-center">
        ProVid Insight
      </h1>
      <p className="text-black text-lg text-center mb-7 ml-[15%] mr-[15%]">
      Embark on a presentation journey that's anything but "insightless" with ProVid Insight! This platform is your backstage pass to the show of refined presentation skills – perfect for those battling butterflies in their stomach or anyone on a quest to master the art of public speaking. ProVid Insight is not just an application; it's your trusted wingman on the stage of self-expression. We provide a supportive environment to practice and receive constructive feedback.
      </p>
      <p className="text-black text-xl text-center mb-7 ml-[15%] mr-[15%]">
      Gradual progress leads to increased comfort in social and professional interactions.
      </p>
      <Link
        href={user ? "/" : "/api/auth/login"}
        className="btn btn-accent w-60 mb-7"
      >
        Get Started
      </Link>

      <div className = "grid grid-cols-1 md:grid-cols-2 flex">
        <div className="card w-96 bg-base-100 shadow-xl mx-4 mb-7">
          <div className="card-body">
            <h2 className="card-title">
              Upload a video and let us analyze your presentation skills
            </h2>
            <p>
              It's as easy as it sounds. Whether you're grappling with social
              anxiety or seeking a space for continuous improvement, our
              platform has your back.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-4 mb-7">
          <div className="card-body">
            <h2 className="card-title">
              Get fast feedback in many categories, with timestamps
            </h2>
            <p>
              Navigate through your video to pinpoint specific moments for
              in-depth analysis. Not only do we offer a convenient summary
              feature, you can track your progress over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
