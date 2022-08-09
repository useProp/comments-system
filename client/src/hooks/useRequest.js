import {useCallback, useEffect, useState} from "react";

const useRequestInternal = (func, deps = [], initialLoading = false) => {
  const [error, setError] = useState(null);
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(initialLoading);

  const exec = useCallback(async (...params) => {
    try {
      setLoading(true);
      const data = await func(...params);
      setError(null);
      setValue(data);
    } catch (err) {
      setValue(null);
      setError(err);
      return Promise.reject(err);
    } finally {
      setLoading(false);
    }
  }, deps);

  return { error, value, loading, exec }
}

export const useRequestFn = (func, deps = []) => {
  return useRequestInternal(func, deps, false);
}

export const useRequest = (func, deps = []) => {
  const { exec, ...state } = useRequestInternal(func, deps, true);

  useEffect(() => {
    exec();
  }, [exec]);

  return state;
}
