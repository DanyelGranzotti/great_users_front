import {render,screen,fireEvent,waitFor} from '@testing-library/react';
import React from 'react';
import user from '@testing-library/user-event';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './App';
import Register from './pages/Register/Register';
import User from './pages/User/User';

// Testes do componente App
describe('App', () => {
  it('should render', () => {
    const {getByText} = render(
      <Router>
        <App />
      </Router>,
    );

    expect(getByText('Cadastrar')).toBeInTheDocument();
    });

    it('should render table', () => {
      const {findByText} = render(
        <Router>
          <App />
          </Router>,
      );
      expect(findByText('Nome')).toBeTruthy();
      expect(findByText('CPF')).toBeTruthy();
    });

    it('should render search bar', () => {
      const {getByPlaceholderText} = render(
        <Router>
          <App />
          </Router>,
      );
      expect(getByPlaceholderText('Buscar pelo nome')).toBeTruthy();
    });

    it ('should find by name', async () => {
      const {getByPlaceholderText,getByTestId,findByText} = render(
        <Router>
          <App />
          </Router>,
      );
      const input = getByPlaceholderText('Buscar pelo nome');
      user.type(input, 'Danyel');
      user.click(screen.getByTestId('findByName'));
      await waitFor(() => {
        expect(findByText('Danyel Granzotti')).toBeTruthy();
      });
    });

    it ('should find by cpf', async () => {
      const {getByPlaceholderText,getByTestId,findByText} = render(
        <Router>
          <App />
          </Router>,
      );
      const input = getByPlaceholderText('Buscar pelo CPF');
      user.type(input, '95463105065');
      user.click(screen.getByTestId('findByCpf'));
      await waitFor(() => {
        expect(findByText('Danyel Granzotti')).toBeTruthy();
      });
    });

    it ('should find by rg', async () => {
      const {getByPlaceholderText,getByTestId,findByText} = render(
        <Router>
          <App />
          </Router>,);
      const input = getByPlaceholderText('Buscar pelo RG');
      user.type(input, '43413');
      user.click(screen.getByTestId('findByRg'));
      await waitFor(() => {
        expect(findByText('Danyel Granzotti')).toBeTruthy();
      });
  });
});

// Testes do componente Register
describe('Register', () => {

  it('should render', () => {
    const {getByText} = render(
      <Router>
        <Register />
      </Router>,
    );

    expect(getByText('Cadastro de usuário')).toBeInTheDocument();
  });

  it('should be able to edit date',  () => {
    const { getByPlaceholderText} = render(
      <Router>
        <Register />
      </Router>,
    );
    const testValue = '2022-09-15';
    const input =getDateInput();
    fireEvent.change(input, { target: { value: testValue } });
    expect(input.value).toBe(testValue);
  });

  it ('should make a register', () => {
    const {} = render(
      <Router>
        <Register />
      </Router>,
    )
    user.type(getNameInput(), 'Lucas Pereira Silva');
    const input =getDateInput();
    fireEvent.change(input, { target: { value: '2022-09-15' } });
    user.type(getDateInput(), '2022-09-15');
    user.type(getMotherNameInput(), 'Maria Pereira Silva');
    user.type(getFatherNameInput(), 'João Pereira Silva');
    user.type(getRgInput(), '123456789');
    user.type(getCpfInput(), '53145072005');
    
    user.click(screen.getByRole('button', { name: /cadastrar/i }));
  });

  function getNameInput() {
    return screen.getByPlaceholderText(/ex: lucas pereira silva/i);
  }
  function getDateInput() {
    return screen.getByPlaceholderText(/ex: 01\/01\/2000/i);
  }
  function getMotherNameInput() {
    return screen.getByPlaceholderText(/ex: maria silva/i);
  }
  function getFatherNameInput() {
    return screen.getByPlaceholderText(/ex: joão pereira/i);
  }
  function getRgInput() {
    return screen.getByPlaceholderText(/ex: 4\.589\.689/i);
  }
  function getCpfInput() {
    return screen.getByPlaceholderText(/ex: 912\.116\.431\-91/i)
  }
});


// Testes do componente User
describe('User', () => {
  it ('should render', () => {
    const {getByText} = render(
      <Router>
        <User />
      </Router>,
    );

    expect(getByText('Informações do usuário')).toBeTruthy();
  });

  // it ('should render user data', () => {
  //   const {getByText} = render(
  //     <Router>
  //       <User />
  //     </Router>,
  //   );

  //   expect(getByText('Nome: Danyel Granzotti')).toBeTruthy();
  //   expect(getByText('Data de nascimento: 01/01/2000')).toBeTruthy();
  //   expect(getByText('Nome da mãe: Maria Granzotti')).toBeTruthy();
  //   expect(getByText('Nome do pai: João Granzotti')).toBeTruthy();
  //   expect(getByText('RG: 43413')).toBeTruthy();
  //   expect(getByText('CPF: 95463105065')).toBeTruthy();
  // });
});
