chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url_arr = tabs[0].url.split("/");
    let domain = url_arr[2];

    domain = domain.replaceAll(".", "-");

    // URL proxy suffix here
    domain += ".proxy.lib.umich.edu";

    url_arr[2] = domain;
    
    let new_url = url_arr[0] + "//";
    let skip = false;
    url_arr.forEach(url_substr => {
        if (!skip) {
            skip = true;
        } else {
            new_url += url_substr + "/";
        }
    });
    
    chrome.tabs.update(undefined, { url: new_url });
});
