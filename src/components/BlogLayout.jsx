import styles from "../style/BlogLayout.module.css";

const BlogLayout = ({ title, emoji, children }) => {
  return (
    <div className={styles.blogContainer}>
      <header className={styles.blogHeader}>
        <h1 className={styles.blogTitle}>
          {emoji} {title}
        </h1>
      </header>
      <main className={styles.blogContent}>{children}</main>
    </div>
  );
};

export default BlogLayout;
