import {} from "wagmi";
import PageNav from "../components/PageNav";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import RightSidebar from "../components/RightSidebar";
import styles from "./Dashboard.module.css";
function Dashboard() {
  return (
    <>
      <PageNav />
      <div className={styles.container}>
        <div>
          <CreatePost />
          <Post />
          <Post />
        </div>
        <div className={styles.rightSidebar}>
          <RightSidebar />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
