import UsersList from "../components/UsersList"

const Users = () => {
  const USERS = [
    {
      id: "u1",
      image:
        "https://imgs.search.brave.com/IMtYi-jtjjOcJJ-pO-wg-QttG6kg4Xfk-0TxFpPjiFo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2luZHJpdmVycGF5/bWVudHMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzEx/L0p1c3Rpbi1CYXJ0/bGV0dC1XaW5kLVJp/dmVyLVdlYnNpdGUt/RmluYW5jaWFsLTIw/MjMtZTE3MDAyNjE3/NjkxMDkuanBn",
      name: "Justin",
      places: 3,
    },
  ]
  return (
    <>
      <UsersList items={USERS} />
    </>
  )
}

export default Users
