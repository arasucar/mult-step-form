import React from "react";

export type ModalProps = {
  onDismiss?: React.MouseEventHandler<HTMLDivElement>,
  content?: React.ReactFragment,
  actions?: React.ReactFragment,
}

export type FormType = {
  field1?: string,
  field2?: number | null,
  field3?: string,
  field4?: string,
  field5?: string,
  field6?: string,
}

export type FormErrors = {
  field1?: string,
  field2?: string,
  field3?: string,
  field4?: string,
  field5?: string,
  field6?: string,
}

export type FormBreadcrumbProps = {
  currentPage?: number,
  numberOfPages?: number,
  setCurrentPage?: any,
  isValid?: any
}

