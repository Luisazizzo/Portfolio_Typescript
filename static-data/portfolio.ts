import { PortfolioData } from "../types/portfolio";

export const portfolio: PortfolioData = {
  social: [
    {
      name: "github",
      url: "https://github.com/Luisazizzo",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/luisa-zizzo/",
    },
    {
      name: "calendly",
      url: "https://calendly.com/luisa-zizzo",
    },
  ],
  userInfo: {
    name: "LUISA ZIZZO",
    job: "FRONTEND DEVELOPER",
    info: "Energica, con diversi anni di esperienza nell'offerta di servizi di qualità e rapporti con il publico, pongo l'attenzione ai particolari. La mia esperienza nel management mi conferisce una propensione all'abilità di multitasking e di supervisione. Adoro lavorare in team e la mia solarità mi permette di instaurare facilmente rapporti con i colleghi.",
    image: "myPhoto/foto.jpg",
  },
  project: [
    {
      title: "Budz",
      image_big: "project/budz_desktop.png",
      image_small: "project/budz_mobile.png",
      description: "Catalogo musicale interattivo (Next Js)",
      links: [
        {
          name: "Repo",
          url: "https://github.com/Luisazizzo/Budz",
        },
        {
          name: "Demo",
          url: "https://budz.vercel.app/",
        },
      ],
    },
    {
      title: "Beauty And Gold",
      image_big: "project/whish_desktop.png",
      image_small: "project/whish_mobile.png",
      description: " E-commerce clone del sito Wish (Vanilla Js)",
      links: [
        {
          name: "Repo",
          url: "https://github.com/Luisazizzo/beautyAndGold",
        },
        {
          name: "Demo",
          url: "https://luisazizzo.github.io/beautyAndGold/",
        },
      ],
    },
    {
      title: "Twitter Clone",
      image_big: "project/twitter_desktop.png",
      image_small: "project/twitter_mobile.png",
      description: "Clone del famoso social network (React Js)",
      links: [
        {
          name: "Repo",
          url: "https://github.com/Luisazizzo/twitter-clone",
        },
        {
          name: "Demo",
          url: "https://twitter-clone-umber-ten.vercel.app/",
        },
      ],
    },
    {
      title: "Cocktails",
      image_big: "project/cocktails_desktop.png",
      image_small: "project/cocktails_mobile.png",
      description: "Achivio di cocktails (React Js)",
      links: [
        {
          name: "Repo",
          url: "https://github.com/Luisazizzo/cocktails",
        },
        {
          name: "Demo",
          url: "https://cocktails-eta.vercel.app/",
        },
      ],
    },
    {
      title: "Explorer",
      image_big: "project/explorer_desktop.png",
      image_small: "project/explorer_mobile.png",
      description: "Sito di attrazioni turistiche (React Js)",
      links: [
        {
          name: "Repo",
          url: "https://github.com/Luisazizzo/Explorer",
        },
        {
          name: "Demo",
          url: "https://explorer-eight-plum.vercel.app/",
        },
      ],
    },
  ],
  skills: [
    {
      title: "HTML",
      bg: "#e34f27",
      color: "#fff",
    },
    {
      title: "CSS/SASS",
      bg: "#cc6699",
      color: "#fff",
    },
    {
      title: "JAVASCRIPT",
      bg: "#f7e01d",
      color: "#333333",
    },
    {
      title: "TYPESCRIPT",
      bg: "#2e73bc",
      color: "#fff",
    },
    {
      title: "REACT JS",
      bg: "#61dafb",
      color: "#333333",
    },
    {
      title: "NEXT JS",
      bg: "#74cbc4",
      color: "#333333",
    },
    {
      title: "WORDPRESS",
      bg: "#216f93",
      color: "#fff",
    },
  ],
  works: [
    {
      job: "Frontend Developer",
      data: "Aprile 2023",
      description:
        "Realizzazione progetto fontend e coordinamento team di sviluppo.",
    },
    {
      job: "Baby Sitter",
      data: "Settembre 2020 - Giugno 2022",
      description:
        "Coordinamento di varie attività volte a favorire lo sviluppo fisico ed intellettuale del bambino. Sviluppo di giochi e attività manuali allo scopo di sostenere l'apprendimento e le abilità verbali.",
    },
    {
      job: "Responsabile di sala",
      data: "Febbraio 2018 - Settembre 2020",
      description:
        "Gestione ordini materiale consumo sala. Ispezione periodica attrezzature. Organizzazione e gestioni di eventi. Supervisione quotidiana dell'attività degli altri dipendenti.",
    },
    {
      job: "Cameriera",
      data: "Settembre 2016 - Gennaio 2018",
      description: "Accoglienza clienti. Servizio ai tavoli e al banco.",
    },
    {
      job: "Estetista Qualificata",
      data: "Luglio 2014 - Giugno 2016",
      description: "",
    },
  ],
};
