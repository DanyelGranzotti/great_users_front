import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

// Importa api
import api from "../../services/api";
import { nameCase } from "../../services/utils";

// Dependecias para formularios e validação
import { validateCPF } from "validations-br";
import { Formik, Form } from "formik";
import * as yup from "yup";

// Dependecias de estilização
import * as Styled from "./Register.styled";
import { AiOutlinePlus } from "react-icons/ai";

// Schema de validação do formulário de cadastro
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

const backHomePage = () => {
  window.location.href = "/";
};

function Register() {
  const [popup, setPopup] = useState(false);

  const onSubmitHandler = async (values) => {
    let date = new Date(values.birthDate);
    let cpf = values.cpf.replace(/[^\d]+./g, "");
    let rg = values.rg.replace(/[^\d]+./g, "");

    await api.post("/user", {
      name: nameCase(values.name),
      cpf: cpf,
      rg: rg,
      birthDate: date.toISOString(),
      motherName: nameCase(values.motherName),
      fatherName: nameCase(values.fatherName),
    });
    setPopup(true);
  };

  useEffect(() => {
    if (popup) {
      setTimeout(() => {
        setPopup(false);
        backHomePage();
      }, 3000);
    }
  }, [popup]);

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Header>
          <h1>Cadastro de usuário</h1>
          <p>
            Preencha os campos abaixo para cadastrar um novo usuário no sistema
          </p>
        </Styled.Header>
        <Styled.ContentForm>
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
              <Form style={{ width: "100%" }}>
                <Styled.ContentRowLabels>
                  <div>
                    <label htmlFor="name">Nome*</label>
                    <Styled.ContentField
                      name="name"
                      placeholder="Ex: Lucas Pereira Silva"
                    />
                    {errors.name && touched.name ? (
                      <Styled.ErrorMessages>{errors.name}</Styled.ErrorMessages>
                    ) : null}
                  </div>
                </Styled.ContentRowLabels>

                <Styled.ContentRowLabels>
                  <div>
                    <label htmlFor="birthDate">Data de nascimento*</label>
                    <Styled.ContentField
                      name="birthDate"
                      placeholder="Ex: 01/01/2000"
                      type="date"
                    />
                    {errors.birthDate && touched.birthDate ? (
                      <Styled.ErrorMessages>
                        {errors.birthDate}
                      </Styled.ErrorMessages>
                    ) : null}
                  </div>
                </Styled.ContentRowLabels>

                <Styled.ContentRowLabels>
                  <div>
                    <label htmlFor="motherName">Nome da mãe*</label>
                    <Styled.ContentField
                      name="motherName"
                      placeholder="Ex: Maria Silva"
                    />
                    {errors.motherName && touched.motherName ? (
                      <Styled.ErrorMessages>
                        {errors.motherName}
                      </Styled.ErrorMessages>
                    ) : null}
                  </div>
                </Styled.ContentRowLabels>

                <Styled.ContentRowLabels>
                  <div>
                    <div>
                      <label htmlFor="fatherName">Nome do pai*</label>
                      <Styled.ContentField
                        name="fatherName"
                        placeholder="Ex: João Pereira"
                      />
                    </div>
                    {errors.fatherName && touched.fatherName ? (
                      <Styled.ErrorMessages>
                        {errors.fatherName}
                      </Styled.ErrorMessages>
                    ) : null}
                  </div>
                </Styled.ContentRowLabels>

                <Styled.ContentRowLabels>
                  <div>
                    <div>
                      <label htmlFor="rg">RG*</label>
                      <Styled.HalfContentField
                        name="rg"
                        placeholder="Ex: 4.589.689"
                      />
                    </div>
                    {errors.rg && touched.rg ? (
                      <Styled.ErrorMessages>{errors.rg}</Styled.ErrorMessages>
                    ) : null}
                  </div>
                  <div>
                    <div>
                      <label htmlFor="cpf">CPF*</label>
                      <Styled.HalfContentField
                        name="cpf"
                        placeholder="Ex: 912.116.431-91"
                      />
                    </div>
                    {errors.cpf && touched.cpf ? (
                      <Styled.ErrorMessages>{errors.cpf}</Styled.ErrorMessages>
                    ) : null}
                  </div>
                </Styled.ContentRowLabels>

                <Styled.ContentButtonsRow>
                  <Styled.GoBackButton to="/">Cancelar</Styled.GoBackButton>
                  <Styled.RegisterButtonContainer type="submit">
                    <AiOutlinePlus />
                    Cadastrar
                  </Styled.RegisterButtonContainer>
                </Styled.ContentButtonsRow>
              </Form>
            )}
          </Formik>
        </Styled.ContentForm>
      </Styled.Content>
      <Styled.ImageContainer>
        <img src="/img/Register.png" alt="" />
      </Styled.ImageContainer>
      {popup ? (
        <Styled.Popup>
          <div>
            <p>
              Usuário cadastrado com sucesso!
              <br />
              <br />
              Você será redirecionado para a página inicial
            </p>
          </div>
        </Styled.Popup>
      ) : null}
    </Styled.Container>
  );
}

export default Register;
