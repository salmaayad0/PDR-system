import React from "react";
import style from "./Form.module.css";

export default function HistoryForm() {
  return (
    <>
      <form method="">
        <div className={`mb-2 ` + style.formInput}>
          <input type="checkbox" name="diabetes" id="diabetes" />
          <label for="diabetes"> Diabetes</label>
        </div>

        <div className={`mb-2 ` + style.formInput}>
          <input type="checkbox" name="pressure" id="pressure" />
          <label for="pressure"> High Blood Pressure </label>
        </div>

        <div className={`mb-2 ` + style.formInput}>
          <input type="checkbox" name="heart" id="heart" />
          <label for="heart"> Heart Disease </label>
        </div>

        <div className={`mb-2 ` + style.formInput}>
          <input type="checkbox" name="cholesterol" id="cholesterol" />
          <label for="cholesterol"> Cholesterol </label>
        </div>

        <div className={`mb-2 ` + style.formInput}>
          <input type="checkbox" name="allergy" id="allergy" />
          <label for="allergy"> Allergies </label>
        </div>

        <div className={`mb-2 ` + style.formInput}>
          <input type="checkbox" name="bone" id="bone" />
          <label for="bone"> Bone denisty </label>
        </div>

        <div colSpan={2} className="text-center">
          <button type="submit" className={style.sumitButton}>
            Save
          </button>
        </div>
      </form>
    </>
  );
}
