export const speak = (words: string[], ending: "." | "?" | "!") =>
  `${words.join(" ")}${ending}`;
