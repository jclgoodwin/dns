// Providers:

var REG_NONE = NewRegistrar('none', 'NONE');
var DNS_CLOUDFLARE = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI');

var SOLO = '85.159.213.230';
var SOLO_6 = '2a01:7e00::f03c:91ff:febb:b640';
var BEAVER = '176.58.111.55';
var BEAVER_6 = '2a01:7e00::f03c:91ff:fe60:96bb';
var MONTELIMAR = '163.172.176.153';
var ASTROMEGA = '185.157.233.18';
var ASTROMEGA_6 = '2a07:4580:b0d:e6::578b';
var JONCKHEERE = '94.130.23.252';

// Domains:

D('bustimes.org.uk', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    A('@', SOLO),
    A('solo', SOLO),
    AAAA('@', SOLO_6),
    AAAA('solo', SOLO_6),
    CNAME('www', 'bustimes.org.uk.'),
    MX('@', 10, 'astromega.joshuagoodw.in.'),
    TXT('@', 'v=spf1 include:_spf.google.com a:bustimes.org.uk a:astromega.joshuagoodw.in -all')
);

D('bustim.es', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    A('@', SOLO),
    CNAME('api', 'd2mjppkdxq1joc.cloudfront.net.'),
    CNAME('www', 'bustim.es.'),
    MX('@', 1, 'astromega.joshuagoodw.in.')
);

D('alexisgoodwin.com', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    A('@', ASTROMEGA),
    A('mail', '79.170.40.74'),
    CNAME('www', 'alexisgoodwin.com.'),
    MX('@', 10, 'mail.alexisgoodwin.com.')
);

D('joshuagoodw.in', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    A('@', ASTROMEGA),
    A('astromega', ASTROMEGA),
    AAAA('@', ASTROMEGA_6),
    AAAA('astromega', ASTROMEGA_6),
    A('beaver', BEAVER),
    AAAA('beaver', BEAVER_6),
    A('montelimar', MONTELIMAR),
    A('montélimar', MONTELIMAR),
    A('munin', MONTELIMAR),
    A('jonckheere', JONCKHEERE),
    CNAME('*', 'joshuagoodw.in.'),
    CNAME('subtitles', 'bustimes.org.uk.'),
    MX('@', 10, 'joshuagoodw.in.'),
    TXT('@', 'v=spf1 include:_spf.google.com a:solo.bustimes.org.uk a:astromega.joshuagoodw.in -all')
);

D('joshuagoodwin.com', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    A('@', ASTROMEGA),
    CNAME('*', 'joshuagoodw.in.'),
    CNAME('www', 'joshuagoodw.in.'),
    MX('@', 10, 'spool.mail.gandi.net.'),
    MX('@', 50, 'fb.mail.gandi.net.')
);

D('supermarketmarket.co.uk', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    A('@', JONCKHEERE),
    CNAME('www', 'supermarketmarket.co.uk.'),
    TXT('@', 'google-site-verification=Lo7vOAWM5ruYz4la5EtBOyljWncFU1_jgs4dodt3P98')
);
