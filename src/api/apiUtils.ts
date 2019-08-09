export function api<T>(url: string): Promise<T> {
    return fetch(url)
        .then((response: Response) => {
            // A fetch() promise will reject with a TypeError
            // when a network error is encountered or CORS is misconfigured on the server side
            if (!response.ok) {
                throw new Error(response.statusText);
            }

            return response.json() as Promise<T>;
        })
        .catch((err: Error) => {
            console.log("error :", err.stack);

            return Promise.reject(err);
        });
}
