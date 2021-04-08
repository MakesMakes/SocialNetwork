import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../images/user.png';
import { NavLink } from 'react-router-dom';
import { usersAPI } from './../../api/api';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>

            {
                props.users.map(u => <div className={styles.users} key={u.id}>

                    <div className={styles.usersAva}>
                        <NavLink to={`/profile/` + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.img} />
                        </NavLink>
                    </div>

                    <div className={styles.buttonFollow}>
                        {/* метод some - хотя бы одна id в массиве followingInProgress равна id пользователя то тогда disable */}
                        {u.followed
                            ? <button disabled={props.followingInProgress
                                .some(id => id === u.id)}
                                onClick={() => { props.unfollow(u.id) }}>
                                Unfollow</button>
                            : <button disabled={props.followingInProgress
                                .some(id => id === u.id)}
                                onClick={() => { props.follow(u.id) }}>
                                Follow</button>}
                    </div>

                    <div className={styles.usersName}>
                        {u.name}
                    </div>

                    <div className={styles.usersStatus}>
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
            <div>
                {pages.map(p => {
                    return <button className={props.currentPage === p && styles.selectedPage}
                        onClick={() => { props.onPageChanged(p) }}>{p}</button>
                })}
            </div>
        </div>
    )
}

export default Users;