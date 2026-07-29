import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

const AppContext = createContext();

export function AppProvider({ children }) {

    const [aiModel, setAiModel] = useState(null);
    const [registry, setRegistry] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadRegistry();
    }, []);

    async function loadRegistry() {

        try {

            const res = await api.get("/registry");

            setRegistry(res.data);

            if (res.data.length > 0) {
                setAiModel(res.data[res.data.length - 1]);
            }

        } catch (err) {

            console.error("Failed to load registry", err);

        } finally {

            setLoading(false);

        }

    }

    function addModel(model) {

        setAiModel(model);

        setRegistry(prev => [...prev, model]);

    }

    return (

        <AppContext.Provider
            value={{
                aiModel,
                setAiModel,
                registry,
                setRegistry,
                addModel,
                loadRegistry,
                loading
            }}
        >

            {children}

        </AppContext.Provider>

    );

}

export function useApp() {
    return useContext(AppContext);
}