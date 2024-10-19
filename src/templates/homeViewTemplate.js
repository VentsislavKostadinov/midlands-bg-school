import { html } from "../lib.js";
export const homeViewTemplate = () => html`
  <section class="parallax" id="parallax">
    <div class="parallax-container" id="parallax-container">
      <div class="parallax-overlay" id="parallaxOverlay">
        <div id="parallaxOverlayTitle" class="parallax-overlay-title">
          <h2>Добре дошли в Първокласно българско училище!</h2>
        </div>

        <img
          src="https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729017441/First-Class-Bg-School/home/parallax/bulgaria-map_xe5opl.png"
          id="map"
          alt="Bulgarian Map"
        />
        <a
          href="https://www.wikipedia.org/"
          target="_blank"
          class="historical-figure first-row-left"
          position="left"
          current-row="first"
        >
          <div class="historical-figure-img">
            <img
              src="https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729016464/First-Class-Bg-School/home/historical-figures/hristo-botev_jjpusp.png"
              alt="Hristo-Botev"
            />
          </div>
          <div class="historical-figure-data">
            <h1 class="name">Hristo Botev</h1>
          </div>
        </a>
        <a
          href="https://www.wikipedia.org/"
          target="_blank"
          class="historical-figure first-row-right"
          position="right"
          current-row="first"
        >
          <div class="historical-figure-img">
            <img
              src="https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729016465/First-Class-Bg-School/home/historical-figures/ivan-vazov_enfclf.png"
              alt="Ivan Vazov"
            />
          </div>
          <div class="historical-figure-data">
            <h1 class="name">Ivan Vazov</h1>
          </div>
        </a>
        <a
          href="https://www.wikipedia.org/"
          target="_blank"
          class="historical-figure second-row-left"
          position="left"
          current-row="second"
        >
          <div class="historical-figure-img">
            <img
              src="https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729016464/First-Class-Bg-School/home/historical-figures/sophronius-of-vrachan_d53h5z.png"
              alt="Sophronius of Vrachan"
            />
          </div>
          <div class="historical-figure-data">
            <h1 class="name">Sophronius of Vrachan</h1>
          </div>
        </a>
        <a
          href="https://www.wikipedia.org/"
          target="_blank"
          class="historical-figure second-row-right"
          position="right"
          current-row="second"
        >
          <div class="historical-figure-img">
            <img
              src="https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729016464/First-Class-Bg-School/home/historical-figures/paisius-of-hilendar_uonbhb.png"
              alt="Paisius of Hilendar"
            />
          </div>
          <div class="historical-figure-data">
            <h1 class="name">Paisius of Hilendar</h1>
          </div>
        </a>
        <a
          href="https://www.wikipedia.org/"
          class="historical-figure third-row-center"
          position="center"
          current-row="third"
          target="_blank"
        >
          <div class="historical-figure-img">
            <img
              src="https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729016464/First-Class-Bg-School/home/historical-figures/saint-john-of-rila_d8tprr.png"
              alt="Saint John of Rila"
            />
          </div>
          <div class="historical-figure-data">
            <h1 class="name">Saint John of Rila</h1>
          </div>
        </a>
        <svg class="arrows" id="scroll-down">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>
    </div>
    <img
      id="cloud1"
      class="parallax-landscape"
      src="https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729017441/First-Class-Bg-School/home/parallax/cloud1_ailm0w.png"
      alt="Cloud"
    />
    <img
      id="sun"
      class="parallax-landscape"
      src="https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729017440/First-Class-Bg-School/home/parallax/sun_ucdabw.png"
      alt="Sun"
    />
    <img
      id="cloud2"
      class="parallax-landscape"
      src="https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729017442/First-Class-Bg-School/home/parallax/cloud2_j7l3xo.png"
      alt="Cloud"
    />
    <img
      class="parallax-landscape"
      id="mountain-left"
      src="https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729017439/First-Class-Bg-School/home/parallax/mountain-left_k5ojug.png"
      alt="Mountain"
    />
    <img
      class="parallax-landscape"
      id="mountain-center"
      src="https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729017439/First-Class-Bg-School/home/parallax/mountain-center_y85yqh.png"
      alt="Mountain"
    />
    <img
      class="parallax-landscape"
      id="mountain-right"
      src="https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729017440/First-Class-Bg-School/home/parallax/mountain-right_jitdv1.png"
      alt="Mountain"
    />
    <img
      class="parallax-landscape"
      id="landscape"
      src="https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729017443/First-Class-Bg-School/home/parallax/landscape_gvzrxz.png"
      alt="Landscape"
    />
    <img
      class="parallax-landscape"
      id="trees"
      src="https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729017440/First-Class-Bg-School/home/parallax/trees-dark_p2polw.png"
      alt="Dark Trees"
    />
  </section>
`;
