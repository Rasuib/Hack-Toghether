import styles from "./CreatePost.module.css";
function CreatePost() {
  return (
    <div className={styles.container}>
      <div className={styles.firstRow}>
        <div className="profilePic">
          <img src="https://via.placeholder.com/150" alt="User" />
        </div>
        <div>
          <input
            className={styles.postInput}
            type="text"
            placeholder="Write a Post"
          />
        </div>
      </div>
      <div className={styles.secondRow}>
        <div>
          <input
            type="file"
            id="file-upload"
            style={{ display: "none" }} // Hide the actual file input
          />
          <label
            htmlFor="file-upload"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              borderRadius: "5px",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            Upload Photo
          </label>
        </div>
        <div>
          <button className={styles.postBtn}>Create a Bounty</button>
        </div>
        <div>
          <button className={styles.postBtn}>Post</button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
