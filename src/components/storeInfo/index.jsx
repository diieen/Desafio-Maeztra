const StoreInfo = (props) => {

  return (
    <div className="home__storeInfos__content__card">
        <img src={props.icon} width="32" alt="icon" />
        <div className="home__storeInfos__content__card__infos">
            <h5>{props.title}</h5>
            <p>{props.subtitle}</p>
        </div>
    </div>
  );
};

export default StoreInfo;