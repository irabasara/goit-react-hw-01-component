
import {Profile} from './Profile/Profile'
import user from './Profile/user.json'
import { Statistic } from './Statistic/Statistic' 
import data from './Statistic/data.json'
import { FriendList } from './Friends/FriendList'
import friends from './Friends/friends.json'
import {TransactionHistory} from './Transaction/Transaction'
import transactions from './Transaction/transactions.json'


export const App = () => {
    return (
    <>
        <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}/>
  
         <Statistic
    stats={data}
    title="Upload stats" />
    
            <FriendList
                friends={friends} />
            
            <TransactionHistory
                items={transactions} />
            
        
            
    </>
    )
}

