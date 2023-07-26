import Head from "next/head";
import { MainLanding } from "../Components/MainLanding/MainLanding.jsx";
import { About } from "../Components/About/About.jsx";
import { Services } from "../Components/Services/Services.jsx";
import { Projects } from "../Components/Projects/Projects.jsx";
import { Map } from "../Components/Map/Map.jsx";
import { VideoBanner } from "../Components/VideoBanner/VideoBanner.jsx";

export default function Home() {
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
      <Projects />
      <VideoBanner />
      <Map />
    </>
  );
}
