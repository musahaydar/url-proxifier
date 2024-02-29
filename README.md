# url-proxifier

url-proxifier is a simple Chrome extension which transforms a URL to use a proxy. Pressing the extension button on a webpage will automatically open the web page using the proxy suffix (for instance, changing `https://link.springer.com/...` to `https://link-springer-com.proxy.lib.umich.edu/...`).

There's no need to use this for UMich's library specifically, since this behavior is already implemented via a [browser bookmark](https://www.lib.umich.edu/find-borrow-request/access-online-resources/remote-access/using-browser-bookmark). To use it with a different proxy, update the url suffix in `popup.js`.

## Installation (Google Chrome Unpacked)

- Open `chrome://extensions`
- Enable the Developer Mode toggle
- Select "Load Unpacked" and navigate to the directory

## Credits

- Icon from [Icons8.com](https://icons8.com/icon/53372/internet)