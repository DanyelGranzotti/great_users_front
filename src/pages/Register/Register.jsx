import React from "react";
import ReactDOM from "react-dom/client";
import api from "../../services/api";

import { validateCPF } from "validations-br";
import { useFormik, Formik, Form, Field } from "formik";

// Schema de validação do formulário de cadastro
import * as yup from "yup";
const schema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  birthDate: yup.date().required("Data de nascimento obrigatória"),
  motherName: yup.string().required("Nome da mãe obrigatório"),
  fatherName: yup.string().required("Nome do pai obrigatório"),
  rg: yup.string().required("RG obrigatório"),
  cpf: yup
    .string()
    .typeError("CPF inválido")
    .test("cpf", "CPF inválido", (value) => validateCPF(value))
    .required("CPF obrigatório"),
});

const onSubmitHandler = async (values) => {
  const date = new Date(values.birthDate);
  const cpf = values.cpf.replace(/[^\d]+-./g, "");
  const rg = values.rg.replace(/[^\d]+-./g, "");
  await api.post("/user", {
    name: values.name,
    cpf: cpf,
    rg: rg,
    birthDate: date.toISOString(),
    motherName: values.motherName,
    fatherName: values.fatherName,
  });
  window.location.href = "/";
};

function Register() {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          birthDate: new Date(),
          motherName: "",
          fatherName: "",
          rg: "",
          cpf: "",
        }}
        validationSchema={schema}
        onSubmit={onSubmitHandler}
      >
        {({ values, errors, touched }) => (
          <Form>
            <label htmlFor="name">Nome</label>
            <Field name="name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}

            <label htmlFor="birthDate">Data de nascimento</label>
            <Field name="birthDate" type="date" />
            {errors.birthDate && touched.birthDate ? (
              <div>{errors.birthDate}</div>
            ) : null}

            <label htmlFor="motherName">Nome da mãe</label>
            <Field name="motherName" />
            {errors.motherName && touched.motherName ? (
              <div>{errors.motherName}</div>
            ) : null}
            <label htmlFor="fatherName">Nome do pai</label>
            <Field name="fatherName" />
            {errors.fatherName && touched.fatherName ? (
              <div>{errors.fatherName}</div>
            ) : null}
            <label htmlFor="rg">RG</label>
            <Field name="rg" />
            {errors.rg && touched.rg ? <div>{errors.rg}</div> : null}
            <label htmlFor="cpf">CPF</label>
            <Field name="cpf" />

            {errors.cpf && touched.cpf ? <div>{errors.cpf}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
