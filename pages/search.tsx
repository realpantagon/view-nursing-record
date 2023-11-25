import React from "react";
import styles from "../styles/search.module.css";

import Navbar from "@/component/navbar";

export default function search() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.text}>
        ค้นหาผู้ป่วย
      </div>
    </div>
  );
}
