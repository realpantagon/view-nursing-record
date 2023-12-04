import React from "react";
import styles from "../styles/home.module.css";
// import styles from "@/styles/loginpage.module.css";

import Navbar from "@/component/navbar";

export default function search() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.font}>
        <div>ผู้ป่วยที่ต้องดูแล</div>
        {/* <div className={styles.centercontainer}> */}
          <div className={styles.patientcontainer}>
            <div className={styles.modifylampang}>
              hi
              </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}
