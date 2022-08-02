import style from "./status-table-right.module.css";

export const StatusTableRight = () => {
  return (
    <section className={style.StatusTableRight}>
      <div className={style.ordersStatusBox}>
        <div className={`${style.ready} mb-5`}>
          <p className="text text_type_main-medium mb-5">Готовы:</p>
          <div className="listReady">
            <p className="text text_type_digits-default mb-2">034568</p>
            <p className="text text_type_digits-default mb-2">034568</p>
            <p className="text text_type_digits-default mb-2">034568</p>
            <p className="text text_type_digits-default mb-2">034568</p>
            <p className="text text_type_digits-default mb-2">034568</p>
            <p className="text text_type_digits-default mb-2">034568</p>
          </div>
        </div>
        <div className={`${style.inWork} mb-5`}>
          <p className="text text_type_main-medium mb-5">В работе:</p>
          <div className="listInWork">
            <p className="text text_type_digits-default mb-2">034568</p>
            <p className="text text_type_digits-default mb-2">034568</p>
            <p className="text text_type_digits-default mb-2">034568</p>
            <p className="text text_type_digits-default mb-2">034568</p>
          </div>
        </div>
      </div>
      <p className="text text_type_main-medium">Выполнено за все время:</p>
      <p className="text text_type_digits-large mb-15">28752</p>
      <p className="text text_type_main-medium">Выполнено за сегодня:</p>
      <p className="text text_type_digits-large">138</p>

    </section>
  );
};
