Providers:

var REG_NONE = NewRegistrar('none', 'NONE');
var DNS_CLOUDFLARE = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI');

var SOLO = '85.159.213.230';
var ASTROMEGA = '185.157.233.18';
var ASTROMEGA_6 = '2a07:4580:b0d:e6::578b';

// Domains:

D('bustimes.org.uk', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    A('@', SOLO),
    A('solo', SOLO),
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
    CNAME('www', 'alexisgoodwin.com.', {cloudflare_proxy: 'on'}),
    MX('@', 10, 'mail.alexisgoodwin.com.')
);

D('joshuagoodw.in', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    AAAA('astromega', ASTROMEGA_6),
    AAAA('@', ASTROMEGA_6),
    A('astromega', ASTROMEGA),
    A('@', ASTROMEGA),
    CNAME('*', 'joshuagoodw.in.'),
    CNAME('subtitles', 'bustimes.org.uk.'),
    TXT('@', 'v=spf1 include:_spf.google.com a:solo.bustimes.org.uk a:astromega.joshuagoodw.in -all'),
    MX('@', 10, 'joshuagoodw.in.')
);
