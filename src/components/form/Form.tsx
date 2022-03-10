import Modal from "../Modal";
import React, {useEffect, useState} from "react";
import '../../styles/index.css'
import {FormErrors, FormType} from "../../types";
import FormBreadcrumb from "./FormBreadcrumb";
import {isValid} from "./validation/validateForm";
import formApi from '../../apis/formApi'
import FormPageThree from "./FormPageThree";
import FormPageTwo from "./FormPageTwo";
import FormPageOne from "./FormPageOne";

const Form = () => {
  const [formOpen, setFormOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [form, setForm] = useState<FormType>(new FormType())
  const [errors, setErrors] = useState<FormErrors>(new FormErrors())

  useEffect(() => {
    if (formOpen) {
      fetchFormData()
    }
  }, [formOpen])

  const fetchFormData = async () => {
    const response = await formApi.get("/", {})
    setForm((response && response.status === 200 && response.data) || new FormType())
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

  const onSubmit = async () => {
    if (isValid(form, currentPage, setErrors) && currentPage === 3) {
      const response = await formApi.post('/', form)
      if (response && response.status === 200) {
        window.alert("Form posted successfully.")
        onDismiss()
      } else {
        window.alert("Form couldn't be posted.")
      }
    }
  }

  const renderContent = (): React.ReactFragment => {
    return (
      <div>
        <FormBreadcrumb currentPage={currentPage} numberOfPages={3} setCurrentPage={setCurrentPage} isValid={() => isValid(form, currentPage, setErrors)}/>
        <form>
          {currentPage === 1 &&
            <FormPageOne
              form={form}
              errors={errors}
              setForm={setForm}
            />
          }
          {currentPage === 2 &&
            <FormPageTwo
              form={form}
              errors={errors}
              setForm={setForm}
            />
          }
          {currentPage === 3 &&
            <FormPageThree
              form={form}
              errors={errors}
              setForm={setForm}
            />
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