const resultPage = `<HTML>
<!--Copyright 1996-2004 Sirsi Corporation. All rights reserved.
Removal of this notice violates applicable copyright laws.-->
<!--Copyright 1996-2004 Sirsi Corporation. Tous droits réservés. La
suppression de la présente mention de copyright contrevient aux
lois applicables en matière de droits d’auteur.-->
<!--U_FRE_iFILES/Record.html-->




<META HTTP-EQUIV="REFRESH" CONTENT="500 ;URL=/web2/tramp2.exe/log_out/A030it2a.001?server=1home&item=2&item_source=1home">





<HEAD>
<meta NAME="CONTENT-LANGUAGE" CONTENT="FR">

<TITLE>Notice d&eacute;taill&eacute;e Web2</TITLE>























<script language="JavaScript" type="text/javascript">
   var currentPanel;
   function showPanel(panelNum) {
      //hide visible panel, show selected panel,
      //set tab
      if (currentPanel != null) {
         hidePanel();
      }
      document.getElementById
         ('panel'+panelNum).style.display = 'block';
         currentPanel = panelNum;
         setState(panelNum);
   }
   function hidePanel() {
      //hide visible panel, unhilite tab
      document.getElementById
        ('panel'+currentPanel).style.display = 'none';
      document.getElementById
        ('tab'+currentPanel).style.backgroundColor =
        '#e6e6e6';
      document.getElementById
        ('tab'+currentPanel).style.color = '#000000';
   }
   function setState(tabNum) {
      if (tabNum==currentPanel) {
         document.getElementById
           ('tab'+tabNum).style.backgroundColor =
           '#e6e6e6';
         document.getElementById
           ('tab'+tabNum).style.color = '#000000';
      }
      else {
         document.getElementById
           ('tab'+tabNum).style.backgroundColor =
           '#e6e6e6' ;
         document.getElementById
           ('tab'+tabNum).style.color = '#000000';
      }
   }
   function hover(tab) {
      tab.style.backgroundColor = '#e6e6e6';
			tab.style.color = '#000000';
   }
</script>

<script type="text/javascript" language="JavaScript">
	<!--


	function setStart()
	{
	    i_RecsPerPage = 20;
	    i_ItemNumber = 1;
	    i_Modulo = i_ItemNumber % i_RecsPerPage;
    	    if(i_Modulo == 0)
	    {
		i_Modulo = i_RecsPerPage;
	    }
	    i_StartNumber = i_ItemNumber - i_Modulo;
	    numLinks = document.links.length;
	    for(i=0; i<numLinks; i++)
	    {
		s_HrefString = document.links[i].href;
		i_SearchIndex = s_HrefString.search(/HitList/);
		i_SearchIndex2 = s_HrefString.search(/see_hits/);
		if(i_SearchIndex != -1 || i_SearchIndex2 != -1)
			{

				index = s_HrefString.indexOf("#");
				link = s_HrefString;

				if(index != -1)
				{
					begin = s_HrefString.substr(0, index);
					end = s_HrefString.substr(index);
					link = begin + "&start=" + i_StartNumber + end;
				}

				document.links[i].href = link;
			}
		}
	    return true;
	}

	//-->
</script>
<!-- ci-dessous le script ELECTRE pour la connexion depuis le serveur internet : catalogues.toulouse.fr -->
<script type="text/javascript" src="http://www.electre.com/widgets.ashx?id=bmtoulouse_2027833_bmt1&divid=isbn_livre"></script>
<style type="text/css">
#electre_image img {
width: 200px;
}
</style>

	<style type="text/css">

/*IncStyleSheetbabel2.html*/

/*AJOUT PK*/

div.sautraccourci {
position: absolute;
left: -5000px;
display: none;
}

 div.total div.pagecontainer table td.small {
    border-right:3px solid #EFEEEF;
		background-color: #FDFDFD;

}




#BW_avis {

padding: 0px 0px 20px 0px;
margin: 0px 0px 10px 0px;
color: #000000;
text-align: left;
font-size: 12px;
font-family: arial;
}

#BW_avis h2 {
border-top: 2px solid #FFFFFF;

font-size: 16px;
font-weight: bold;
font-style: normal;
text-align: left;
margin: 5px 0px 0px 0px;
color: #000000;
background-color: #F5F5F5;
border-bottom: 1px solid #DDD;
padding: 6px 12px 6px 12px;
}

/*zone extraits_musiques*/
#BW_musique {


color: #000000;
text-align: left;
font-size: 12px;
font-family: arial;
}

#BW_musique h2 {
border-top: 2px solid #FFFFFF;

font-size: 16px;
font-weight: bold;
font-style: normal;
text-align: left;
margin: 5px 0px 0px 0px;
color: #000000;
background-color: #F5F5F5;
border-bottom: 1px solid #DDD;
padding: 6px 12px 6px 12px;
}


#BW_selections {

padding: 0px 0px 20px 0px;
margin: 0px 0px 10px 0px;
color: #000000;
text-align: left;
font-size: 12px;
font-family: arial;
}

#BW_selections h2 {
border-top: 2px solid #FFFFFF;

font-size: 16px;
font-weight: bold;
font-style: normal;
text-align: left;
margin: 5px 0px 0px 0px;
color: #000000;
background-color: #F5F5F5;
border-bottom: 1px solid #DDD;
padding: 6px 12px 6px 12px;
}

/*zone ressrouces numeriques*/
#BW_numerique {
padding: 0px 0px 20px 0px;
margin: 0px 0px 10px 0px;
color: #000000;
text-align: left;
font-size: 12px;
font-family: arial;
}

#BW_numerique h2 {
border-top: 2px solid #FFFFFF;

font-size: 16px;
font-weight: bold;
font-style: normal;
text-align: left;
margin: 5px 0px 0px 0px;
color: #000000;
background-color: #F5F5F5;
border-bottom: 1px solid #DDD;
padding: 6px 12px 6px 12px;
}

#BW_numerique a {
font-size: 17px;
font-weight: normal;
text-align: left;
margin: 0px 0px 10px 0px;
}




---------------------------
------------------------------






/*zone Description*/
#BW_description {
padding: 0px 0px 20px 0px;
margin: 5px 0px 0px 0px;
text-align: left;
color: #000000;
}

#BW_description h2 {
border-top: 2px solid #FFFFFF;

font-size: 16px;
font-weight: bold;
font-style: normal;
text-align: left;
margin: -3px 0px 0px 0px;
color: #000000;
background-color: #F5F5F5;
border-bottom: 1px solid #DDD;
padding: 6px 12px 6px 12px;
}



/*zone search*/
#BW_search {
padding: 0px -50px 0px 0px;
margin: 0px 0px 0px 0px;
text-align: left;
color: #000000;
}

#BW_search h2 {
border-top: 2px solid #FFFFFF;


font-size: 16px;
font-weight: bold;
font-style: normal;
text-align: left;
margin: 5px 0px 0px 0px;
color: #000000;
background-color: #F5F5F5;
border-bottom: 1px solid #DDD;
padding: 6px 12px 6px 12px;


}


/*zone links*/
#BW_link {
padding: 0px 0px 20px 0px;
margin: 0px 0px 10px 0px;
color: #000000;
text-align: left;
font-size: 12px;
font-family: arial;
}

#BW_link h2 {
border-top: 2px solid #FFFFFF;

font-size: 16px;
font-weight: bold;
font-style: normal;
text-align: left;
margin: 5px 0px 0px 0px;
color: #000000;
background-color: #F5F5F5;
border-bottom: 1px solid #DDD;
padding: 6px 12px 6px 12px;
}

#BW_link input {
border: 1px solid #cccccc;
width: 280px;
font-size: 11px;
font-family: arial;
color: #666666;
padding: 4px 0px 4px 6px;
}






/*--------------------------------------------------------------------------------------------------------------*/
/*--- NOS SUGGESTIONS : ALL_HAVE_READ ---*/


h1 {
font-family: arial;
font-weight: normal;
font-size: 30px;
color: #000000;
}

h2 {
font-family: arial;
font-size: 18px;
font-weight: normal;
color: #000000;
}

p {
font-family: arial;
font-size: 12px;
font-weight: normal;
color: #7c7c7c;
}



.permalien_sg,
.permalien_sg a {
border-top: 1px solid #333333;
padding: 0px 0px 0px 0px;
font-family:Arial, Helvetica, sans-serif;
text-align: center;
font-size: 12px;
color: #660000;
}




/*--------------------------------------------------------------------------------------------------------------*/
/*--- NOS SUGGESTIONS : NOTICE ---*/

body,
body.bodystyle {
margin: 0;
padding: 0;
background-color: #F5F5F5;
background-image: url(/html/BMT1_iFiles/Graphics/css/fond_inter_full.jpg);
background-repeat: no-repeat;
background-position: top;
font-family: Trebuchet MS, trebuchet MS, Helvetica, sans-serif;
font-size: small;
color: #333333;
line-height: 18px;
}


div.total div.pagecontainer table td.babeltheq {
font-size: small;

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
float: left;
}
/*--------------------------------------------------------------------------------------------------------------*/
div.total div.home {
width: 100%;
position: relative;
float: left;
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
div.bandeau {
background-image: url(/html/BMT1_iFiles/Graphics/css/fond_inter_full.jpg);
background-repeat: no-repeat;
background-position: top;
}
div.bandeau a {
text-decoration: none;
}
div.total div.titlebarPK {
width: 975px;
height: 185px;
position: relative;
text-align: left;
background-image: url(/html/BMT1_iFiles/Graphics/css/bandeau_accueil.jpg);
background-repeat: no-repeat;
background-position: right 30px;
}
div.total div.titlebarPK img.logo {
float: left;
margin-top: 30px;
}
div.total div.titlebarPK img.catalogue {
float: right;
width: 149px;
height: 165px;
margin-right: 26px;
}
div.total div.titlebarPK img.cataloguemobile {
float: right;
width: 33px;
margin-right: 170px;
}
div.total div.titlebarPK img.langue {
position: absolute;
top: 7px;
left: 37px;
width: 25px;
height: 21px;
padding: 0px 0px 0px 0px;
border-left: 1px solid #808080 ;
border-top: 1px solid #808080 ;

border-bottom: 1px solid #F5F5F5;
border-right: 1px solid #808080 ;
background-color: #F5F5F5 ;

}

/*---------------------------------------------------------------------*/
div.total div.rootbarcellPK {
position: absolute;
top: 0px;
left: 0px;
}

div.total div.rootbarcellPK form input.braille {
position: absolute;
top: 7px;
left: 7px;
width: 25px;
height: 23px;
padding: 0px 0px 0px 0px;
text-align: center;
margin: 0px 1px 0px 1px;
border-left: 1px solid #808080 ;
border-bottom: 1px solid #F5F5F5;
border-top: 1px solid #808080 ;
border-right: 1px solid #808080 ;
background-color: #F5F5F5 ;
background-image: url(/html/BMT1_iFiles/Graphics/css/malvoyant.gif);
background-repeat:no-repeat;
color: #F5F5F5;
}


div.total div.rootbarcellPK form input.bienvoyant {
position: absolute;
top: 7px;
left: 7px;
width: 25px;
height: 23px;
padding: 0px 0px 0px 0px;
text-align: center;
margin: 0px 1px 0px 1px;
border-left: 1px solid #808080 ;
border-bottom: 1px solid #F5F5F5;
border-top: 1px solid #808080 ;
border-right: 1px solid #808080 ;
background-color: #F5F5F5 ;
background-image: url(/html/BMT1_iFiles/Graphics/css/bienvoyant.gif);
background-repeat:no-repeat;
color: #F5F5F5;
}
div.total div.rootbarcellPK a.rootbarPK1 {
position: absolute;
top: 7px;
left: 68px;
height: 22px;
padding: 0px 8px 0px 8px;
margin: 0px 1px 0px 1px;
border-left: 1px solid #333333;
border-top: 1px solid #333333;
border-right: 1px solid #333333;
background-color: #333333;
color: #FFFFFF;
font-weight: normal;
}
div.total div.rootbarcellPK a.rootbarPK1:hover,
div.total div.rootbarcellPK a.blastoffPK1 {
position: absolute;
top: 7px;
left: 68px;
height: 22px;
padding: 0px 8px 0px 8px;
margin: 0px 1px 0px 1px;
border-left: 1px solid #CC0000;
border-top: 1px solid #CC0000;
border-right: 1px solid #CC0000;
background-color: #CC0000;
font-weight: bold;
color: #FFFFFF;

}

div.total div.rootbarcellPK a.rootbarPK3 {
position: absolute;
top: 45px;
left: 180px;
display: block;
width: 620px;
height: 22px;
padding: 0px 0px 0px 5px;
font-weight: normal;
text-align: left;
background-image: url(/html/BMT1_iFiles/Graphics/css/fond_bout_infos.gif);
color: #FFFFFF;
text-decoration: none;
font-size: small;
}
div.total div.rootbarcellPK a.rootbarPK3:hover,
div.total div.rootbarcellPK a.blastoffPK3 {
position: absolute;
top: 45px;
left: 180px;
display: block;
width: 620px;
height: 27px;
padding: 0px 0px 0px 5px;
text-align: left;
background-color: #FE039A;
color: #FFFFFF;
font-weight: bold;
font-variant: small-caps;
text-decoration: none;

}
div.total div.rootbarcellPK a.rootbarPK4{
position: absolute;
top: 67px;
left: 180px;
display: block;
width: 620px;
height: 22px;
padding: 0px 0px 0px 5px;
color: #000000;
text-align: left;
background-image: url(/html/BMT1_iFiles/Graphics/css/fond_bout_ressources.gif);
font-weight: normal;
text-decoration: none;
}
div.total div.rootbarcellPK a.rootbarPK4:hover,
div.total div.rootbarcellPK a.blastoffPK4 {
position: absolute;
top: 67px;
left: 180px;
display: block;
width: 620px;
height: 27px;
padding: 0px 0px 0px 5px;
text-align: left;
background-color: #FEEF04;
color: #000000;
font-weight: bold;
font-variant: small-caps;
text-decoration: none;

}

div.total div.rootbarcellPK a.rootbarPK5 {
position: absolute;
top: 89px;
left: 180px;
display: block;
width: 620px;
height: 22px;
padding: 0px 0px 0px 5px;
font-weight: normal;
text-align: left;
color: #000000;
background-image: url(/html/BMT1_iFiles/Graphics/css/fond_bout_animations.gif);
text-decoration: none;
}
div.total div.rootbarcellPK a.rootbarPK5:hover,
div.total div.rootbarcellPK a.blastoffPK5 {
position: absolute;
top: 89px;
left: 180px;
display: block;
width: 620px;
height: 27px;
padding: 0px 0px 0px 5px;
text-align: left;
color: #000000;
background-color: #99CC35;
text-decoration: none;
font-weight: bold;
font-variant: small-caps;

}

div.total div.rootbarcellPK a.rootbarPK6 {
position: absolute;
top: 121px;
left: 180px;
display: block;
width: 620px;
height: 22px;
padding: 0px 0px 0px 5px;
font-weight: normal;
text-align: left;
background-image: url(/html/BMT1_iFiles/Graphics/css/fond_bout_services.gif);
color: #FFFFFF;
text-decoration: none;
}
div.total div.rootbarcellPK a.rootbarPK6:hover,
div.total div.rootbarcellPK a.blastoffPK6 {
position: absolute;
top: 121px;
left: 180px;
display: block;
width: 620px;
height: 27px;
padding: 0px 0px 0px 5px;
text-align: left;
background-color: #0101FF;
color: #FFFFFF;
text-decoration: none;
font-variant: small-caps;
font-weight: bold;

}

div.total div.rootbarcellPK a.rootbarPK7 {
position: absolute;
top: 143px;
left: 180px;
display: block;
width: 620px;
height: 22px;
padding: 0px 0px 0px 5px;
text-align: left;
background-image: url(/html/BMT1_iFiles/Graphics/css/fond_bout_gris.gif);
color: #FFFFFF;
font-weight: normal;
text-decoration: none;
}
div.total div.rootbarcellPK a.rootbarPK7:hover,
div.total div.rootbarcellPK a.blastoffPK7 {
position: absolute;
top: 143px;
left: 180px;
display: block;
width: 620px;
height: 27px;
padding: 0px 0px 0px 5px;
text-align: left;
background-color: #74797f;
color: #FFFFFF;
text-decoration: none;
font-variant: small-caps;
font-weight: bold;

}

div.total div.rootbarcellPK a.rootbarPK8 {
position: absolute;
top: 7px;
left: 628px;
width: 60px;
text-align: center;
height: 22px;
padding: 0px 0px 0px 0px;
margin: 0px 1px 0px 1px;
border-left: 1px solid #333333;
border-top: 1px solid #333333;
border-right: 1px solid #333333;
background-color: #333333;
font-weight: normal;
color: #FFFFFF;
}
div.total div.rootbarcellPK a.rootbarPK8:hover,
div.total div.rootbarcellPK a.blastoffPK8 {
position: absolute;
width: 60px;
text-align: center;
height: 22px;
top: 7px;
left: 628px;
border-top: 1px solid #CC0000;
border-right: 1px solid #CC0000;
background-color: #CC0000;
color: #FFFFFF;

font-weight: bold;

}

div.total div.rootbarcellPK a.rootbarPK9 {
position: absolute;
top: 7px;
left: 693px;
width: 100px;
height: 22px;
text-align: center;
padding: 0px 0px 0px 0px;
margin: 0px 1px 0px 1px;
border-left: 1px solid #333333;
border-top: 1px solid #333333;
border-right: 1px solid #333333;
background-color: #333333;
font-weight: normal;
color: #FFFFFF;
}
div.total div.rootbarcellPK a.rootbarPK9:hover,
div.total div.rootbarcellPK a.blastoffPK9 {
position: absolute;
width: 100px;
text-align: center;
height: 22px;
top: 7px;
left: 693px;
border-left: 1px solid #CC0000;
border-top: 1px solid #CC0000;
border-right: 1px solid #CC0000;
background-color: #CC0000;
color: #FFFFFF;

font-weight: bold;

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
font-color: #660000;
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
div.total table.searchservices td.gatewaystyle strong {
font-size: large;
margin: 7px 0px 7px 0px;
padding: 0px 0px 0px 0px;
font-variant: small-caps;
color: #660000;
line-height: 24px;
font-weight: normal;
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

#auteur {
font-family: arial;
font-size: 12px;
margin: 0px 0px 30px 0px;
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
padding: 10;
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
.tabholderbab {
 padding: 0px 0px 0px 0px;
 position: relative;
 z-index: 2;
}
.tab {
 border-color: #cccccc;
 line-height: 150%;
 text-align: center;
 padding: 4px 4px 4px 4px;
 margin-right: 5px;
 cursor: hand;
 font-family: arial;
 font-size: 12px;
 font-weight: normal;
 color: #FFFFFF;
}
.panelholderbab {
 position: relative;
 top: 3px; *top: 0px;
 z-index: 1;
 visibility: visible;
 display: block;
 color: #000000;
 background-color: #FFFFFF;
}
.tabPK1 {
 padding: 0px 0px 0px 0px;
 margin-right: 0px;
 cursor: pointer;
 font-family: arial;
 font-size: 12px;
 font-weight: bold;
}

/*------les intercalaires cliquables : pour les acquisitions et les notices des docs. -----------------*/

.panelbab {
 position: relative;
 color: #404040;
 background-color: #FFFFFF;
 border-top: 2px solid #CCCCCC;
 top: 0;
 left: 0;
 padding: 5px 5px 5px 5px;
 display: none;
}


.tabPK {
 text-align: center;
 padding: 8px 4px 6px 10px;
 margin-right: 5px;
 cursor: pointer;
 font-family: arial;
 font-size: 13px;
 font-weight: bold;
 background-color: #FFFFFF;
height: 29px;
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
		background-color: #FDFDFD;
 color: #000000;
 text-align: left;
 border-width: 0px;
 border-style: solid;
 padding: 5px 2px 2px 2px;
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
font-family:Arial, Helvetica, sans-serif;
font-size: 10px;
margin: 3px 0px 3px 0px;
padding: 5;
text-align: left;
font-variant: small-caps;
color: #660000;
line-height: 18px;
border: none;
}

div.total div.pagecontainer table td.enrichcontent{
font-size: normal;
padding: 10;
font-weight: bold;
text-align: center;
font-variant: small-caps;
color: #660000;
line-height: 15px;
background-color: #F5F5F5;
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


.icon_bg1 {
width: 43px;
float:left;
height: 28px;
padding: 0px 5px 0px 0px;
background-image: url(/html/BMT1_iFiles/Graphics/babelio/icon_bg.gif);
background-repeat: no-repeat;
background-position: left top;
text-align: center;
}


.icon_bg1 img {margin: 7px 0px 0px 0px;}



/*--------------page affichage des résultats : hitlist.html------------------------*/
div.total div.pagecontainer table td.searchsum {
font-size: small;
text-align: center;
color: #660000;
background-color: #F5F5F5;
border: 1px solid #333333;
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
 div.total div.pagecontainer  table td.rebond {
text-align: left;
font-size: 14px;
color: #660000;
}

/*-------------  page de la notice : RECORD.HTML --*/

#exemplaire_table {
border: 1px solid #cccccc;
}

#exemplaire_table td {
border: 1px solid #e0e0e0;
}

 div.total div.pagecontainer div.titreholdingsbab {
font-size: 16px;
font-family: arial;
font-weight: bold;
margin: 0px 0px 3px 0px;
padding: 6px 12px 6px 12px;
text-align: left;
color: #000000;
background-color: #e6e6e6;
}
 div.total div.pagecontainer table th.holdingsheaderbab {
font-size: 14px;
font-family: arial;
font-weight: normal;
margin: 0px 0px 3px 0px;
padding: 6px 12px 6px 12px;
text-align: center;
color: #000000;
background-color: #e6e6e6;
}

.box_details {
border: 1px solid #cecece;
}

 div.total div.pagecontainer table th.defaultstyle {
float: right;
text-align: right;
font-family: arial;
color: #660000;
}
 div.total div.pagecontainer table th.defaultstyle_pk {
float: right;
text-align: left;
font-size: 12px;
text-align: top;
color: #636363;
font-weight: normal;
font-family: arial;
padding: 25px 14px 25px 18px;
background-color: #ebecee;
width: 100px;
height: auto;
}


 div.total div.pagecontainer table td.contenu_pk {
padding: 3px;
font-family: arial;
font-size: 12px;
color: #636363;
border-bottom: 1px solid #dedede;
padding: 14px 14px 14px 14px;
}


 div.total div.pagecontainer table td.holdingslistbab {
font-size: 11px;
font-family: arial;

margin: 3px 0px 3px 0px;
padding: 7px 4px 7px 4px;
text-align: center;
}
 div.total div.pagecontainer table td.holdingslistbab a:link {
font-size: 11px;
font-weight: bold;
color: #454545;

margin: 3px 0px 3px 0px;
padding: 2px;

}


/*---------------  divers et générique --*/

a:link, a:active {
 color: #0101FF;
}
a:visited {
 color: #000099;
}
a:hover {
 /*background-color: #EBE9E9;*/
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
font-family:Arial, Helvetica, sans-serif;
font-weight:normal;
color: #660000;
}
div.actu1 {
 border-width: 1px #660000;
padding: 0px 0px 0px 0px;
text-align: left;
font-size: 10px;
font-family:Arial, Helvetica, sans-serif;
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
font-family:Arial, Helvetica, sans-serif;
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
font-family:Arial, Helvetica, sans-serif;
font-weight: bold;
color: #333333;
}

/*============================ AJOUTS NOUVEL OPAC ============================*/

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
	padding: 0 15px 0 0;
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

	div.surbandeau div.recherche a.deconnexion {
	display: inline-block;
	text-transform: uppercase;
	color: #ED6B2C;
	padding: 4px;
	background-color: transparent;
	text-decoration: none;
	font-size: medium;
	text-align: right;
	float: lefet;
	top: -10px;
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

</style>

</head>




<body onLoad="setStart(); showPanel(1); return true; "  >

<div class="centrage">
<div class="total">

<noscript>
Votre navigateur Web ne fonctionne pas sous JavaScript. Cette application se sert de JavaScript pour cr&eacute;er du contenu et permettre les liens vers des renseignements suppl&eacute;mentaires. Pour profiter pleinement des avantages de cette application, veuillez activer JavaScript dans les param&egrave;tres de votre navigateur Web ou utiliser un navigateur Web qui supporte JavaScript.
</noscript>


<div class="pagecontainer">












<div class="surbandeau">
		<div class="conteneur">
		<a class="home" href="/web2/tramp2.exe/goto/A030it2a.001?screen=Home.html">
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
			<form class="quicksearch" name="QEntry" action="/web2/tramp2.exe/form/A030it2a.001" METHOD="post" enctype="application/x-www-form-urlencoded">
				<span>
				<input type="hidden" name="servers" value="1home">
				<input type="hidden" name="query_screen" value="Home.html">
				<input class="requete" placeholder="Rechercher dans le catalogue" type="text" size="28" maxlength="255" name="query" size="30" value="Matthias Picard">
				<input type=hidden name="buttons" value="recherche_bandeau=do_keyword_search">
<input type=hidden name="buttons" value="*=do_keyword_search ">
<INPUT TYPE=SUBMIT NAME="recherche_bandeau" class=topsearch VALUE="">

				</span>
			</form>

		</div>

	</div>

	<div class="mmenu">
		<div class="mmenu-conteneur">
				<a href="/web2/tramp2.exe/goto/A030it2a.001?screen=PowerSearch.html">
					<span>
					Recherche avancée
					</span>
				</a>
				<a href="/web2/tramp2.exe/goto/A030it2a.001?screen=ALL_New.html">
					<span>
					Nouveautés
					</span>
				</a>
				<a href="/web2/tramp2.exe/goto/A030it2a.001?screen=ALL_have_read.html">
					<span>
					Sélections
					</span>
				</a>
				<a href="/web2/tramp2.exe/goto/A030it2a.001?screen=ALL_oeil.html">
					<span>
					Handicap
					</span>
				</a>
				<a href="/web2/tramp2.exe/goto/A030it2a.001?screen=Ress_Num.html">
					<span>
					24H/24H
					</span>
				</a>


				<a class="moncompte" href="/web2/tramp2.exe/goto/A030it2a.001?screen=MyAccount.html">
					<span>
					Mon compte
					</span>
				</a>



		</div>
	</div>
</div>



<a class="sautraccourci" name="skipnav"></a>
<div class="sautraccourci">
<a href="#titre"><img src="/html/BMT1_iFiles/Graphics/clear.gif" height="1" width="1"  alt="Atteindre directement le titre du document" title="Atteindre directement le titre du document"></a>
<a href="#exemplaires"><img src="/html/BMT1_iFiles/Graphics/clear.gif" height="1" width="1"  alt="Atteindre directement la liste des exemplaires disponibles" title="Atteindre directement la liste des des exemplaires disponibles"></a>
<a href="#options"><img src="/html/BMT1_iFiles/Graphics/clear.gif" height="1" width="1"  alt="Atteindre directement la liste des options de recherche" title="Atteindre directement la liste des options de recherche"></a>

</div>


<div id="contentholder" class="contentholder">
<table cellpadding="0" cellspacing="5">




	<tbody><tr>






	<!-- FRAME DE GAUCHE -->
<td class="small" valign="top" width="25%">
<div class="itemservices">
<table width="280" border="0" cellpadding="0" cellspacing="0">
<tbody><tr><td align="center">


			<a href="/web2/tramp2.exe/see_record/A030it2a.001?server=1home&item=1" >
			<img src="/html/BMT1_iFiles/Graphics/babelio/arrow_left.gif" alt="Précédent" border="0"></a>



					<A HREF="/web2/tramp2.exe/see_hits/A030it2a.001?server=1home#2">

					<img src="/html/BMT1_iFiles/Graphics/babelio/refresh.gif" alt="Voir la liste" hspace="2" border="0"></a>

<a href="/web2/tramp2.exe/get_query/A030it2a.001"><img src="/html/BMT1_iFiles/Graphics/babelio/lupe.gif" alt="Modifier la Recherche" border="0"></a>


			<a href="/web2/tramp2.exe/see_record/A030it2a.001?server=1home&item=3" >
			<img src="/html/BMT1_iFiles/Graphics/babelio/arrow_right.gif" alt="Suivant" hspace="2" border="0"></a>




<br />



<div id="isbn_livre">
<span style="display:none;">9782919242078</span>
</div>

<!-- ELECTRE-->
<div id="electre_image"></div>

<!-- INDEXPRESSE-->


<!-- TITELIVE-->

	<!--<img src="http://images.titelive.com/078/9782919242078_1_75.jpg" width="200"  border="0" align="center" style="border: 1px solid #cccccc; padding: 5px;"><br>-->


</td></tr>



<tr><td class="rebond">



<!-- COMMENT GAM-->







 <!-- WIDGETS BABELIO PR LES LIVRES-->
<div id="BW_search"><h2>Récompenses</h2></div><div id="BW_prix_litt"></div>
<div id="BW_critiques_pro"></div>
<div id="BW_notes"></div>
<div id="BW_etiquettes" ></div>
<div id="BW_videos" ></div>

</td></tr>
<tr><td>




	 <div id="BW_search">

	 <h2>Autour de ce document</h2>

<a href="/web2/tramp2.exe/do_keyword_search/A030it2a.001?servers=1home&index=AU&material_filter=all&language_filter=all&location_filter=all&location_group_filter=ALL&date_filter=all&query=Picard%2C+Matthias" onMouseOver="window.status='Recherche par auteur'; return true">
<img src="/html/BMT1_iFiles/Graphics/babelio/search_auteur.gif" alt="du meme auteur" border="0"></a>



	</div>






	  <div id="BW_link">

	  <h2>Lien permanent vers la notice</h2>

	  <input name="" type="text" value="http://catalogues.toulouse.fr/web2/tramp2.exe/do_keyword_search/log_in?setting_key=BMT1&servers=1home&query=ELC1432908&screen=hitlist.html">

	  </div>



</td></tr>




</tbody></table>
</div>
</td>




<!-- ZONE CENTRALE-->



<td valign="top" width="80%">


<table width="100%" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td width="5%" valign="top">
	<img SRC="/html/BMT1_iFiles/Graphics/Material_a.gif" vspace="5" style="position: relative; left: -8px;"  ALT="Type de Materiel" TITLE="Type de Materiel">
	</td>
    <td width="95%"><h1 style="margin: 0px;">

	Jim Curious : voyage au coeur de l'océan /<br>

	</h1>

	<div id="auteur">de <a href="/web2/tramp2.exe/do_keyword_search/A030it2a.001?servers=1home&index=AU&material_filter=all&language_filter=all&location_filter=all&location_group_filter=ALL&date_filter=all&query=Picard%2C+Matthias&screen=hitlist.html">Picard, Matthias</a>

		 	- 2012
	</div>


	</td>
  </tr>
</table>






<!-- ZONE CENTRALE : ONGLETS-->

<table title="Onglets" cellpadding="0" cellspacing="0">
<tbody><tr>

	<div id="tabholderbab" class="tabholderbab">

	<td><div><span style="background: transparent url(/html/BMT1_iFiles/Graphics/babelio/tab1.gif) no-repeat top left; color: #2a2a2a;" id="tab1" class="tabPK" onClick="showPanel(1);" onMouseOver="hover(this);" onMouseOut="setState(1)">
	<span class="style2" id="tab1" style="text-align: center; padding: 4px 4px 4px 4px; margin-right: 5px; cursor: pointer; color: #000000;" onClick="showPanel(1);" onMouseOver="hover(this);" onMouseOut="setState(1)">
        Informations</span></span></div>
	</td>

	<td><div><span id="tab3" class="tabPK" onClick="showPanel(3);" onMouseOver="hover(this);" onMouseOut="setState(3)" style="padding: 8px 12px 8px 12px; background-color: #ededed; color: #999999;">
	Details </span></div>
	</td>


	<td><div><span id="tab4" class="tabPK" onClick="showPanel(4);" onMouseOver="hover(this);" onMouseOut="setState(4)" style="padding: 8px 12px 8px 12px; background-color: #ededed; color: #999999;">
	Biographie de l'auteur </span></div>
	</td>

	</div>

</tr></tbody></table>








<!-- ZONE CENTRALE : ONGLET 1-->


<div class="panelholderbab">



<div style="display: block;" id="panel1" class="panelbab">
<div class="bibinfo">

<table valign="top" width="98%"><tbody>
	<tr><td>

	<div id="BW_description">
	<h2>Résumé</h2>
	<p>
	Bien calé dans son scaphandrier, Jim Curious plonge explorer les fonds marins. Dès son passage sous l'eau, l'image s'enrichit du relief grâce aux images en 3D. Jim croise des poissons, des monstres et d'autres bêtes de plus en plus étranges. Plus il chute dans l'eau, plus il remonte le temps : épaves de la Seconde Guerre mondiale, cité de l'Atlantide...<br />
	</p>
	</div>



		<!-- webservices babelio + electre-->
		<div id="BW_description">
		<h2>Quatrième de couverture</h2>
		<div id="electre_4ecouv"></div>
		</div>

	</td></tr>

<!-- WIDGETS BABELIO PR LES LIVRES-->



<tr><td>
	<table width="98%"><tbody>
	<tr><td>
	<div id="BW_critiques"></div>
	</td><td>
	<div id="BW_citations"></div>
	</td></tr>
	</tbody></table>
</td></tr>
<tr><td>
	<div id="BW_suggestions" ></div>
</td></tr>



</tbody></table>

<a class="sautraccourci" name="holdings"></a>

<h2>&nbsp;0 exemplaire(s) disponible(s) sur 5</h2>










				<table width="98%" border="0" cellpadding="0" cellspacing="0" id="exemplaire_table">




<tr>
				<div class="titreholdingsbab">Exemplaires</div>
				</tr>
					<tr>
						<th class="holdingsheaderbab">Biblioth&egrave;que</th>
						<th class="holdingsheaderbab">Cote</th>
						<th class="holdingsheaderbab">Mat&eacute;riel</th>
						<th class="holdingsheaderbab">Localisation</th>
						<th class="holdingsheaderbab">Retour attendu le</th>

					</tr>
















			<tr>


					<td class="holdingslistbab">

<a target="_blank" href="https://www.bibliotheque.toulouse.fr/bibliotheques/mediatheque-jose-cabanis/">

Médiathèque José Cabanis</a>
					</td>



					<td class="holdingslistbab">
					AT PICA&nbsp;
					</td>


				<td class="holdingslistbab">



                Texte imprimé pour tout public&nbsp;



          </td>

				<td class="holdingslistbab">
				Prêté&nbsp;
				</td>

				<td class="holdingslistbab">



























					28/1/2020&nbsp;


















						<a href="/web2/tramp2.exe/goto/A030it2a.001?screen=SubmitRequest_CAB.html&server=1home&item=2&item_source=1home">	<img src="/html/BMT1_iFiles/Graphics/babelio/reserver.gif" alt="Réserver ce titre"></a>





















				</td>

			</tr>























			<tr>


					<td class="holdingslistbab">

<a target="_blank" href="https://www.bibliotheque.toulouse.fr/bibliotheques/mediatheque-jose-cabanis/">

Médiathèque José Cabanis</a>
					</td>



					<td class="holdingslistbab">
					&nbsp;
					</td>


				<td class="holdingslistbab">

            Commandé (date d'arrivée inconnue)&nbsp;

          </td>

				<td class="holdingslistbab">
				En cours de catalogage&nbsp;
				</td>

				<td class="holdingslistbab">



























          Prochainement&nbsp;



				</td>

			</tr>























			<tr>


					<td class="holdingslistbab">

<a target="_blank" href="https://www.bibliotheque.toulouse.fr/bibliotheques/reseau-des-bibliotheques-de-quartier/mediatheque-empalot/">

Médiathèque Empalot</a>
					</td>



					<td class="holdingslistbab">
					BD JIM&nbsp;
					</td>


				<td class="holdingslistbab">


                Texte imprimé pour tout public&nbsp;


          </td>

				<td class="holdingslistbab">
				Document indisponible, acheminement en cours&nbsp;
				</td>

				<td class="holdingslistbab">





























					&nbsp;



				</td>

			</tr>























			<tr>


					<td class="holdingslistbab">

<a target="_blank" href="https://www.bibliotheque.toulouse.fr/bibliotheques/reseau-des-bibliotheques-de-quartier/mediatheque-fabre/">

Médiathèque Fabre</a>
					</td>



					<td class="holdingslistbab">
					BD JIM&nbsp;
					</td>


				<td class="holdingslistbab">


                Texte imprimé pour tout public&nbsp;


          </td>

				<td class="holdingslistbab">
				Prêté&nbsp;
				</td>

				<td class="holdingslistbab">



























					16/1/2020&nbsp;


















						<a href="/web2/tramp2.exe/goto/A030it2a.001?screen=SubmitRequest_FAB.html&server=1home&item=2&item_source=1home">	<img src="/html/BMT1_iFiles/Graphics/babelio/reserver.gif" alt="Réserver ce titre"></a>





















				</td>

			</tr>























			<tr>


					<td class="holdingslistbab">

<a target="_blank" href="https://www.bibliotheque.toulouse.fr/bibliotheques/reseau-des-bibliotheques-de-quartier/bibliotheque-pinel/">

Bibliothèque Pinel</a>
					</td>



					<td class="holdingslistbab">
					BD JIM&nbsp;
					</td>


				<td class="holdingslistbab">


                Texte imprimé pour tout public&nbsp;


          </td>

				<td class="holdingslistbab">
				Prêté&nbsp;
				</td>

				<td class="holdingslistbab">



























					30/1/2020&nbsp;


















						<a href="/web2/tramp2.exe/goto/A030it2a.001?screen=SubmitRequest_PIN.html&server=1home&item=2&item_source=1home">	<img src="/html/BMT1_iFiles/Graphics/babelio/reserver.gif" alt="Réserver ce titre"></a>





















				</td>

			</tr>














</table>












<!--BABELIO : podcast-->

<div id="BW_podcasts"></div>


</div>
</div>



<!-- ZONE CENTRALE : ONGLET 2-->


<div id="panel3" class="panelbab">
<div class="bibinfo">

	<a class="sautraccourci" name="marc_data"></a>

	<table><tr><td>

<a target="_blank" href="http://catalogue.univ-toulouse.fr/ipac20/ipac.jsp?profile=&menu=search&aspect=subtab26&npp=10&ipp=20&spp=20&profile=sicd&ri=&index=ISBN2&term=9782919242078&x=0&y=0&aspect=subtab26">
<img border="0" SRC="/html/BMT1_iFiles/Graphics/babelio/bt_archipel.gif" alt="Archipel">
										</a>
<a target="_blank" href="http://www.sudoc.abes.fr/DB=2.1/CMD?ACT=SRCHA&IKT=7&SRT=RLV&TRM=9782919242078">
<img border="0" SRC="/html/BMT1_iFiles/Graphics/babelio/bt_sudoc.gif" alt="Sudoc">
</a>


<a target=_blank href="http://books.google.com/books?vid=ISBN
9782919242078
">
<img border="0" SRC="/html/BMT1_iFiles/Graphics/babelio/bt_googlebooksearch.gif" alt="Google Book Search">
</a>



	<td>



										<FORM NAME="VOPT" ACTION="/web2/tramp2.exe/see_record/A030it2a.001&server=1home&item=2&item_source=1home" METHOD="post">

										<input type="hidden" NAME="*vopt_unformatted" VALUE="Y">
										<input type="image" src="/html/BMT1_iFiles/Graphics/babelio/afficher.gif" alt="" >
										</form>


</td>
</tr>
</table>



	<table cellSpacing="0" cellPadding="0"    width="98%" >
        <tr><td>






	<tr>
		<th class="defaultstyle_pk">
			<strong>Titre&nbsp;:</strong>
		</th>

		<td class="contenu_pk">

			<span class="bold"><a href="/web2/tramp2.exe/do_keyword_search/A030it2a.001?servers=1home&index=TI&material_filter=all&language_filter=all&location_filter=all&location_group_filter=ALL&date_filter=all&query=Jim+Curious+%3A&screen=hitlist.html">Jim Curious : voyage au coeur de l'océan / Matthias Picard</a></span>


		</td>
	</tr>


















	<tr>
			<th class="defaultstyle_pk">
			<strong>Auteur&nbsp;:</strong>
		</th>

		<td class="contenu_pk">

			<span class="bold"><a href="/web2/tramp2.exe/do_keyword_search/A030it2a.001?servers=1home&index=AU&material_filter=all&language_filter=all&location_filter=all&location_group_filter=ALL&date_filter=all&query=Picard%2C+Matthias&screen=hitlist.html">Picard, Matthias</a></span>


		</td>
	</tr>








	<tr>
		<th class="defaultstyle_pk">
			<strong>ISBN&nbsp;:</strong>
		</th>
		<td class="contenu_pk">

			<span class="bold"><span class="bold">978-2-919242-07-8 (rel.) 19 EUR<br /></span>

		</td>
	</tr>

















	<tr>
		<th class="defaultstyle_pk">
			<strong>&Eacute;diteur&nbsp;:</strong>
		</th>

		<td class="contenu_pk">
			<span class="bold">Strasbourg : 2024, 2012<br /></span>
		</td>
	</tr>








	<tr>
		<th class="defaultstyle_pk">
			<strong>Description mat&eacute;rielle&nbsp;:</strong>
		</th>

		<td class="contenu_pk">
			<span class="bold">[N.p.] : illustrations en couleur ; 34 x 25 cm + 2 paires de lunettes 3D<br /></span>
		</td>
	</tr>


















































		<th class="defaultstyle_pk">
			<strong>R&eacute;sum&eacute;&nbsp;:</strong>
		</th>
		<td class="contenu_pk">
			<span class="bold">Bien calé dans son scaphandrier, Jim Curious plonge explorer les fonds marins. Dès son passage sous l'eau, l'image s'enrichit du relief grâce aux images en 3D. Jim croise des poissons, des monstres et d'autres bêtes de plus en plus étranges. Plus il chute dans l'eau, plus il remonte le temps : épaves de la Seconde Guerre mondiale, cité de l'Atlantide...<br /></span>
		</td>
	</tr>












































	<tr>
		<th class="defaultstyle_pk">
			<strong>Genres&nbsp;:</strong>
		</th>

		<td class="contenu_pk">
			<span class="bold"><a href="/web2/tramp2.exe/do_keyword_search/A030it2a.001?servers=1home&index=&material_filter=all&language_filter=all&location_filter=all&location_group_filter=ALL&date_filter=all&query=Bande+dessin%E9e+3D&screen=hitlist.html">Bande dessinée 3D</a><BR /> <a href="/web2/tramp2.exe/do_keyword_search/A030it2a.001?servers=1home&index=&material_filter=all&language_filter=all&location_filter=all&location_group_filter=ALL&date_filter=all&query=Album+sans+fronti%E8re&screen=hitlist.html">Album sans frontière</a><BR /> <a href="/web2/tramp2.exe/do_keyword_search/A030it2a.001?servers=1home&index=&material_filter=all&language_filter=all&location_filter=all&location_group_filter=ALL&date_filter=all&query=Aventure&screen=hitlist.html">Aventure</a><BR /> </span>

		</td>

	</tr>














































	</td></tr>
	</table>
<br clear="all">

</div>
</div>


<!-- ZONE CENTRALE : ONGLET 3-->


<div id="panel4" class="panelbab">
<div class="bibinfo">

	<table><tr><td>

<!-- webservices babeltheq-->
 <div id="BW_bio_auteur"></div>

	</td></tr>
	</table>

</div>
</div>












</td></tr>
</tbody></table>

</div>

<br>
<div class="footer">
<a href="http://www.bibliotheque.toulouse.fr/">Site Web de la Bibliothèque</a>  --
<a href="http://www.bibliotheque.toulouse.fr/nous_contacter.html">Contact</a>
</div>


</div>
</div>
<script type="text/javascript" src="http://www.babeltheque.com/bw_26.js"></script>


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


</body>
</html>`

module.exports = resultPage
