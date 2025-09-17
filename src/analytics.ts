import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-NJPM7NYNGZ");
};

export const logPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
