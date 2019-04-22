const baseUrl = "//localhost:9999";

const getQueryParams = params =>
  `?${Object.keys(params)
    .map(k => `${k}=${params[k]}`)
    .join("&")}`;

const getUrl = options =>
  `${baseUrl}${options.action}${options.queryParams ? getQueryParams(options.queryParams) : ""}`;

export default (action, { method, queryParams, data } = {}) =>
	fetch(
		getUrl({action, queryParams}),
		{
			method: method || "GET",
			headers: {
				"Content-Type": "application/json",
			},
			body: data ? JSON.stringify(data) : null,
		}
	)
		.then((response) => response.json());
