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



  // new Promise(resolve => {
  //   var xhr = new XMLHttpRequest();
  //   const options = { action, queryParams };
  //   const url = getUrl(options);
  //
  //   xhr.onreadystatechange = function() {
  //     if (xhr.readyState !== 4) return; // return if unseccussful
  //
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       resolve(JSON.parse(xhr.responseText));
  //     }
  //   };
  //
  //   xhr.open(method || "GET", url);
  //   xhr.send(JSON.stringify(bodyParams));
  // });
