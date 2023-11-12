"use client";

import { useState, useRef, useEffect } from "react";

export default function ViewResult({ params }) {
  const url = "/compressed.mp4"; // updated to have fid
  const data = {
    timestamps: {
      "0.0-7.28": {
        feedback: "1",
        transcript:
          " So first, we start off with the spinal cord, which leads up toward the brain.",
      },
      "7.28-15.32": {
        feedback: "1",
        transcript:
          " As it goes closer to the brain, it expands and swells and becomes the brain stem.",
      },
      "15.32-25.44": {
        feedback: "1",
        transcript:
          " At the top of the brain stem sits the thalamus, and right under the thalamus lies the hypothalamus,",
      },
      "25.44-43.88": {
        feedback: "1",
        transcript:
          " hypo meaning under or lower, and under the hypothalamus is the pituitary gland.",
      },
      "43.88-53.24": {
        feedback: "2",
        transcript:
          " Going around from both sides of the thalamus is the hippocampus that extends out to the",
      },
      "53.24-62.4": {
        feedback: "2",
        transcript:
          " front of the brain, and at the front ends of the brain is the amygdala, and on the other",
      },
      "62.4-72.56": {
        feedback: "3",
        transcript:
          " side inside the temporal lobe lies the other hippocampus and amygdala pair.",
      },
      "72.56-80.04": {
        feedback: "3",
        transcript:
          " So for the lobes, at the front you have the frontal lobe, and at the top the parietal",
      },
      "80.04-82.32": {
        feedback: "3",
        transcript: " lobe, and at the back the occipital lobe.",
      },
      "82.32-86.36": {
        feedback: "3",
        transcript: " The bottom, the yellow, is the temporal lobe.",
      },
      "86.36-97.2": {
        feedback: "3",
        transcript:
          " For the cortexes, the cortex in the frontal lobe is the motor cortex, and that sits at",
      },
      "97.2-101.52": {
        feedback: "4",
        transcript: " the end of the frontal lobe.",
      },
      "101.52-109.12": {
        feedback: "4",
        transcript:
          " At the front of the parietal lobe sits the sensory cortex, and these two cortexes border",
      },
      "109.12-112.56": { feedback: "4", transcript: " each other." },
      "112.56-122.28": {
        feedback: "4",
        transcript:
          " Lastly we have the cerebellum, which is under all the lobes and sits behind the brain stem.",
      },
    },
    summary: "summary",
    score: { score: 1 },
  };
  const timestamps = data.timestamps;
  const [currKey, setCurrKey] = useState(Object.keys(timestamps)[0]);
  const videoRef = useRef(null);
  const handleTimeChange = (e) => {
    if (videoRef.current) {
      let x = Object.keys(timestamps).filter((key) => {
        const nums = key.split("-");
        const x = parseFloat(nums[0]);
        const y = parseFloat(nums[1]);
        return (
          videoRef.current.currentTime >= x && videoRef.current.currentTime < y
        );
      });
      setCurrKey(x[0]);
    }
  };
  return (
    <div className="mt-10 flex flex-col items-center">
    <div className="grid grid-cols-1 md:grid-cols-3 w-4/5 p-4 mx-auto text-center">

    <div className="mockup-browser border bg-slate-300 col-span-2">
      <div className="mockup-browser-toolbar">
        <div className="input">My Video</div>
      </div>
      <video
        ref={videoRef}
        onTimeUpdate={handleTimeChange}
        controls
        className="h-[480px]"
      >
        <source src={url} />
      </video>
      <div className="overflow-y-auto h-[100px] my-7 px-8 rounded-md">
        {Object.keys(timestamps).map((key) => {
          return (
            <span
              key={key}
              className={`${currKey == key ? "bg-yellow-200" : null} `}
            >
              {timestamps[key].transcript}
            </span>
          );
        })}
      </div>
    </div>

    <div>
    <div class="h-96 w-3/4 carousel carousel-vertical rounded-box border-8 border-slate-400 mb-7 bg-slate-50 px-4 py-4 overflow-y-auto">
      <div className="carousel-item">
        <div>{currKey && timestamps[currKey].feedback}</div>
      </div>
    </div>
    <div class="w-3/4">
      <p className="font-semibold">Summary stuff blegh</p>
    </div>

    </div>
    </div>
    </div>
  );
}
