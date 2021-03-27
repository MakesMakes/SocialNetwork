import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../images/user.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <button className={props.currentPage === p && styles.selectedPage}
                        onClick={() => { props.onPageChanged(p) }}>{p}</button>
                })}
            </div>
            {
                props.users.map(u => <div className={styles.usersAva} key={u.id}>
                    <div >
                        <NavLink to={`/profile/` + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.img} />
                        </NavLink>
                    </div>
                    <div>
                        {u.follow
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
                    </div>
                    <div>
                        {/* {u.location.city} */}
                    </div>
                    <div>
                        {/* {u.location.country} */}
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;