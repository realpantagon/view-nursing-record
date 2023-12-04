import React,{useState} from "react";
import styles from "../styles/search.module.css";

import Navbar from "@/component/navbar";
import {InputText} from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';


export default function search() {

  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
      { name: 'ชื่อ ',code: 'N' },
      { name: 'Bed No.', code: 'R' },
      { name: 'Admid Number', code: 'A' },

  ];

  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.text}>
          <div>
              <div className={`p-inputgroup flex-1 ${styles.uvewewe}`}>
                  <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className={`${styles.uvewewe}` }></Dropdown>
                  <InputText placeholder="Keyword" className={styles.ppsudlor}/>
                  <Button label="Search" className="" />
              </div>

          </div>
      </div>
    </div>
  );
}
