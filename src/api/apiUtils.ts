import { HTTPMethod } from "http-method-enum";

export function api<R, D>(
    url: string,
    method: HTTPMethod = HTTPMethod.GET,
    data?: D
): Promise<R> {
    return fetch(url, {
        method: method.toString(),
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json"
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
        .then((response: Response) => {
            // A fetch() promise will reject with a TypeError
            // when a network error is encountered or CORS is misconfigured on the server side
            if (!response.ok) {
                throw new Error(response.statusText);
            }

            return response.json() as Promise<R>;
        })
        .catch((err: Error) => {
            console.log("error :", err);

            return Promise.reject(err);
        });
}
