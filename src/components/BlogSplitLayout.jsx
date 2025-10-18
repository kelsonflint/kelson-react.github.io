import React from "react";
import styles from "../style/SplitBlogLayout.module.css";

const BlogSplitLayout = ({ title, emoji, rightComponent, items }) => {
  return (
    <div className={styles.splitContainer}>
      <aside className={styles.leftColumn}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            {emoji} {title}
          </h1>
        </header>

        <div className={styles.listContainer}>
          {items.map((item, i) => (
            <section key={i} className={styles.listItem}>
              <h2>{item.name}</h2>
              <p>{item.thoughts}</p>
            </section>
          ))}
        </div>
      </aside>

      <div className={styles.rightColumn}>
        {rightComponent}
      </div>
    </div>
  );
};

export default BlogSplitLayout;