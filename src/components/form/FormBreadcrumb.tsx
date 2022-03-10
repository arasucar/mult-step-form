import {FormBreadcrumbProps} from "../../types";
import {Fragment} from "react";


const FormBreadcrumb = (props: FormBreadcrumbProps) => {

  const onClick = (page: number) => {
    if (props.isValid()) {
      props.setCurrentPage(page)
    }
  }

  return (
    <div className="form-breadcrumbs">
      {[...Array(props.numberOfPages)].map((v, i)=> {
        const page = i + 1
        return (
          <Fragment
            key={`form-breadcrumb-${page}`}
          >
            <div
              className={`form-breadcrumb ${page === props.currentPage && 'active'}`}
              onClick={() => onClick(page)}
            >
              <div className="form-breadcrumb-round"/>
              <div className="form-breadcrumb-text">
                form{page}
              </div>
            </div>
            <span className="after"/>
          </Fragment>
        )
      })}
    </div>
  )
}

export default FormBreadcrumb