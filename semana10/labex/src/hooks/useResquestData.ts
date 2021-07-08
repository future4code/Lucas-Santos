import { useState, useEffect } from "react";
import { api } from "../services/api";

export const useRequestGetTrip = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const getTrips = async () => {
      try {
        const res = await api.get('trips')
        setData(res.data.trips);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    }

    getTrips()
  }, []);

  return [data, isLoading, error];
}