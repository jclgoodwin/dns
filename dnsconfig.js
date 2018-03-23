// Providers:

var REG_NONE = NewRegistrar('none', 'NONE');
var DNS_CLOUDFLARE = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI');
var DNS_GANDI = NewDnsProvider('gandi', 'GANDI');

var BEAVER = '176.58.111.55';
var BEAVER_6 = '2a01:7e00::f03c:91ff:fe60:96bb';
var ASTROMEGA = '185.157.233.18';
var ASTROMEGA_6 = '2a07:4580:b0d:e6::578b';
var JONCKHEERE = '94.130.23.252';
var JONCKHEERE_6 = '2a01:4f8:10b:1d03::2';

var STANDARD_SPF = TXT('@', 'v=spf1 include:_spf.google.com a:bustimes.org.uk a:astromega.joshuagoodw.in include:spf.messagingengine.com -all');

// Domains:

D('bustimes.org.uk', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    A('@', JONCKHEERE),
    AAAA('@', JONCKHEERE_6),
    CNAME('www', 'bustimes.org.uk.'),
    STANDARD_SPF,
    MX('@', 10, 'in1-smtp.messagingengine.com.'),
    MX('@', 20, 'in2-smtp.messagingengine.com.'),
    CNAME('fm1._domainkey', 'fm1.bustimes.org.uk.dkim.fmhosted.com.'),
    CNAME('fm2._domainkey', 'fm2.bustimes.org.uk.dkim.fmhosted.com.'),
    CNAME('fm3._domainkey', 'fm3.bustimes.org.uk.dkim.fmhosted.com.')
);

D('bustim.es', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    A('@', JONCKHEERE),
    AAAA('@', JONCKHEERE_6),
    CNAME('www', 'bustimes.org.uk.'),
    CNAME('api', 'd2mjppkdxq1joc.cloudfront.net.'),
    STANDARD_SPF,
    MX('@', 10, 'in1-smtp.messagingengine.com.'),
    MX('@', 20, 'in2-smtp.messagingengine.com.')
);

D('bustimes.org', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    A('@', JONCKHEERE),
    AAAA('@', JONCKHEERE_6),
    CNAME('www', 'bustimes.org.uk.'),
    TXT('@', 'google-site-verification=Qn-hbgT7WIIN7YznRuYwwkn8rvWasjYL-mctHxLVDVo'),
    STANDARD_SPF,
    MX('@', 10, 'in1-smtp.messagingengine.com.'),
    MX('@', 20, 'in2-smtp.messagingengine.com.')
);

D('bustimes.io', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    A('@', JONCKHEERE),
    AAAA('@', JONCKHEERE_6),
    CNAME('www', 'bustimes.org.uk.'),
    TXT('@', 'google-site-verification=uLP7Vt-vsgfEUmauz7KLEoTyZVwjMCytWxIRvA73oKQ'),
    STANDARD_SPF,
    MX('@', 10, 'in1-smtp.messagingengine.com.'),
    MX('@', 20, 'in2-smtp.messagingengine.com.')
);

D('joshuagoodw.in', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    A('@', ASTROMEGA),
    AAAA('@', ASTROMEGA_6),
    A('astromega', ASTROMEGA),
    AAAA('astromega', ASTROMEGA_6),
    A('beaver', BEAVER),
    AAAA('beaver', BEAVER_6),
    A('munin', JONCKHEERE),
    AAAA('munin', JONCKHEERE_6),
    A('jonckheere', JONCKHEERE),
    AAAA('jonckheere', JONCKHEERE_6),
    CNAME('*', 'joshuagoodw.in.'),
    CNAME('subtitles', 'bustimes.org.uk.'),
    CNAME('tools', 'jclgoodwin.gitlab.io.'),
    TXT('@', 'google-site-verification=swE7yOczprWYM5AVzFarzB_Xiy128k5gn3_S9C2Uxls'),
    TXT('_gitlab-pages-verification-code.tools', 'gitlab-pages-verification-code=2964b4ad0cb60fb0f5be01e4d3b393b3'),
    STANDARD_SPF,
    MX('@', 10, 'in1-smtp.messagingengine.com.'),
    MX('@', 20, 'in2-smtp.messagingengine.com.'),
    CNAME('fm1._domainkey', 'fm1.joshuagoodw.in.dkim.fmhosted.com.'),
    CNAME('fm2._domainkey', 'fm2.joshuagoodw.in.dkim.fmhosted.com.'),
    CNAME('fm3._domainkey', 'fm3.joshuagoodw.in.dkim.fmhosted.com.')
);

D('joshuagoodwin.com', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    A('@', ASTROMEGA),
    AAAA('@', ASTROMEGA_6),
    CNAME('*', 'joshuagoodw.in.'),
    CNAME('www', 'joshuagoodw.in.'),
    STANDARD_SPF,
    MX('@', 10, 'in1-smtp.messagingengine.com.'),
    MX('@', 20, 'in2-smtp.messagingengine.com.')
);

D('supermarketmarket.co.uk', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    A('@', JONCKHEERE),
    AAAA('@', JONCKHEERE_6),
    CNAME('www', 'supermarketmarket.co.uk.'),
    TXT('@', 'google-site-verification=Lo7vOAWM5ruYz4la5EtBOyljWncFU1_jgs4dodt3P98'),
    STANDARD_SPF,
    MX('@', 10, 'in1-smtp.messagingengine.com.'),
    MX('@', 20, 'in2-smtp.messagingengine.com.')
);
