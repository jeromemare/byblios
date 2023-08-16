const page = `<HTML>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<!--/U_ENG_iFILES/AuthorityReDirect.html-->


<HEAD>

	<style type="text/css">


.icon_hit img {
width: 25px;
float:left;
margin: 0px 0px 0px 0px;
position: relative;
top: 0px;
left: -4px;

}


.icon_bg1 {
width: 38px;
height: 28px;
padding: 5px 0px 0px 0px;
background-image: url(/html/BMT1_iFiles/Graphics/babelio/icon_bg.gif);
background-repeat: no-repeat;
background-position: center;
text-align: center;
}

#exemplaire_titre {
float:left;
font-size: 12px;
font-style:italic;

font-family: Arial Unicode MS;
}

#exemplaire_bib {
float:left;
font-weight: bold;
font-size: 12px;
font-family: Arial Unicode MS;
}


/*--------------------------------------------------------------------------------------------------------------*/
/*--- NOS SUGGESTIONS : ALL_HAVE_READ ---*/


div.total div.pagecontainer3pg table.table_sg {
	margin:0;
	}


div.mepTexte div.mepFeuilletoire div.mepListe  {
width: 99%;
position: relative;
float: left;
font-size: 12px;
font-family:Arial Unicode MS, Helvetica, sans-serif;
font-weight:normal;
margin: 3px 0px 3px 0px;
padding: 2px;
color: #45100d;
}

.titre_suggestion {
	font-size: 28px;
	font-family:Arial Unicode MS, Helvetica, sans-serif;
	font-weight:normal;
	font-variant:small-caps;
	margin: 3px 0px 3px 0px;
	padding: 15px 0 30px 0;
	text-align:center;
	color: #660000;
	}

.texte_suggestion {
font-size: 14px;
font-family:Arial Unicode MS, Helvetica, sans-serif;
font-weight:normal;
margin: 3px 0px 3px 0px;
padding: 5px;
color: #45100d;
}
.feulletoireGauche {
font-size: 14px;
font-family:Arial Unicode MS, Helvetica, sans-serif;
font-weight:normal;
width:200px;
margin: 5px 5px 5px 5px;
padding: 5px;
vertical-align:middle;
border:#660000 solid 1px ;
color: #45100d;
}
.feulletoireMilieu {
font-size: 14px;
font-family:Arial Unicode MS, Helvetica, sans-serif;
font-weight:normal;
width:200px;
text-align:center ;
margin: 5px 5px 5px 5px;
padding: 5px;
vertical-align:middle;
border:none;
color: #45100d;

}
.feulletoireDroite {
font-size: 14px;
font-family:Arial Unicode MS, Helvetica, sans-serif;
font-weight:normal;
width:300px;
margin: 5px 5px 5px 5px;
padding: 5px;
vertical-align:middle;
border:#660000  solid 1px;
color: #45100d;
}

.texteGauche,
.listeGauche {
	width:100px;
	margin: 5px 5px 5px 5px;
	padding: 20px;
	vertical-align:middle;
	border:none;
	}


.texteDroite,
.listeDroite {
	font-size: 14px;
	font-family:Arial Unicode MS, Helvetica, sans-serif;
	font-weight:normal;
	width:400px;
	margin: 5px 5px 5px 5px;
	padding: 20px;
	vertical-align:middle;
	border:#660000  solid 1px;
	color: #45100d;
	}

/* .permalien_sg, .permalien_sg a */

.permalien_sg {
	border-top: 1px solid #333333;
	margin: 30px 0 0 0;
	padding: 0px 0px 0px 0px;
	font-family:Arial Unicode MS, Helvetica, sans-serif;
	text-align: center;
	font-size: 12px;
	color: #660000;
	}

/* Ajout YA 24/01/2017 alignement image et texte dans pages de sélection */
td > a:nth-of-type(1) > img[src^="/html/BMT1_iFiles/Graphics/suggestion/"] {
	vertical-align: middle;
	margin-bottom: 5px;
	margin-top: 5px;
	}
td > a ~ a:nth-of-type(1n+2) > img[src^="/html/BMT1_iFiles/Graphics/suggestion/"] {
	vertical-align: middle;
	margin-bottom: 5px;
	}
/* Fin Ajout YA 05/10/2017 alignement image et texte dans pages de sélection */

/* Ajout YA 05/10/2017 alignement image et texte dans les pages Rendez-vous Toulousains */
div.texteMUS > a[href*="BMT1?screen=Selections/"]:nth-of-type(1) > img[src^="/html/BMT1_iFiles/Graphics/suggestion/"] {
  vertical-align: middle;
  margin-bottom: 5px;
  margin-top: 5px;
  }
div.texteMUS > [href*="BMT1?screen=Selections/"]:nth-of-type(1n+2) > img[src^="/html/BMT1_iFiles/Graphics/suggestion/"] {
  vertical-align: middle;
  margin-bottom: 5px;
  }
/* Fin Ajout YA 24/01/2017 alignement image et texte dans les pages Rendez-vous Toulousains */

/*--------------------------------------------------------------------------------------------------------------*/
/*--- NOS SUGGESTIONS : NOTICE ---*/

body,
body.bodystyle {
margin: 0;
padding: 0;
background-color: #F5F5F5;
/*background-image: url(/html/BMT1_iFiles/Graphics/css/fond_inter_full.jpg);
background-repeat: no-repeat;
background-position: top;*/
<!--font-family: trebuchet MS, Arial Unicode MS, trebuchet MS, Helvetica, sans-serif;-->
font-size: small;
font-family: Arial Unicode MS, trebuchet MS, Helvetica, sans-serif;
color: #333333;
line-height: 18px;
}


div.total div.pagecontainer table td.babeltheq {
font-size: small;
text-align: center;
padding: 0px;
color: #660000;
margin: -50px 0px 0px 0px;
margin-left: 150px;
background-color: #F5F5F5;
border: 1px solid #333333;
}

a {
color: #000000;
}

form,
fieldset {
margin: 0;
padding: 0;
border: none;
}
legend,
caption {
display: none;
}
ul,
ul li {
margin: 0;
padding: 0;
list-style: none;
}
img {
border: none;
}
/*--------------------------------------------------------------------------------------------------------------*/
/*--- CENTRAGE ---*/
div.centrage {
width: 100%;
text-align: center;
float: left;
background-image: url(/html/BMT1_iFiles/Graphics/css/fond_content_full.gif);
background-repeat: repeat-y;
background-position: top;
}

/*--------------------------------------------------------------------------------------------------------------*/
/*--- TOTAL ---*/


div.total {
	width: 975px;
	position: relative;
	margin: auto;
	text-align: left;
	background-color:inherit;
	}

div.total a {
	text-decoration: none;
	}

/*--------------------------------------------------------------------------------------------------------------*/
a.sautraccourci {
position: absolute;
left: -5000px;
display: none;
}
/*--------------------------------------------------------------------------------------------------------------*/
div.total div.pagecontainer3pg {
width: 99%;
position: relative;
/*top: 200px;*/
float: left;
}
/*--------------------------------------------------------------------------------------------------------------*/
div.total div.home {
width: 100%;
position: relative;
float: left;
background-color:inherit;
}

/*--------------------------------------------------------------------------------------------------------------*/
div.total div.pagecontainer {
/*width: 99%;*/
position: relative;
float: left;
}

/*--------------------------------------------------------------------------------------------------------------*/
div.total div.searchservices {
width: 99%;
position: relative;
float: left;
}

/*--------------------------------------------------------------------------------------------------------------*/
/*--  BANDEAU  --*/

/*div.bandeau {
background-image: url(/html/BMT1_iFiles/Graphics/css/fond_inter_full.jpg);
background-repeat: no-repeat;
background-position: top;
}

div.bandeau a {
text-decoration: none;
}*/

/*---------------------------------------------------------------------*/

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v6/zhcz-_WihjSQC0oHJ9TCYBsxEYwM7FgeyaSgU71cLG0.woff) format('woff');
}
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v6/IQHow_FEYlDC4Gzy_m8fcgFhaRv2pGgT5Kf0An0s4MM.woff) format('woff');
}

div.surbandeau {
	height: 189px;
	background-image: url(/html/BMT1_iFiles/Graphics/css/bg-header_01.png);
	background-attachment: scroll;
	background-repeat: repeat-x;
	/*background-position-x: center;
	background-position-y: top;*/
	background-size: auto;
	background-origin: padding-box;
	background-clip: border-box;
	background-color: transparent;
	font-family: "Montserrat",sans-serif;
	text-align: center;
	z-index: 10;
	}

div.surbandeau div.conteneur {
	position: relative;
	height: 125px;
	padding: 0 15px 0 15px;
	}

div.surbandeau div.conteneur a.home {
	display: block;
	float: left;
	margin: 45px 0 0 15px;
	width: 204px;
	height: 65px;
	background-image: url("/html/BMT1_iFiles/Graphics/css/catalogue-logo.png");
	}

div.surbandeau div.conteneur img.logo {
	float: left;
	margin: 45px 0 0 15px;
	}

div.surbandeau div.conteneur div.conteneurlien {
	position: absolute;
	float: left;
	top: 0;
	left: 75%;
	width: 25%;
	padding: 0 15px 0 15px;
	}

div.surbandeau div.conteneur div.conteneurlien a {
	float: right;
	display: block;
	margin: 0 15px 0 0;
	text-decoration: none;
	font-family: "Montserrat",sans-serif;
	font-size: small;
	}

div.surbandeau div.conteneur div.conteneurlien a span {
	border-width: 0 0 5px 0;
	border-style: solid;
	border-color: #bdaf72;
	height: 28px;
	}

div.surbandeau div.conteneur div.conteneurlien a.rosalis {
	width: 55px;
	color: #000;
	padding: 0px 15px 0 0px;
	}



div.surbandeau div.conteneur div.conteneurlien a.rosalis span {
	display: block;
	width: 55px;
	background-image: url(/html/BMT1_iFiles/Graphics/css/rosalis_02.png);
	background-attachment: scroll;
	background-repeat: no-repeat;
	background-size: auto;
	background-origin: padding-box;
	background-position: center center;
	background-clip: border-box;
	background-color: #a79544;
	}

div.surbandeau div.conteneur div.conteneurlien a.site {
	width: 55px;
	color: #000;
	}

div.surbandeau div.conteneur div.conteneurlien a.site span {
	display: block;
	width: 55px;
	background-image: url(/html/BMT1_iFiles/Graphics/css/m_bibliotheques.jpg);
	background-attachment: scroll;
	background-repeat: no-repeat;
	background-size: auto;
	background-origin: padding-box;
	background-position: center center;
	background-clip: border-box;
	background-color: #a79544;
	}

div.surbandeau img.catalogue {
	float: right;
	width: 149px;
	height: 165px;
	margin-right: 26px;
	}

div.total div.surbandeau img.cataloguemobile {
	float: right;
	width: 33px;
	margin-right: 170px;
	}

div.total div.surbandeau img.langue {
	position: absolute;
	top: 0%;
	right: 33%;
	padding: 0px 0px 0px 0px;
	border-left: 1px solid #808080 ;
	border-top: 1px solid #808080 ;
	border-bottom: 1px solid #F5F5F5;
	border-right: 1px solid #808080 ;
	background-color: #F5F5F5 ;
	}

div.total div.surbandeau form input.braille {
	position: absolute;
	top: 70px;
	left: 70px;
	width: 250px;
	height: 23px;
	padding: 0px 0px 0px 0px;
	text-align: center;
	margin: 0px 1px 0px 1px;
	border-left: 1px solid #808080 ;
	border-bottom: 1px solid #F5F5F5;
	border-top: 10px solid #808080 ;
	border-right: 1px solid #808080 ;
	background-color: #F5F5F5 ;
	background-image: url(/html/BMT1_iFiles/Graphics/css/malvoyant.gif);
	background-repeat:no-repeat;
	color: #F5F5F5;
	}

div.total div.surbandeau form input.bienvoyant {
	position: absolute;
	top: 22px;
	left: 200px;
	width: 40px;
	height: 23px;
	padding: 0px 0px 0px 0px;
	text-align: center;
	margin: 0px 1px 0px 1px;
	border-left: 10px solid #808080 ;
	border-bottom: 1px solid #F5F5F5;
	border-top: 1px solid #808080 ;
	border-right: 1px solid #808080 ;
	background-color: #F5F5F5 ;
	background-image: url(/html/BMT1_iFiles/Graphics/css/bienvoyant.gif);
	background-repeat:no-repeat;
	color: #F5F5F5;
	}

/*---------------------------------------------------------------------*/

div.surbandeau div.conteneur div.intermediaire {
	position: absolute;
	top: 28px;
	left: 40.121%;
	width: 205px;
	}

div.surbandeau div.conteneur div.intermediaire span a {
	float: left;
	margin: 0 15px 0 0;
	width: 21px;
	height: 21px;
	}

div.surbandeau div.conteneur div.intermediaire span.bmtj a {
	background-image: url("/html/BMT1_iFiles/Graphics/css/bmtj.jpg");
	}

div.surbandeau div.conteneur div.intermediaire span.english a {
	background-image: url("/html/BMT1_iFiles/Graphics/css/english.jpg");
	}

div.surbandeau div.conteneur div.intermediaire span.mobile a {
	background-image: url("/html/BMT1_iFiles/Graphics/css/mobile.jpg");
	}

div.recherche {
	position: absolute;
	top: 75px;
	right: 15px;
	}

div.surbandeau div.recherche form.quicksearch {
	position: relative;
	text-align: right;
	}

div.surbandeau div.recherche form.quicksearch span {
	position: relative;
	top: 0;
	right: 5%;
	display: inline-block;
    border-style: solid;
	border-width: 0 0 1px 0;
	border-color: #A79543;
    height: 27px;
    overflow: hidden;
	}

div.surbandeau div.recherche form.quicksearch span input.requete {
	border: none;
	height: 100%;
	vertical-align: top;
	}

input.topsearch[type="submit"] {
	background-image: url('/html/BMT1_iFiles/Graphics/css/btn-recherche_01.png');
	background-repeat: no-repeat;
	border-style: none;
	height: 27px;
	width: 27px;
	}

/*---------------------------------------------------------------------*/

/*---------------------------------------------------------------------*/
div.mmenu {
	position: relative;
	width : 100%;
	height:54px;
	background-image: url(/html/BMT1_iFiles/Graphics/css/trame-menu_01.png);
	background-repeat: repeat-x;
	background-attachment: scroll;
	text-align: center;
	line-height:normal;
	color:white;
	}

div.mmenu div.mmenu-conteneur {
	position: relative;
	height: 53px;
	padding-right: 0; /*15px envoir Mon compte à la ligne*/
	padding-left: 0; /*15px envoir Mon compte à la ligne*/
	margin-right: auto;
	margin-left: auto;
	}

div.mmenu div.mmenu-conteneur a {
	display: inline-block;
	color: #FFF;
	text-decoration: none;
	font-size: medium;
	text-transform: uppercase;
	height: 53px;
	padding: 15px 18px 0px;
	box-sizing: border-box;
	}

div.mmenu div.mmenu-conteneur a:hover {
	background-color: #ED6B2C;
    background-image: none;
    background-repeat: repeat;
    background-attachment: scroll;
    background-position: 0% 0%;
    background-clip: border-box;
    background-origin: padding-box;
    background-size: auto auto;
	height: 62px;
	}

div.mmenu div.mmenu-conteneur a span {
	font-weight: 400;
	font-size: 16px;
	}

div.mmenu div.mmenu-conteneur a.moncompte {
	display: inline-block;
	color: #000;
	text-decoration: none;
	font-size: medium;
	text-transform: uppercase;
	height: 53px;
	padding: 15px 28px 0 45px;
	box-sizing: border-box;
	background-image: url("/html/BMT1_iFiles/Graphics/css/btn-mon-compte_01.png");
	background-color: transparent;
	background-repeat: no-repeat;
	background-attachment: scroll;
	background-position: left center;
	background-clip: border-box;
	background-origin: padding-box;
	background-size: auto auto;
	}

div.mmenu div.mmenu-conteneur a.moncompte span {
	font-weight: 400;
	font-size: 16px;
	}

div.surbandeau  a.deconnexion {
	display: inline-block;
	text-transform: uppercase;
	color: #ED6B2C;
	padding: 4px;
	background-color: transparent;
	text-decoration: none;
	font-size: large;
	text-align: right;
	float: left;
		padding: 5px 0px 0  350px;

	}

/*-----------------------------------------------------------------------------*/
/*-------------------------------------------------------*/
/*----------------------------------------*/
/*--  ZONE ONGLETS SOUS BANDEAU  --*/
div.total div.boutons {
text-align: left;
padding: 0px 0px 0px 5px;
}
div.total div.boutons td {
width: 850px;
padding: 0px 0px 0px 20px;
background-image: url(/html/BMT5_iFiles/Graphics/css/fond_sous_menu_850.gif);
background-repeat: no-repeat;
background-position: left bottom;
}
div.total td.boutons {
display: block;
width: auto;
float: left;
padding: 0px 8px 0px 8px;
margin: 0px 1px 0px 1px;
border-left: 1px solid #333333;
border-top: 1px solid #333333;
border-right: 1px solid #333333;
text-decoration: none;
color: #000000;
}
div.total div.boutons a {
display: block;
width: auto;
float: left;
padding: 0px 8px 0px 8px;
margin: 0px 1px 0px 1px;
border-left: 1px solid #333333;
border-top: 1px solid #333333;
border-right: 1px solid #333333;
text-decoration: none;
color: #000000;
}
.inactif  {
display: block;
width: auto;
float: left;
padding: 0px 8px 0px 8px;
margin: 0px 1px 0px 1px;
text-decoration: none;
color: #660000;
}
div.total div.boutons a:hover {
color: #CC0000;
font-weight: bold;
}


/*-----------------------------------------------------------------------------*/
/*-------------------------------------------------------*/
/*----------------------------------------*/
/*--  ZONE ONGLETS DE RECHERCHE  --*/
div.total div.home div.searchservices {
float: left;
margin: 0px 30px 0px 30px;
padding: 10px 10px 0px 10px;
width: 500px;
border: 1px solid #CCCCCC;
}
div.total div.pagecontainer div.searchservices {
float: left;
margin: 0px 30px 0px 30px;
padding: 10px 10px 0px 10px;
width: 550px;
border: 1px solid #CCCCCC;
}
div.total div.pagecontainer3pg div.searchservices {
float: left;
margin: 0px 30px 0px 30px;
padding: 10px 10px 0px 10px;
width: 550px;
border: 1px solid #CCCCCC;
}
div.total div.searchservices table.searchcontent {
margin: 0px 0px 10px 0px;
}
div.total div.searchservices table.searchcontent input {
margin: 0px 10px 0px 0px;
}
div.total div.searchservices table.searchcontent td.enrichheader,
div.total div.searchservices table.searchcontent td.itemlisting {
color: #660000;
}

div.total div.searchservices table.searchcontent th.searchcontent {
font-weight: normal;
float: right;
}
div.total div.searchservices table td.searchheader {
font-size: large;
margin: 7px 0px 7px 0px;
padding: 0;
font-variant: small-caps;
color: #660000;
line-height: 24px;
}
div.total table.searchservices {
margin: 30px 0px 0px 0px;
}

/*-----------------------------------------------------------------------------*/
/*-------------------------------------------------------*/
/*----------------------------------------*/
/*--  ZONE DERNIERES NOUVELLES DE LA BIB  --*/
div.total #twitter_div {
width: 935px;
margin: auto;
padding: 10px 0px 20px 20px;
text-align: left;
font-size: small;
border-top: 1px solid #CCCCCC;
}
div.total #twitter_div h2 {
font-size: large;
margin: 7px 0px 7px 0px;
padding: 0;
font-variant: small-caps;
color: #660000;
line-height: 24px;
}
div.total #twitter_div #twitter_update_list li {
padding: 0px 0px 2px 0px;
}
div.total #twitter_div #twitter_update_list a {
color: #CC0000;
font-weight: bold;
text-decoration: underline;
}
/*-----------------------------------------------------------------------------*/
/*-------------------------------------------------------*/
/*----------------------------------------*/
/*--  PAGES INTERNES  --*/
div.total div.pagecontainer3pg table {
margin: 0px 0px 0px 40px;
}
div.total div.pagecontainer3pg table table {
margin: 0px 0px 0px 0px;
}

/*-----------------------------------------------------------------------------*/
/*-------------------------------------------------------*/
/*----------------------------------------*/
/*--  PAGES INTERNES: HOME PAGE, ACCUEIL  --*/
div.total div.home table {
margin: 0px 0px 0px 30px;
}
div.total div.home table table {
margin: 0px 0px 0px 0px;
}
div.total div.home table td.gatewaystyle {
font-size: 18px;
margin: 3px 0px 3px 0px;
padding: 3px;
text-align: center;
font-variant: small-caps;
color: #660000;
border: 1px solid #660000;
width: 20%;
}
div.total div.home table td.enrichheader {
font-size: large;
margin: 7px 0px 7px 0px;
padding: 10;
text-align: center;
font-variant: small-caps;
color: #000000;
line-height: 24px;
width: 20%;
border-bottom: 1px solid #CCCCCC;
}
div.total div.home table td.enrichcontent {
font-size: normal;
padding: 10px;
font-weight: normal;
text-align: left;
font-variant: small-caps;
color: #000000;
line-height: 15px;
background-color: #F5F5F5;
width: 10%;
}




/*-----------------------------------------------------------------------------*/
/*-------------------------------------------------------*/
/*----------------------------------------*/
/*--  ZONE PIED DE PAGE  --*/
div.total div.footer {
	border-top: 1px solid #333333;
	background-color: #F5F5F5;
	padding: 10px 0px 10px 0px;
	text-align: center;
	font-size: x-small;
	}








/*-------ICI COMMENCENT LES TRUCS DE PK -------------*/

/*-------permalien------------------------*/
 div.centrage div.total div.permalien {
border-top: 1px solid #333333;
padding: 0px 0px 0px 0px;
text-align: center;
font-size: 12px;
color: #660000;
}

/*------les intercalaires cliquables -----------------*/
/*------les intercalaires cliquables : fatras necessaire à la bib num, notamment -----------------*/
.tabholder {
 padding: 0px 0px 0px 0px;
 position: relative;
 z-index: 2;
}
.tab {
 border-style: outset;
 border-width: 2px;
 border-color: #999999;
 line-height: 150%;
 text-align: center;
 padding: 4px;
 margin-right: 5px;
 cursor: pointer;
 cursor: hand;
 font-family: trebuchet MS;
 font-size: 14px;
 font-weight: bold;
 background-color: #006699;
 color: #FFFFFF;
}
.panelholder {
 position: relative;
 top: -2px;
 z-index: 1;
 visibility: visible;
 display: block;
 color: #000000;
 background-color: #FFFFFF;
}
.tabPK1 {
 padding: 0px;
 margin-right: 0px;
 cursor: pointer;
 cursor: hand;
 font-family: trebuchet MS;
 font-size: 12px;
 font-style: italic;
 font-weight: bold;
}

/*------les intercalaires cliquables : pour les acquisitions et les notices des docs. -----------------*/

.panel {
 position: relative;
 color: #006699;
 background-color: #FFFFFF;
 border: 2px;
 border-color: #999999;
 border-style: outset;
 top: 0;
 left: 0;
 padding: 14px 14px 14px 14px;
 display: none;
}


.tabPK {
 border-style: outset;
 border-bottom-style: none;
 border-width: 2px;
 border-color: #999999;
 line-height: 150%;
 text-align: center;
 padding: 4px;
 margin-right: 5px;
 cursor: pointer;
 cursor: hand;
 font-family: trebuchet MS;
 font-size: 16px;
 font-weight: bold;
 background-color: #FFFFFF;
color: #660000;
}

/*-------affichage du nom de l'usager dans le bandeau quand il est loggé------------------------*/
div.total div.titlename table td.TitlebarNAME {
position: absolute;
top: 7px;
left: 800px;
height: 22px;
padding: 0px 8px 0px 8px;
margin: 0px 1px 0px 1px;
color: #660000;
}

/*--------------divers classes rajoutées pour diverses pages...------------------------*/

div.itemservices {
	background-color: #FFFFFF;
	color: #000000;
	text-align: left;
	border-width: 1px;
	border-style: solid;
	padding: 2px 2px 2px 2px;
	margin: 0px 0px 0px 0px;
	}

div.total div.pagecontainer3pg table td.recherchebraille {
	font-size: 18px;
	}

div.total div.pagecontainer3pg table td.rebond {
	float: left;
	text-align: left;
	font-size: 18px;
	font-weight: bold;
	border: 1px solid #CCCCCC;
	color: #660000;
	}

div.total div.pagecontainer3pg table td.enrichheader {
font-size: x-large;
margin: 7px 0px 7px 0px;
padding: 10;
text-align: center;
font-variant: small-caps;
color: #000000;
line-height: 24px;
width: 20%;
border-bottom: 1px solid #CCCCCC;
}
div.total div.pagecontainer3pg table td.enrichcontent {
font-size: normal;
padding: 10;
font-weight: bold;
text-align: center;
font-variant: small-caps;
color: #000000;
line-height: 15px;
background-color: #F5F5F5;
width: 10%;
}
div.total div.pagecontainer3pg table td.enrichcontent a:link {
color: #660000;
}
div.total div.pagecontainer3pg table td.gatewaystyle {
font-size: large;
margin: 3px 0px 3px 0px;
padding: 7;
text-align: center;
font-variant: small-caps;
color: #660000;
line-height: 18px;
border: 1px solid #660000;
width: 20%;
}
div.total div.pagecontainer3pg table td.gatewaystyle2 {
font-size: large;
margin: 3px 0px 3px 0px;
padding: 7;
text-align: left;
font-variant: small-caps;
color: #660000;
line-height: 18px;
border: 1px solid #660000;
width: 20%;
}
div.total div.pagecontaineroutils table td.gatewaystyle {
font-size: large;
margin: 3px 0px 3px 0px;
padding: 7;
text-align: center;
font-variant: small-caps;
color: #660000;
line-height: 18px;
border: 1px solid #660000;
width: 20%;
}
div.total div.pagecontainer table td.enrichheader {
font-size: x-large;
margin: 3px 0px 3px 0px;
padding: 2;
text-align: center;
font-variant: small-caps;
line-height: 24px;
border-bottom: 1px solid #CCCCCC;
}

div.total div.pagecontainer table td.gatewaystyle {
font-size: normal;
margin: 3px 0px 3px 0px;
padding: 5;
text-align: center;
font-variant: small-caps;
color: #660000;
line-height: 18px;
border: 1px solid #660000;
}

div.total div.pagecontainer table td.gatewaystyle_sg {
font-family:Arial Unicode MS, Helvetica, sans-serif;
font-size: 10px;
margin: 3px 0px 3px 0px;
padding: 5;
text-align: left;
font-variant: small-caps;
color: #660000;
line-height: 18px;
border: none;
}

div.total div.pagecontainer table td.enrichcontent {
	font-size: normal;
	padding: 10;
	font-weight: bold;
	text-align: center;
	font-variant: small-caps;
	color: #660000;
	line-height: 15px;
	background-color: #F5F5F5;
	}

div.total div.pagecontainer table td.enrichcontentbab {
	font-size: 16px;
	font-weight: bold;
	font-style: normal;
	text-align: left;
	margin: 5px 0px 0px 30px;
	color: #000000;
	background-color: #F5F5F5;
	border-bottom: 1px solid #DDD;
	padding: 6px 12px 6px 5px;
	}

div.total div.pagecontainer table td.enrichcontentbabfiltre {
	padding: 0px 0px 10px 30px;
	margin: 0px 0px 10px 0px;
	color: #000000;
	border-bottom: 1px solid #cccccc;
	text-align: left;
	font-size: 12px;
	font-family: Arial Unicode MS;
	}

a.sautraccourci {
position: absolute;
left: -5000px;
display: none;
}

div.sautraccourci {
position: absolute;
left: -5000px;
display: none;
}

div.total div.pagecontainer table td.docmoncompte {
font-size: normal;
padding: 0;
font-weight: normal;
text-align: left;

}
div.total div.pagecontainer table td.searchheader {
font-size: large;
margin: 7px 0px 7px 0px;
padding: 0;
font-variant: small-caps;
color: #660000;
line-height: 24px;
}
div.total div.pagecontainer div.searchsum {
font-size: large;
margin: 3px 0px 3px 0px;
margin-left: 15px;
padding: 5px;
text-align: center;
font-variant: small-caps;
color: #660000;
line-height: 18px;
border: 1px solid #660000;
width: 95%;
}

/*--------------page affichage des résultats : hitlist.html------------------------*/

div.total div.pagecontainer table td.searchsumbab {
	color: #000000;
	font-size: 11px;
	text-align: center;
	background-color: #FFFFFF;
}

div.total div.pagecontainer td.itemlisting {
	font-size: 13px;
	margin: 3px 0px 3px 0px;
	padding: 2px;
	color: #660000;
	}

div.total div.pagecontainer a.itemlisting {
	font-size: small;
	margin: 3px 0px 3px 0px;
	padding: 2px;
	color: #660000;
	}

.itemlisting a:link {
	color: #000000;
	}

div.total div.pagecontainer div.itemservices table td.enrichcontent {
	font-size: large;
	margin: 3px 0px 3px 0px;
	padding: 2px;
	text-align: center;
	color: #660000;
	}

div.total div.pagecontainer table td.rebond {
	text-align: left;
	font-size: 14px;
	color: #660000;
	}

/*-------------  page de la notice : RECORD.HTML --*/
 div.total div.pagecontainer div.titreholdings {
font-size: normal;
padding: 10;
font-weight: bold;
text-align: center;
font-variant: small-caps;
color: #660000;
line-height: 15px;
background-color: #F5F5F5;
}
 div.total div.pagecontainer table th.holdingsheader {
font-size: small;
margin: 30px 0px 3px 0px;
padding: 2px;
text-align: center;
font-variant: small-caps;
color: #660000;
}
 div.total div.pagecontainer table th.defaultstyle {
float: right;
text-align: right;
font-size: small;
font-variant: small-caps;
color: #660000;
}

 div.total div.pagecontainer table th.defaultstyle_pk {
float: right;
text-align: right;
font-size: small;
text-valign: top;
border-top: 1px solid #808080 ;
color: #660000;
font-weight: normal;
 font-style: italic;
 padding: 3px;
}
 div.total div.pagecontainer table td.contenu_pk {
padding: 3px;
}


 div.total div.pagecontainer table td.holdingslist {
font-size: 12px;
margin: 3px 0px 3px 0px;
padding: 2px;
}
 div.total div.pagecontainer table td.holdingslist a:link {
font-size: 12px;
margin: 3px 0px 3px 0px;
padding: 2px;
 color: #0101FF;
}


/*---------------  divers et générique --*/


a:link, a:active {
 color: #0101FF;
 text-decoration: none;
}
a:visited {
 color: #000099;
}
a:hover {
 background-color: #EBE9E9;
}


.tdHNJeunesse {
 border-style: inset;
 border-bottom-style: none;
 border-width: 1px;
 border-color: #999999;
 line-height: 150%;
 text-align: center;
 padding: 1px;
 margin-right: 1px;
 cursor: pointer;
 cursor: hand;
 font-family: trebuchet MS;
 font-size: 14px;
 background-color: #FFFFFFF;
 color: #660000;
}

.imgHN {
 border: 1px solid #660000;
}
th.searchcontent {
 text-align: right;
 }
.searchcontent {
 white-space: nowrap;
}
/*-- xxxxxxxxxxxxxxxxxxxxxxxxxxx --*/
 /* --------------------------- NOS SUGGESTIONS --------------------------------- */
div.actu5 {
 border-width: 1px #660000;
padding: 0px 0px 0px 0px;
text-align: left;
font-size: 10px;
font-family:Arial Unicode MS, Helvetica, sans-serif;
font-weight:normal;
color: #660000;
}
div.actu1 {
 border-width: 1px #660000;
padding: 0px 0px 0px 0px;
text-align: left;
font-size: 10px;
font-family:Arial Unicode MS, Helvetica, sans-serif;
font-weight:normal;
color: #660000;
}
#image {
float:left;
}

/*-- NOTICES --*/
div.feuilletoire {
 border-width: 1px #660000;
padding: 0px 0px 0px 0px;
text-align: left;
font-size: 10px;
font-family:Arial Unicode MS, Helvetica, sans-serif;
font-weight:normal;
color: #660000;
}
.vignette {
border: none;
padding: 0px 0px 0px 0px;
text-align: left;
}
.sstt {
text-align: left;
font-size: 18px;
font-family:Arial Unicode MS, Helvetica, sans-serif;
font-weight: bold;
color: #333333;
}


  .succes {

border:#99CC35  solid 15px;

}

  .echec {

border:#CC0000  solid 15px;

}


</style>


<TITLE>Pas de résultat de recherche - Affichage des vedettes</title>

<SCRIPT LANGUAGE="JavaScript">
	<!--
			function replace()
        {
            var myForm = document.SpellCheckForm;
            var query = "";
		var words = new Array();
		var wordIndex = 0;

            for(var index = 0; index < myForm.length; index++)
            {
                var type = myForm[index].type;
		    var name = myForm[index].name;
		    var pattern = /word.*/i;

	  	    var result = name.match(pattern);

                if(type == "select-one" && result)
                {
                    var value = selectValue( myForm[index] );
                    words[wordIndex++] = value;
                }

				if(type == "hidden" && result)
				{
						var value = myForm[index].value;
						words[wordIndex++] = value;
					}
				}

			for(var ind = 0; ind < wordIndex; ind++)
			{
				query += words[ind];
				if(ind + 1 != wordIndex)
					{
						query += " ";
					}
			}


            myForm.query.value = query;
        }

        function selectValue(select)
        {
            var result = "";

            for(var i = 0; i < select.options.length; i++)
            {
                if( select.options[i].selected )
                {
                    result = select.options[i].text;
                }
            }

            return result;
        }
	//-->
</script>

</head>


<body >
<div class="centrage">
<div class="total">
<noscript>
Votre navigateur Web ne fonctionne pas sous JavaScript. Cette application se sert de JavaScript pour cr&eacute;er du contenu et permettre les liens vers des renseignements suppl&eacute;mentaires. Pour profiter pleinement des avantages de cette application, veuillez activer JavaScript dans les param&egrave;tres de votre navigateur Web ou utiliser un navigateur Web qui supporte JavaScript.
</noscript>

<div class="pagecontainer">






























<div class="surbandeau">
		<div class="conteneur">
		<a class="home" href="/web2/tramp2.exe/goto/A022r0nr.001?screen=Home.html">
		</a>


		<div class="conteneurlien">

			<a class="rosalis" href="http://rosalis.bibliotheque.toulouse.fr/">
			<span></span>
			Rosalis
			</a>
			<a class="site" href="http://bibliotheque.toulouse.fr/">
			<span></span>
			Site
			</a>
		</div>
		<div class="intermediaire">
			<span class="bmtj">
			<a href="http://catalogues.toulouse.fr/web2/tramp2.exe/log_in?setting_key=BMTJ" alt="Catalogue pour les enfants" title="Catalogue pour les enfants"></a>
			</span>
			<span class="english">
			<a href="http://catalogues.toulouse.fr/web2/tramp2.exe/log_in?setting_key=BMTE" alt="Catalogue en anglais" title="Catalogue en anglais"></a>
			</span>
			<span class="mobile">
			<a href="http://catalogues.toulouse.fr/web2/tramp2.exe/log_in?setting_key=BMTM" alt="Catalogue mobile" title="Catalogue mobile"></a>
			</span>
		</div>
		<div class="recherche">
			<form class="quicksearch" name="QEntry" action="/web2/tramp2.exe/form/A022r0nr.001" METHOD="post" enctype="application/x-www-form-urlencoded">
				<span>
				<input type="hidden" name="servers" value="1home">
				<input type="hidden" name="query_screen" value="Home.html">
				<input class="requete" placeholder="Rechercher dans le catalogue" type="text" size="28" maxlength="255" name="query" size="30" value="de cape et de croc">
				<input type=hidden name="buttons" value="recherche_bandeau=do_keyword_search">
<input type=hidden name="buttons" value="*=do_keyword_search ">
<INPUT TYPE=SUBMIT NAME="recherche_bandeau" class=topsearch VALUE="">

				</span>
			</form>

		</div>

	</div>

	<div class="mmenu">
		<div class="mmenu-conteneur">
				<a href="/web2/tramp2.exe/goto/A022r0nr.001?screen=PowerSearch.html">
					<span>
					Recherche avancée
					</span>
				</a>
				<a href="/web2/tramp2.exe/goto/A022r0nr.001?screen=ALL_New.html">
					<span>
					Nouveautés
					</span>
				</a>
				<a href="/web2/tramp2.exe/goto/A022r0nr.001?screen=ALL_have_read.html">
					<span>
					Sélections
					</span>
				</a>
				<a href="/web2/tramp2.exe/goto/A022r0nr.001?screen=ALL_oeil.html">
					<span>
					Handicap
					</span>
				</a>
				<a href="/web2/tramp2.exe/goto/A022r0nr.001?screen=Ress_Num.html">
					<span>
					24H/24H
					</span>
				</a>


				<a class="moncompte" href="/web2/tramp2.exe/goto/A022r0nr.001?screen=MyAccount.html">
					<span>
					Mon compte
					</span>
				</a>



		</div>
	</div>
</div>



<a class="sautraccourci" name="skipnav"></a>



<table width="95%">


<tr><td>
<!-- 1ere colonne-->
		<div class="searchservices">
		<div class="searchservices">
   			<table >
				<tr><td>
						<h2>Malheureusement,</h2>
						<h3>Nous n'avons trouvé <b>aucun</b> résultat à votre recherche.</h3>
			</td></tr>
			</table>
		</div>

<!-- 2eme TABLE : suite de l'entete-->
			<table>
				<tr><td class="gatewaystyle" >
						Vous pouvez modifier la recherche, ou changer d'index :
				</td></tr>
			</table>


<!-- 2eme TABLE-BIS : suite de l'entete-->

			<table >

				 <tr>
					<td class="subheader" >
						<form name="EntryPK" ACTION="/web2/tramp2.exe/form/A022r0nr.001" METHOD="post" ENCTYPE="application/x-www-form-urlencoded">
       					<!---->
					<INPUT TYPE="text" SIZE="60" MAXLENGTH="200" NAME="query" VALUE="de cape et de croc">
       					<br>
       						<input type=hidden name="buttons" value="k_Author=do_keyword_search default_value=search_button_easy index=AU search_button_easy=k_Author">
<INPUT TYPE=SUBMIT NAME="k_Author" class=searchbutton VALUE="Auteur">


							<input type=hidden name="buttons" value="k_Title=do_keyword_search default_value=search_button_easy index=TI search_button_easy=k_Title">
<INPUT TYPE=SUBMIT NAME="k_Title" class=searchbutton VALUE="Titre">


							<input type=hidden name="buttons" value="k_Subject=do_keyword_search default_value=search_button_easy index=SU search_button_easy=k_Subject">
<INPUT TYPE=SUBMIT NAME="k_Subject" class=searchbutton VALUE="Sujet">


							<input type=hidden name="buttons" value="k_keyword=do_keyword_search default_value=search_button_easy index=default search_button_easy=k_keyword">
<input type=hidden name="buttons" value="*=do_keyword_search default_value=search_button_easy index=default search_button_easy=k_keyword">
<INPUT TYPE=SUBMIT NAME="k_keyword" style="font-style: italic" class=searchbutton VALUE="Tous crit&egrave;res">


      					</FORM>
      				</td>
      			</tr>


			</table>
<br>
			<table cellSpacing="0" cellPadding="0">
				<tr><td class="gatewaystyle">
						Ou bien parcourir alphabétiquement les index  :
				</td></tr>
				<tr><td>
						>><a href="/web2/tramp2.exe/goto/A022r0nr.001?screen=BrowseSearch.html">Recherche alphabétique</a><br><br>
				</td></tr>
 			</table>
</td>

		</div>



<!-- 3eme colonne -->


<td  width="25%" valign="top" >
<a class="sautraccourci" name="options"></a>

  		<div class="itemservices">
		<!-- 3eme colonne 0ere partie : la frame des rebonds : 1ere partie-->
		<table cellSpacing="0" cellPadding="0"  border="0"  >
		<tr><td>
					<table cellSpacing="0" cellPadding="0"  width="100%"  >
						<tr>
							<td class="enrichcontent">Demandes</td>
						</tr>
						<tr>
						<td class="rebond">



				<a href="/web2/tramp2.exe/goto/A022r0nr.001?screen=ILLSubmitRequest_RS.html&">	Pr&ecirc;t entre biblioth&egrave;ques</a>



						<br>&nbsp;
						</td>
						</tr>
					</table>
		</td></tr>
		<tr><td>
			<!-- 3eme colonne 1ere partie : la frame des rebonds : 1ere partie-->
					<table cellSpacing="0" cellPadding="0"  width="100%"  >
						<tr>
							<td class="enrichcontent">Dans notre catalogue</td>
						</tr>
						<tr>
						<td class="rebond">


      							<a href="/web2/tramp2.exe/goto/A022r0nr.001?screen=PowerSearch.html">Recherche assist&eacute;e</a>
								<br><a href="/web2/tramp2.exe/goto/A022r0nr.001?screen=BrowseSearch.html">Recherche alphabétique</a>
								<br><a href="/web2/tramp2.exe/goto/A022r0nr.001?screen=NumericSearch.html">Recherche par cote</a>
								<br><a href="/web2/tramp2.exe/goto/A022r0nr.001?screen=PowerSearchPK.html">Recherche par fonds</a>
						<br>&nbsp;
						</td>
						</tr>
						</table>
		</td></tr>
		<tr><td>
			<!-- 3eme colonne 2ere partie : la frame des rebonds : 2ere partie-->
					<table cellSpacing="0" cellPadding="0"  width="100%"  >
						<tr>
								<td class="enrichcontent">Dans les bibliothèques associées</td>
 						</tr>
						<tr>
	 						<td class="rebond">

										><a target="_blank" href="http://catalogues.toulouse.fr/web2/tramp2.exe/do_keyword_search/log_in?setting_key=ART&servers=1home&query=de cape et de croc&hitlist_screen=Hitlist.html">Bibliothèques d'Art</a>
										<br>><a target="_blank" href="http://catalogues.toulouse.fr/web2/tramp2.exe/do_keyword_search/log_in?setting_key=MHN&servers=1home&query=de cape et de croc&hitlist_screen=Hitlist.html">Museum</a>
										<br>><a target="_blank" href="http://catalogues.toulouse.fr/web2/tramp2.exe/do_keyword_search/log_in?setting_key=CNR&servers=1home&query=de cape et de croc&hitlist_screen=Hitlist.html">Conservatoire Régional de Musique</a>
										<br>&nbsp;

							</td>
							</tr>

				</table>
		</td></tr>

		</table>


<!--fin 3e colonne-->

</td>
</tr></table>


<!--NE PAS supprimer les lignes ci-dessous. très important-->





 <br>
<div class="footer">
<a href="http://www.bibliotheque.toulouse.fr/">Site Web de la Bibliothèque</a>  --
<a href="http://www.bibliotheque.toulouse.fr/nous_contacter.html">Contact</a>
</div>

</div>

<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
var pageTracker = _gat._getTracker("UA-3229660-1");
pageTracker._initData();
pageTracker._trackPageview();
</script>

</div>
</div>

</div>
</body>
</html>`

module.exports = page
