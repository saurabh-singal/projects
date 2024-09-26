import React from 'react'

const UserData = ({user}) => {
  return (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                user.map((e)=>(
                    <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}

export default UserData