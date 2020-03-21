export default {
  characters: [
    {
      name: "man",
      link: require("../assets/characters/man.png"),
    },
    {
      name: "woman",
      link: require("../assets/characters/woman.png"),
    },
  ],
  background: [
    {
      place: "school",
      link: require("../assets/backgrounds/school.jpg"),
    },
    {
      place: "stars",
      link: require("../assets/backgrounds/stars.jpg"),
    },
    {
      place: "class",
      link: require("../assets/backgrounds/class.jpg"),
    },
  ],
  scenes: [
    {
      text: "здрасьте, я пришла устраиваться на работу",
      speechBubble: "left",
      character: "left",
      background: "school",
      id: 1,
      goto: 2,
    },
    {
      text: "здратути",
      speechBubble: "right",
      character: "both",
      name: "man",
      background: "school",
      id: 2,
      goto: 3,
    },
    {
      text: "мне сесть на стул?",
      speechBubble: "left",
      character: "left",
      background: "school",
      id: 3,
      buttons: [
        { text: "да", goto: 4, price: 1 },
        { text: "нет", goto: 5, point: 1 },
        { text: "не знаю", goto: 5, price: 3 },
      ],
    },
    {
      text: "отлично, давайте начнём",
      speechBubble: "right",
      character: "both",
      name: "man",
      background: "school",
      id: 4,
      goto: 4,
    },
    {
      text: "присаживайтесь",
      speechBubble: "right",
      character: "both",
      name: "man",
      background: "school",
      id: 5,
      goto: 5,
    },
  ],
};
