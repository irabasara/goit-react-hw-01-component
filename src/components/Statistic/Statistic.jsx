import PropTypes from 'prop-types'
import { BiArrowToBottom } from "react-icons/bi";
import css from './statictic.module.css';

export const Statistic = ({stats, title}) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}<BiArrowToBottom/></h2>}
            <ul className={css.statList}>{ stats.map(({ id, label, percentage }) => (
      <li className={css.item} key={id}>
            <span className="label">{label}</span>
           <span className="percentage">{percentage}</span>
      </li>

    )
 )}</ul>
</section>
)
}


Statistic.protoType = {
    stats: PropTypes.object,
    title: PropTypes.string,
}