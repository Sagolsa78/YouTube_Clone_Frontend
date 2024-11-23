import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [value, setValue] = useState("New");

    useEffect(() => {
        // Call fetchData when `value` changes
        fetchData(value);
    }, [value]);

    // Function to fetch data from the API
    const fetchData = async (query) => {
        setLoading(true);
        try {
            const response = await fetch(`search/?q=${query}`);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }
            const result = await response.json(); // Assuming response is JSON
            setData(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ loading, data, value, setValue }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
