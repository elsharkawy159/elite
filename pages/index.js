import Head from "next/head";
import { MainLanding } from "../Components/MainLanding/MainLanding.jsx";
import { About } from "../Components/About/About.jsx";
import { Services } from "../Components/Services/Services.jsx";
import { Projects } from "../Components/Projects/Projects.jsx";
import { Map } from "../Components/Map/Map.jsx";
import { VideoBanner } from "../Components/VideoBanner/VideoBanner.jsx";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.addEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault();
      },
      false
    );
    document.addEventListener(
      "keydown",
      function (e) {
        //document.onkeydown = function(e) {
        // "I" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
          disabledEvent(e);
        }
        // "J" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
          disabledEvent(e);
        }
        // "S" key + macOS
        if (
          e.keyCode == 83 &&
          (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
        ) {
          disabledEvent(e);
        }
        // "U" key
        if (e.ctrlKey && e.keyCode == 85) {
          disabledEvent(e);
        }
        // "F12" key
        if (event.keyCode == 123) {
          disabledEvent(e);
        }
      },
      false
    );
    function disabledEvent(e) {
      if (e.stopPropagation) {
        e.stopPropagation();
      } else if (window.event) {
        window.event.cancelBubble = true;
      }
      e.preventDefault();
      return false;
    }

    // Disable dragging on the photos
    document.querySelectorAll(".image").forEach((img) => {
      img.addEventListener("dragstart", (e) => {
        e.preventDefault();
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>Golden Elite</title>
        <meta
          name="description"
          content="Our website is a platform where you can freely share your favorite quotes and discover new ones from other users. Whether it's a thought-provoking line from a book or a motivational quote from a famous personality, you can easily add it to our collection for everyone to see"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/final-logo.png" />
      </Head>
      <MainLanding />
      <About />
      <Services />
      <VideoBanner />
      <Projects />
      <Map />
    </>
  );
}
