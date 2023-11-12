"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import ScrollableComponent from "@/components/ScrollingComponent";
import { scroller } from "react-scroll";

export default function ViewResult({ params }) {
  const url = "/compressed.mp4"; // updated to have fid
  // const url = params.fid;
  const data = {
    timestamps: {
      "0.0-7.28": {
        feedback:
          "Delve into specific functions of brain components, incorporate engaging questions or facts.",
        transcript:
          " So first, we start off with the spinal cord, which leads up toward the brain.",
      },
      "7.28-15.32": {
        feedback:
          "Delve into specific functions of brain components, incorporate engaging questions or facts.",
        transcript:
          " As it goes closer to the brain, it expands and swells and becomes the brain stem.",
      },
      "15.32-25.44": {
        feedback:
          "Delve into specific functions of brain components, incorporate engaging questions or facts.",
        transcript:
          " At the top of the brain stem sits the thalamus, and right under the thalamus lies the hypothalamus,",
      },
      "25.44-43.88": {
        feedback:
          "Delve into specific functions of brain components, incorporate engaging questions or facts.",
        transcript:
          " hypo meaning under or lower, and under the hypothalamus is the pituitary gland.",
      },
      "43.88-53.24": {
        feedback:
          "Correct hippocampus and amygdala locations in your visual aid, and highlight each part when mentioned.",
        transcript:
          " Going around from both sides of the thalamus is the hippocampus that extends out to the",
      },
      "53.24-62.4": {
        feedback:
          "Correct hippocampus and amygdala locations in your visual aid, and highlight each part when mentioned.",
        transcript:
          " front of the brain, and at the front ends of the brain is the amygdala, and on the other",
      },
      "62.4-72.56": {
        feedback:
          "Emphasize distinct functions of each brain structure, and relate structure to behavior for better engagement.",
        transcript:
          " side inside the temporal lobe lies the other hippocampus and amygdala pair.",
      },
      "72.56-80.04": {
        feedback:
          "Emphasize distinct functions of each brain structure, and relate structure to behavior for better engagement.",
        transcript:
          " So for the lobes, at the front you have the frontal lobe, and at the top the parietal",
      },
      "80.04-82.32": {
        feedback:
          "Emphasize distinct functions of each brain structure, and relate structure to behavior for better engagement.",
        transcript: " lobe, and at the back the occipital lobe.",
      },
      "82.32-86.36": {
        feedback:
          "Emphasize distinct functions of each brain structure, and relate structure to behavior for better engagement.",
        transcript: " The bottom, the yellow, is the temporal lobe.",
      },
      "86.36-97.2": {
        feedback:
          "Emphasize distinct functions of each brain structure, and relate structure to behavior for better engagement.",
        transcript:
          " For the cortexes, the cortex in the frontal lobe is the motor cortex, and that sits at",
      },
      "97.2-101.52": {
        feedback:
          "Provide additional details on brain cortexes, clearly label and point out each section on the model, and connect location to function for a comprehensive understanding.",
        transcript: " the end of the frontal lobe.",
      },
      "101.52-109.12": {
        feedback:
          "Provide additional details on brain cortexes, clearly label and point out each section on the model, and connect location to function for a comprehensive understanding.",
        transcript:
          " At the front of the parietal lobe sits the sensory cortex, and these two cortexes border",
      },
      "109.12-112.56": {
        feedback:
          "Provide additional details on brain cortexes, clearly label and point out each section on the model, and connect location to function for a comprehensive understanding.",
        transcript: " each other.",
      },
      "112.56-122.28": {
        feedback:
          "Provide additional details on brain cortexes, clearly label and point out each section on the model, and connect location to function for a comprehensive understanding.",
        transcript:
          " Lastly we have the cerebellum, which is under all the lobes and sits behind the brain stem.",
      },
    },
    summary:
      "\nContent:\nYour presentation provided a foundational overview of the brain's anatomy. However, there's room to enhance the accuracy and originality of the facts presented, particularly in the visual aids. It would be beneficial to delve deeper into the specific functions of the brain components to strengthen the persuasiveness of your presentation. Additionally, ensuring that the hippocampus and amygdala locations are correctly depicted in your visual aids is crucial for clarity.\n\nReasoning:\nWhile you outlined the basic structure of the brain, further clarity and memorability could be achieved by emphasizing the distinct functions of each brain structure and relating these structures to behavior. This would not only make the key points more memorable but also provide a critical evaluation of the evidence.\n\nOrganization:\nThe organization of your presentation was generally orderly, but there is an opportunity to enhance the purposefulness by clearly identifying and highlighting each part of the brain when mentioned. This would improve the smoothness of flow and help the audience follow along more easily.\n\nStyle:\nTo hold the audience's attention more effectively, consider incorporating engaging questions or facts throughout the presentation. Facilitating discussion by posing questions to the audience can also increase engagement. Responsiveness to the audience's questions was good, but adding spontaneity by sparing the use of notes could further improve your delivery.\n\nMechanics:\nYour eye contact and use of visual aids were adequate, but there's room for improvement in fluency. Try to avoid filler words such as \"uh,\" \"um,\" and \"like,\" which were noticeable during your talk. These can distract from the content and disrupt the flow of your presentation. Additionally, more expressive hand and arm gestures could be used to emphasize points without fidgeting.\n\nExtra Feedback:\nFor a more comprehensive understanding, provide additional details on the brain cortexes. Clearly label and point out each section on the model, and connect the location to its function. This will help the audience grasp the complexity of the brain's anatomy and its relevance to human behavior.\n\nOverall, with a few adjustments to the accuracy of visual aids, a deeper exploration of the brain's functions, and a reduction in the use of filler words, your presentation will be more impactful and engaging.",
    score: {
      Content: 70,
      Reasoning: 75,
      Organization: 80,
      Style: 65,
      Mechanics: 60,
      filler_words_count: 31,
      filler_words_ratio: 0.13304721030042918,
    },
  };

  const timestamps = data.timestamps;
  const [currKey, setCurrKey] = useState(Object.keys(timestamps)[0]);
  const videoRef = useRef(null);

  const feedbackSet = new Set();
  for (const key in data.timestamps) {
    const feedback = data.timestamps[key].feedback;

    feedbackSet.add(feedback);
  }
  const feedbackList = Array.from(feedbackSet);
  console.log(feedbackList);
  // Somewhere else, even another file
  const scrollTo = (element) =>
    scroller.scrollTo(element, {
      duration: 750,
      delay: 100,
      smooth: true,
      containerId: "feedbackContainer",
      // offset: 50, // Scrolls to element + 50 pixels down the page
      // ... other options
    });

  // const scrollTo = () => {
  //   scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
  // };

  const spanRef = Object.keys(timestamps).map(() => useRef(null));

  const scrollSpan = (index) => {
    console.log(index);
    if (spanRef[index]) {
      spanRef[index].current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const transcriptList = [];
  for (const key in data.timestamps) {
    transcriptList.push(data.timestamps[key].transcript);
  }

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
      console.log(x[0]);
      if (timestamps[x[0]]) {
        const index = transcriptList.indexOf(timestamps[x[0]].transcript);
        scrollSpan(index);
      }
      // scrollSpan
      // scrollToHighlightedElement(x[0].);
    }
  };

  const scrollToHighlightedElement = (key) => {
    const element = document.getElementById(`timestamp-${key}`);
    if (element) {
      element.scrollIntoView(top);
      if (timestamps[x[0]]) {
        console.log(feedbackList.indexOf(timestamps[x[0]].feedback));
        scrollTo(`feedback_${feedbackList.indexOf(timestamps[x[0]].feedback)}`);
      }
    }
  };

  // const transcriptMap = {};
  // for (const [time, text_data] of Object.entries(timestamps)) {
  //   const nums = time.split("-");
  //   const x = parseFloat(nums[0]);
  //   const y = parseFloat(nums[1]);
  //   const feedback = text_data.feedback;
  //   const prevVal = transcriptMap[feedback];
  //   if (!prevVal) {
  //     transcriptMap[feedback] = {time: [x, y]};
  //   } else {
  //     transcriptMap[feedback].time[0] = Math.min(prevVal.time[0], x);
  //     transcriptMap[feedback].time[1] = Math.max(prevVal.time[1], y);
  //   }
  // }

  // console.log(transcriptMap)

  return (
    // <<<<<<< HEAD
    <div className="mt-10 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 p-4 mx-auto text-center">
        <div className="mockup-browser border bg-slate-300 col-span-2">
          <div className="mockup-browser-toolbar">
            <div className="input">My Video</div>
          </div>
          <video
            ref={videoRef}
            onTimeUpdate={handleTimeChange}
            controls
            className="mt-4"
          >
            <source src={url} />
          </video>
          <div className="overflow-y-auto h-[100px] my-7 px-8 rounded-md">
            {Object.keys(timestamps).map((key) => {
              return (
                <span
                  key={key}
                  ref={
                    spanRef[transcriptList.indexOf(timestamps[key].transcript)]
                  }
                  id={`timestamp-${key}`}
                  className={`${currKey == key ? "bg-yellow-200" : null}`}
                  onClick={() => scrollToHighlightedElement(key)}
                >
                  {timestamps[key].transcript}
                </span>
              );
            })}
          </div>
        </div>
        {/* <ScrollableComponent items={feedbackList} refs={refs} /> */}
        {/* <div> */}
        <div
          className="ml-4 w-11/12 px-4 py-4 text-left bg-slate-300 text-slate-700 rounded-lg h-fit"
          style={{ alignSelf: "center" }}
        >
          <ScrollableComponent
            data={feedbackList.map((e) => (
              <div
                className={` mb-6${
                  currKey && timestamps[currKey].feedback === e
                    ? "text-slate-950 font-bold"
                    : "text-slate-700"
                }`}
              >
                {e}
              </div>
            ))}
            containerId={"feedbackContainer"}
          />
        </div>
        {/* </div> */}
        {/* <button onClick={() => scrollTo('paragraph2')}>Go to Paragraph 2</button>
// =======
//     <div className="mt-10 flex flex-col items-center ">
//     <div className="grid grid-cols-1 md:grid-cols-3 w-4/5 p-4 mx-auto text-center">

//     <div className="mockup-browser border bg-slate-300 col-span-2">
//       <div className="mockup-browser-toolbar">
//         <div className="input">My Video</div>
//       </div>
//       <video
//         ref={videoRef}
//         onTimeUpdate={handleTimeChange}
//         controls
//         className="my-4"
//       >
//         <source src={url} />
//       </video>
//       <div className="overflow-y-auto h-[100px] my-7 px-8 rounded-md">
//         {Object.keys(timestamps).map((key) => {
//           return (
//             <span
//               key={key}
//               ref={spanRef[transcriptList.indexOf(timestamps[key].transcript)]}
//               id={`timestamp-${key}`}
//               className={`${currKey == key ? "bg-yellow-200" : null}`}
//               onClick={() => scrollToHighlightedElement(key)}
//             >
              
//               {timestamps[key].transcript}
//             </span>
//           );
//         })}
//       </div>
//     </div>
// >>>>>>> 9b1691818b70c2e7ff98ba966098d74f0faf457e

//     <div>
//     <div class="w-3/4 ml-7">

// <<<<<<< HEAD
        {/* <div> */}
        {/* <div class="h-96 w-3/4 carousel carousel-vertical rounded-box mb-7 bg-slate-50">
      {feedbackList.map((item, index) => (
          <div className="carousel-item h-full px-4 py-4"
            key={index} 
            tabIndex="0" 
            ref={feedbackRefs.current[index]}
          >
            {item}
          </div>
        ))} */}

        {/* <div className="carousel-item h-full px-4 py-4">
        <div>{currKey && timestamps[currKey].feedback}</div>
      </div> */}
        {/* </div> */}
      </div>
      <div class="w-11/12 bg-slate-100 p-4 border-4 border-slate-400 rounded-md mb-4 indicator">
        <span className="indicator-item badge badge-accent">Summary</span>
        <div>
          <p className="font-semibold">Summary stuff blegh</p>
        </div>
      </div>
    </div>
    // </div>
    // =======
    //     <ScrollableComponent data={feedbackList} containerId={"feedbackContainer"}/>

    //     <div className="truncate px-8 rounded-md font-light">
    //         {Object.keys(timestamps).map((key) => {
    //           return (
    //             <span
    //               key={key}
    //               className={`${currKey == key ? "font-semibold" : null} `}

    //             >
    //               {currKey && timestamps[key].feedback}
    //             </span>
    //           );
    //         })}
    //       </div>

    //     </div>

    //     </div>
    //     </div>

    //     <div class="w-3/4 bg-white mb-7 px-7 py-7">
    //       <p className="font-semibold">Summary stuff blegh</p>
    //     </div>

    //     </div>
    // >>>>>>> 9b1691818b70c2e7ff98ba966098d74f0faf457e
  );
}
