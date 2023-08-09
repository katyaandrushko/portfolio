import './intro.scss'

function Intro() {
  // const text = document.querySelector (".typewriter")
  // const textLoad = () => {
  //   setTimeout(() => {
  //     text.textContent = ' Frontend Developer';
  //   }, 0);
  //   setTimeout(() => {
  //     text.textContent = " Pasha LOX";
  //   }, 4200);
  // }
  // textLoad()

  return (
    <div className="intro" id="intro">
      <div className="lefti">
        <div className="imgContainer">
          <img src="assets/photo.png" alt="man" />
        </div>
      </div>
      <div className="righti">
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>Katya Andrushko</h1>
          <h3>
            Freelance
            <span className="typewriter"> Frontend Developer</span>
          </h3>

          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro
