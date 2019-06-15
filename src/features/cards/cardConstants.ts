import { CardState } from "@/features/cards";
const namespace = "cards" as const;

const retrieveFromCache = () => {
  try {
    const cards = JSON.parse(localStorage.getItem("cards") || "");

    if ((cards as CardState).cards.length) {
      return cards;
    }
  } catch (e) {
    return null;
  }
  return null;
};

const cardConstants = {
  namespace,
  defaultState: retrieveFromCache() || {
    cards: [
      {
        title: "Col A",
        column: 0,
        cards: [{ title: "abc" }, { title: "def" }],
        color: "#8E6E95"
      },
      {
        title: "Col B",
        column: 1,
        cards: [{ title: "abc" }, { title: "def" }],
        color: "#39A59C"
      },
      {
        title: "Col C",
        column: 2,
        cards: [{ title: "abc" }, { title: "def" }],
        color: "#344759"
      },
      {
        title: "Col D",
        column: 3,
        cards: [{ title: "abc" }, { title: "def" }],
        color: "#E8741E"
      }
    ]
  }
};

export default cardConstants;
