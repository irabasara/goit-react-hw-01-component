import PropTypes from 'prop-types'

export const Statistic = ({stats, title}) => {
    return (
        <section className="statistics">
            {title && <h2 className="title">{title}</h2>}
            <ul className="stat-list">{ stats.map(({ id, label, percentage }) => (
      <li className="item" key={id}>
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