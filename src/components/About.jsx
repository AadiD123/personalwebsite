import image from "../assets/face.jpg";
import spotify from "../assets/Spotify.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-10">
      <p className="text-8xl sm:text-9xl py-28 transition-all duration-1000">
        Hi. I'm Aaditya.
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center max-w-6xl lg:space-x-32 space-y-12 relative transition-all duration-1000">
        <div>
          <img
            src={image}
            className="rounded-tr-full rounded-tl-full h-80 w-80 bg-gray-800 mx-auto relative"
            style={{ objectFit: "cover" }}
            alt="Profile"
          />
          <a href="https://open.spotify.com/track/0ofHAoxe9vBkTCp2UQIavz">
            <div className="relative flex mx-auto my-auto h-16 w-80 bg-gray-800">
              <a
                href="https://drive.google.com/file/d/13FZ2AhpcEYOiuro7kG0m8QuWBtMXQncl/view?usp=sharing"
                className="absolute -top-72 -left-3 h-16 w-16 flex flex-col items-center justify-center rounded-full bg-red-900 text-white text-sm transition duration-300 hover:bg-red-400"
              >
                Resume
              </a>
              <img src={spotify} className="mx-auto my-auto w-10 h-10" />
              <div className="my-auto mx-auto text-left">
                <p>On Repeat:</p>
                <p>Dreams by Fleetwood Mac</p>
              </div>
            </div>
          </a>
        </div>

        <div className="sm:w-full max-w-[45em] mx-auto space-y-10 text-left">
          <p className="text-4xl sm:text-5xl">
            I’m an aspiring software engineer from Seattle, WA
          </p>
          <p className="text-2xl">
            Currently, I’m a Computer Science student at Purdue University,
            concentrating in the Machine Learning track. I had a passion for
            coding since middle school and constantly seek to learn new
            technologies and frameworks that will help me build better software.
            <br />
            <br />
            My hobbies: Soccer, Pickleball, Electric Guitar, and binging TV
            Shows
          </p>
        </div>
      </div>
      <div className="flex rounded-full m-28">
        <a href="https://www.linkedin.com/in/aadityadoiphode/">
          <LinkedInIcon style={{ fontSize: 48 }} />
        </a>
        <a href="https://github.com/AadiD123">
          <GitHubIcon style={{ fontSize: 48 }} />
        </a>
      </div>
    </div>
  );
}
