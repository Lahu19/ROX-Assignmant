import "./index.css";

export default function TransactionsStatistics({ statistics, monthName }) {
  return (
    <section className="transactions_statistics">
      <h2 className="statistics_title">
        Statistics - <b style={{color: '#9290C3'}}>{monthName}</b>
      </h2>
      <div className="statistics_container">
        <div className="statistics_item">
          <p>Total Sale</p>
          <p>{statistics.sales} Rs</p>
        </div>
        <div className="statistics_item">
          <p>Total sold items</p>
          <p>{statistics.soldItems} Ps</p>
        </div>
        <div className="statistics_item">
          <p>Total not sold items</p>
          <p>{statistics.unSoldItems} Ps</p>
        </div>
      </div>
    </section>
  );
}
