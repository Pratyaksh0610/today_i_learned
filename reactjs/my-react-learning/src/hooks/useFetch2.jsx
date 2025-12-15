import { useState } from "react";

export default function useFetch2(cb) {
  const [data, setData] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  const fn = async function (...args) {
    try {
      setisLoading(true);
      setError(null);
      const response = await cb(...args);
      const parsedResponse = await response.json();
      setData(parsedResponse);
      setisLoading(false);
    } catch (err) {
      setisLoading(false);
      setError(err);
    }
  };
  return { data, isLoading, error, fn };
}
