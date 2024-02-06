
import gsap from "gsap";

export const getTimeline = (textRef: any, start: string = "-60% top", end: string = "30% top") => gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current || textRef,
        start,
        end,
        scrub: 1,
        // markers: {
        //   startColor: "black",
        //   endColor: "red",
        //   fontSize: "24px",
        //   indent: 2,
        // },
        toggleActions: "play pause reverse pause",
        onEnter: function () {
          // console.log("Play Animation");
        },
        onLeaveBack: function () {
          // console.log("Pause Animation");
        },
      },
    });