var path = require("path");

/**
 * POST /web2/tramp2.exe/form/A04283hg.000
 *
 * accept: application/json, text/plain, * / *
 * content-type: application/x-www-form-urlencoded
 * user-agent: axios/0.19.0
 * content-length: 273
 * host: catalogues.toulouse.fr
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jan 2020 22:53:49 GMT");
  res.setHeader("server", "Microsoft-IIS/6.0");
  res.setHeader("content-type", "text/html");
  res.setHeader("x-powered-by", "ASP.NET");
  res.setHeader("via", "1.1 catalogues.toulouse.fr");
  res.setHeader("connection", "close");
  res.setHeader("transfer-encoding", "chunked");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("PGh0bWw+CjwhLS1Db3B5cmlnaHQgMTk5Ny0yMDAzLCBTaXJzaSBDb3Jwb3JhdGlvbi4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuICBSZW1vdmFsIG9mIHRoaXMgbm90aWNlIHZpb2xhdGVzIGFwcGxpY2FibGUgbGF3cy4tLT4KPCEtLVRvdXMgZHJvaXRzIHLpc2VydulzIDE5OTYtMjAwMyBDb3Jwb3JhdGlvbiBTaXJzaS4gVG91cyBkcm9pdHMgculzZXJ26XMuICBMYSBzdXBwcmVzc2lvbiBkdSBsb2dvIG91IGR1IG5vbSBkZSBTaXJzaSBlc3QgdW5lIHZpb2xhdGlvbiBkdSBkcm9pdCBkJ2F1dGV1ci4tLT4KPCEtLUNvcHlyaWdodCBDb3Jwb3JhY2nzbiBTaXJzaSwgMTk5Ni0yMDAzLiBUb2RvcyBsb3MgZGVyZWNob3MgcmVzZXJ2YWRvcy4gTGEgc3VwcmVzafNuIGRlbCBwcmVzZW50ZSBhdmlzbyByZXByZXNlbnRhIHVuYSBpbmZyYWNjafNuIGRlIGxhIGxleSB2aWdlbnRlIGRlIGRlcmVjaG9zIGRlIGF1dG9yLi0tPgo8IS0tLS0gIC9CYWRTZXNzaW9uLmh0bWwgIC0tLS0+CjwhLS0tLSAgVGhpcyBzY3JlZW4gaXMgTk9UIGludGVycHJldGVkIGJ5IFdlYjIuZXhlLiAgLS0tLT4KPCEtLS0tICBUaGVyZWZvcmUsIE5PIFdlYjIgTWFjcm9zIG1heSBiZSB1c2VkIGhlcmUuICAtLS0tPgo8SEVBRD4KPFRJVExFPlNlc3Npb24gaGFzIGV4cGlyZWQgKFNlc3Npb24gZXhwaXImZWFjdXRlO2UpIChTZXNpJm9hY3V0ZTtuIHRlcm1pbmFkYSkgLS0gV2ViMgo8L3RpdGxlPgo8L2hlYWQ+CjxCT0RZPgpZb3VyIFdlYjIgc2Vzc2lvbiBoYXMgZXhwaXJlZC4gIFBsZWFzZSA8YSBocmVmPSIvaHRtbC9XZWxjb21lLmh0bWwiPiBDbGljayBoZXJlPC9hPiB0byByZXR1cm4gdG8gdGhlIG1haW4gc2NyZWVuLgo8QlI+ClZvdHJlIHNlc3Npb24gV2ViMiBlc3QgZXhwaXImZWFjdXRlO2UuICBWZXVpbGxleiA8YSBocmVmPSIvaHRtbC9XZWxjb21lLmh0bWwiPiBjbGlxdWVyIGljaTwvYT4gcG91ciByZXRvdXJuZXIgJmFncmF2ZTsgbCcmZWFjdXRlO2NyYW4gcHJpbmNpcGFsLgo8QlI+ClN1IHNlc2kmb2FjdXRlO24gV2ViMiBoYSB0ZXJtaW5hZG8uICBQb3IgZmF2b3IgPGEgaHJlZj0iL2h0bWwvV2VsY29tZS5odG1sIj4gaGFnYSBjbGljIGFxdSZpYWN1dGU7PC9hPiBwYXJhIHJlZ3Jlc2FyIGEgbGEgcGFudGFsbGEgaW5pY2lhbC4KPC9ib2R5Pgo8L2h0bWw+Cg==", "base64"));
  res.end();

  return __filename;
};
