// Providers:

var REG_NONE = NewRegistrar("none");
var DSP_CLOUDFLARE = NewDnsProvider("cloudflare");
// var DNS_GANDI = NewDnsProvider('gandi', 'GANDI');
// var DNS_DIGITALOCEAN = NewDnsProvider('digitalocean');

var ASTROMEGA = '185.157.233.18';
var ASTROMEGA_6 = '2a07:4580:b0d:e6::578b';

var floating = '68.183.252.225';

var goldfinger = '178.62.68.188';
var goldfinger_6 = '2a03:b0c0:1:d0::fac:6001';

var STANDARD_SPF = TXT('@', 'v=spf1 include:_spf.google.com include:spf.messagingengine.com -all');

// Domains:

D("bustimes.org", REG_NONE,
    DnsProvider(DSP_CLOUDFLARE),
    A("@", "139.59.197.131", CF_PROXY_ON),
    A("goldfinger", goldfinger),
    AAAA("goldfinger", goldfinger_6),

    MX("@", 10, "in1-smtp.messagingengine.com."),
    MX("@", 20, "in2-smtp.messagingengine.com."),

    CNAME("fm1._domainkey", "fm1.bustimes.org.dkim.fmhosted.com."),
    CNAME("fm2._domainkey", "fm2.bustimes.org.dkim.fmhosted.com."),
    CNAME("fm3._domainkey", "fm3.bustimes.org.dkim.fmhosted.com."),

    CNAME("isu7e5pzeqdnygam6qrgexqltkgk3zim._domainkey", "isu7e5pzeqdnygam6qrgexqltkgk3zim.dkim.amazonses.com."),
    CNAME("l2c6onta4s3e7kc4zpu7nxcxaf7cf2t4._domainkey", "l2c6onta4s3e7kc4zpu7nxcxaf7cf2t4.dkim.amazonses.com."),
    CNAME("w7c6u4f7lnkpvxsynviqhxbbrw5xh7ur._domainkey", "w7c6u4f7lnkpvxsynviqhxbbrw5xh7ur.dkim.amazonses.com."),

    TXT("@", "v=spf1 include:spf.messagingengine.com a:goldfinger.bustimes.org include:amazonses.com -all"),
    TXT("goldfinger", "v=spf1 a:goldfinger.bustimes.org -all"),

    TXT("_amazonses", "pPLpf+t+qZfwP+CXJBWtQrgYJx67jSnL1PNoVt2i9C8="),

    CNAME("staging", "monkfish-app-ylehg.ondigitalocean.app."),
    CNAME("status", "stats.uptimerobot.com.", CF_PROXY_ON),
    CNAME("streetlife", "roadworks.me.uk.", CF_PROXY_ON),
    CNAME("transxchange-tools", "ghs.googlehosted.com."),
    CNAME("www", "bustimes.org.", CF_PROXY_ON),

    TXT("@", "ca3-ccdcd31bb15f45fb91cf5b402ad1aa21"),
    TXT("@", "brave-ledger-verification=390cff9e553e5dd216fff2a4d47e7570c6eae545a6bb4303b8d5da74b9c6c749"),
    TXT("@", "google-site-verification=Qn-hbgT7WIIN7YznRuYwwkn8rvWasjYL-mctHxLVDVo"),
END);

D("bustimes.org.uk", REG_NONE,
    DnsProvider(DSP_CLOUDFLARE),
    DefaultTTL(1),
    A("@", "68.183.252.225", CF_PROXY_ON),
    CNAME("fm1._domainkey", "fm1.bustimes.org.uk.dkim.fmhosted.com."),
    CNAME("fm2._domainkey", "fm2.bustimes.org.uk.dkim.fmhosted.com."),
    CNAME("fm3._domainkey", "fm3.bustimes.org.uk.dkim.fmhosted.com."),
    CNAME("www", "bustimes.org.uk.", CF_PROXY_ON),
    MX("@", 10, "in1-smtp.messagingengine.com."),
    MX("@", 20, "in2-smtp.messagingengine.com."),
    TXT("@", "v=spf1 include:spf.messagingengine.com -all"),
END);

D("jclg.uk", REG_NONE,
    DnsProvider(DSP_CLOUDFLARE),
    DefaultTTL(1),
    ALIAS("@", "jclg.pages.dev."),
    CNAME("map", "jclgoodwin.github.io."),
    MX("@", 47, "route3.mx.cloudflare.net."),
    MX("@", 3, "route2.mx.cloudflare.net."),
    MX("@", 75, "route1.mx.cloudflare.net."),
    TXT("@", "\"v=spf1 include:_spf.mx.cloudflare.net ~all\""),
END);

D("redskysnacks.co.uk", REG_NONE,
    DnsProvider(DSP_CLOUDFLARE),
    DefaultTTL(1),
    ALIAS("@", "red-sky.pages.dev.", CF_PROXY_ON),
    CNAME("www", "red-sky.pages.dev.", CF_PROXY_ON),
END);

D("davidlynchcoffee.co.uk", REG_NONE,
    DnsProvider(DSP_CLOUDFLARE),
    DefaultTTL(1),
    ALIAS("@", "davidlynchcoffee.pages.dev.", CF_PROXY_ON),
    CNAME("fm1._domainkey", "fm1.davidlynchcoffee.co.uk.dkim.fmhosted.com."),
    CNAME("fm2._domainkey", "fm2.davidlynchcoffee.co.uk.dkim.fmhosted.com."),
    CNAME("fm3._domainkey", "fm3.davidlynchcoffee.co.uk.dkim.fmhosted.com."),
    CNAME("www", "davidlynchcoffee.pages.dev.", CF_PROXY_ON),
    MX("@", 20, "in2-smtp.messagingengine.com."),
    MX("@", 10, "in1-smtp.messagingengine.com."),
    TXT("@", "v=spf1 include:spf.messagingengine.com ?all"),
END);

D('joshuagoodwin.com', REG_NONE,
    DnsProvider(DSP_CLOUDFLARE),
    ALIAS('@', 'joshuagoodw.in.', CF_PROXY_ON),
    CNAME('*', 'joshuagoodw.in.', CF_PROXY_ON),
    STANDARD_SPF,
    MX('@', 10, 'in1-smtp.messagingengine.com.'),
    MX('@', 20, 'in2-smtp.messagingengine.com.')
);

D("joshuagoodw.in", REG_NONE,
    DnsProvider(DSP_CLOUDFLARE),
    A("astromega", ASTROMEGA),
    AAAA("astromega", ASTROMEGA_6),
    CNAME("fm1._domainkey", "fm1.joshuagoodw.in.dkim.fmhosted.com."),
    CNAME("fm2._domainkey", "fm2.joshuagoodw.in.dkim.fmhosted.com."),
    CNAME("fm3._domainkey", "fm3.joshuagoodw.in.dkim.fmhosted.com."),
    ALIAS("@", "joshuagoodw-in.pages.dev.", CF_PROXY_ON),
    CNAME("www", "joshuagoodw.in.", CF_PROXY_ON),
    MX("@", 10, "in1-smtp.messagingengine.com."),
    MX("@", 20, "in2-smtp.messagingengine.com."),
    TXT("@", "v=spf1 include:spf.messagingengine.com a:astromega.joshuagoodw.in -all"),
    TXT("@", "google-site-verification=swE7yOczprWYM5AVzFarzB_Xiy128k5gn3_S9C2Uxls"),
END);
