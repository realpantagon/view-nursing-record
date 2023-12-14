import React, { useState } from "react";
import styles from "../styles/search.module.css";

import Navbar from "@/component/navbar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

export default function search() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "ชื่อ ", code: "N" },
    { name: "Bed Number", code: "R" },
    { name: "Admid Number", code: "A" },
  ];

  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.font}>ค้นหาผู้ป่วย</h1>
      <div className={styles.barcontainer}>
        <div className={styles.butgroup}>
          <div className={`p-inputgroup flex-1 sm:max-w-full md:max-w-full`}>
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              placeholder="ค้นหาจาก"
              className="w-16"
            ></Dropdown>
            <InputText placeholder="Keyword" className={styles.input} />
            <Button label="ค้นหา" className="" />
          </div>
          <div className={styles.contentcontainer}>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center my-auto mx-auto">
              <div className="col-span-1 bg-white py-8 px-16  rounded-md shadow-md">
                <div>
                  ชื่อ: <b>พิชยุทธ หันชัยเนาว์</b>
                </div>
                <div>
                  Bed number: <b>34</b>
                </div>
                <div>
                  Admit Number:<b>099</b>
                </div>
                <div>
                  เวลาบันทึกล่าสุด <b>10:34 12/12/2023</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
