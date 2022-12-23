import React from 'react';
import './App.css';
import { EuiPageHeader,
EuiFlexGroup,
EuiFlexItem,
EuiFormRow,
EuiButton,
EuiFieldText,
EuiTextArea
} from "@elastic/eui";
const App = () => {
  return (
    <div className="App">
      <EuiPageHeader
        alignItems="center"
        justifycontent = "space between"
        pageTitle="База данных Росфинмониторинга"
        iconType="logoSecurity"
        description="Проверьте информацию о контрагенте по Переченю организаций и физических лиц, в отношении которых имеются сведения об их причастности к экстремистской деятельности или терроризму"
        rightSideItems={[
          <EuiButton fill>Ссылка на законодательство</EuiButton>,
  
        ]}
        tabs={[
          {
            label: "Физические лица",
            isSelected: true,
          },
          {
            label: "Юридические лица",
            isSelected: true,
          },
        ]}
      />
      <EuiFlexGroup direction="column" style={{ maxWidth: 250 }}>
        <EuiFlexItem>
          <EuiFormRow label="Фамилия" placeholder="Фамилия">
            <EuiFieldText />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Имя" placeholder="Имя">
            <EuiFieldText />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Отчество" placeholder="Отчество">
            <EuiFieldText />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Дата рождения" placeholder="Дата рождения">
            <EuiFieldText />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiFormRow hasEmptyLabelSpace>
            <EuiButton>Запросить сведения</EuiButton>
          </EuiFormRow>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiTextArea
        placeholder="Результат запроса"
        aria-label="Use aria labels when no actual label is in use"
      />
    </div>
  );
}

export default App;
