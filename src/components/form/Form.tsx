import Modal from "../Modal";
import React, {useEffect, useState} from "react";
import '../../styles/index.css'
import {FormErrors, FormType} from "../../types";
import FormBreadcrumb from "./FormBreadcrumb";
import {isValid} from "./validation/validateForm";

const Form = () => {
  const [formOpen, setFormOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [form, setForm] = useState<FormType>({
    field1: '',
    field2: null,
    field3: '',
    field4: '',
    field5: '',
    field6: ''
  })
  const [errors, setErrors] = useState<FormErrors>({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    field6: ''
  })

  useEffect(() => {
    // fetch data
  }, [formOpen])

  const renderContent = (): React.ReactFragment => {
    return (
      <div>
        <FormBreadcrumb currentPage={currentPage} numberOfPages={3} setCurrentPage={setCurrentPage} isValid={() => isValid(form, currentPage, setErrors)}/>
        <form>
          {currentPage === 1 &&
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
          }
          {currentPage === 2 &&
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
          }
          {currentPage === 3 &&
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
          }
        </form>
      </div>
    )
  }

  const renderActions = (): React.ReactFragment => {
    return (
      <div className="form-actions">
        <div className="navigation-buttons">
          <button onClick={onPrev}>Prev</button>
          <button onClick={onNext}>Next</button>
        </div>
        <div className="action-buttons">
          <button onClick={onDismiss}>Close</button>
          <button onClick={onSubmit}>Submit</button>
        </div>
      </div>
    )
  }

  const onNext = () => {
    if (isValid(form, currentPage, setErrors) && currentPage < 3) {
      setCurrentPage(currentPage+1)
    }
  }

  const onPrev = () => {
    if (isValid(form, currentPage, setErrors) && currentPage > 1) {
      setCurrentPage(currentPage-1)
    }
  }

  const onDismiss = () => {
    setCurrentPage(1)
    setFormOpen(false)
  }

  const onSubmit = () => {
    if (isValid(form, currentPage, setErrors)) {
      // post data
    }
  }

  return (
    <>
      <button onClick={() => setFormOpen(true)}>Show Form</button>
      {formOpen &&
        <Modal
          actions={renderActions()}
          content={renderContent()}
          onDismiss={onDismiss}
        />
      }
    </>
  )
}

export default Form