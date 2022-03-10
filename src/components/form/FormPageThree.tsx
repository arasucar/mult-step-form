import React from "react";
import {FormPageProps} from "../../types";

const FormPageThree = (props: FormPageProps) => {

  const {form, errors, setForm} = props;

  return (
    <div className="form-page">
      <div className="form-group">
        <label htmlFor="field5" className="form-label">Field 5</label>
        <input
          id="field5"
          name="field5"
          type="text"
          placeholder="Please enter field 5"
          className="form-input"
          value={form.field5}
          onChange={(e) => setForm({...form, field5: e.target.value})}
          autoComplete="off"
        />
        <div className="error">{errors.field5}</div>
      </div>
      <div className="form-group">
        <label htmlFor="field6" className="form-label">Field 6</label>
        <input
          id="field6"
          name="field6"
          type="text"
          placeholder="Please enter field 6"
          className="form-input"
          value={form.field6}
          onChange={(e) => setForm({...form, field6: e.target.value})}
          autoComplete="off"
        />
        <div className="error">{errors.field6}</div>
      </div>
    </div>
  )
}

export default FormPageThree