import { useState, useEffect } from "react";
import { apiLabex } from "../services/api";

export const useRequestGetTrip = () => {
  const [ data, setData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const getTrips = async () => {
      try {
        const res = await apiLabex.get('trips')
        setData(res.data.trips);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    }

    getTrips()
  }, []);

  return [ data, isLoading, error ];
}

export const useRequestGetTripDetails = (id: string) => {
  const [ data, setData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const getTripDetails = async (id: string) => {
      const token = localStorage.getItem('token')
      try {
        const res = await apiLabex.get(`trip/${id}`, { headers: { auth: token }})
        setData(res.data.trip);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    }

    getTripDetails(id)
  }, [id]);

  return [ data, isLoading, error ];
}