import image from "../assets/face.jpg";

export default function About() {
  return (
    <div className="relative flex flex-col justify-evenly">
      <p className="text-6xl py-28">Hi. I'm Aaditya.</p>
      <div className="flex flex-col sm:flex-row justify-center items-center max-w-6xl space-x-12 space-y-12 relative">
        <div>
          <img
            src={image}
            className="rounded-tr-full rounded-tl-full h-80 w-80 bg-gray-800 mx-auto relative"
            style={{ objectFit: "cover" }}
            alt="Profile"
          />
          <div className="h-16 w-80 bg-gray-800">
            <h2>Spotify</h2>
          </div>
        </div>

        <a
          href="https://drive.google.com/file/d/13FZ2AhpcEYOiuro7kG0m8QuWBtMXQncl/view?usp=sharing"
          className="absolute -top-8 -left-6 h-16 w-16 flex items-center justify-center rounded-full bg-red-900 text-white text-sm transition duration-300 hover:bg-red-400"
        >
          Resume
        </a>
        <div className="sm:w-full max-w-[45em] mx-auto space-y-10 text-left">
          <p className="text-3xl sm:text-5xl">
            I’m an aspiring full stack software engineer from Seattle, WA
          </p>
          <p>
            I’m a Computer Science student at Purdue University, concentrating
            in the Machine Intelligence track.
          </p>
        </div>
      </div>
      <div className="rounded-full m-36">
        <a href="https://www.linkedin.com/in/aadityadoiphode/">LinkedIn</a>
      </div>
    </div>
  );
}
