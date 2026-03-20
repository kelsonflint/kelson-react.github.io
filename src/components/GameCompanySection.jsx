import React from "react";
import styles from "../style/GameCompany.module.css";
import "animate.css";

const games = [
  {
    title: "Toucan Party Pack",
    tagline: "The ultimate party games collection",
    desc: "Multiple game modes for every occasion: drinking games, charades, deep discussions, and intimate conversations. Perfect for game nights and getting closer with friends.",
    link: "https://diamonddawg.games",
    image: "/toucan_icon.png",
    featured: true,
    appStoreLink: "https://apps.apple.com/us/app/toucan-party-pack/id6759410375",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.kelson.toucan&pcampaignid=web_share",
  },
  {
    title: "Arrowfall: The Fractured Lands",
    tagline: "A narrative tower defense adventure",
    desc: "Reclaim the realm across four unique biomes. Strategic gameplay meets immersive storytelling in this browser-based tower defense game.",
    link: "https://diamonddawg.games",
    image: "/arrowfall_icon.png",
    featured: true,
    appStoreLink: "#", // Not yet available on iOS
    playStoreLink: "https://play.google.com/store/apps/details?id=com.kelson.towers&pcampaignid=web_share",
  },
];

const GameCompanySection = () => {
  return (
    <section id="games" className={styles.gameSection}>
      <div className={styles.gameContainer}>
        <div className={styles.gamesGrid}>
          {games.map((game, index) => (
            <div
              key={index}
              className={`${styles.gameCard} wow fadeInUp`}
              data-wow-delay={`${index * 0.2}s`}
            >
              {game.image ? (
                <img
                  src={game.image}
                  alt={game.title}
                  className={styles.gameImage}
                />
              ) : (
                <div className={styles.gameEmoji}>{game.emoji}</div>
              )}
              <h3 className={styles.gameTitle}>{game.title}</h3>
              <p className={styles.gameTagline}>{game.tagline}</p>
              <p className={styles.gameDesc}>{game.desc}</p>

              <div className={styles.appStoreBadges}>
                <a
                  href={game.appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.storeBadge}
                  onClick={(e) => {
                    if (game.appStoreLink === "#") {
                      e.preventDefault();
                    }
                  }}
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className={styles.badgeImage}
                  />
                </a>
                <a
                  href={game.playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.storeBadge}
                  onClick={(e) => {
                    if (game.playStoreLink === "#") {
                      e.preventDefault();
                    }
                  }}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className={styles.badgeImage}
                  />
                </a>
              </div>

              <a
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.learnMore}
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        <div className={`${styles.companyHeader} wow fadeInUp`}>
          <h2 className={styles.companyTitle}>Diamond Dawg Games</h2>
          <p className={styles.companyTagline}>
            Indie games that bring people together
          </p>
          <div className={styles.logoContainer}>
            <img
              src="/DDSC_Icon1.svg"
              alt="Diamond Dawg Games Logo"
              className={`${styles.companyLogo} ${styles.logoLeft}`}
            />
            <img
              src="/DDSC_Icon1.svg"
              alt="Diamond Dawg Games Logo"
              className={`${styles.companyLogo} ${styles.logoRight}`}
            />
          </div>
          <a
            href="https://diamonddawg.games"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitLink}
          >
            Visit diamonddawg.games →
          </a>
        </div>
      </div>
    </section>
  );
};

export default GameCompanySection;
