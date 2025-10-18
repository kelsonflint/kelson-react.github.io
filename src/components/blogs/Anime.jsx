import BlogSplitLayout from "../BlogSplitLayout";
import gon from "../../img/gon.jpg";

const items = [
  {
    name: "Hunter x Hunter",
    thoughts: "Friendship and optimism. I enjoyed watching the development of the young characters and how they learned to use their powers. The Greed Island arc is the coolest premises for a show I've ever seen. ",
  },
  {
    name: "Demon Slayer",
    thoughts: "You get hooked. From the depth of the plot to the beauty of the sword animation, it's hard to stop watching. This is the only Anime I've ever gone to the theaters for.",
  },
  {
    name: "Attack on Titan",
    thoughts: "You just keep telling yourself, \"No way this can get any crazier right?\" and it does. My friend Janos put me on to this one, and we were able to catch up to watch the finale together. One of those special shows that I don't think I will ever be able to rewatch.",
  },
  {
    name: "Death Note",
    thoughts: "This was the first anime I ever watched through. Interesting circumstances befall the main character, and he is given a seeminly benign but unholy power. It's definitely worth a watch.",
  },
  {
    name: "Studio Ghibli Films",
    thoughts: "Grew up watching these movies without realizing they were anime. Porco Rosso, Princess Mononoke, Spirited Away are my top 3.",
  },
  {
    name: "One Punch Man",
    thoughts: "Apparently you really can train too hard. I love the premise, and the music. I prefer the Japanese version, though I am not fully caught up.",
  },
  {
    name: "Record of Ragnorok",
    thoughts: "Epic tournament between gods and men. I really like this one because of the historical and mythological elements presented through the characters and the battles.",
  },
  {
    name: "Vinland Saga",
    thoughts: "Saw this one on Netflix - very deep. Season 1 was epic. Season 2 slows down quite a bit. I'm still invested in the character. Looking forward to Season 3",
  },
  {
    name: "Gundam",
    thoughts: "I don't know too many from this genre, but I enjoyed watching the Evangelion movies. The animation from GQuuuuuuX is also pretty cool.",
  },
  {
    name: "Honorable Mentions",
    thoughts: "Initial D, Yugioh, Pokemon",
  },
];

export default function Anime() {
  return (
    <BlogSplitLayout
      title="Anime"
      emoji="🍜"
      rightComponent={<img src={gon}/>}
      items={items}
    />
  );
}
