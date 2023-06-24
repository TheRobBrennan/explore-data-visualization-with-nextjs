"use client";
import { useState, useEffect } from "react";

export interface APIComparisonProps {
  apiRequests: APIRequest[];
}

export interface APIRequest {
  endpoint: string,
  shortName?: string
}

export interface APIResponse extends APIRequest {
  responseTime: number
  httpStatusCode: number
  res: any
}

export default function APIComparison({ apiRequests }: APIComparisonProps) {
  const [results, setResults] = useState<APIResponse[]>([]);

  useEffect(() => {
    const fetchAPIResponses = async () => {
      const promises = apiRequests.map(async (url) => {
        const startTime = performance.now();

        // Simple example - let's see how long it takes each request to complete
        const res = await fetch(url.endpoint).then((res) => res);

        const endTime = performance.now();

        return {
          endpoint: url.endpoint,
          shortName: url.shortName,
          responseTime: endTime - startTime,
          httpStatusCode: res.status,
          res,
        };
      });

      const apiResponses = await Promise.all(promises);
      setResults(apiResponses);
    };

    fetchAPIResponses();
  }, []);

  if (!results || results.length === 0) return null

  return (
    <div>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            Response time is <strong>{result.responseTime.toFixed(2)} ms</strong> -{" "}
            <a href={result.endpoint} target="_blank" rel="noopener noreferrer">
              {result.shortName || result.endpoint}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
