import {FormPageProps} from "../../types";
import React from "react";

const FormPageOne = (props: FormPageProps) => {

  const {form, errors, setForm} = props;

  return (
    <div className="form-page">
      <div className="form-group">
        <label htmlFor="field1" className="form-label">Field 1</label>
        <input
          id="field1"
          name="field1"
          type="email"
          placeholder="Please enter field 1"
          className="form-input"
          value={form.field1}
          onChange={(e) => setForm({...form, field1: e.target.value})}
          autoComplete="off"
        />
        <div className="error">{errors.field1}</div>
      </div>
      <div className="form-group">
        <label htmlFor="field2" className="form-label">Field 2</label>
        <input
          id="field2"
          name="field2"
          type="number"
          placeholder="Please enter field 2"
          className="form-input"
          value={form.field2 || ''}
          onKeyPress={(event) => {
            if (!/^\d*\.?\d*$/.test(event.key)) {
              event.preventDefault();
            }
          }}
          onChange={(e) => setForm({...form, field2: parseFloat(e.target.value)})}
          autoComplete="off"
        />
        <div className="error">{errors.field2}</div>
      </div>
    </div>
  )
}

export default FormPageOne