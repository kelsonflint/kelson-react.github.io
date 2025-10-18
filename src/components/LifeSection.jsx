import React from "react";
import styles from "../style/Life.module.css";
import "animate.css"; // still works fine with CSS modules

const hobbies = [
  {
    title: "Guitar & Music",
    desc: "I love experimenting with tone, recording, and mixing. Check out my setup and favorite riffs.",
    link: "/blog/music-journey",
    emoji: "🎸",
  },
  {
    title: "Travel & Photography",
    desc: "Capturing the world one frame at a time — from mountain trails to city skylines.",
    link: "/blog/travel",
    emoji: "📸",
  },
  {
    title: "Cooking Experiments",
    desc: "I make everything from burgers to sourdough boules. My kitchen is my lab.",
    link: "/blog/cooking",
    emoji: "🍳",
  },
  {
    title: "Books",
    desc: "A curated list of books that shaped my perspective.",
    link: "/blog/books",
    emoji: "📚",
  },
  {
    title: "Movies",
    desc: "My all time favorite films.",
    link: "/blog/movies",
    emoji: "📽️",
  },
  {
    title: "Anime",
    desc: "I don't know many, but here are the anime that I have enjoyed.",
    link: "/blog/anime",
    emoji: "🍜",
  },
];

const LifeAndHobbies = () => {
  return (
    <section id="life" className={styles.lifeSection}>
      <h2 className={`${styles.lifeSectionTitle} wow fadeInUp`}>My Life & Hobbies</h2>
      <div className={styles.hobbyGrid}>
        {hobbies.map((hobby, index) => (
          <div key={index} className={`${styles.hobbyCard} wow fadeInUp`}>
            <div className={styles.emoji}>{hobby.emoji}</div>
            <h3 className={styles.hobbyTitle}>{hobby.title}</h3>
            <p className={styles.hobbyDesc}>{hobby.desc}</p>
            <a href={hobby.link} className={styles.hobbyLink}>
              Explore →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LifeAndHobbies;
