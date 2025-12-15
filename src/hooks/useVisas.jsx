import { useEffect, useState } from "react";

const useVisas = () => {
  const [visas, setVisas] = useState(null);
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(true);
      fetch("https://sunflower-assignment-server.vercel.app/visas")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch visas");
          }
          return res.json();
        })
        .then((data) => {
          setVisas(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setVisas([]);
          setLoading(false);
        });
    }, []);
  
  return [visas, loading];
};

export default useVisas;