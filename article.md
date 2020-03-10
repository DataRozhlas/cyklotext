title: "Data: Česko se propadá v bezpečnosti chodců a cyklistů. ‚K nehodám dochází tam, kde lidi bydlí, asfaltujeme přitom pole za městem,‘ tvrdí expert."
perex: "Zatímco v západní a severní Evropě těžkých nehod nejzranitelnějších účastníků dopravy ubývá, v Česku jejich počet stagnuje. Podobná opatření jako v bezpečných zemích – nižší rychlost ve městech a oddělení obou skupin od automobilů – jsou v Česku stále vzácná."
coverimg: https://www.irozhlas.cz/sites/default/files/styles/zpravy_snowfall/public/images/01084831.jpeg?itok=FssYQJ7u
coverimg_note: "Vysočanská cyklostezka. Foto Petr Sehnoutka | Český rozhlas."
styles: []
libraries: [jquery, highcharts]
options: []
---
V sedmisettisícovém hlavním městě Norska loni nezemřel při dopravní nehodě [jediný chodec nebo cyklista](https://zdopravy.cz/ani-jeden-mrtvy-chodec-ci-cyklista-omezeni-aut-prineslo-oslu-vyrazne-snizeni-nehodovosti-39905/). Stejně tak [ve finských Helsinkách](https://www.cdv.cz/tisk/v-helsinkach-a-oslu-nezemrel-vloni-zadny-cyklista-ani-chodec-a-co-praha). V Praze loni podle policejních statistik zahynulo deset chodců a tři cyklisté, v Brně sedm a v Ostravě deset pěších.

„Zdánlivě nezajímavá statistika za sebou skrývá roky velkých změn v plánování dopravy v Oslu,“ upozorňuje Jan Sůra na webu Zdopravy.cz. „Tamější radnice se rozhodla redukovat automobilový provoz a naopak dát větší prostor hromadné dopravě, pěším či cyklistům.“

„Podle norského listu Aftenposten jde o první případ, kdy nezahynul chodec ani cyklista vinou dopravní nehody od roku 1975,“ dodává. „Jediným mrtvým v Oslu při dopravní nehodě byl ruský řidič dodávky, který narazil do plotu.“

## Tři oříšky pro ministerstvo

Dobrá zpráva je, že podobný trend jako Skandinávci zaznamenává většina Evropy – včetně Česka. Smrtelných nehod nejzranitelnějších účastníků dopravy mezi lety 2007 a 2016 podle Eurostatu ubylo: [u chodců o 36 procent](https://ec.europa.eu/transport/road_safety/sites/roadsafety/files/pdf/statistics/dacota/bfs20xx_pedestrians.pdf), [u cyklistů o 24 procent](https://ec.europa.eu/transport/road_safety/sites/roadsafety/files/pdf/statistics/dacota/bfs20xx_cyclists.pdf). V Česku byla změna ve stejném období ještě výraznější; byl zde pro ni prostor, počty fatálních nehod se na začátku tisíciletí pohybovaly vysoko nad unijním průměrem. Úmrtnost chodců se snížila o 44 procent, cyklistů o 54 procent. Optimistická jsou také čísla u těžce zraněných.

Jenže pozitivní trend kalí tři detaily.

Za prvé, průměr EU není ideální cíl. Bezpečnost dopravy je jednou ze statistik, u které Evropu dodnes rozděluje železná opona: zatímco v Německu zemřelo v roce 2016 na milion obyvatel 6,1 chodce a v nejbezpečnějším Nizozemsku 2,6 chodce, v Polsku to bylo 22,9, v Litvě 27,9 a v Rumunsku 36,3 chodce. U cyklistů je propast menší – i proto, že bicykl se tu využívá méně. Dopravní experti proto raději česká čísla místo evropského průměru srovnávají se zeměmi západní nebo severní Evropy. A k těm se Česko přibližuje jen pomalu.

<wide><div style="width: 100%; height: 600px; padding-bottom: 40px" id="pesoumrti"></div></wide>

<wide><div style="width: 100%; height: 600px; padding-bottom: 40px" id="cykloumrti"></div></wide>

<small>Kliknutím do legendy můžete zobrazit data k dalším zemím. Státy v obou grafech jsou seřazeny od těch s nejvyšším po nejnižší počet úmrtí v roce 2016, na konci legendy jsou země s neúplnou časovou řadou.</small>

„Počet usmrcených na milion obyvatel (při všech dopravních nehodách, pozn. red.) je ve vyspělých zemích EU méně než poloviční ve srovnání s ČR,“ [upozorňuje ministerstvo dopravy](https://www.czrso.cz/nsbsp/Revize-a-aktualizace-NSBSP-2020_vc_AP_final.pdf). „Přitom pokles je v těchto zemích prakticky stálý a rovnoměrný, zatímco v zemích bývalého východního bloku se tempo poklesu od roku 2011 zpomaluje. V ČR je toto zpomalení nejzávažnější, vede k jejímu zaostávání a postupně ji posouvá mezi nejzaostalejší evropské státy.“

Za druhé, ubývá pouze závažných nehod. Je to sice klíčová změna, ale stagnující množství lehčích nehod upozorňuje, že ochrana chodců a cyklistů má svoje rezervy. Střetů s nimi ubývalo do roku 2010, od té doby se ale téměř vrátilo na vyšší úroveň z roku 2007.

K většině střetů dochází v zastavěném území obcí: nehody, ve kterých figurují chodci, se odehrají z 90 procent v obci, u cyklistů je to necelých 80 procent. Detailní data o dopravních nehodách od roku 2007 dodnes, která iROZHLAS.cz získal od policejního prezidia, popisují počty nehod, obětí, těžkých i lehkých zranění. Od roku 2010 data ukazují i přesnou lokaci nehody. Následující graf vypovídá, ve kterých krajských městech se situace zlepšila a kde ne. Kliknutím na tlačítko vyberete některé z krajských měst. (XXX - doplnit ostatní)

<select id = "selectMesto">
  <option value = "celkem" selected = "selected">Česko</option>
  <option value = "praha">Praha</option>
  <option value = "brno">Brno</option>
</select>

<wide><div style="width: 100%; height: 600px; padding-bottom: 40px" id="mesta"></div></wide>

<small>Úmrtí eviduje Policie ČR pouze v případě, kdy k němu došlo nejpozději 24 hodin od nehody. Statistiky Centra dopravního výzkumu z let 1998 až 2010 ukazují, že skutečný počet obětí je přibližně o desetinu vyšší – jde o vážně zraněné, kteří podlehnou zraněním později.</small>

Třetí problém je v tom, že vážných úrazů chodců a cyklistů ubývá pomaleji než těžkých nehod řidičů. To zdůrazňuje i ministerstvo dopravy.

„Vývoj vážných následků nehod cyklistů je výrazně nepříznivější než celkový vývoj v ČR, a to zejména na extravilánových úsecích komunikací za špatné viditelnosti,“ píše v [aktualizaci Národní strategie bezpečnosti silničního provozu pro roky 2011 až 2020](https://www.czrso.cz/nsbsp/Revize-a-aktualizace-NSBSP-2020_vc_AP_final.pdf). „Stávají se nejohroženější skupinou účastníků silničního provozu a jednou z cílových skupin, kde se nedaří dosáhnout potřebného snížení ani v jednom ze sledovaných ukazatelů. V revidované strategii je třeba [...] použít mnohem účinnější nástroje ke snížení obou typů závažných následků. Podíl usmrcených cyklistů na celkovém počtu usmrcených osob stoupl (v letech 2009 až 2015, pozn. red.) o 1,6 procentních bodů na 10,3 procenta.“

Jde o klíčový strategický dokument, kterým česká vláda deklaruje, jak chce zvyšovat bezpečnost dopravy – a co pro to míní dělat. Také u chodců je pesimistická.

„Vývoj vážných následků nehod chodců nebyl příznivý, zejména u smrtelných následků nehod nedosáhl předpokládaných hodnot. Podíl usmrcených chodců na celkovém počtu usmrcených osob stoupl na 19,8 procenta,“ hodnotí strategie.

## Vize nula: v centru měst třicítkou

Národní strategie chce „dosáhnout do roku 2020 v porovnání s rokem 2009 snížení počtu usmrcených na úroveň průměru zemí EU, tj. cca o 60 procent, a počtu těžce zraněných o 40 procent.“

To se jí nedaří. Od linky, která by u fatálních nehod zaručovala dosažení vládního cíle, se realita v posledních dvou letech odpoutala.

<div style="width: 100%; height: 500px;" id="strategie"></div>

Skandidávci jsou úspěšní navzdory tomu, že jejich ambice jsou vyšší – přestože už na počátku tisíciletí na tamních silnicích umíralo méně lidí a dramatické snížení tedy bylo nákladnější, během několika let se země dostaly prakticky na nulu.

„Oslo snížilo intenzity automobilové dopravy, zavedlo nižší rychlostní limity, zlepšilo infrastrukturu a zavedlo kolem škol ‚srdeční zóny‘ pro zvýšení bezpečnosti,“ [vysvětluje Evropská rady bezpečnosti dopravy](https://etsc.eu/zero-cyclist-and-pedestrian-deaths-in-helsinki-and-oslo-last-year/), čím seveřané nebezpečnou dopravu ukočírovali.

„V centru Helsinek je nyní většinou maximální dovolená rychlost 30 km/h. Oslo i Helsinky uvádějí snížení rychlosti jako zásadní pro snížení fatálních následků nehod, neméně důležitá je také podpora cyklistiky,“ dodávají evropští výzkumníci a doplňují mapu Helsinek s vyznačenou povolenou rychlostí v uplynulých padesáti letech.

<blockquote class="twitter-tweet" data-lang="cs" data-theme="dark"><p lang="en" dir="ltr">No pedestrians or cyclists were killed in traffic collisions in <a href="https://twitter.com/helsinki?ref_src=twsrc%5Etfw">@helsinki</a> last year. <br><br>Maybe...just maybe it has something to do with <a href="https://twitter.com/hashtag/speed?src=hash&amp;ref_src=twsrc%5Etfw">#speed</a> limits. <a href="https://t.co/9ojNQWIKNB">https://t.co/9ojNQWIKNB</a> <a href="https://t.co/62rrYBo9tm">pic.twitter.com/62rrYBo9tm</a></p>&mdash; European Transport Safety Council (@ETSC_EU) <a href="https://twitter.com/ETSC_EU/status/1225011438936305664?ref_src=twsrc%5Etfw">5. února 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

„Evropské metropolitní oblasti mají nyní šablonu, kterou budou následovat, pokud nechtějí další usmrcené na svých silnicích,“ komentuje čísla ředitel organizace Antonio Avenoso. „Postup Helsinek a Osla je důkazem filozofie _vize nula_.“

[_Vize nula_](http://visionzero.global/) je plán, přijatý poprvé švédskou administrativou v roce 1997. Říká banálně, že „není eticky přijatelné, aby byl někdo usmrcen nebo vážně zraněn během silniční přepravy.“ Tradičně se počítá s tím, že za svou i cizí bezpečnost jsou stoprocentně zodpovědní účastníci dopravy; Vize nula tuto maximu mění, odpovědnost nesou společně s nimi designéři dopravního systému.

Klíčové jsou podle této vize rychlostní limity, které zaručují, že při případném střetu nedojde k vážnému zranění. Tam, kde se mohou setkat auta s chodci, je to 30 km/h. V místech bez chodců, kde hrozí boční střet automobilů, je to 50 km/h, u silnic s možností čelní srážky 70 km/h, u rychlostních silnic 100 km/h. Pokud je žádoucí vyšší rychlost, mají mít zranitelní účastníci dopravy vlastní pruh – chodci i cyklisté by se měli s automobily setkávat co nejméně.

Principy této strategie se od konce devadesátých let stávají dopravním standardem. _Vizi nula_ ostatně zmiňuje také česká dopravní strategie.

„Na každou dopravní nehodu, jejímž následkem je zmařen lidský život či dojde k těžkému zranění, je třeba pohlížet jako na systémové selhání celé společnosti, nikoliv – jak je tradičně činěno – jako na chybu jednotlivce,“ píší ve strategii analytici ministerstva dopravy.

„Postupně by se měly vytvářet a přetvářet pozemní komunikace tak, aby respektovaly možnosti a omezení lidského činitele i jeho fyziologické danosti. Silnice by měla být samovysvětlující, dávající řidiči jasnou informaci o relevantnosti jeho chování a očekávatelných situacích. Rovněž by měla být odpouštějící, v případě selhání lidského činitele a následného vzniku nehody by nemělo dojít k závažným následkům na zdraví nebo dokonce k usmrcení,“ zní ideál.

## Oddělení cyklisté, bezpečné přechody? Nestaví se

Jenže realita je jiná. Ve dvou největších českých městech se počty těžkých nehod chodců a cyklistů každoročně pohybují na dvouciferných číslech, bezpečných silnic přitom přibývá jen pomalu.

„Za posledních deset let dosáhly v Brně [investice do dopravní cyklistické infrastruktury](https://gis.brno.cz/mapa/cykloopatreni/?c=-598156%3A-1160771&z=4&lb=zm-brno&ly=cyklo-real%2Crsd-uza%2Cad%2Culn&lbo=1&lyo=) 40 milionů korun, do rekreační cyklistické infrastruktury 140 milionů korun,“ vysvětluje dopravní expert Dan Bárta. „Jen pro srovnání: celospolečenské ztráty z nehodovosti lidí na kole v Brně za stejné období byly 1,4 miliardy korun.“

„Důležité je, že čtyři z pěti nehod se stanou v obci, převážně na komunikacích s maximální rychlostí 50 km/h,“ pokračuje. „Magistrát přitom nejraději asfaltuje pole za městem. Nehody se dějí v místech, kde lidé bydlí, a proto i jezdí.“

Brněnská data nekopírují ta celorepubliková: závažných nehod chodců a cyklistů neubývá, celkové množství nehod s jejich účastí se o desetinu zvýšilo. Stavební opatření, která požaduje národní bezpečnostní strategie, a která by dokázala počty vážných nehod snížit, přitom většinou zůstanou na papíře. Ulice, rekonstruované v posledních letech, obvykle oddělené cyklopruhy postrádají, někde mizí i přechody pro chodce. Cykloobousměrky – ulice v centru města, kterými cyklisté mohou projíždět v protisměru – [současná radnice ruší](https://brno.rozhlas.cz/spolek-brno-na-kole-zazalovalo-brno-kvuli-ruseni-cykloobousmerek-8145619), považuje je za nebezpečné. Čelí kvůli tomu žalobě.

„Zrušení cykloobousměrek vede jen k tomu, že jsou lidé vytlačeni na hlavní cesty bez cykloopatření, kde policie eviduje podstatně víc nehod,“ upozorňuje Michal Šindelář ze spolku Brno na kole, který žalobu na magistrát podal. „Cílem žaloby je, aby se cykloobousměrky vrátily tam, kde byly, protože se jedná o bezprecedentní nezdůvodněné rušení prokazatelně bezpečné infrastruktury pro lidi na kolech v Brně.“

Svá tvrzení dokládá analýzou, podle které za posledních deset let [došlo na cykloobousměrkách k minimu nehod](https://brnonakole.cz/nehodova-mista-brne/).

Spor o cykloobousměrky ilustruje přístup brněnských úřadů, vzdálený od teorie _vize nula_. Podobně se staví také k chodcům: od loňska řeší problémy s pěší zónou v historickém centru, [do které má přístup přes sedm tisíc soukromých vozidel](https://ct24.ceskatelevize.cz/regiony/jihomoravsky-kraj/2971619-centrem-brna-mohou-projizdet-tisice-aut-chodci-v-pesi-zone-mezi); při kontrolách vjezdu navíc strážníci odhalili, že [třetina řidičů nemá povolení](https://brno.rozhlas.cz/brno-zprisnilo-kontrolu-aut-v-pesi-zone-v-centru-mesta-bez-povoleni-tam-jezdi-8109491).

V hlavním městě je situace podobná.

Když v Praze před dvěma lety na silnicích zemřelo rekordní množství chodců, spustily pražské orgány informační kampaň, zaměřenou právě na ně. Zatímco Němci letos posílili ochranu těch zranitelnějších tím, že [přitvrdili vůči řidičům](https://zdopravy.cz/nemecko-meni-pravidla-silnicniho-provozu-zvysi-pokuty-vice-ochrani-chodce-a-cyklisty-42746/), české úřady vidí problém – i jeho řešení – na straně chodců.

„V roce 2018 bylo na území hl. m. Prahy usmrceno 25 chodců, to je meziročně více než dvojnásobné množství,“ [popisuje](https://www.cdv.cz/tisk/v-helsinkach-a-oslu-nezemrel-vloni-zadny-cyklista-ani-chodec-a-co-praha) Tomáš Neřold z oddělení BESIP ministerstva dopravy. „Tato bilance byla bez nadsázky katastrofální, proto bylo nutné bezodkladně jednat. V Praze v roce 2019 cílily přímo na chodce [...] dvě poměrně velké kampaně.“

„Z Fondu zábrany škod byla podpořena kampaň _Nepozornost zabíjí_,“ pokračuje. „Kromě virální kampaně byly na nejnebezpečnějších křižovatkách nainstalovány pomníky a obrysy těl. Projekt upozornil na rizika, která hrozí v důsledku nesledování provozu při přecházení silnice. Ne vždy totiž musí jít o nepozornost řidičů. Osvětová kampaň _Neskákej mi pod kola!_, kterou připravil Dopravní podnik hl. m. Prahy spolu s oddělením BESIP ministerstva dopravy, Policií ČR a dalšími partnery, se pak zaměřila na prevenci srážek tramvají s chodci.“

Rok 2018 přitom není výjimečný, i z dlouhodobého pohledu v Praze umírají převážně chodci – častěji než všichni ostatní účastníci dopravy dohromady.

„Stěžejní z pohledu fatálních a závažných následků nehod na území hl. m. Prahy byli v uplynulých deseti letech chodci, kteří se na všech usmrcených podíleli 57 procenty a na všech těžce zraněných 50 procenty,“ říká ředitel Centra dopravního výzkumu Jindřich Frič. „Cyklisté pak dvěmi procenty na usmrcených a sedmi procenty na těžce zraněných.“

Obě města mají jedno společné: podíl cyklodopravy na uskutečněných cestách se v nich pohybuje kolem jednoho procenta. Bez infrastrukturních opatření se toto číslo pravděpodobně nezvýší – jednou z hlavních příčin, proč se Pražané nebo Brňané bicyklu pro všednodenní cesty vyhýbají, je strach z nehody. Běžně udávaný důvod, že za malý podíl cyklistů může především členitý terén obou měst, zpochybňuje [článek brněnského magistrátu](https://storymaps.arcgis.com/stories/fbc534a7a443491888d4476c2d4dcbf1), oceněný loni [cenou za otevřená data](https://osf.cz/programy/ziva-demokracie/nas-stat-nase-data/soutez-spolecne-otevirame-data/soutez-spolecne-otevirame-data-2019/).

<wide><div style="width: 100%; height: 600px;" id="modalsplit"></div></wide>

## Život za 20 milionů, těžké zranění 5 milionů korun

Argument pro zavádění opatření na ochranu chodců a cyklistů není jen ochrana jich samých. Úmrtí i zranění „nad plán“ mají kromě emotivního také hmotný rozměr – zcela pragmaticky je lze přepočítat na finanční ztráty.

[Soudní metodika](http://www.nsoud.cz/Judikatura/ns_web.nsf/Edit/Rozhodovacicinnost~Metodikak%3F2958o.z.?Open&area=Rozhodovac%C3%AD%20%C4%8Dinnost&grp=Metodika%20k%20%C2%A7%202958%20o.z.&lng=) cenu života odvozuje z průměrné mzdy a pro rok 2019 jde o nejméně 12,8 milionů korun; může se měnit v závislosti na věku nebo společenském postavení. Pro dopravní nehody ji rozvíjí Centrum dopravního výzkumu (CDV), výzkumná organizace českého ministerstva dopravy. Metodika CDV [počítá s dalšími náklady](http://www.lss.fd.cvut.cz/Members/langr/uaemka/metodika-vypoctu-ztrat/at_download/file): na výjezdy hasičů nebo zdravotníků, hmotné škody a náklady pojišťoven nebo čas, který by mrtvý či zraněný strávil prací – a nestráví.

Podle metodiky CDV jsou ztráty, spojené s úmrtím při dopravní nehodě, průměrně 19,8 milionů korun. U těžkého zranění je to 5,1 milionu, u lehkého zranění 717 tisíc korun, u nehody pouze s hmotnou škodou počítá s náklady 386 tisíc korun. Vychází přitom z reálných dat o nehodovosti za roky 2004 a 2010.

Například za rok 2017, kdy na silnicích zemřelo 577 lidí, CDV [počítá ekonomické ztráty při dopravních nehodách](https://www.cdv.cz/tisk/ztraty-z-dopravni-nehodovosti-na-pozemnich-komunikacich-poprve-prekrocily-hranici-70-mld-kc/) na 72,7 miliardy korun, tedy 1,4 procenta českého HDP.

Stejnou metodou můžeme spočítat společenské náklady na nehody chodců a cyklistů. Ty loni dosáhly 4,4 miliardy u chodců a 4,2 miliardy korun u cyklistů. Stejnou metodikou lze zhodnotit vývoj v krajských městech.

<select id = "selectLove">
  <option value = "celkem" selected = "selected">Česko</option>
  <option value = "praha">Praha</option>
  <option value = "brno">Brno</option>
</select>

<wide><div style="width: 100%; height: 600px; padding-bottom: 40px" id="love"></div></wide>

Chodci a cyklisté se účastní poměrně malého množství nehod: každá skupina asi čtyř procent ze všech nehod v letech 2007 až 2019. Důvod, proč jsou z pohledu dopravní bezpečnosti – a společenských nákladů – klíčové téma, je jejich podíl na těžkých nehodách: chodci se účastní asi 38 procent těžkých dopravních nehod, cyklisti 17 procent.

Nebo jinak: pravděpodobnost, že srážku auta s chodcem odnese nejméně těžkým zraněním řidič, je 0,1 procenta. Pravděpodobnost, že u takové srážky dojde k těžkému zranění nebo úmrtí chodce, je 8,6 procenta. U srážky osobního auta s cyklistou je to 0,1, resp. 11,6 procenta.

Data o nehodovosti odpovídají také na otázku, jak snižuje pravděpodobnost těžké nehody cyklistická přilba – a zda by měla být povinná pro všechny cyklisty, jak [navrhuje dopravní policie](https://www.novinky.cz/domaci/clanek/policie-chce-povinne-prilby-i-pro-dospele-cyklisty-40309609). U cyklistů s nasazenou přilbou došlo při nehodě k těžkému zranění nebo úmrtí v 10 procentech. U těch bez přilby v 12,5 procenta. Podobně lze zhodnotit i další rizikové faktory: například u cyklistů do 65 let skončilo těžce nebo fatálně 6,2 procenta nehod, u těch starších 14,1 procenta.

<div style="width: 100%; height: 600px;" id="nasledky"></div>

Důležitým faktorem pro bezpečnost chodců a cyklistů jsou také tresty za zavinění těžké nehody.

„Kolem jedenácté hodiny dopoledne si jel vyměnit pláště na kolech, v křižovatce ho ale srazilo zatáčející auto, vymrštilo ho do vzduchu a cyklista dopadl v bezvědomí na zem,“ [shrnuje iROZHLAS.cz](https://www.irozhlas.cz/zpravy-domov/nehoda-cyklista-brno-soud-rozsudek-stiznost-statni-zastupce-jaroslav-meznik_2003090600_dok) průběh loňské nehody, po které cyklista skončil na pět týdnů v kómatu a následně s invalidním důchodem. Řidič, který měl tři záznamy za porušení pravidel silničního provozu a podle orientační kontroly také metamfetamin – neboli pervitin – vyvázl s podmínkou.

Ani v dalším případě, kdy řidič cyklistovi způsobil těžké zranění – tentokrát úmyslně, od nehody následně ujel – neskončil za mřížemi. [Také on dostal podmínku](https://www.irozhlas.cz/zpravy-domov/marcel-komornik-cyklista-nehoda-nove-mesto-zdar-soud-brno_2001091209_ako).

Přehled o tom, jak soudci viníky dopravních nehod trestají, nicméně neexistuje. Rozsudky v trestních věcech obvykle nejsou veřejné a statistické zjišťování ministerstva spravedlnosti se touto otázkou nezabývá.