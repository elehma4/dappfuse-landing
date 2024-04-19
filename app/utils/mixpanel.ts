window.onload = function() {
    let r = new URL(document.referrer || document.location.href);
    let q = location.search;
    q.length == 0 ? q = "?ref=" + r.hostname : q = q + "&ref=" + r.hostname;
    var url = "https://ops.dappfuse.com/web/t" + q;
    fetch(url, { credentials: 'include' });
};
