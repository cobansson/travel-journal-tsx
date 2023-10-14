import { Properties } from "./Interface";
import MountFuji from "../images/mount-fuji.png";
import SydneyOperaHouse from "../images/sydney-opera-house.png";
import Geirangerfjord from "../images/geirangerfjord.png";

export const locationData: Properties[] = [
  {
    key: 1,
    image: `${MountFuji}`,
    country: "JAPAN",
    location: "Mount Fuji",
    googleMapsLink: "https://maps.app.goo.gl/5yjiPxeBXEnGErFR6",
    startDate: "12 Jan, 2023",
    endDate: "24 Jan, 2023",
    content:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
  },
  {
    key: 2,
    image: `${SydneyOperaHouse}`,
    country: "AUSTRALIA",
    location: "Sydney Opera House",
    googleMapsLink: "https://maps.app.goo.gl/xrSMNBvJ8GUmgCEv6",
    startDate: "27 May, 2023",
    endDate: "8 Jun, 2023",
    content:
      "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
  },
  {
    key: 3,
    image: `${Geirangerfjord}`,
    country: "NORWAY",
    location: "Geirangerfjord",
    googleMapsLink: "https://maps.app.goo.gl/xPd22Ktcbkn2vgQg7",
    startDate: "01 Oct, 2023",
    endDate: "18 Nov, 2023",
    content:
      "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
  },
];
