import {FormPageProps} from "../../types";
import React from "react";

const FormPageTwo = (props: FormPageProps) => {

  const {form, errors, setForm} = props;

  return (
    <div className="form-page">
      <div className="form-group">
        <label htmlFor="field3" className="form-label">Field 3</label>
        <input
          id="field3"
          name="field3"
          type="text"
          placeholder="Please enter field 3"
          maxLength={20}
          className="form-input"
          value={form.field3}
          onChange={(e) => setForm({...form, field3: e.target.value})}
          autoComplete="off"
        />
        <div className="error">{errors.field3}</div>
      </div>
      <div className="form-group">
        <label htmlFor="field4" className="form-label">Field 4</label>
        <input
          id="field4"
          name="field4"
          type="text"
          placeholder="Please enter field 4"
          className="form-input"
          value={form.field4}
          onChange={(e) => setForm({...form, field4: e.target.value})}
          autoComplete="off"
        />
        <div className="error">{errors.field4}</div>
      </div>
    </div>
  )
}

export default FormPageTwo