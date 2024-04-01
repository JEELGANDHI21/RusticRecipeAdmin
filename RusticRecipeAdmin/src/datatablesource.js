export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Yashvi",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "yashvi@gmail.com",
    age: 20,
  },
  {
    id: 2,
    username: "Vedanshi",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "vedanshi@gmail.com",
    status: "passive",
    age: 20,
  },
  {
    id: 3,
    username: "Avi",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "avi@gmail.com",
    status: "pending",
    age: 20,
  },
  {
    id: 4,
    username: "Dhruvish",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "dhruvish@gmail.com",
    status: "active",
    age: 20,
  },
  {
    id: 5,
    username: "Vibhor",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "vibhor@gmail.com",
    status: "passive",
    age: 20,
  },
  {
    id: 6,
    username: "Priyanshi",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "priyanshi@gmail.com",
    status: "active",
    age: 20,
  },

  {
    id: 7,
    username: "Jeel",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jeel@gmail.com",
    status: "active",
    age: 20,
  },
  {
    id: 8,
    username: "Bhavya",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "bhavya@gmail.com",
    status: "passive",
    age: 20,
  },
  {
    id: 9,
    username: "Dipali",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "dipali@gmail.com",
    status: "pending",
    age: 21,
  },
  {
    id: 10,
    username: "Hetvi",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "hetvi@gmail.com",
    status: "active",
    age: 19,
  },
];
