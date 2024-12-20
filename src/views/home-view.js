import { html } from "../lib.js";
import { fetchLocale } from "../i18n/fetch-locale.js";
import { availableLocales } from "../utils/i18n-util.js";
import { getHistoricalFiguresData } from "../services/historical-figures-service.js";
import { homeViewTemplate } from "../templates/home-view-template.js";
import { homeViewParallaxSectionTemplate } from "../templates/home-view-parallax-section-template.js";
import { homeViewHistoricalFigureCardTemplate } from "../templates/home-view-historical-figure-card-template.js";
// {
//     results: [
//         {
//             objectId: "1",
//             name_en: "Hristo Botev1",
//             name_bg: "Христо Ботев1",
//             hrefInfo: "https://www.wikipedia.org/",
//             hrefImg:
//                 "https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729016464/First-Class-Bg-School/home/historical-figures/hristo-botev_jjpusp.png",
//         },
//         {
//             objectId: "2",
//             name_en: "Hristo Botev2",
//             name_bg: "Христо Ботев2",
//             hrefInfo: "https://www.wikipedia.org/",
//             hrefImg:
//                 "https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729016464/First-Class-Bg-School/home/historical-figures/hristo-botev_jjpusp.png",
//         },
//         {
//             objectId: "3",
//             name_en: "Hristo Botev3",
//             name_bg: "Христо Ботев3",
//             hrefInfo: "https://www.wikipedia.org/",
//             hrefImg:
//                 "https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729016464/First-Class-Bg-School/home/historical-figures/hristo-botev_jjpusp.png",
//         },
//         {
//             objectId: "4",
//             name_en: "Hristo Botev4",
//             name_bg: "Христо Ботев4",
//             hrefInfo: "https://www.wikipedia.org/",
//             hrefImg:
//                 "https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729016464/First-Class-Bg-School/home/historical-figures/hristo-botev_jjpusp.png",
//         },
//         {
//             objectId: "5",
//             name_en: "Hristo Botev5",
//             name_bg: "Христо Ботев5",
//             hrefInfo: "https://www.wikipedia.org/",
//             hrefImg:
//                 "https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729016464/First-Class-Bg-School/home/historical-figures/hristo-botev_jjpusp.png",
//         },
//         {
//             objectId: "6",
//             name_en: "Hristo Botev6",
//             name_bg: "Христо Ботев6",
//             hrefInfo: "https://www.wikipedia.org/",
//             hrefImg:
//                 "https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729016464/First-Class-Bg-School/home/historical-figures/hristo-botev_jjpusp.png",
//         },
//         {
//             objectId: "7",
//             name_en: "Hristo Botev7",
//             name_bg: "Христо Ботев7",
//             hrefInfo: "https://www.wikipedia.org/",
//             hrefImg:
//                 "https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729016464/First-Class-Bg-School/home/historical-figures/hristo-botev_jjpusp.png",
//         },
//         {
//             objectId: "8",
//             name_en: "Hristo Botev8",
//             name_bg: "Христо Ботев8",
//             hrefInfo: "https://www.wikipedia.org/",
//             hrefImg:
//                 "https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729016464/First-Class-Bg-School/home/historical-figures/hristo-botev_jjpusp.png",
//         },
//         {
//             objectId: "9",
//             name_en: "Hristo Botev9",
//             name_bg: "Христо Ботев9",
//             hrefInfo: "https://www.wikipedia.org/",
//             hrefImg:
//                 "https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729016464/First-Class-Bg-School/home/historical-figures/hristo-botev_jjpusp.png",
//         },
//         {
//             objectId: "10",
//             name_en: "Hristo Botev10",
//             name_bg: "Христо Ботев10",
//             hrefInfo: "https://www.wikipedia.org/",
//             hrefImg:
//                 "https://res.cloudinary.com/dmm0gmxdr/image/upload/v1729016464/First-Class-Bg-School/home/historical-figures/hristo-botev_jjpusp.png",
//         },
//     ],
// };
const targetElement = document.querySelector("html");
const initParallax = async () => {
  // Parallax Script
  const parallaxOverlay = document.getElementById("parallaxOverlay");
  const parallaxBackground = document.getElementById("parallax");
  const scrollDownSign = document.getElementById("scroll-down");
  const parallaxOverlayTitle = document.getElementById("parallaxOverlayTitle");
  const map = document.getElementById("map");
  const sun = document.getElementById("sun");
  const cloud1 = document.getElementById("cloud1");
  const cloud2 = document.getElementById("cloud2");
  const parallaxThemesData = await fetchLocale("parallax-themes-data");
  const setParallaxImgLinks = () => {
    const currentTheme = targetElement.getAttribute("theme");
    if (currentTheme) {
      const elements = document.querySelectorAll("[dynamic-img]");
      elements.forEach(
        (el) => (el.src = parallaxThemesData[currentTheme][el.id]),
      );
    }
  };
  setParallaxImgLinks();
  const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.attributeName === "theme") {
        setParallaxImgLinks();
      }
    }
  });
  observer.observe(targetElement, {
    attributes: true,
    attributeFilter: ["theme"],
  });
  const mountainRight = document.getElementById("mountain-right");
  const mountainLeft = document.getElementById("mountain-left");
  const mountainCenter = document.getElementById("mountain-center");
  const landscape = document.getElementById("landscape");
  let hideScrollSign = false;
  const speed = {
    first: 0.8,
    second: 1.2,
    third: 1.4,
  };
  const historicalFiguresElements = Array.from(
    parallaxOverlay.getElementsByClassName("historical-figure"),
  );
  const historicalFiguresMapper = historicalFiguresElements.map((el) => ({
    el: el,
    elStartingOffsetTop: el.offsetTop,
    elStartingOffsetLeft: el.offsetLeft,
    elStartingOffsetWidth: el.offsetWidth,
    elPerantWidth: parallaxOverlay.offsetWidth,
    side: el.getAttribute("side"),
    row: el.getAttribute("row"),
  }));
  const currentBottomSun =
    parallaxBackground.offsetHeight - sun.offsetTop - sun.offsetHeight;
  const currentLefCloud1 = cloud1.offsetLeft;
  const currentLeftCloud2 = cloud2.offsetLeft;
  const currentBottomMap =
    parallaxOverlay.offsetHeight - map.offsetTop - map.offsetHeight;
  window.addEventListener("scroll", () => {
    let value = window.scrollY;
    hideScrollSign = value > 0 ? true : false;
    if (hideScrollSign) {
      scrollDownSign.style.display = "none";
      parallaxOverlayTitle.style.opacity = "0";
    } else {
      scrollDownSign.style.display = "block";
      parallaxOverlayTitle.style.opacity = "1";
    }
    sun.style.bottom = (value * 0.1 + currentBottomSun).toString() + "px";
    cloud1.style.left = (-value * 0.5 + currentLefCloud1).toString() + "px";
    cloud2.style.left = (value * 0.5 + currentLeftCloud2).toString() + "px";
    mountainRight.style.left = (value * 0.05).toString() + "px";
    mountainRight.style.bottom = (-value * 0.2).toString() + "px";
    mountainLeft.style.left = (-value * 0.04).toString() + "px";
    mountainLeft.style.bottom = (-value * 0.28).toString() + "px";
    mountainCenter.style.bottom = (-value * 0.25).toString() + "px";
    landscape.style.bottom = (-value * 0.2).toString() + "px";
    map.style.bottom = (value * 0.5 + currentBottomMap).toString() + "px";
    for (const historicalFigure of historicalFiguresMapper) {
      const currentSpeed = speed[historicalFigure.row];
      if (historicalFigure.side === "left") {
        historicalFigure.el.style.top =
          (
            -value * currentSpeed +
            historicalFigure.elStartingOffsetTop
          ).toString() + "px";
        historicalFigure.el.style.left =
          (
            -value * currentSpeed +
            historicalFigure.elStartingOffsetLeft
          ).toString() + "px";
      } else if (historicalFigure.side === "right") {
        const elStartingOffsetRight =
          historicalFigure.elPerantWidth -
          historicalFigure.elStartingOffsetLeft -
          historicalFigure.elStartingOffsetWidth;
        historicalFigure.el.style.top =
          (
            -value * currentSpeed +
            historicalFigure.elStartingOffsetTop
          ).toString() + "px";
        historicalFigure.el.style.right =
          (-value * currentSpeed + elStartingOffsetRight).toString() + "px";
      } else {
        historicalFigure.el.style.top =
          (
            -value * currentSpeed +
            historicalFigure.elStartingOffsetTop
          ).toString() + "px";
      }
    }
  });
  // End Parallax Script
};
const loadHomeViewParallaxSection = (ctx, historicalFiguresData) => {
  const currentLang = targetElement.getAttribute("lang");
  const data = historicalFiguresData.results;
  const totalHistoricalFigures = 5;
  let currentTemplate = null;
  if (data.length < totalHistoricalFigures) {
    currentTemplate = html`<p>No Historical Figures Data!</p>`;
  } else {
    const shuffled = data.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const historicalFiguresData = shuffled.slice(0, totalHistoricalFigures);
    const historicalFiguresPositions = [
      { side: "left", row: "first" },
      { side: "right", row: "first" },
      { side: "left", row: "second" },
      { side: "right", row: "second" },
      { side: "center", row: "third" },
    ];
    for (const locale of availableLocales) {
      ctx.i18nText[locale]["home"]["parallax-historical-figures"] = {};
    }
    const cards = historicalFiguresData.map((historicalFigureData, index) => {
      for (const locale of availableLocales) {
        ctx.i18nText[locale]["home"]["parallax-historical-figures"][
          `parallax-historical-figure-${historicalFigureData.objectId}`
        ] = `${historicalFigureData[`name_${locale}`]}`;
      }
      historicalFigureData.side = historicalFiguresPositions[index].side;
      historicalFigureData.row = historicalFiguresPositions[index].row;
      return homeViewHistoricalFigureCardTemplate(
        historicalFigureData,
        currentLang,
      );
    });
    currentTemplate = html` ${cards} `;
  }
  return homeViewParallaxSectionTemplate(
    currentTemplate,
    ctx.i18nText,
    currentLang,
  );
};
export const homeView = async (ctx) => {
  const historicalFiguresData = await getHistoricalFiguresData();
  const homeViewParallaxSection = loadHomeViewParallaxSection(
    ctx,
    historicalFiguresData,
  );
  ctx.render(homeViewTemplate(homeViewParallaxSection));
  await initParallax();
  console.log(ctx.i18nText);
};
