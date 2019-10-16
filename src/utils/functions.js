function field_filter(key) {
    return [
        "depositor",
        "title",
        "resource_type",
        "part_of",
        "label",
        "creator"
    ].includes(key);
}

function facet_filter(key) {
    return [
        "Type",
        "Creator",
        "Contributor",
        "Keyword",
        "Subject",
        "Languague",
        "Based Near Label",
        "Publisher",
        "File Format",
        "Collections",
        "Date Created"
    ].includes(key);
}

function getAllUrlParams(url) {    
    // get query string from url (optional) or window
    var queryString = url ? url.split("?")[1] : window.location.search.slice(1);

    // we'll store the parameters here
    var params = {};

    // if query string exists
    if (queryString) {
        // stuff after # is not part of query string, so get rid of it
        queryString = queryString.split("#")[0];

        // split our query string into its component parts
        var arr = queryString.split("&");

        for (var i = 0; i < arr.length; i++) {
            // separate the keys and the values
            var a = arr[i].split("=");

            // in case params look like: list[]=thing1&list[]=thing2
            var paramNum = undefined;
            var paramName = a[0].replace(/\[\d*\]/, function (v) {
                paramNum = v.slice(1, -1);
                return "";
            });

            // set parameter value (use 'true' if empty)
            var paramValue = typeof a[1] === "undefined" ? true : a[1];

            // (optional) keep case consistent
            // paramName = paramName.toLowerCase();
            // paramValue = paramValue.toLowerCase();
            paramName = paramName.replace("f%5B", "").replace("%5D%5B%5D", "");

            // if parameter name already exists
            if (params[paramName]) {
                // convert value to array (if still string)
                if (typeof params[paramName] === "string") {
                    params[paramName] = [params[paramName]];
                }
                // if no array index number specified...
                if (typeof paramNum === "undefined") {
                    // put the value on the end of the array
                    params[paramName].push(paramValue);
                }
                // if array index number specified...
                else {
                    // put the value at that index number
                    params[paramName][paramNum] = paramValue;
                }
            }
            // if param name doesn't exist yet, set it
            else {
                params[paramName] = paramValue;
            }
        }
    }
    return params;
}

function removeParam(key, sourceURL) {
    var rtn = sourceURL.split("?")[0],
        param,
        params_arr = [],
        queryString = sourceURL.indexOf("?") !== -1 ? sourceURL.split("?")[1] : "";
    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        rtn = rtn + "?" + params_arr.join("&");
    }
    return rtn;
}

function remove_solr_sufix(key) {
    key = key.replace("_tesim", "");
    key = key.replace("_ssim", "");
    key = key.replace(" Sim", "");

    return key;
}

function filter_data(datos) {
    for (var i = 0; i < datos.docs.length; i++) {
        Object.keys(datos.docs[i]).forEach(function (key) {
            new_key = remove_solr_sufix(key);

            Object.defineProperty(
                datos.docs[i],
                new_key,
                Object.getOwnPropertyDescriptor(datos.docs[i], key)
            );
            if (key != new_key) delete datos.docs[i][key];
        });
    }

    new_facets = [];

    for (var i = 0; i < datos.facets.length; i++) {
        df = remove_solr_sufix(datos.facets[i]["label"]);
        if (facet_filter(df)) {
            facet = datos.facets[i];
            facet["label"] = df;
            new_facets.push(facet);
        }
    }

    datos.facets = new_facets;

    return datos;
}

function params_exists(url) {
    var lastChars = url.substr(url.length - 5);

    if (lastChars == ".json") {

        return false
    } else {
        return true
    }
}