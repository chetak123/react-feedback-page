/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from "react";

export function useFetch(url, options) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [responseStatus, setResponseStatus] = useState(null);

    const postData = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(url, { ...options });
            setResponseStatus(res?.status);
            const json = await res?.json();

            setResponse(json);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        postData();
    }, []);

    return {
        postData,
        response,
        responseStatus,
        error,
        isLoading,
    };
}
export function useLazyFetch(url, options) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [responseStatus, setResponseStatus] = useState(null);

    const postData = async (paramsString = "") => {
        setIsLoading(true);
        try {
            const res = await fetch(paramsString ? `${url}?${paramsString}` : url, {
                ...options,
            });
            setResponseStatus(res?.status);
            const json = await res?.json();

            setResponse(json);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };

    return {
        postData,
        response,
        responseStatus,
        error,
        isLoading,
    };
}

export function usePost(url, options) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [responseStatus, setResponseStatus] = useState(null);

    async function postData(body, url2 = url) {
        setIsLoading(true);
        try {
            const res = await fetch(url2, { ...options, body: JSON.stringify(body) });
            setResponseStatus(res?.status || null);
            const json = await res?.json();

            setResponse(json);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        postData();
    }, []);

    return {
        postData,
        response,
        responseStatus,
        error,
        isLoading,
    };
}

export function useLazyPost(url, options) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [responseStatus, setResponseStatus] = useState(null);

    async function postData(body, url2 = url) {
        setIsLoading(true);
        try {
            const res = await fetch(url2, { ...options, body: JSON.stringify(body) });
            setResponseStatus(res?.status || null);
            const json = await res?.json();

            setResponse(json);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }

    return {
        postData,
        response,
        responseStatus,
        error,
        isLoading,
    };
}