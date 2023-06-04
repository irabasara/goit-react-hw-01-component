import PropTypes from 'prop-types'
import css from './friendList.module.css'
import {BsCircleFill} from 'react-icons/bs'



export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.item} >
            <span className={css.status}>{ isOnline?<BsCircleFill fill='green'/>:<BsCircleFill fill='red'/>}</span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.protoType = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline:PropTypes.bool
}