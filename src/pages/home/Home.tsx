import PitchCard from "../../components/UI/cards/PitchCard";
import { welcomeData } from "../../utils/data/welcome-card";
import styles from "./Home.module.scss";
import MenuList from "./menu/MenuList";

function Home() {
  return (
    <>
      <div className={styles.graphic}></div>

      <div className={styles["card-wrapper"]}>
        <PitchCard className={styles["welcome-card"]} title={welcomeData.title}>
          <p className="centered-txt">{welcomeData.paragraph1}</p>
          <p className="centered-txt">{welcomeData.paragraph2}</p>
        </PitchCard>
      </div>

      <MenuList></MenuList>
    </>
  );
}

export default Home;
