import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [formData, setFormData] = useState(mockData);

  return (
    <UserContext.Provider value={{ formData, setFormData }}>
      {children}
    </UserContext.Provider>
  );
};
const mockData = {
  name: "Anuja Agarwal",
  email: "anujaagarwal08@gmail.com",
  month: 0,
  day: 1,
  year: 2001,
  password: "",
  username: "anujagrazzel",
  id: "",
  bio: "👨‍💻Backend Dev",
  website: "anuja@vercel.app",
  location: "India",
};
