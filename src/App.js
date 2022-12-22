import React from 'react';
import logo from './logo.png';
import './App.css';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiButton,
  EuiTextArea,
  EuiFieldText,
} from '@elastic/eui';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Запрос в БД Росфинмониторинга
        </h1>        
      </header>
      <section className='main'>
      
  <EuiFlexGroup>
    <EuiFlexItem>
      <EuiFormRow label="Фамилия">
        <EuiFieldText />
      </EuiFormRow>
    </EuiFlexItem>
    <EuiFlexItem>
      <EuiFormRow label="Имя">
        <EuiFieldText />
      </EuiFormRow>
    </EuiFlexItem>
    <EuiFlexItem>
      <EuiFormRow label="Отчество">
        <EuiFieldText />
      </EuiFormRow>
    </EuiFlexItem>
    <EuiFlexItem>
      <EuiFormRow label="Дата рождения">
        <EuiFieldText />
      </EuiFormRow>
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <EuiFormRow hasEmptyLabelSpace>
        <EuiButton>Запросить Росфинмониторинг</EuiButton>
      </EuiFormRow>
    </EuiFlexItem>
  </EuiFlexGroup>
  <EuiFormRow label="Результат проверки" fullWidth>
      <EuiTextArea
        fullWidth
        />
    </EuiFormRow>

      </section>
    </div>
  );
}

export default App;
