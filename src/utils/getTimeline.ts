
import gsap from "gsap";

export const getTimeline = (textRef: any) => gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "-60% top",
        end: "30% top",
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