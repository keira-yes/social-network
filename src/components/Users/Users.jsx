export const Users = ({ users, getUsers, followUser, unfollowUser }) => {

    if (users.length === 0) {
        getUsers([
            {id: 1, avatar: "https://cdn-icons-png.flaticon.com/512/147/147142.png", firstName: "Irina", lastName: "K.", status: "I'm ready", location: {city: "Kiev", country: "Ukraine"}, followed: true},
            {id: 2, avatar: "https://cdn-icons-png.flaticon.com/512/147/147142.png", firstName: "Ksenia", lastName: "K.", status: "I'm not ready", location: {city: "Oslo", country: "Norway"}, followed: false},
            {id: 3, avatar: "https://cdn-icons-png.flaticon.com/512/147/147142.png", firstName: "Alex", lastName: "O.", status: "Sunshine", location: {city: "NY", country: "USA"}, followed: false},
            {id: 4, avatar: "https://cdn-icons-png.flaticon.com/512/147/147142.png", firstName: "David", lastName: "H.", status: "Love like winter", location: {city: "London", country: "Great Britain"}, followed: false}
        ]);
    }

    return (
        <div>
            {users.map(user => (
                <article key={user.id}>
                    <div>
                        <figure>
                            <img src={user.avatar} alt={user.firstName} />
                        </figure>
                        {user.followed ?
                            <button type="button" onClick={() => unfollowUser(user.id)}>Unfollow</button> :
                            <button type="button" onClick={() => followUser(user.id)}>Follow</button>
                        }
                    </div>
                    <div>
                        <h3>{user.firstName} {user.lastName}</h3>
                        <div>{user.location.country}</div>
                        <strong>{user.status}</strong>
                        <div>{user.location.city}</div>
                    </div>
                </article>
            ))}
        </div>
    )
}
