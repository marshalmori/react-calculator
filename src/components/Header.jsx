import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Logo da calculadora de investimento" />
      <h1>Investiment Calculator</h1>
    </header>
  );
}
