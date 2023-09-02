type QueryData = {
    [key: string]: any;
}

/*
* Encode query params from key value pair
* @example
* stringifyQuery({active: false})
* => active=false
*
* @param  data - Query Key value pair Object
* @returns {string}
*/
export function stringifySearchParams(data: QueryData) {
    let query = '';

    for (const d in data) {
        query += encodeURIComponent(d) + '=' + encodeURIComponent(data[d] || '') + '&';
    }

    return query.slice(0, -1)
}