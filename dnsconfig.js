// Providers:

var REG_NONE = NewRegistrar('none', 'NONE');
var DNS_CLOUDFLARE = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI');
var DNS_GANDI = NewDnsProvider('gandi', 'GANDI');

var ASTROMEGA = '185.157.233.18';
var ASTROMEGA_6 = '2a07:4580:b0d:e6::578b';

var floating = '68.183.252.225';
var rapta = '209.97.129.56';
var rapta_6 = '2a03:b0c0:1:e0::3e1:3001';
var mongoose = '68.183.34.157';
var mongoose_6 = '2a03:b0c0:1:e0::5cf:b001';

var BUSTIMES_SPF = TXT('@', 'v=spf1 include:_spf.google.com include:spf.messagingengine.com a:rapta.bustimes.org a:solera.bustimes.org -all');
var STANDARD_SPF = TXT('@', 'v=spf1 include:_spf.google.com include:spf.messagingengine.com a:astromega.joshuagoodw.in a:mongoose.bus.photos -all');

// Domains:

D('hygieneratings.co.uk', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    A('@', '157.245.33.90'),
    AAAA('@', '2a03:b0c0:1:e0::23e:e001'),
    CNAME('www', 'hygieneratings.co.uk.'),
    CNAME('basil', 'hygieneratings.co.uk.')
);

D('bustimes.org.uk', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    A('@', floating),
    AAAA('@', rapta_6),
    CNAME('www', 'bustimes.org.uk.'),
    BUSTIMES_SPF,
    MX('@', 10, 'in1-smtp.messagingengine.com.'),
    MX('@', 20, 'in2-smtp.messagingengine.com.'),
    CNAME('fm1._domainkey', 'fm1.bustimes.org.uk.dkim.fmhosted.com.'),
    CNAME('fm2._domainkey', 'fm2.bustimes.org.uk.dkim.fmhosted.com.'),
    CNAME('fm3._domainkey', 'fm3.bustimes.org.uk.dkim.fmhosted.com.')
);

D('bustim.es', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    A('@', floating),
    AAAA('@', rapta_6),
    CNAME('www', 'bustim.es.'),
    CNAME('api', 'd2mjppkdxq1joc.cloudfront.net.'),
    BUSTIMES_SPF,
    MX('@', 10, 'in1-smtp.messagingengine.com.'),
    MX('@', 20, 'in2-smtp.messagingengine.com.')
);

D('bustimes.org', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    A('@', floating),
    AAAA('@', rapta_6),
    A('rapta', rapta),
    AAAA('rapta', rapta_6),
    CNAME('www', 'bustimes.org.'),
    A('solera', '142.93.40.224'),
    TXT('@', 'google-site-verification=Qn-hbgT7WIIN7YznRuYwwkn8rvWasjYL-mctHxLVDVo'),
    BUSTIMES_SPF,
    MX('@', 10, 'in1-smtp.messagingengine.com.'),
    MX('@', 20, 'in2-smtp.messagingengine.com.')
);

D('bustimes.io', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    A('@', floating),
    AAAA('@', rapta_6),
    CNAME('www', 'bustimes.io.'),
    TXT('@', 'google-site-verification=uLP7Vt-vsgfEUmauz7KLEoTyZVwjMCytWxIRvA73oKQ'),
    BUSTIMES_SPF,
    MX('@', 10, 'in1-smtp.messagingengine.com.'),
    MX('@', 20, 'in2-smtp.messagingengine.com.')
);

D('joshuagoodw.in', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    A('@', ASTROMEGA),
    AAAA('@', ASTROMEGA_6),
    A('astromega', ASTROMEGA),
    AAAA('astromega', ASTROMEGA_6),
    CNAME('*', 'joshuagoodw.in.'),
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
    A('@', mongoose),
    AAAA('@', mongoose_6),
    CNAME('www', 'supermarketmarket.co.uk.'),
    TXT('@', 'google-site-verification=Lo7vOAWM5ruYz4la5EtBOyljWncFU1_jgs4dodt3P98'),
    STANDARD_SPF,
    MX('@', 10, 'in1-smtp.messagingengine.com.'),
    MX('@', 20, 'in2-smtp.messagingengine.com.')
);
