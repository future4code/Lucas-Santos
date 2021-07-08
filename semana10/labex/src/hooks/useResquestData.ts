import { useState, useEffect } from "react";
import { api } from "../services/api";

export const useRequestGetTrip = async () => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    api.get('trip')
      .then((res) => {
        console.log(res)
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err)
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return [data, isLoading, error];
}