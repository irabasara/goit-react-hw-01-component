
import {Profile} from './Profile/Profile'
import user from './Profile/user.json'
import { Statistic } from './Statistic/Statistic' 
import data from './Statistic/data.json'


export const App = () => {
    return (
        <div>
            <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
        />
      <Statistic stats={data} title="Upload stats"  />
        </div>
    )
}

