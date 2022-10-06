const MenuItem = (props) => {
    return (
        <div className={`header__menu__item${props.highlight ? " header__menu__item__highlight" : ""}`}>
            <a href={props.link} title={props.label}>
                {
                    props.highlight && 
                        <img src={props.highlight} />
                }
                {props.label}
            </a>
        </div>
    )
}

export default MenuItem;