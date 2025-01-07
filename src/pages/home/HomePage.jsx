import  { useEffect, useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Typography, 
  Box 
} from "@mui/material";

const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("userDetials")) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div className="container" style={{ padding: "20px",  minHeight: "100vh" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Registered Users
      </Typography>

      {users.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Date of Birth</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Profile Image</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.dob}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>
                    {user.profileImage ? (
                      <Box
                        component="img"
                        src={user.profileImage}
                        alt="Profile"
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      "No Image"
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="h6" align="center" color="textSecondary" mt={4}>
          No users registered yet.
        </Typography>
      )}
    </div>
  );
};

export default HomePage;
