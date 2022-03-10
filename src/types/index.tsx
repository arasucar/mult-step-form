import React from "react";

export type ModalProps = {
  onDismiss?: React.MouseEventHandler<HTMLDivElement>,
  content?: React.ReactFragment,
  actions?: React.ReactFragment,
}

export class FormType {
  field1?: string;
  field2?: number | null;
  field3?: string;
  field4?: string;
  field5?: string;
  field6?: string;

  constructor() {
    this.field1 = '';
    this.field2 = null;
    this.field3 = '';
    this.field4 = '';
    this.field5 = '';
    this.field6 = '';
  }
}

export class FormErrors {
  field1?: string;
  field2?: string;
  field3?: string;
  field4?: string;
  field5?: string;
  field6?: string;

  constructor() {
    this.field1 = '';
    this.field2 = '';
    this.field3 = '';
    this.field4 = '';
    this.field5 = '';
    this.field6 = '';
  }
}

export type FormBreadcrumbProps = {
  currentPage?: number,
  numberOfPages?: number,
  setCurrentPage?: any,
  isValid?: any
}

