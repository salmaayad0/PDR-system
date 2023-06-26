import React from "react";
import style from "./Form.module.css";

export default function HistoryForm() {
  return (
    <>
      <div className={style.title}>
        <h2>Patient's medical history</h2>
      </div>
      <form method="">
        <table className={style.formTable}>
            <tr className={`mb-2 ` + style.formInput}>
                <td></td>
                <td className={style.title}>more details</td>
            </tr>
          <tr className={`mb-2 ` + style.formInput}>
            <td>
              <input type="checkbox" name="diabetes" id="diabetes" />
              <label for="diabetes"> Diabetes</label>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>

          <tr className={`mb-2 ` + style.formInput}>
            <td>
              <input type="checkbox" name="pressure" id="pressure" />
              <label for="pressure"> High Blood Pressure </label>
            </td>

            <td>
              <input type="text" />
            </td>
          </tr>

          <tr className={`mb-2 ` + style.formInput}>
            <td>
              <input type="checkbox" name="heart" id="heart" />
              <label for="heart"> Heart Disease </label>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>

          <tr className={`mb-2 ` + style.formInput}>
            <td>
              <input type="checkbox" name="cholesterol" id="cholesterol" />
              <label for="cholesterol"> Cholesterol </label>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>

          <tr className={`mb-2 ` + style.formInput}>
            <td>
              <input type="checkbox" name="allergy" id="allergy" />
              <label for="allergy"> Allergies </label>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>

          <tr className={`mb-2 ` + style.formInput}>
            <td>
              <input type="checkbox" name="bone" id="bone" />
              <label for="bone"> Bone denisty </label>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>

          <tr>
            <td colSpan={2} className="text-center">
              <button type="submit" className={style.sumitButton}>
                Save
              </button>
            </td>
          </tr>
        </table>
      </form>
    </>
  );
}
