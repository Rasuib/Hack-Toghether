import styles from "./Post.module.css";
function Post() {
  return (
    <div className={styles.container}>
      <div className={styles.firstRow}>
        <div className="profilePic">
          <img src="https://via.placeholder.com/150" alt="User" />
        </div>
        <div>
          <p className={styles.name}>Rikki Janae</p>
          <p>Wichita,Kansas</p>
        </div>
      </div>
      <div className={styles.secondRow}>
        <div>
          <img
            className={styles.postImage}
            src="https://via.placeholder.com/150"
            alt="Post"
          />
        </div>
        <div className={styles.reaction}>
          <button>Like</button>
          <button>Comment</button>
          <button>Repost</button>
          <button>Share</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
