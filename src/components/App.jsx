import user from '../data/user.json';
import { Profile } from './Profile/Profile';

export const App = () => {
  return (
    <div className="main">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
