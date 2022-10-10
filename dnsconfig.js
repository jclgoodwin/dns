// Providers:

var REG_NONE = NewRegistrar("none");
var DSP_CLOUDFLARE = NewDnsProvider("cloudflare");
// var DNS_GANDI = NewDnsProvider('gandi', 'GANDI');

var ASTROMEGA = '185.157.233.18';
var ASTROMEGA_6 = '2a07:4580:b0d:e6::578b';

var floating = '68.183.252.225';

// var BUSTIMES_SPF = TXT('@', 'v=spf1 include:_spf.google.com include:spf.messagingengine.com a:rapta.bustimes.org a:solera.bustimes.org -all');
// var STANDARD_SPF = TXT('@', 'v=spf1 include:_spf.google.com include:spf.messagingengine.com a:astromega.joshuagoodw.in a:mongoose.bus.photos -all');

// // Domains:

// D('hygieneratings.co.uk', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
//     A('@', '157.245.33.90'),
//     AAAA('@', '2a03:b0c0:1:e0::23e:e001'),
//     CNAME('www', 'hygieneratings.co.uk.'),
//     CNAME('basil', 'hygieneratings.co.uk.')
// );

D('bustimes.org.uk', REG_NONE,
    DnsProvider(DSP_CLOUDFLARE),
    A('@', floating, {"cloudflare_proxy": "on"}),
    CNAME('www', 'bustimes.org.uk.', {"cloudflare_proxy": "on"}),
    TXT("@", "v=spf1 include:spf.messagingengine.com -all"),
    MX('@', 10, 'in1-smtp.messagingengine.com.'),
    MX('@', 20, 'in2-smtp.messagingengine.com.'),
    CNAME('fm1._domainkey', 'fm1.bustimes.org.uk.dkim.fmhosted.com.'),
    CNAME('fm2._domainkey', 'fm2.bustimes.org.uk.dkim.fmhosted.com.'),
    CNAME('fm3._domainkey', 'fm3.bustimes.org.uk.dkim.fmhosted.com.')
);

// D('bustim.es', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
//     A('@', floating),
//     AAAA('@', rapta_6),
//     CNAME('www', 'bustim.es.'),
//     CNAME('api', 'd2mjppkdxq1joc.cloudfront.net.'),
//     BUSTIMES_SPF,
//     MX('@', 10, 'in1-smtp.messagingengine.com.'),
//     MX('@', 20, 'in2-smtp.messagingengine.com.')
// );

D("bustimes.org", REG_NONE,
    DnsProvider(DSP_CLOUDFLARE),
    A('goldfinger', '139.59.175.137'),
    A('gtfs', '168.220.80.213'),
    A('streetlife', '168.220.90.76'),
    A('transxchange-tools', '137.66.5.151'),
    AAAA('gtfs', '2a09:8280:1::6:6065'),
    AAAA('streetlife', '2a09:8280:1::3:6404'),
    AAAA('transxchange-tools', '2a09:8280:1::6d9e'),
    ALIAS('@', 'plankton-app-rxzhu.ondigitalocean.app.'),
    CNAME('fm1._domainkey', 'fm1.bustimes.org.dkim.fmhosted.com.'),
    CNAME('fm2._domainkey', 'fm2.bustimes.org.dkim.fmhosted.com.'),
    CNAME('fm3._domainkey', 'fm3.bustimes.org.dkim.fmhosted.com.'),
    CNAME('isu7e5pzeqdnygam6qrgexqltkgk3zim._domainkey', 'isu7e5pzeqdnygam6qrgexqltkgk3zim.dkim.amazonses.com.'),
    CNAME('l2c6onta4s3e7kc4zpu7nxcxaf7cf2t4._domainkey', 'l2c6onta4s3e7kc4zpu7nxcxaf7cf2t4.dkim.amazonses.com.'),
    CNAME('w7c6u4f7lnkpvxsynviqhxbbrw5xh7ur._domainkey', 'w7c6u4f7lnkpvxsynviqhxbbrw5xh7ur.dkim.amazonses.com.'),
    CNAME('status', 'stats.uptimerobot.com.'),
    CNAME('www', 'bustimes.org.', CF_PROXY_ON),
    MX('@', 10, 'in1-smtp.messagingengine.com.'),
    MX('@', 20, 'in2-smtp.messagingengine.com.'),
    TXT('_amazonses', 'pPLpf+t+qZfwP+CXJBWtQrgYJx67jSnL1PNoVt2i9C8='),
    TXT('@', 'v=spf1 include:spf.messagingengine.com a:goldfinger.bustimes.org include:amazonses.com -all'),
    TXT('@', 'ca3-ccdcd31bb15f45fb91cf5b402ad1aa21'),
    TXT('@', 'brave-ledger-verification=390cff9e553e5dd216fff2a4d47e7570c6eae545a6bb4303b8d5da74b9c6c749'),
    TXT('@', 'google-site-verification=Qn-hbgT7WIIN7YznRuYwwkn8rvWasjYL-mctHxLVDVo')
)

// D('bustimes.io', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
//     A('@', floating),
//     AAAA('@', rapta_6),
//     CNAME('www', 'bustimes.io.'),
//     TXT('@', 'google-site-verification=uLP7Vt-vsgfEUmauz7KLEoTyZVwjMCytWxIRvA73oKQ'),
//     BUSTIMES_SPF,
//     MX('@', 10, 'in1-smtp.messagingengine.com.'),
//     MX('@', 20, 'in2-smtp.messagingengine.com.')
// );


D("joshuagoodw.in", REG_NONE,
    DnsProvider(DSP_CLOUDFLARE),
    A('@', ASTROMEGA),
    A('astromega', ASTROMEGA),
    AAAA('@', ASTROMEGA_6),
    AAAA('astromega', ASTROMEGA_6),
    CNAME('fm1._domainkey', 'fm1.joshuagoodw.in.dkim.fmhosted.com.'),
    CNAME('fm2._domainkey', 'fm2.joshuagoodw.in.dkim.fmhosted.com.'),
    CNAME('fm3._domainkey', 'fm3.joshuagoodw.in.dkim.fmhosted.com.'),
    CNAME('*', 'joshuagoodw.in.'),
    CNAME('tools', 'jclgoodwin.gitlab.io.'),
    MX('@', 10, 'in1-smtp.messagingengine.com.'),
    MX('@', 20, 'in2-smtp.messagingengine.com.'),
    TXT('_gitlab-pages-verification-code.tools', 'gitlab-pages-verification-code=2964b4ad0cb60fb0f5be01e4d3b393b3'),
    TXT('@', 'v=spf1 include:spf.messagingengine.com a:astromega.joshuagoodw.in -all'),
    TXT('@', 'google-site-verification=swE7yOczprWYM5AVzFarzB_Xiy128k5gn3_S9C2Uxls')
)

// D('joshuagoodwin.com', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
//     A('@', ASTROMEGA),
//     AAAA('@', ASTROMEGA_6),
//     CNAME('*', 'joshuagoodw.in.'),
//     CNAME('www', 'joshuagoodw.in.'),
//     STANDARD_SPF,
//     MX('@', 10, 'in1-smtp.messagingengine.com.'),
//     MX('@', 20, 'in2-smtp.messagingengine.com.')
// );

// D('supermarketmarket.co.uk', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
//     A('@', mongoose),
//     AAAA('@', mongoose_6),
//     CNAME('www', 'supermarketmarket.co.uk.'),
//     TXT('@', 'google-site-verification=Lo7vOAWM5ruYz4la5EtBOyljWncFU1_jgs4dodt3P98'),
//     STANDARD_SPF,
//     MX('@', 10, 'in1-smtp.messagingengine.com.'),
//     MX('@', 20, 'in2-smtp.messagingengine.com.')
// );
