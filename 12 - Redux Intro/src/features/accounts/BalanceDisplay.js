import { connect, useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  // const balance = useSelector((state) => state.accountState.balance);

  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapToStateAsProp(state) {
  return { balance: state.accountState.balance };
}

export default connect(mapToStateAsProp)(BalanceDisplay);
