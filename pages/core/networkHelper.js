import axios from 'axios';

export default class NetworkHelper {
    static requestPost(url, params, header = null) {
        return NetworkHelper.requestHttp('POST', url, params, header);
    }

    static requestGet(url, headers = null, params = null) {
        return NetworkHelper.requestHttp('GET', url, params, headers);
    }

    static requestPut(url, params, headers = null) {
        return NetworkHelper.requestHttp('PUT', url, params, headers);
    }

    static requestPatch(url, params, headers = null) {
        return NetworkHelper.requestHttp('PATCH', url, params, headers);
    }

    static requestDelete(url, params, headers = null) {
        return NetworkHelper.requestHttp('DELETE', url, params, headers);
    }
    static requestHttp(method, url, params, headers = null) {
        return new Promise((resolve, reject) => {
            let headersNew = {
                Accept: 'application/json',
                'Content-Type':
                    url.includes('upload') || url.includes('user/image')
                        ? `multipart/form-data; ; boundary=${params._boundary}`
                        : 'application/json',
            };
            let options = {
                method,
                url,
                headers: headersNew,
            };
            if (headers) {
                delete options.headers;
            }
            if (params) {
                if (method === 'GET') {
                    options.params = params;
                } else {
                    options.data = params;
                }
            }
            axios(options)
                .then(response => {
                    resolve({ code: response.data.code, body: response.data });
                })
                .catch(error => {
                    if (error.response !== undefined) {
                        resolve({
                            code: error.response.status,
                            body: error.response.data,
                        });
                    } else {
                        reject('Can not connect to server');
                    }
                });
        });
    }
}
