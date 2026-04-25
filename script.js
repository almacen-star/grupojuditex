// ================= BASE DE DATOS =================
const clientesLista = [
    { codigo: "FOX", nombre: "FOXATEL S.A.C." },
    { codigo: "YANINA", nombre: "ARHUATA YAPUCHURA YANINA LUCY (VALESSA)" },
    { codigo: "DUENDE", nombre: "DUENDE VARGAS ARMANDO" },
    { codigo: "CANDY", nombre: "CRISTOBAL ESCOBAR CANDY JOHANA" },
    { codigo: "SAMA", nombre: "CONFECCIONES PERUANAS SAMANIEGO S.R.L." },
    { codigo: "DANTE", nombre: "GUERRA LERMO DANTE JAVIER" },
    { codigo: "SUKER", nombre: "CONFECCIONES SUKER JEANS S.A.C." },
    { codigo: "ECLIPSE", nombre: "ECLIPSE TEXTIL SAC" },
    { codigo: "VEGA", nombre: "HUAMAN VEGA NEMESIA" },
    { codigo: "PINTO", nombre: "PINTO GOMEZ EDWIN BERNAL" },
    { codigo: "SEA", nombre: "SEA FASHION TRENDS GROUP S.A.C." },
    { codigo: "NEMIS", nombre: "NEMIS FASHION E.I.R.L." },
    { codigo: "MALLMA", nombre: "MALLMA ORTEGA FRAN KENI" },
    { codigo: "ZF", nombre: "Z & F CORPORACION E.I.R.L." },
    { codigo: "RODAS", nombre: "RODAS TICONA DORIS LIVIA" },
    { codigo: "BIANCA", nombre: "TEXTILES BIANCA ALVAREZ S.A.C" },
    { codigo: "AD", nombre: "MANUFACTURAS A & D S.A.C" },
    { codigo: "JOEL", nombre: "ESCOBAL QUISQUICHE JOSE JOEL" },
    { codigo: "JAASAN", nombre: "FERNANDEZ ARROLLO JAASAN LEONCIO" },
    { codigo: "ELAN", nombre: "GRUPO TEXTIL ELANDATEX E.I.R.L." },
    { codigo: "ZAPATA", nombre: "ZAPATA OSORIO JHEOVANA TERESA" },
    { codigo: "RIVAS", nombre: "ESPINOZA RIVAS MARIBET" },
    { codigo: "FUPE", nombre: "CREACIONES E INVERSIONES FUPE S.A.C." },
    { codigo: "CONDO", nombre: "CONDORI PALACIOS LOISIT KATHERINE" },
    { codigo: "ROSIO", nombre: "VASQUEZ ARAGON ROSIO MILAGROS" },
    { codigo: "TITO", nombre: "JIMENEZ TITO EDGAR" },
    { codigo: "CONDORI", nombre: "CONDORI PALACIOS LOISIT KATHERINE" },
    { codigo: "FRE", nombre: "FREELANCE CO. S.A.C." },
    { codigo: "SHAYATEX", nombre: "SHAYATEX S.A.C" },
    { codigo: "VERA", nombre: "ALENDEZ VERA HERMENEGILDA" },
    { codigo: "EDITH", nombre: "GAMBOA ROJAS EDITH" },
    { codigo: "OTRO", nombre: "--- OTRO (ESCRIBIR MANUAL) ---" }
];

const articulosLista = [
    { codigo: "1", nombre: "JUDIWHITE", empresa: "DEALER" },
    { codigo: "2", nombre: "DENIM RIGIDO IMP.", empresa: "" },
    { codigo: "3", nombre: "DENIM FABRIC 100% COTTON - 11904", empresa: "" },
    { codigo: "4", nombre: "DENIM FABRICS 100 PCT COTTON Nº100567-11 Oz.", empresa: "" },
    { codigo: "5", nombre: "DENIM FABRICS 100 PCT COTTON Nº4912-12.25 Oz.", empresa: "" },
    { codigo: "7", nombre: "JORDAN 90960 - DENIM BANSWARA 14.5 OZ", empresa: "" },
    { codigo: "WICHITA", nombre: "WICHITA-D1000-004371", empresa: "" },
    { codigo: "9", nombre: "DENIM PREMIUM IMP.", empresa: "" },
    { codigo: "10", nombre: "DENIM FABRIC 402 - C - 10 Oz.", empresa: "" },
    { codigo: "11", nombre: "DENIM FABRIC 405 - P - 11.75 Oz.", empresa: "" },
    { codigo: "12", nombre: "DENIM STRETCH IMP.", empresa: "" },
    { codigo: "13", nombre: "DENIM FABRIC (POWER STRETCH)-R1070", empresa: "" },
    { codigo: "14", nombre: "DENIM FABRIC 67.2 PERCENT COTTON 1.8 PERCENT STRETCH - RUBI SATIN", empresa: "" },
    { codigo: "15", nombre: "COTTON POLY STRETCH 8.30 OZ 100644-ESMERALDA", empresa: "" },
    { codigo: "16", nombre: "70015 -CALAN 1.570 m (CATALAN)", empresa: "" },
    { codigo: "ROSE", nombre: "ROSE BLUE STRETCH", empresa: "" },
    { codigo: "18", nombre: "DENIM STRETCH NAC.", empresa: "" },
    { codigo: "7215", nombre: "SARGA STRETCH DENIM AZUL-7215", empresa: "" },
    { codigo: "8312", nombre: "SARGA STRETCH DENIM AZUL-8312", empresa: "" },
    { codigo: "26I02", nombre: "DENIM 26I02 SANFORIZADO AZUL", empresa: "" },
    { codigo: "26I01", nombre: "DENIM 26I01 SANFORIZADO AZUL 0020", empresa: "" },
    { codigo: "2CI02", nombre: "DENIM 2CI02 SANFORIZADO", empresa: "" },
    { codigo: "24", nombre: "DENIM 3FI01 SANFORIZADO AZUL", empresa: "" },
    { codigo: "25", nombre: "DENIM 2FI01 SANFORIZADO AZUL", empresa: "" },
    { codigo: "26", nombre: "SARGA STRETCH DENIM NAO 5408", empresa: "" },
    { codigo: "27", nombre: "DENIM 3CI01 SANFORIZADO AZUL", empresa: "" },
    { codigo: "28", nombre: "ESPECIAL STRETCH DENIM HIGH STRCH 4723", empresa: "" },
    { codigo: "29", nombre: "SATEN STRETCH DENIM AZUL 7902", empresa: "" },
    { codigo: "30", nombre: "DENIM 36I01 SANFORIZADO AZUL", empresa: "" },
    { codigo: "31", nombre: "DENIM 4905 TRIFLEX DENIM AZUL/SANF INTENSE BLUE", empresa: "" },
    { codigo: "32", nombre: "SATEN STRETCH DENIM AZUL/SANF AZULINO - 8552", empresa: "" },
    { codigo: "33", nombre: "DENIM TRICOT AZUL/SANF INTENSE BLUE - 4906", empresa: "" },
    { codigo: "34", nombre: "DENIM TRICOT DENIM AZUL/SANF INTENSE BLUE 1ERA - 4901", empresa: "" },
    { codigo: "35", nombre: "SATEN HIGH STRETCH DENIM HIGH STRCH.SANF NITRO 1ER - 7933", empresa: "" },
    { codigo: "36", nombre: "SARGA STRETCH DENIM NAO/SANF AZUL MASTER - 5228", empresa: "" },
    { codigo: "5605", nombre: "SARGA STRETCH DENIM NAO/SANF. AZUL FORTE 1ERA - 5605", empresa: "" },
    { codigo: "38", nombre: "SARGA STRETCH DENIM BLACK/NAO - 5215", empresa: "" },
    { codigo: "39", nombre: "DENIM TRICOT DENIM AZUL/SANF INTENSE BLUE 1ERA - 4900", empresa: "" },
    { codigo: "40", nombre: "SARGA STRETCH DENIM NAO/SANF. AZUL FORTE - 5215", empresa: "" },
    { codigo: "41", nombre: "DENIM TRICOT DENIM BLACK/SANF. BLACK 1ERA - 4905", empresa: "" },
    { codigo: "42", nombre: "DENIM SANFORIZADO - 3CI03", empresa: "" },
    { codigo: "43", nombre: "TELA DENIM AZUL 3-4 - 2CI09", empresa: "" },
    { codigo: "44", nombre: "DENIM SANFORIZADO STRETCH - 3GI03", empresa: "" },
    { codigo: "45", nombre: "DENIM SANFORIZADO STRETCH - 36I03", empresa: "" },
    { codigo: "26I07", nombre: "DENIM 26I07 SANFORIZADO", empresa: "" },
    { codigo: "26I05", nombre: "DENIM 26I05 SANFORIZADO NEGRO - TONO 12", empresa: "" },
    { codigo: "4720", nombre: "SARGA STRETCH DENIM HIGH STRCH.SANF AZUL MASTER 1E - 4720", empresa: "" },
    { codigo: "4715", nombre: "SARGA HIGH STRETCH DENIM HIGH SRTCH.SANF AZUL MAST - 4715", empresa: "" },
    { codigo: "8705", nombre: "SARGA STRETCH DENIM AZUL/SANF AZUL FORTE 1ERA - 8705", empresa: "" },
    { codigo: "36I07", nombre: "ART. 36I07 DENIM SANFORIZADO", empresa: "" },
    { codigo: "52", nombre: "ART. 3JI07 DENIM SANFORIZADO", empresa: "" },
    { codigo: "8195", nombre: "SARGA STRETCH DENIM AZUL/SANF IND.PRE-RED. 1ERA - 8195", empresa: "" },
    { codigo: "54", nombre: "SATEN HIGH STRETCH DENIM HIGH STRCH.SANF AZUL FOTE - 7933", empresa: "" },
    { codigo: "26I06", nombre: "ART. 26I06 DENIM SANFORIZADO", empresa: "" },
    { codigo: "8008", nombre: "SARGA STRETCH DENIM AZUL FORTE - 8008", empresa: "DEALER" },
    { codigo: "4734", nombre: "SARGA HIGH STRETCH DENIM SANF AZUL MAST - 4734", empresa: "" },
    { codigo: "4503", nombre: "SARGA HIGH STRETCH DENIM HIGH STRCH.SANF AZUL FORT - 4503", empresa: "" },
    { codigo: "59", nombre: "SARGA RELAX PPT RELAX/SANF. BLANCO PPT 1ERA - 0304", empresa: "" },
    { codigo: "5702", nombre: "SARGA STRETCH NAO DENIM NAO STRETCH/SOBRETEÑIDO - 5702", empresa: "" },
    { codigo: "61", nombre: "SARGA STRETCH DENIM AZUL/SANF IND PRE-RED 1ERA - 8812", empresa: "" },
    { codigo: "62", nombre: "SARGA HIGH STRETCH DENIM BLAK/HIGH STRCH/SANF BLAC - T222", empresa: "" },
    { codigo: "63", nombre: "SARGA HIGH STRETCH DENIM BLAK/HIGH STRCH/SANF BLAC - T222 - II", empresa: "" },
    { codigo: "64", nombre: "DENIM 2JI07 AZUL - T15", empresa: "" },
    { codigo: "65", nombre: "SARGA STRETCH DENIM HIGH STRCH.SANF AZUL FORTE - 4511", empresa: "" },
    { codigo: "66", nombre: "SARGA CONFORT DENIM NAO/SANF. INTENSE BLUE - 5037", empresa: "" },
    { codigo: "68", nombre: "DENIM 2JI07 AZUL - T34", empresa: "" },
    { codigo: "69", nombre: "SARGA HIGH STRETCH DENIM HIGH STRCH.SANF AZUL FORT-4020", empresa: "" },
    { codigo: "70", nombre: "DENIM 26I05 SANFORIZADO AZUL 0020 - TONO 15", empresa: "" },
    { codigo: "71", nombre: "SARGA HIGH STRETCH DENIM HIGH STRCH. SANF AZUL FORT - 4502", empresa: "" },
    { codigo: "72", nombre: "DENIM 36I01 AZUL 0020 - TONO 15", empresa: "" },
    { codigo: "7056B", nombre: "SARGA/DENIM/SANF BLACK 1R 7056", empresa: "" },
    { codigo: "74", nombre: "ART. 26I06 DENIM SANFORIZADO-T15", empresa: "" },
    { codigo: "75", nombre: "DENIM TRICOT DENIM AZUL/SANF INTENSE BLUE 1ERA- 4905", empresa: "" },
    { codigo: "76", nombre: "SARGA HIGH STRETCH DENIM HIGH STRCH. SANF AZUL MAST-4708", empresa: "" },
    { codigo: "77", nombre: "DENIM STRETCH 2JI07 - T15 MERCERIZADO", empresa: "" },
    { codigo: "78", nombre: "DENIM STRETCH 26I17 - T15 MERCERIZADO", empresa: "" },
    { codigo: "79", nombre: "SARGA HIGH STRETCH PPT MICRO/SANF BLANCO PPT 1ERA-2508", empresa: "" },
    { codigo: "80", nombre: "SARGA HIGH STRETCH DENIM AZUL/SANF AZUL FORTE 1ERA-3718", empresa: "" },
    { codigo: "81", nombre: "SARGA HIGH STRETCH DENIM HIGH STR/SANF AZUL FORTE-4746", empresa: "" },
    { codigo: "8715B", nombre: "SARGA STRETCH DENIM BLACK - 8715", empresa: "" },
    { codigo: "83", nombre: "SARGA STRETCH DENIM BLACK/NAO - 5215 - L.V", empresa: "" },
    { codigo: "84", nombre: "SARGA STRETCH DENIM NAO/SANF AZUL MASTER - 5228 - L.V", empresa: "" },
    { codigo: "85", nombre: "SARGA STRETCH DENIM NAO/SANF. AZUL FORTE - 5215 - L.V", empresa: "" },
    { codigo: "86", nombre: "SARGA HIGH STRETCH DENIM HIGH STRCH. SANF AZUL FORT -4502 - L.V", empresa: "" },
    { codigo: "87", nombre: "SARGA HIGH STRETCH DENIM HIGH STR/SANF AZUL FORTE-4746 - L.V", empresa: "" },
    { codigo: "88", nombre: "SARGA STRETCH DENIM HIGH STRCH.SANF AZUL MASTER 1E -  4720 - L.V", empresa: "" },
    { codigo: "89", nombre: "SARGA HIGH STRETCH DENIM HIGH STRCH.SANF AZUL FORT - 4503 - L.V", empresa: "" },
    { codigo: "90", nombre: "SARGA STRETCH DENIM HIGH STRCH.SANF AZUL FORTE 1E - 4720", empresa: "" },
    { codigo: "91", nombre: "SARGA DENIM AZUL/ SANF IND. PRE.RED. 1ERA - 7189", empresa: "" },
    { codigo: "92", nombre: "SARGA STRETCH NAO DENIM NAO STRETCH/SOBRETEÑIDO S - 5702 - LV", empresa: "" },
    { codigo: "1222", nombre: "SARGA HIGH STRETCHDENIM HIGH STRCH.SANF AZUL FORT 4012 - LV", empresa: "" },
    { codigo: "94", nombre: "SATEN HIGHSTRETCHDENIM HIGH STRCH.SANFNITRO1ER 3728 - LV", empresa: "" },
    { codigo: "4012B", nombre: "SARGA HIGH STRETCH DENIM BLACK/SANF, BLACK 1ERA- 4012", empresa: "" },
    { codigo: "4012A", nombre: "SARGA HIGH STRETCHDENIM HIGH STRCH.SANF AZUL FORT-4012", empresa: "" },
    { codigo: "97", nombre: "ART. 21I04 APT SANFORIZADO", empresa: "" },
    { codigo: "98", nombre: "DENIM 2JI06 AZUL 0020-T15", empresa: "" },
    { codigo: "99", nombre: "SARGA HIGH STRETCH DENIM HIGH STRCH.SANF AZUL FORT-4504", empresa: "" },
    { codigo: "8750", nombre: "SARGA HIGH STRETCH DENIM/SANF 1ERA -8750", empresa: "" },
    { codigo: "20I07", nombre: "DENIM  20I07 SANFORIZADO AZUL - 15", empresa: "" },
    { codigo: "102", nombre: "DENIM SARGA CONF. SANF AZUL - 8822", empresa: "" },
    { codigo: "103", nombre: "SARGA DENIM HIGH STRETCH/SANF AZUL FORTE - 4004", empresa: "" },
    { codigo: "4546", nombre: "SARGA DENIM HICH STRETCH/SANF AZUL FORTE - 4546", empresa: "" },
    { codigo: "105", nombre: "DENIM RIGIDO NACIONAL", empresa: "" },
    { codigo: "106", nombre: "SARGA DENIM NAO/SANF NITRO - 9211", empresa: "" },
    { codigo: "107", nombre: "SARGA IMPACTO DENIM IMPACTO/SANF. AZUL MASTER 1ERA 5518", empresa: "" },
    { codigo: "108", nombre: "SARGA IMPACTO DENIM IMPACTO/SANF. ECLIPSE. 1ERA 5518", empresa: "" },
    { codigo: "7046", nombre: "SARGA DENIM.SANF. 7046", empresa: "" },
    { codigo: "110", nombre: "SARGA DENIM IMPACTO-9501", empresa: "" },
    { codigo: "111", nombre: "SARGA DENIM NAO-9203", empresa: "" },
    { codigo: "20I16", nombre: "DENIM 20I16 SANFORIZADO AZUL 0020", empresa: "" },
    { codigo: "20I03", nombre: "DENIM 20I03 SANFORIZADO AZUL", empresa: "" },
    { codigo: "10I10", nombre: "DENIM 10I01 SANFORIZADO", empresa: "" },
    { codigo: "20I14", nombre: "DENIM AZUL 20I14", empresa: "" },
    { codigo: "116", nombre: "DENIM 10I02 SANFORIZADO AZUL - LEGO", empresa: "" },
    { codigo: "117", nombre: "DENIM 20I18 SANFORIZADO AZUL", empresa: "" },
    { codigo: "118", nombre: "DENIM 21I03 SANFORIZADO", empresa: "" },
    { codigo: "119", nombre: "DENIM 20I19 SANFORIZADO AZUL-TONO 34", empresa: "" },
    { codigo: "120", nombre: "SARGA DENIM NAO/SANF - 2200 ( T01740 )", empresa: "" },
    { codigo: "121", nombre: "SARGA DENIM NAO/SANF. IND. PRE-RED 1ERA  -  5213", empresa: "" },
    { codigo: "122", nombre: "SARGA DENIM NAO/SANF. AZUL FORTE 1ERA 3400", empresa: "" },
    { codigo: "5602", nombre: "SARGA DENIM NAO/SANF AZUL FORTE - 5602", empresa: "" },
    { codigo: "5604", nombre: "SARGA DENIM NAO/SANF. AZUL FORTE 1ERA - 5604", empresa: "" },
    { codigo: "7017", nombre: "SARGA DENIM SANF. IND.PRE-RED. 1ERA - 7017", empresa: "" },
    { codigo: "20I19", nombre: "DENIM 20I19 SANFORIZADO AZUL (SEGUNDA)", empresa: "" },
    { codigo: "127", nombre: "DENIM 2HI18 SANFORIZADO AZUL", empresa: "" },
    { codigo: "128", nombre: "SARGA IMPACTO DENIM IMPACTO/SANF. AZUL MASTER 1ERA 5505", empresa: "" },
    { codigo: "129", nombre: "SARGA IMPACTO DENIM IMPACTO/SANF AZUL FORTE 1ERA - 9535", empresa: "" },
    { codigo: "5017", nombre: "SARGA NAO DENIM NAO/SANF.IND.PRE-RED 1ERA-5017", empresa: "" },
    { codigo: "5205", nombre: "SARGA NAO DENIM NAO/SANF.AZUL MASTER-5205", empresa: "" },
    { codigo: "133", nombre: "DENIM LIVIANO NETFLIX", empresa: "" },
    { codigo: "7152", nombre: "SARGA DENIM SANF.IND.PRE-RED. 1ERA - 7152", empresa: "" },
    { codigo: "3403", nombre: "SARGA DENIM NAO/SANF. AZUL FORTE 1ERA - 3403", empresa: "" },
    { codigo: "136", nombre: "SARGA DENIM NAO/SANF. AZUL FORTE 1ERA - 5604 - L.V", empresa: "" },
    { codigo: "7382B", nombre: "SARGA DENIM BLACK/SANF. BLACK. 1ERA - 7382", empresa: "" },
    { codigo: "138", nombre: "SARGA DENIM ANTIFLUIDO/SANF AZUL FORTE 1ERA - 5604", empresa: "" },
    { codigo: "139", nombre: "SARGA DENIM AZUL/SANF AZUL FORTE 1ERA - 7388", empresa: "" },
    { codigo: "24I16", nombre: "DENIM 24I16 AZUL 0020 TONO - 15", empresa: "DELAER" },
    { codigo: "7384A", nombre: "SARGA DENIM AZUL / SANF AZUL FORTE 1ERA -7384", empresa: "BOLIVAR" },
    { codigo: "7388B", nombre: "SARGA DENIM BLACK/SANF, BLACK 1ERA-7388", empresa: "" },
    { codigo: "5555", nombre: "SARGA CONFORT DENIM/SANF. AZUL FORTE 7483 - LV", empresa: "" },
    { codigo: "7382A", nombre: "SARGA DENIM AZUL/SANF AZUL FORTE 1ERA 7382 - LV", empresa: "" },
    { codigo: "7388A", nombre: "SARGA DENIM AZUL/SANF AZUL FORTE 1ERA 7388- LV", empresa: "" },
    { codigo: "146", nombre: "SARGA DENIM BLACK/SANF, BLACK 1ERA 7388-TPPS", empresa: "" },
    { codigo: "147", nombre: "SARGA DENIM AZUL/SANF AZUL FORTE 1ERA - 7382", empresa: "" },
    { codigo: "148", nombre: "SARGA DENIM AZUL/SANF IND.PRE-RED. 1ERA-7192", empresa: "" },
    { codigo: "7483A", nombre: "SARGA CONFORT DENIM CONFORT/TH/SANF. AZUL FORTE 7483", empresa: "DEALER BOLIVAR" },
    { codigo: "7483B", nombre: "SARGA CONFORT DENIM/SANF. BLACK 1ERA - 7483", empresa: "TEXTILES BOLIVAR" },
    { codigo: "151", nombre: "SARGA NAO DENIM NAO/SANF. IND.PRE-RED.1ERA - 5216", empresa: "" },
    { codigo: "152", nombre: "DENIM 20I29 SANFORIZADO AZUL TONO 15", empresa: "" },
    { codigo: "123", nombre: "SARGA/DENIM/SANF AZUL FORTE 1R 7384-1.80", empresa: "" },
    { codigo: "154", nombre: "DENIM CONFORT IMPORTADO", empresa: "" },
    { codigo: "155", nombre: "98 PCT COTTON 2 PCT SPANDEX DENIM FABRIC 197704 -DENIM EROS", empresa: "" },
    { codigo: "156", nombre: "ORION/78 COTTON SPANDDEX 9.5 OZ", empresa: "" },
    { codigo: "157", nombre: "RAIN", empresa: "" },
    { codigo: "158", nombre: "LEXUS", empresa: "" },
    { codigo: "159", nombre: "INCLINE", empresa: "" },
    { codigo: "160", nombre: "3568 LEBRON", empresa: "" },
    { codigo: "161", nombre: "636 ROBIN", empresa: "" },
    { codigo: "162", nombre: "DENIME IMPORTADO", empresa: "" },
    { codigo: "163", nombre: "5485 COTTON SPANDEX 6.25 OZ-DEMINE GALAXY", empresa: "" },
    { codigo: "164", nombre: "100737  5.4 OZ - PAPER DENIME", empresa: "" },
    { codigo: "165", nombre: "86740 W DENIM HABANA", empresa: "" },
    { codigo: "166", nombre: "ART.DENIM LIVIANO CUARZO", empresa: "" },
    { codigo: "167", nombre: "DENIM TENCEL FINLANDIA ART.029166", empresa: "" },
    { codigo: "168", nombre: "COLIN SOFT (137394)", empresa: "" },
    { codigo: "169", nombre: "COLIN STRETCH (137406)", empresa: "" },
    { codigo: "170", nombre: "CAMILLE PLUS (142066)", empresa: "" },
    { codigo: "171", nombre: "ZAT BLACK BLACK", empresa: "" },
    { codigo: "172", nombre: "CIELLA", empresa: "" },
    { codigo: "173", nombre: "GEORGIA (66429)", empresa: "" },
    { codigo: "174", nombre: "STRONG-D1000", empresa: "" },
    { codigo: "175", nombre: "PORTUGAL", empresa: "" },
    { codigo: "176", nombre: "RAQUEL", empresa: "" },
    { codigo: "177", nombre: "TUCSON ( 123970 )", empresa: "" },
    { codigo: "178", nombre: "LYA BLACK BW - D5 - 9993", empresa: "" },
    { codigo: "179", nombre: "OUTLANDER BLACK(124618)", empresa: "" },
    { codigo: "180", nombre: "BROKER-D2006", empresa: "" },
    { codigo: "181", nombre: "048742-DENIM BARBADOS - CARIBE", empresa: "" },
    { codigo: "182", nombre: "86756-DENIM LAS VEGAS", empresa: "" },
    { codigo: "ZARA", nombre: "ZARA -D1000-792571", empresa: "" },
    { codigo: "184", nombre: "LONDON - D1000 - 699551", empresa: "" },
    { codigo: "185", nombre: "DONATELA-569891", empresa: "" },
    { codigo: "186", nombre: "ZEFIRO-D2041", empresa: "" },
    { codigo: "187", nombre: "42964 B DENIM KENTUCKY", empresa: "" },
    { codigo: "188", nombre: "2JI20 DENIM SAN JACINTA", empresa: "" },
    { codigo: "189", nombre: "DENIM BARBARO", empresa: "" },
    { codigo: "190", nombre: "DENIM CUATROPORCUATRO", empresa: "" },
    { codigo: "191", nombre: "DENIM CALLAO", empresa: "" },
    { codigo: "192", nombre: "DENIM VARGAS LIGHT", empresa: "" },
    { codigo: "193", nombre: "ROSE BLUE - D3753", empresa: "" },
    { codigo: "194", nombre: "ZEFIRO BLACK-D5200", empresa: "" },
    { codigo: "195", nombre: "DENIME CRUDO", empresa: "" },
    { codigo: "196", nombre: "26I01 ESMERILADO SANFORIZADO PON600 (CRUDO)", empresa: "" },
    { codigo: "197", nombre: "DENIM 36I01 SANFORIZADO PON100  (CRUDO)", empresa: "" },
    { codigo: "198", nombre: "26I05 SIN/COLOR SIN/ESTAMPADO (CRUDO) PPT", empresa: "" },
    { codigo: "199", nombre: "TAFETAS", empresa: "" },
    { codigo: "200", nombre: "TAFETA STRETCH", empresa: "" },
    { codigo: "1670", nombre: "TAFETA STRETCH - 1670", empresa: "DEALER" },
    { codigo: "202", nombre: "TAFETA STRETCH PPT 1113", empresa: "" },
    { codigo: "203", nombre: "POPELINA PERLA SIN/COLOR SIN/ESTAMPADO - 1609", empresa: "" },
    { codigo: "204", nombre: "TAFETA STRETCH PPT H1N110 - 1609", empresa: "" },
    { codigo: "205", nombre: "TAFETA RIGIDA PPT", empresa: "" },
    { codigo: "206", nombre: "TAFETA PPT MICRO-1109", empresa: "" },
    { codigo: "207", nombre: "TAFETA NAVY -1045", empresa: "" },
    { codigo: "208", nombre: "TAFETA 1184 PPT", empresa: "" },
    { codigo: "209", nombre: "LEGANT", empresa: "" },
    { codigo: "210", nombre: "TAFETA OPT MICRO/SANF 2669", empresa: "" },
    { codigo: "211", nombre: "DRILLES", empresa: "" },
    { codigo: "212", nombre: "DRILL RIGIDO NM", empresa: "" },
    { codigo: "213", nombre: "SARGA APT MICRO - 830", empresa: "" },
    { codigo: "214", nombre: "SARGA PPT MICRO-830", empresa: "" },
    { codigo: "215", nombre: "SARGA PPT MICRO-1567", empresa: "" },
    { codigo: "216", nombre: "SARGA PPT SANF-830", empresa: "" },
    { codigo: "217", nombre: "SARGA PPT MICRO SANF - 0748", empresa: "" },
    { codigo: "218", nombre: "SARGA PPT SANF - 0748", empresa: "" },
    { codigo: "219", nombre: "ESPECIAL PPT MICRO/SANF 0986", empresa: "" },
    { codigo: "220", nombre: "SARGA LIVIANO PPT SANF BLANCO PPT 1ERA - 6503", empresa: "" },
    { codigo: "221", nombre: "SARGA PPT MICRO/SANF BLANCO PPT 1ERA-834", empresa: "" },
    { codigo: "222", nombre: "DRILL RIGIDO SJ", empresa: "" },
    { codigo: "223", nombre: "DRIL ARMY - 2064 L1N110  PPT", empresa: "" },
    { codigo: "224", nombre: "DRIL ARMY - 2064 J1N610 APT", empresa: "" },
    { codigo: "225", nombre: "DRIL ARMY - 2064 J1N110  APT", empresa: "" },
    { codigo: "226", nombre: "DRIL MACK - 2110 L1N610", empresa: "" },
    { codigo: "227", nombre: "PAPER TOUCH", empresa: "" },
    { codigo: "228", nombre: "PAPER TOUCH RIGIDO-3850", empresa: "" },
    { codigo: "229", nombre: "PAPER TOUCH STRETCH - 3865", empresa: "" },
    { codigo: "230", nombre: "PAPER TOUCH RIGIDO - 3853", empresa: "" },
    { codigo: "231", nombre: "PAPER TOUCH ZURICH - 8369", empresa: "" },
    { codigo: "232", nombre: "DRILL COLORES", empresa: "" },
    { codigo: "233", nombre: "DRILL 100% POLYESTER 2B01", empresa: "" },
    { codigo: "234", nombre: "SARGA TEÑIDO MICRO/SANF - 1567 COL", empresa: "" },
    { codigo: "235", nombre: "DRILL STRETCH PPT NAC", empresa: "" },
    { codigo: "236", nombre: "DRILL LYCRA 2602", empresa: "" },
    { codigo: "45454", nombre: "SATEN STRETCH PPT SANF 1295", empresa: "BOLIVAR" },
    { codigo: "238", nombre: "SARGA STRCH PPT SANF-850", empresa: "" },
    { codigo: "239", nombre: "DRILL LYCRA 2655", empresa: "" },
    { codigo: "240", nombre: "SATEN 3600", empresa: "" },
    { codigo: "241", nombre: "ESPECIAL STRCH PPT MICRO/SANF 0886", empresa: "" },
    { codigo: "242", nombre: "SARGA STRETCH PPT MICRO/SANF BLANCO PPT 1ERA - 1302", empresa: "" },
    { codigo: "243", nombre: "SARGA STRETCH PPT MICRO/SANF BLANCO PPT 1ERA - 6401", empresa: "" },
    { codigo: "244", nombre: "TWILL SIN/COLOR/SIN/ESTAMP - 2625", empresa: "" },
    { codigo: "245", nombre: "TELA DRILL STRETCH - 1302", empresa: "" },
    { codigo: "246", nombre: "SARGA CONFORT PPT MICRO/SANF BLANCO PPT 1ERA - 1560", empresa: "" },
    { codigo: "247", nombre: "SARGA STRETCH PPT SANF. BLANCO PPT 1ERA - 0933", empresa: "" },
    { codigo: "248", nombre: "SATEN HIGH STRETCH DENIM SANF AZUL FORT 4505", empresa: "" },
    { codigo: "249", nombre: "SARGA HIGH STRETCH PPT MICRO/SANF BLANCO PPT 1ERA - 2500", empresa: "" },
    { codigo: "250", nombre: "DRILL LYCRA L1NC10 SUEDE - 2602", empresa: "" },
    { codigo: "251", nombre: "SARGA STRETCH PPT SANF. BLANCO PPT 1ERA  - 6505", empresa: "" },
    { codigo: "252", nombre: "TWILL L1NC10 SUEDE - 2625", empresa: "" },
    { codigo: "253", nombre: "SATEN STRETCH PPT SANF. BLANCO 1ERA - 1289", empresa: "" },
    { codigo: "254", nombre: "SARGA HIGH STRETCH PPT MICRO/SANF BLANCO PPT 1ERA - 2504", empresa: "" },
    { codigo: "PISA", nombre: "DRIL LYCRA PPT SUEDE - PISA", empresa: "" },
    { codigo: "256", nombre: "SARGA STRETCH PPT MICRO/SANF BLANCO PPT 1ERA 1540", empresa: "" },
    { codigo: "257", nombre: "SARGA STRETCH PPT SANF. BLANCO PPT 1ERA -6550", empresa: "" },
    { codigo: "258", nombre: "DRILL LIVIANO SIN/COLOR/SIN/ESTAMP H1N110 - 2678", empresa: "" },
    { codigo: "259", nombre: "SARGA STRETCH PPT MICRO/SANF BLANCO 1ERA - 1313", empresa: "" },
    { codigo: "260", nombre: "SARGA PPT MICRO/SANF BLANCO PPT 1ERA 6510", empresa: "" },
    { codigo: "261", nombre: "SARGA COMFORT PPT MICRO/SANF BLANCO PPT 1 ERA -6522", empresa: "" },
    { codigo: "262", nombre: "SARGA/PPT MERC./SANF.BLANCO PPT - 6502", empresa: "" },
    { codigo: "263", nombre: "BULK DENIM STRETCH PPT", empresa: "" },
    { codigo: "264", nombre: "SARGA STRCH PPT MICRO/SANF 6402", empresa: "" },
    { codigo: "265", nombre: "DRILL STRETCH PPT IMP", empresa: "" },
    { codigo: "266", nombre: "NATURAL FLEX 3950", empresa: "" },
    { codigo: "267", nombre: "HAITI PLUS II PT PELETIZAD 2797", empresa: "" },
    { codigo: "268", nombre: "STEVE PLUS II PT ESCOVADO 9545", empresa: "" },
    { codigo: "269", nombre: "DRILL HIROS PPT (BERLIN)-3840", empresa: "" },
    { codigo: "270", nombre: "DRILL SANTANA-3855", empresa: "" },
    { codigo: "271", nombre: "DRILL MONICA", empresa: "" },
    { codigo: "272", nombre: "DARYL PLUS II PT (84862)", empresa: "" },
    { codigo: "273", nombre: "BALDWIN POWER PT PELETIZAD-9993", empresa: "" },
    { codigo: "274", nombre: "JAGGER PT ESCOVADO-W000-000121", empresa: "" },
    { codigo: "275", nombre: "LANA POWER PLUS PT - 9993", empresa: "" },
    { codigo: "276", nombre: "RENZO NATURAL - WNAT -672321", empresa: "" },
    { codigo: "277", nombre: "ASTRA PPT", empresa: "" },
    { codigo: "278", nombre: "VIC MAX PT ESCOVADO", empresa: "" },
    { codigo: "279", nombre: "BOLT PT PELETIZADO", empresa: "" },
    { codigo: "280", nombre: "CABO FRIO PT-W000", empresa: "" },
    { codigo: "281", nombre: "REDFORD PLUS PT PELETIZADO", empresa: "" },
    { codigo: "282", nombre: "DARYL PLUS III PT-W000 -856191", empresa: "" },
    { codigo: "283", nombre: "BALDWIN POWER PLUS PT PELETIZADO", empresa: "" },
    { codigo: "284", nombre: "HAIA PT ESCOVADO-W000 -923541", empresa: "" },
    { codigo: "285", nombre: "BOLSILLEROS", empresa: "" },
    { codigo: "286", nombre: "CRUDOS", empresa: "" },
    { codigo: "287", nombre: "TELA 100 PCT POLYESTER GREY FABRIC", empresa: "" },
    { codigo: "288", nombre: "ART. 1800 BRAMANTE CRUDO", empresa: "" },
    { codigo: "289", nombre: "COLORES", empresa: "" },
    { codigo: "290", nombre: "TAFETA BLANCO 1B01", empresa: "" },
    { codigo: "POB", nombre: "POPELINA BLANCO 1.6 M", empresa: "" },
    { codigo: "292", nombre: "BOLSILLERO RAYAS - POPELINA NOVAK", empresa: "" },
    { codigo: "PON", nombre: "POPELINA NEGRO 1.6 M", empresa: "" },
    { codigo: "294", nombre: "POPELINA PESADA OPTICO 1.60M", empresa: "" },
    { codigo: "295", nombre: "ESTAMPADOS", empresa: "" },
    { codigo: "296", nombre: "POLYESTER GREY TERMOSOLADO-ESTAMPADO", empresa: "" },
    { codigo: "297", nombre: "POPLIN ESTAMPADO 1.6M", empresa: "" },
    { codigo: "298", nombre: "POLYESTER GREY FAVIO RICH-ESTAMPADO", empresa: "" },
    { codigo: "299", nombre: "M937 ESTAMPADO", empresa: "" },
    { codigo: "300", nombre: "TAFETA CANVAS CROSS DISEÑO Nª1", empresa: "" },
    { codigo: "301", nombre: "TAFETA CANVAS ESCOSES DISEÑO Nª1", empresa: "" },
    { codigo: "302", nombre: "TAFETA CANVAS ESCOSES DISEÑO Nª2", empresa: "" },
    { codigo: "303", nombre: "CAMISERIA", empresa: "" },
    { codigo: "304", nombre: "POPELINAS", empresa: "" },
    { codigo: "305", nombre: "POLYPIMA PLUS DRY FIT", empresa: "" },
    { codigo: "306", nombre: "OXFORD 6A00 COLORES", empresa: "" },
    { codigo: "307", nombre: "POLAR", empresa: "" },
    { codigo: "308", nombre: "POLARES", empresa: "" },
    { codigo: "309", nombre: "TELA POLAR", empresa: "" },
    { codigo: "310", nombre: "TELA MICROPOLAR", empresa: "" },
    { codigo: "311", nombre: "TELA POLAR - LAVADO", empresa: "" },
    { codigo: "312", nombre: "CORDELINAS", empresa: "" },
    { codigo: "313", nombre: "CORDELINA RIGIDA SJ", empresa: "" },
    { codigo: "314", nombre: "BEDFORD 4010", empresa: "" },
    { codigo: "315", nombre: "BLUSERIA", empresa: "" },
    { codigo: "316", nombre: "ENCAJES", empresa: "" },
    { codigo: "317", nombre: "TELA ENCAJE COLOR", empresa: "" },
    { codigo: "318", nombre: "TELA ENCAJE ESTAMPADO", empresa: "" },
    { codigo: "319", nombre: "CORDUROY", empresa: "" },
    { codigo: "320", nombre: "CORDUROY STRECHT", empresa: "" },
    { codigo: "321", nombre: "CORDUROY STRECHT PPT SANF-2096", empresa: "" },
    { codigo: "3802", nombre: "CORDUROY STRECHT -18 W - 3802", empresa: "BOLIVAR" },
    { codigo: "323", nombre: "DENIMES LAVADOS", empresa: "" },
    { codigo: "324", nombre: "DENIM FABRIC 100% 11904-14.5 OZ", empresa: "" },
    { codigo: "325", nombre: "DENIM FABRIC 11904 14.5 ONZ. - LAVADO", empresa: "" },
    { codigo: "326", nombre: "DENIM 20I14 QON110", empresa: "" },
    { codigo: "327", nombre: "DENIM 20I14 QON110- LAVADO", empresa: "" },
    { codigo: "328", nombre: "DENIM 10I02 SANFORIZADO", empresa: "" },
    { codigo: "329", nombre: "DENIM 10I02 SANFORIZADO LAVADO", empresa: "" },
    { codigo: "330", nombre: "LAVADO AZUL DENIM 10I02 SANFORIZADO", empresa: "" },
    { codigo: "331", nombre: "COTTON POLY STRETCH 8.30 OZ 100644-ESMERALDA", empresa: "" },
    { codigo: "332", nombre: "DENIM 100644 ESMERALDA-LAVADO", empresa: "" },
    { codigo: "333", nombre: "5485 COTTON SPANDEX 6.25 OZ-DEMINE GALAXY", empresa: "" },
    { codigo: "334", nombre: "DENIM 5485 GALAXY-LAVADO", empresa: "" },
    { codigo: "335", nombre: "DENIM 20I18 - LAVADO", empresa: "" },
    { codigo: "336", nombre: "DENIM 20I18 - LAVADO", empresa: "" },
    { codigo: "337", nombre: "DENIM 20I18 - LAVADO - MILANO", empresa: "" },
    { codigo: "338", nombre: "DENIM 20I16 - LAVADO", empresa: "" },
    { codigo: "339", nombre: "DENIM 20I16 - LAVADO", empresa: "" },
    { codigo: "340", nombre: "DENIM 20I16 LAVADO AZUL INTENSO", empresa: "" },
    { codigo: "341", nombre: "DENIM 20I16 LAVADO CELESTE INTERMEDIO", empresa: "" },
    { codigo: "342", nombre: "DENIM 20I16 LAVADO CELESTE CLARO", empresa: "" },
    { codigo: "343", nombre: "SARGA DENIM.SANF. 7046", empresa: "" },
    { codigo: "344", nombre: "SARGA DENIM.SANF. 7046 - LAVADO", empresa: "" },
    { codigo: "345", nombre: "DENIM FABRIC (POWER STRETCH)-R1070", empresa: "" },
    { codigo: "346", nombre: "DENIM FABRIC (POWER STRETCH)-R1070 - LAVADO", empresa: "" },
    { codigo: "347", nombre: "SARGA STRETCH DENIM AZUL-8312", empresa: "" },
    { codigo: "348", nombre: "SARGA STRETCH DENIM AZUL-8312 - LAVADO", empresa: "" },
    { codigo: "349", nombre: "DENIM 26I01 SANFORIZADO AZUL 0020", empresa: "" },
    { codigo: "350", nombre: "DENIM 26I01 SANFORIZADO AZUL 0020 - LAVADO", empresa: "" },
    { codigo: "351", nombre: "DENIM 20I19 SANFORIZADO AZUL", empresa: "" },
    { codigo: "352", nombre: "DENIM 20I19 SANFORIZADO AZUL - LAVADO C.INTERMEDIO", empresa: "" },
    { codigo: "353", nombre: "DENIM 20I19 SANFORIZADO AZUL (SEGUNDA) -LAVADO", empresa: "" },
    { codigo: "354", nombre: "DENIM 20I19 SANFORIZADO AZUL-LAVADO AZUL INTENSO", empresa: "" },
    { codigo: "355", nombre: "DENIM 20I19 SANFORIZADO AZUL-LAVADO C.CLARO", empresa: "" },
    { codigo: "356", nombre: "DENIM 20I19 SANFORIZADO AZUL (SEGUNDA)- LAVADO AZUL INTENSO", empresa: "" },
    { codigo: "357", nombre: "DENIM 20I19 SANFORIZADO AZUL (SEGUNDA)-LAVADO CELESTE CLARO", empresa: "" },
    { codigo: "358", nombre: "SARGA DENIM NAO/SANF. IND. PRE-RED 1ERA", empresa: "" },
    { codigo: "359", nombre: "SARGA DENIM NAO/SANF. IND. PRE-RED 1ERA 5213 - LAVADO", empresa: "" },
    { codigo: "360", nombre: "DENIM 20I03 SANFORIZADO AZUL", empresa: "" },
    { codigo: "361", nombre: "DENIM 20I03 SANFORIZADO AZUL - LAVADO", empresa: "" },
    { codigo: "362", nombre: "DENIM 21I03 SANFORIZADO", empresa: "" },
    { codigo: "363", nombre: "DENIM 21I03 SANFORIZADO - LAVADO", empresa: "" },
    { codigo: "364", nombre: "SARGA DENIM NAO/SANF NITRO - 9211", empresa: "" },
    { codigo: "365", nombre: "SARGA DENIM NAO/SANF NITRO - 9211-LAVADO AZUL INTENSO", empresa: "" },
    { codigo: "366", nombre: "SARGA DENIM NAO/SANF NITRO - 9211-LAVADO CELESTE", empresa: "" },
    { codigo: "367", nombre: "SARGA DENIM NAO/SANF NITRO - 9211-LAVADO C/INTERMEDIO", empresa: "" },
    { codigo: "368", nombre: "SARGA DENIM NAO/SANF NITRO - 9211-SUAVIZADO", empresa: "" },
    { codigo: "369", nombre: "DENIM NEBULA", empresa: "" },
    { codigo: "370", nombre: "DENIM NEBULA - LAVADO - C. INTERMEDIO", empresa: "" },
    { codigo: "371", nombre: "COLIN SOFT (137394)", empresa: "" },
    { codigo: "372", nombre: "COLIN SOFT (137394)-LAVADO AZUL INTENSO", empresa: "" },
    { codigo: "373", nombre: "DENIM  20I07 SANFORIZADO AZUL", empresa: "" },
    { codigo: "374", nombre: "DENIM 20I07 LAVADO AZUL INTENSO", empresa: "" },
    { codigo: "375", nombre: "DENIM 20I07 LAVADO CELESTE INTERMEDIO", empresa: "" },
    { codigo: "376", nombre: "DENIM 20I07 LAVADO CELESTE CLARO", empresa: "" },
    { codigo: "377", nombre: "CANVAS", empresa: "" },
    { codigo: "378", nombre: "CANVAS CRUDO", empresa: "" },
    { codigo: "379", nombre: "CANVAS SOFT S/C S/E - 6000 -L1N610", empresa: "" },
    { codigo: "380", nombre: "CANVAS COLORES", empresa: "" },
    { codigo: "381", nombre: "1394 TAFETA TEÑIDA", empresa: "" },
    { codigo: "382", nombre: "6005 COLORES", empresa: "" },
    { codigo: "383", nombre: "6000 COLORES", empresa: "" },
    { codigo: "384", nombre: "DRILLES Y PPTS ESTAMPADOS", empresa: "" },
    { codigo: "385", nombre: "DRILL RIGIDO - ESTAMPADO", empresa: "" },
    { codigo: "386", nombre: "SARGA PPT MICRO - 830 - ESTAMPADO", empresa: "" },
    { codigo: "387", nombre: "SARGA PPT MICRO SANF - 0748 - ESTAMPADO", empresa: "" },
    { codigo: "388", nombre: "DRIL MACK - 2110 L1N610 - ESTAMPADO", empresa: "" },
    { codigo: "389", nombre: "SARGA PPT SANF-830 - ESTAMPADO", empresa: "" },
    { codigo: "390", nombre: "ART. 1800 BRAMANTE CRUDO - ESTAMPADO", empresa: "" },
    { codigo: "391", nombre: "DRILL STRETCH - ESTAMPADO", empresa: "" },
    { codigo: "392", nombre: "DRILL LYCRA 2655 - ESTAMPADO", empresa: "" },
    { codigo: "393", nombre: "HAITI PLUS II PT PELETIZAD 2797 - ESTAMPADO", empresa: "" },
    { codigo: "394", nombre: "NATURAL FLEX 3950 - ESTAMPADO", empresa: "" },
    { codigo: "395", nombre: "TWILL DRILL STRETCH 2625 - ESTAMPADO", empresa: "" },
    { codigo: "396", nombre: "SARGA STRETCH PPT MICRO/SANF 6401 - ESTAMPADO", empresa: "" },
    { codigo: "397", nombre: "DRILL LYCRA 2602 - ESTAMPADO", empresa: "" },
    { codigo: "398", nombre: "DRILL PISA-ESTAMPADO ALETA DE TIBURON", empresa: "" },
    { codigo: "399", nombre: "DRILL PISA-ESTAMPADO AGUA ALETA DE TIBURON", empresa: "" },
    { codigo: "400", nombre: "DRILL PISA - ESTAMPADO HYF", empresa: "" },
    { codigo: "401", nombre: "TAFETA RIGIDO - ESTAMPADO", empresa: "" },
    { codigo: "402", nombre: "TAFETA NAVY - 1045 PPT - ESTAMPADO", empresa: "" },
    { codigo: "403", nombre: "TAFETA PPT MICRO - 1109 CAMUFLADO R", empresa: "" },
    { codigo: "404", nombre: "TAFETA PPT MICRO - 1109 - ESTAMPADO HYF", empresa: "" },
    { codigo: "405", nombre: "TAFETA STRETCH - ESTAMPADO", empresa: "" },
    { codigo: "406", nombre: "TAFETA STRETCH - 1670 - ESTAMPADO", empresa: "" },
    { codigo: "407", nombre: "TAFETA STRETCH PPT 1113 - CAMUFLADO R", empresa: "" },
    { codigo: "408", nombre: "TAFETA STRETCH PPT 1113 - ESTAMPADO GAVIOTAS", empresa: "" },
    { codigo: "409", nombre: "TAFETA STRETCH PPT 1113 - ESTAMPADO FLORES", empresa: "" },
    { codigo: "410", nombre: "TAFETA STRETCH PPT 1113 - ESTAMPADO PALMERAS", empresa: "" },
    { codigo: "411", nombre: "CRUDOS-PPTS RIGIDOS ESTAMPADOS", empresa: "" },
    { codigo: "412", nombre: "PAPER TOUCH RIGIDO-3853 ESTAMPADO RESERVA", empresa: "" },
    { codigo: "413", nombre: "PAPER TOUCH RIGIDO-3853 ESTAMPADO AGUA", empresa: "" },
    { codigo: "414", nombre: "CRUDOS-PPTS STRETCH ESTAMPADOS", empresa: "" },
    { codigo: "415", nombre: "DENIMES ESTAMPADOS", empresa: "" },
    { codigo: "416", nombre: "DENIMES STRETCH - ESTAMPADO", empresa: "" },
    { codigo: "417", nombre: "ORION/78 COTTON SPANDDEX 9.5 OZ  (4031) - ESTAMPADO", empresa: "" },
    { codigo: "418", nombre: "26I01 ESMERILADO SANFORIZADO PON600 (CRUDO) - ESTAMPADO", empresa: "" },
    { codigo: "419", nombre: "INDIANA 6160 - 937 - ESTAMPADO", empresa: "" },
    { codigo: "420", nombre: "DENIMES RIGIDOS- ESTAMPADO", empresa: "" },
    { codigo: "421", nombre: "SARGA DENIM NAO/SANF NITRO-9211-ESTAMPADO DISCHARGE ESTRELLITA", empresa: "" },
    { codigo: "422", nombre: "SARGA DENIM NAO/SANF NITRO-9211-ESTAMPADO BASE ESTRELLITA", empresa: "" },
    { codigo: "423", nombre: "PRENDAS", empresa: "" },
    { codigo: "424", nombre: "PRENDAS", empresa: "" },
    { codigo: "425", nombre: "FRAZADAS", empresa: "" },
    { codigo: "426", nombre: "FRENCH TERRY", empresa: "" },
    { codigo: "427", nombre: "FRENCH TERRY INDIGO", empresa: "" },
    { codigo: "428", nombre: "ACUARIO POWER STRECH NEW INDIGO PEINADO - 420 KGRS.", empresa: "" },
    { codigo: "429", nombre: "ACUARIO POWER STRECH INDIGO CARDADO LIVIANO - 390 KGRS.", empresa: "" },
    { codigo: "430", nombre: "BRAMANTE ESTAMPADO", empresa: "" },
    { codigo: "431", nombre: "BRAMANTE ESTAMPADO", empresa: "" },
    { codigo: "432", nombre: "ART. 1800 BRAMANTE - ESTAMPADO - PAOLA FRECH", empresa: "" },
    { codigo: "433", nombre: "ART. 1800 BRAMANTE ESTAMPADO - BRUNELLA", empresa: "" },
    { codigo: "434", nombre: "CORDUROY", empresa: "" },
    { codigo: "435", nombre: "CORDUROY STRETCH", empresa: "" },
    { codigo: "436", nombre: "21W CTTN SPANDEX CORDUROY P.F.D", empresa: "" },
    { codigo: "437", nombre: "BABY CORD", empresa: "" },
    { codigo: "438", nombre: "TEJIDOS CORDUROY 3810 - BABY CORD", empresa: "" },
    { codigo: "439", nombre: "CORDUROY STRECHT 18 W 3802-B", empresa: "" },
    { codigo: "440", nombre: "CORDUROY RIGIDO", empresa: "" },
    { codigo: "441", nombre: "CANVAS", empresa: "" },
    { codigo: "442", nombre: "CANVAS COL. REACT.SJ", empresa: "" },
    { codigo: "443", nombre: "CANVAS COL", empresa: "" },
    { codigo: "444", nombre: "CANVAS COL. BARZA NM", empresa: "" },
    { codigo: "445", nombre: "TAFETA TEÑIDO BARZA 2DA-1394", empresa: "" },
    { codigo: "446", nombre: "TAFETA TEÑIDO BARZA ASFALTO OB-1394", empresa: "" },
    { codigo: "447", nombre: "CAMISERIA", empresa: "" },
    { codigo: "448", nombre: "DRILL PEACH-SJ", empresa: "" },
    { codigo: "449", nombre: "DRILL PEACH BLANCO-2264", empresa: "" },
    { codigo: "450", nombre: "DRILL PEACH COL I-2264", empresa: "" },
    { codigo: "451", nombre: "DRILL PEACH COL II-2264", empresa: "" },
    { codigo: "452", nombre: "OXFORD SJ.", empresa: "" },
    { codigo: "453", nombre: "OXFORD - 6A00", empresa: "" },
    { codigo: "454", nombre: "OXFORD BLANCO-6A00", empresa: "" },
    { codigo: "455", nombre: "POPELINA TEC.", empresa: "" },
    { codigo: "456", nombre: "POLYPIMA-830", empresa: "" },
    { codigo: "457", nombre: "POLYPIMA ESCOLAR-830", empresa: "" },
    { codigo: "458", nombre: "POLYPIMA PLUS DRY FIT -899", empresa: "" },
    { codigo: "459", nombre: "POLYPIMA PLUS DRY FIT II-899", empresa: "" },
    { codigo: "460", nombre: "POPELINA TECNOTEL", empresa: "" },
    { codigo: "461", nombre: "TECNOPIMA B", empresa: "" },
    { codigo: "462", nombre: "POPELINA DE 1.5 - PRIMERA", empresa: "" },
    { codigo: "463", nombre: "POPELINA DE 1.5 - SEGUNDA", empresa: "" },
    { codigo: "464", nombre: "POPELINA COLORES 1.5M ESTAMPADO", empresa: "" },
    { codigo: "465", nombre: "POPELINA TEX. MERCURIA", empresa: "" },
    { codigo: "466", nombre: "POPELINA BLANCO RAYAS", empresa: "" },
    { codigo: "467", nombre: "POPELINA IMPORTADA", empresa: "" },
    { codigo: "468", nombre: "POPELINA IMPORTADA PREMIUM SUPER - D", empresa: "" },
    { codigo: "469", nombre: "POPELINA GOLD (COLORES)", empresa: "" },
    { codigo: "470", nombre: "BOLSILLERO", empresa: "" },
    { codigo: "471", nombre: "POPLIN", empresa: "" },
    { codigo: "472", nombre: "TAFETA BLANCO-1B01", empresa: "" },
    { codigo: "473", nombre: "TELA POPLIN - 1977", empresa: "" },
    { codigo: "474", nombre: "POPELINA BLANCO 1.6M", empresa: "" },
    { codigo: "475", nombre: "BOLSILLERO RAYAS - POPELINA NOVAK", empresa: "" },
    { codigo: "476", nombre: "POPELINA NEGRO 1.6 M", empresa: "" },
    { codigo: "477", nombre: "DECORACION", empresa: "" },
    { codigo: "478", nombre: "NAVIDEÑOS", empresa: "" },
    { codigo: "479", nombre: "TELA ORGANZA NAV", empresa: "" },
    { codigo: "480", nombre: "TELA SATIN NAV", empresa: "" },
    { codigo: "481", nombre: "DENIMES", empresa: "" },
    { codigo: "482", nombre: "DENIM RIGIDO IMP.", empresa: "" },
    { codigo: "483", nombre: "DENIM BLACK KENORA", empresa: "" },
    { codigo: "484", nombre: "DENIM BLUE KENORA", empresa: "" },
    { codigo: "485", nombre: "DENIM FABRICS 100 PCT COTTON -100330", empresa: "" },
    { codigo: "486", nombre: "DENIM KENORA 11.50 Oz.", empresa: "" },
    { codigo: "487", nombre: "DENIM MONTECARLO BLACK", empresa: "" },
    { codigo: "488", nombre: "DENIM MONTECARLO BLUE", empresa: "" },
    { codigo: "489", nombre: "DENIM NORDICO 11.80 Oz.", empresa: "" },
    { codigo: "490", nombre: "DENIM PRADA 10.50 Oz.", empresa: "" },
    { codigo: "491", nombre: "DENIM TURQUIA DIAMANTE", empresa: "" },
    { codigo: "492", nombre: "TEXTIL FABRIC 3022C", empresa: "" },
    { codigo: "493", nombre: "DENIM 100% COTTON - 100330", empresa: "" },
    { codigo: "494", nombre: "DENIM RIGIDO (BELIER) - 100637", empresa: "" },
    { codigo: "495", nombre: "DELFIN (TURQUIA DIAMANTE AZUL) - 32205", empresa: "" },
    { codigo: "496", nombre: "XF - 3022C POSEIDON REFLEXTICO", empresa: "" },
    { codigo: "497", nombre: "DR152 100%ALGODON 8.50oz (TORNADO)", empresa: "" },
    { codigo: "498", nombre: "DENIM 901 TORNADO", empresa: "" },
    { codigo: "499", nombre: "DENIM RIGIDO NAC.", empresa: "" },
    { codigo: "500", nombre: "SARGA DENIM AZUL - 7670", empresa: "" },
    { codigo: "501", nombre: "SARGA DENIM DIESEL - 7670", empresa: "" },
    { codigo: "502", nombre: "TAFETA DENIM SANF - 7433", empresa: "" },
    { codigo: "503", nombre: "SARGA STRETCH DENIM AZULL SANF - 7298", empresa: "" },
    { codigo: "504", nombre: "PISCO STRETCH DENIM AZUL SANF - 7428", empresa: "" },
    { codigo: "505", nombre: "DENIM ACANALADO SANF - 7210", empresa: "" },
    { codigo: "506", nombre: "DENIM ESPIGA STRETCH SANF - 7217", empresa: "" },
    { codigo: "507", nombre: "DENIM SANFORIZADO - 7066", empresa: "" },
    { codigo: "508", nombre: "SARGA DENIM NAO/SANF. AZUL FORTE 1ERA - 5604-B", empresa: "" },
    { codigo: "509", nombre: "SARGA HIGH STRETCH DENIM/SANF 1ERA -8750-B", empresa: "" },
    { codigo: "510", nombre: "SARGA DENIM AZUL / SANF AZUL FORTE 1ERA -7384-B", empresa: "" },
    { codigo: "511", nombre: "SARGA DENIM SANF. IND.PRE-RED. 1ERA - 7017-B", empresa: "" },
    { codigo: "512", nombre: "SARGA DENIM AZUL/SANF AZUL FORTE 1ERA - 7382-B", empresa: "" },
    { codigo: "513", nombre: "SARGA DENIM.SANF. 7046-B", empresa: "" },
    { codigo: "514", nombre: "SARGA STRETCH NAO DENIM NAO STRETCH/SOBRETEÑIDO - 5702-B", empresa: "" },
    { codigo: "7056A", nombre: "SARGA/DENIM/SANF AZUL FORTE 1R 7056-B", empresa: "" },
    { codigo: "516", nombre: "SARGA PPT MERC/SANF. BLANCO 1545-B", empresa: "" },
    { codigo: "7384B", nombre: "SARGA/DENIM/SANF BLACK 1R 7384 - B", empresa: "BOLIVAR" },
    { codigo: "518", nombre: "SARGA CONFORT DENIM CONFORT/TH/SANF. AZUL FORTE 7483-B", empresa: "" },
    { codigo: "519", nombre: "SARGA/DENIM/SANF AZUL FORTE 1R 7384-1.80", empresa: "" },
    { codigo: "520", nombre: "DENIM STRETCH NAC.", empresa: "" },
    { codigo: "521", nombre: "DENIM 3CI01 SANFORIZADO AZUL", empresa: "" },
    { codigo: "522", nombre: "DENIM SALVATORE BLACK", empresa: "" },
    { codigo: "523", nombre: "ESPECIAL STRETCH DENIM AZUL - 7292", empresa: "" },
    { codigo: "524", nombre: "SARGA STRETCH DENIM SANF - 7215", empresa: "" },
    { codigo: "525", nombre: "ART. TELA MEDUSA (ARGEL) - 1065", empresa: "" },
    { codigo: "526", nombre: "SARGA STRETCH DENIM AZUL FORTE - 8008-B", empresa: "" },
    { codigo: "527", nombre: "SARGA HIGH STRETCHDENIM HIGH STRCH.SANF AZUL FORT-4012-B", empresa: "" },
    { codigo: "8715A", nombre: "SARGA STRETCH DENIM AZUL/SANF AZUL FORTE 1ERA - 8715-B", empresa: "" },
    { codigo: "529", nombre: "SARGA STRETCH DENIM HIGH STRCH.SANF AZUL MASTER 1E - 4720-B", empresa: "" },
    { codigo: "530", nombre: "SARGA STRETCH DENIM AZUL/SANF IND. PRE-RED. 1ERA 8312-B", empresa: "" },
    { codigo: "531", nombre: "SARGA HIGH STRETCH DENIM BLACK/SANF, BLACK 1ERA- 4012-B", empresa: "" },
    { codigo: "532", nombre: "SARGA DENIM HIGH STRETCH/SANF AZUL FORTE - 4004", empresa: "" },
    { codigo: "533", nombre: "SARGA DENIM NAO SOBRETEÑIDO STRETCH BLACK T376-B", empresa: "" },
    { codigo: "534", nombre: "SARGA/DENIM7HIGH STRETCH/SANF./XTRALIFE AZUL FORTE 4504", empresa: "" },
    { codigo: "535", nombre: "SARGA DENIM NAO SOBRETEÑIDO STRETCH BLACK 5240", empresa: "" },
    { codigo: "536", nombre: "DENIM SARGA CONF. SANF AZUL 8822-B", empresa: "" },
    { codigo: "537", nombre: "DENIM STRETCH AZUL 4123", empresa: "" },
    { codigo: "538", nombre: "SARGA STRETCH DENIM NAO/SANF. AZUL FORTE 1ERA - 5605", empresa: "" },
    { codigo: "539", nombre: "DENIM STRETCH IMP.", empresa: "" },
    { codigo: "540", nombre: "DENIM STRETCH CORAZONCITO-XF5007C", empresa: "" },
    { codigo: "541", nombre: "DENIM STRETCH LAZO-FX 5007B", empresa: "" },
    { codigo: "542", nombre: "TEXTIL FABRIC-XF5007C", empresa: "" },
    { codigo: "543", nombre: "TEXTIL FABRIC XF5007B", empresa: "" },
    { codigo: "544", nombre: "TEXTIL FABRIC -XF5007C - CAMUFLADO", empresa: "" },
    { codigo: "545", nombre: "JAGGER PT ESCOVADO-W000-000121-B", empresa: "" },
    { codigo: "546", nombre: "DENIM CONFORT IMPORTADO", empresa: "" },
    { codigo: "547", nombre: "ART. 223 (HURACAN)", empresa: "" },
    { codigo: "548", nombre: "ART. DR303 ZORZAL", empresa: "" },
    { codigo: "549", nombre: "ROCKET", empresa: "" },
    { codigo: "550", nombre: "KINGS", empresa: "" },
    { codigo: "551", nombre: "LY025 RAZOR", empresa: "" },
    { codigo: "552", nombre: "3568 LEBRON  - B", empresa: "" },
    { codigo: "553", nombre: "DENIM LIVIANO CUARZO - B", empresa: "" },
    { codigo: "554", nombre: "DENIM BARBADOS CARIBE - B", empresa: "" },
    { codigo: "555", nombre: "DENIM TENCEL RIO-B", empresa: "" },
    { codigo: "556", nombre: "DRILLES", empresa: "" },
    { codigo: "557", nombre: "DRILL RIGIDO CRUDO", empresa: "" },
    { codigo: "558", nombre: "DRIL ARMY 2064 L1N110 PPT", empresa: "" },
    { codigo: "559", nombre: "DRIL ARMY 2064-J1N110 APT", empresa: "" },
    { codigo: "560", nombre: "SARGA APT SANF. SIN COLOR 1ERA-830", empresa: "" },
    { codigo: "561", nombre: "ESPECIAL APT SANF - 9701", empresa: "" },
    { codigo: "562", nombre: "DRILL INDUSTRIAL COL", empresa: "" },
    { codigo: "563", nombre: "DRILL MICROTEC PIMA A 170 DRY FIT", empresa: "" },
    { codigo: "564", nombre: "GOLDEN TWILL BLANCO - 2B01", empresa: "" },
    { codigo: "565", nombre: "GOLDEN TWILL COLORES - 2B01", empresa: "" },
    { codigo: "566", nombre: "DRILL TECNO 7892 - CASAS", empresa: "" },
    { codigo: "567", nombre: "DRILL MICROTEC PIMA A 170 DRY FIT - 2DA", empresa: "" },
    { codigo: "568", nombre: "DRILL MICROTEC PIMA A 170 DRY FIT REPELTEX", empresa: "" },
    { codigo: "569", nombre: "JERSEY PIMA 40/1", empresa: "" },
    { codigo: "570", nombre: "DRILL STRETCH CRUDO", empresa: "" },
    { codigo: "571", nombre: "TWILL ACTIVE - 2655 L1N110 PPT", empresa: "" },
    { codigo: "572", nombre: "TWILL POLAR BLANCO - 2624", empresa: "" },
    { codigo: "573", nombre: "TWILL POWER - 2602", empresa: "" },
    { codigo: "574", nombre: "DRILL APT - 2624", empresa: "" },
    { codigo: "1295", nombre: "SATEN STRETCH PPT SANF 1295-B", empresa: "BOLIVAR" },
    { codigo: "576", nombre: "SARGA STRETCH PPT MICRO/SANF BLANCO PPT 1ERA - 6401-B", empresa: "" },
    { codigo: "577", nombre: "SARGA HIGH STRETCH PPT MICRO/SANF BLANCO PPT 1ERA - 2500-B", empresa: "" },
    { codigo: "578", nombre: "SARGA LIVIANO PPT SANF BLANCO PPT 1ERA - 6503 - B", empresa: "" },
    { codigo: "579", nombre: "SARGA COMFORT PPT MICRO/SANF BLANCO PPT 1ERA - 6522-B", empresa: "" },
    { codigo: "580", nombre: "SARGA PPT MERC/SANF. BLANCO 1R - 820-B", empresa: "" },
    { codigo: "581", nombre: "SARGA PPT MERC/SANF. BLANCO 6531-B", empresa: "" },
    { codigo: "582", nombre: "PAPER TOUCH RIGIDO-1542", empresa: "" },
    { codigo: "583", nombre: "DRILL RIGIDO IMPORTADOS", empresa: "" },
    { codigo: "584", nombre: "DRILL BONANZA", empresa: "" },
    { codigo: "585", nombre: "DRILL BONANZA ESTAMPADO - CAMUFLADO", empresa: "" },
    { codigo: "586", nombre: "SPORT-ELEGANT", empresa: "" },
    { codigo: "587", nombre: "BLUSERIA", empresa: "" },
    { codigo: "588", nombre: "TELA BARILOCHE", empresa: "" },
    { codigo: "589", nombre: "TELA BRASILIA", empresa: "" },
    { codigo: "590", nombre: "TELA SAO PAULO", empresa: "" },
    { codigo: "591", nombre: "TELA GATSBI", empresa: "" },
    { codigo: "592", nombre: "TELA PRADI - TELA MANZU ESTAMP", empresa: "" },
    { codigo: "593", nombre: "TELA ENCAJE", empresa: "" },
    { codigo: "594", nombre: "NANZU ESTAMPADO FLORES", empresa: "" },
    { codigo: "595", nombre: "NANZU LYCRADO", empresa: "" },
    { codigo: "596", nombre: "PAPER TOUCH COLORES", empresa: "" },
    { codigo: "597", nombre: "VISCOZA", empresa: "" },
    { codigo: "598", nombre: "MACARENA EMB DISEÑO Nª2", empresa: "" },
    { codigo: "599", nombre: "MACARENA PD DISEÑO Nª1", empresa: "" },
    { codigo: "600", nombre: "TECNOPIMA ESTAMPADA", empresa: "" },
    { codigo: "601", nombre: "GASAS", empresa: "" },
    { codigo: "602", nombre: "CHIFON", empresa: "" },
    { codigo: "603", nombre: "TELA COQUETA", empresa: "" },
    { codigo: "604", nombre: "TELA GASA CASANDRA", empresa: "" },
    { codigo: "605", nombre: "TELA ROMANTIC", empresa: "" },
    { codigo: "606", nombre: "GASA ROMANTICA", empresa: "" },
    { codigo: "607", nombre: "CONJUNTOS-PANTALONES", empresa: "" },
    { codigo: "608", nombre: "TELA LINO", empresa: "" },
    { codigo: "609", nombre: "TELA NAPA", empresa: "" },
    { codigo: "610", nombre: "TELA NICKY", empresa: "" },
    { codigo: "611", nombre: "TELA TOMMY", empresa: "" },
    { codigo: "612", nombre: "TELA ZERMAT", empresa: "" },
    { codigo: "613", nombre: "TELA BRUSH", empresa: "" },
    { codigo: "614", nombre: "TELA COTTON SPANDEX", empresa: "" },
    { codigo: "615", nombre: "TELA DIESEL", empresa: "" },
    { codigo: "616", nombre: "TELA BOTANICA", empresa: "" },
    { codigo: "617", nombre: "SCOTLAND DISEÑO Nª1", empresa: "" },
    { codigo: "618", nombre: "SCOTLAND DISEÑO 5", empresa: "" },
    { codigo: "619", nombre: "GALENA VARIOS", empresa: "" },
    { codigo: "620", nombre: "SARGA - DRILL PANTALONERO", empresa: "" },
    { codigo: "621", nombre: "TEJIDO DE PUNTO", empresa: "" },
    { codigo: "622", nombre: "RAYON SPAN - VIZCOSA", empresa: "" },
    { codigo: "623", nombre: "SALDOS", empresa: "" },
    { codigo: "624", nombre: "MACARENA", empresa: "" },
    { codigo: "625", nombre: "TAFETA BORDADA IMPORTADA", empresa: "" },
    { codigo: "626", nombre: "COTTON", empresa: "" },
    { codigo: "627", nombre: "PANT-ESCOLAR", empresa: "" },
    { codigo: "628", nombre: "PANTALON", empresa: "" },
    { codigo: "629", nombre: "TWILL ESCOLAR 2B02", empresa: "" },
    { codigo: "630", nombre: "001- l00010-570300 LEGANT GRIS", empresa: "" },
    { codigo: "631", nombre: "001-0T063A-E57030 ESCOLAR GRIS", empresa: "" },
    { codigo: "632", nombre: "001- T063E- 5852-C", empresa: "" },
    { codigo: "633", nombre: "TAFETAS", empresa: "" },
    { codigo: "634", nombre: "TAFETA RIGIDA", empresa: "" },
    { codigo: "635", nombre: "PANTALONERO MERCERIZADO ARTY", empresa: "" },
    { codigo: "636", nombre: "PANTALONERO MERCERIZADO FALCON", empresa: "" },
    { codigo: "637", nombre: "TAFETA APT MICRO/SANF-1109", empresa: "" },
    { codigo: "638", nombre: "TELA CRUDA", empresa: "" },
    { codigo: "639", nombre: "TAFETA 8305 TEÑIDO MICRO - CASAS", empresa: "" },
    { codigo: "640", nombre: "TAFETA STRETCH", empresa: "" },
    { codigo: "641", nombre: "TAFETA STRETCH 1670", empresa: "" },
    { codigo: "642", nombre: "PAPET TOUCH", empresa: "" },
    { codigo: "643", nombre: "TEJIDO PAPER TOUCH STRETCH-3860", empresa: "" },
    { codigo: "644", nombre: "POLARES", empresa: "" },
    { codigo: "645", nombre: "POLAR", empresa: "" },
    { codigo: "646", nombre: "TELA POLAR", empresa: "" },
    { codigo: "647", nombre: "MICROPOLAR", empresa: "" },
    { codigo: "648", nombre: "MICROPOLAR", empresa: "" },
    { codigo: "649", nombre: "PPTS-DIFER.", empresa: "" },
    { codigo: "650", nombre: "CORDELINAS", empresa: "" },
    { codigo: "651", nombre: "BEDFORD 4010", empresa: "" },
    { codigo: "652", nombre: "LAVADO", empresa: "" },
    { codigo: "653", nombre: "DENIMS", empresa: "" },
    { codigo: "654", nombre: "DENIM MONTECARLO 4031 - PROCESADO", empresa: "" },
    { codigo: "655", nombre: "TEXTIL FABRIC-FX5007C  - LAVADO", empresa: "" },
    { codigo: "656", nombre: "TEXTIL FABRIC 3022C 10 OZ REFLECTIVO - LAVADO SUAVIZADO", empresa: "" },
    { codigo: "657", nombre: "TEXTIL FABRIC-FX5007C - SUAVISADO", empresa: "" },
    { codigo: "658", nombre: "SALDO VARIOS", empresa: "" },
    { codigo: "659", nombre: "SALDO VARIOS 1", empresa: "" },
    { codigo: "660", nombre: "BLONDA", empresa: "" },
    { codigo: "661", nombre: "TOCUYO TABLETEADO", empresa: "" },
    { codigo: "662", nombre: "POPLIN BLANCO", empresa: "" },
    { codigo: "663", nombre: "GABARDINA GRUESA (NEGRA)", empresa: "" },
    { codigo: "664", nombre: "POPELINA BLANCA IMPORTADA", empresa: "" },
    { codigo: "665", nombre: "DRILL LA UNION S-23", empresa: "" },
    { codigo: "666", nombre: "POPELINA SUPER GOL ESTAMPADA", empresa: "" },
    { codigo: "667", nombre: "SEDA", empresa: "" },
    { codigo: "668", nombre: "DENIM STRETCH 7211", empresa: "" },
    { codigo: "669", nombre: "PELON", empresa: "" },
    { codigo: "670", nombre: "TAFETA STRETCH PPT SR-S0111", empresa: "" },
    { codigo: "671", nombre: "TAFETA NAVY 1045 COLORES", empresa: "" },
    { codigo: "672", nombre: "DENIM STRETCH (DS1075T63)", empresa: "" },
    { codigo: "673", nombre: "DENIM STRETCH (NEBATE)", empresa: "" },
    { codigo: "674", nombre: "M937 CRUDO H1N110", empresa: "" },
    { codigo: "675", nombre: "301000 NOVATEL DELGADO", empresa: "" },
    { codigo: "676", nombre: "LEGAN 065 LA UNION", empresa: "" },
    { codigo: "677", nombre: "TAFETA PPT MICRO 1109 ESTAMPADA", empresa: "" },
    { codigo: "678", nombre: "2081 CORDUROY PPT", empresa: "" },
    { codigo: "679", nombre: "CORDUROY PPT VENA DELGADA", empresa: "" },
    { codigo: "680", nombre: "300000 NOVATEL GRUESO", empresa: "" },
    { codigo: "681", nombre: "NOVATEL", empresa: "" },
    { codigo: "682", nombre: "DRILL 1262", empresa: "" },
    { codigo: "683", nombre: "DRILL LA UNION COLORES", empresa: "" },
    { codigo: "684", nombre: "CORDUROY OMIS COLORES", empresa: "" },
    { codigo: "685", nombre: "DRILL 384", empresa: "" },
    { codigo: "686", nombre: "2062 CORDUROY VENA DELGADA", empresa: "" },
    { codigo: "687", nombre: "2062 CONDUROY VENA GRUESA", empresa: "" },
    { codigo: "688", nombre: "708000 CONSORLEN GRUESO", empresa: "" },
    { codigo: "689", nombre: "CORDUROY 1M DE ANCHO LA UNION", empresa: "" },
    { codigo: "690", nombre: "718000 CONSORLEN GURESO MEZC", empresa: "" },
    { codigo: "691", nombre: "DRILL LA UNION 2612", empresa: "" },
    { codigo: "692", nombre: "POLYSTEL DELGADO PD-64", empresa: "" },
    { codigo: "693", nombre: "LANILLA POLYSTEL", empresa: "" },
    { codigo: "694", nombre: "POLYSTEL - 052", empresa: "" },
    { codigo: "695", nombre: "CARDIF", empresa: "" },
    { codigo: "696", nombre: "MACARENA CORRUGADA", empresa: "" },
    { codigo: "697", nombre: "POLYSTEL CON MICRODISEÑO PD-73", empresa: "" },
    { codigo: "698", nombre: "POLYSTEL JASPEADO", empresa: "" },
    { codigo: "699", nombre: "SALDOS VARIOS 2", empresa: "" },
    { codigo: "700", nombre: "SALDOS DE TELAS VARIOS", empresa: "" },
    { codigo: "OTRO", nombre: "--- OTRO (ESCRIBIR MANUAL) ---", empresa: "" }
];


// ================= VARIABLES GLOBALES =================
let lista = [];
let totalMetros = 0;
const MAX_ITEMS = 6;
const MAX_FILAS_POR_ARTICULO = 9;
const COLUMNAS_POR_FILA = 6;
const FACTOR_PESO_METRO = 0.35;
const METROS_POR_ROLLO = 50;

let articuloActual = null;
let modoArticuloActivo = false;
let toastTimeouts = [];

// Timer de inactividad
let inactividadTimerActivo = false;
let tiempoInactividad;
let modalInactividadMostrado = false;
let countdownInterval;
let segundosRestantes = 30;

// ================= INICIALIZACION DE USUARIO =================
function inicializarUsuario() {
    const username = sessionStorage.getItem('username') || 'Usuario';
    const rol = sessionStorage.getItem('rol') || 'usuario';
    
    const loggedUser = document.getElementById('loggedUser');
    const userRole = document.getElementById('userRole');
    
    if (loggedUser) loggedUser.textContent = username;
    if (userRole) {
        userRole.textContent = rol === 'admin' ? 'Administrador' : 'Usuario';
        if (rol === 'admin') {
            userRole.style.background = '#1a5c34';
            userRole.style.color = 'white';
            userRole.style.padding = '2px 8px';
            userRole.style.borderRadius = '12px';
            userRole.style.fontSize = '10px';
        }
    }
    
    actualizarSessionTimer();
    setInterval(actualizarSessionTimer, 60000);
}

function actualizarSessionTimer() {
    const loginTime = parseInt(sessionStorage.getItem('loginTime'));
    const timerEl = document.getElementById('sessionTimer');
    if (loginTime && timerEl) {
        const tiempoTranscurrido = Math.floor((Date.now() - loginTime) / 1000);
        const tiempoRestante = Math.max(0, 420 - tiempoTranscurrido); // 7 minutos = 420 segundos
        const horas = Math.floor(tiempoRestante / 3600);
        const minutos = Math.floor((tiempoRestante % 3600) / 60);
        timerEl.textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
    }
}

// ================= TIMER DE INACTIVIDAD =================
function iniciarTimerInactividad() {
    if (inactividadTimerActivo) return;
    inactividadTimerActivo = true;
    
    function resetear() {
        clearTimeout(tiempoInactividad);
        clearInterval(countdownInterval);
        if (modalInactividadMostrado) {
            document.getElementById('modalInactividad').style.display = 'none';
            modalInactividadMostrado = false;
        }
        segundosRestantes = 30;
        tiempoInactividad = setTimeout(mostrarModalInactividad, 300000);
    }
    
    function mostrarModalInactividad() {
        if (sessionStorage.getItem('loggedIn') !== 'true') return;
        document.getElementById('modalInactividad').style.display = 'flex';
        modalInactividadMostrado = true;
        document.getElementById('inactividadCountdown').textContent = segundosRestantes;
        
        countdownInterval = setInterval(function() {
            segundosRestantes--;
            document.getElementById('inactividadCountdown').textContent = segundosRestantes;
            if (segundosRestantes <= 0) {
                clearInterval(countdownInterval);
                sessionStorage.setItem('fromLogout', 'true');
                sessionStorage.clear();
                window.location.replace('login.html');
            }
        }, 1000);
    }
    
    ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart', 'click', 'keypress'].forEach(evento => {
        document.addEventListener(evento, resetear);
    });
    
    resetear();
}

window.continuarSesion = function() {
    clearInterval(countdownInterval);
    document.getElementById('modalInactividad').style.display = 'none';
    modalInactividadMostrado = false;
    segundosRestantes = 30;
    showToast('Sesión continuada', 'success');
    clearTimeout(tiempoInactividad);
    tiempoInactividad = setTimeout(() => {
        if (sessionStorage.getItem('loggedIn') === 'true') {
            document.getElementById('modalInactividad').style.display = 'flex';
            modalInactividadMostrado = true;
        }
    }, 300000);
};

// ================= SISTEMA DE TOAST =================
function showToast(message, type = 'info', title = '', duration = 4000) {
    const container = document.getElementById('toastContainer');
    const template = document.getElementById('toastTemplate');
    if (!container || !template) return;
    
    const toast = template.content.cloneNode(true);
    const toastDiv = toast.querySelector('.toast');
    const icon = toast.querySelector('.toast-icon');
    const titleEl = toast.querySelector('.toast-title');
    const messageEl = toast.querySelector('.toast-message');
    const closeBtn = toast.querySelector('.toast-close');
    
    toastDiv.classList.add(type);
    const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', warning: 'fa-exclamation-triangle', info: 'fa-info-circle' };
    icon.className = `toast-icon fas ${icons[type] || icons.info}`;
    const titles = { success: '¡Éxito!', error: 'Error', warning: 'Advertencia', info: 'Información' };
    titleEl.textContent = title || titles[type] || '';
    messageEl.textContent = message;
    
    const timeout = setTimeout(() => { if (toastDiv.parentNode) toastDiv.remove(); }, duration);
    toastTimeouts.push(timeout);
    closeBtn.addEventListener('click', () => { clearTimeout(timeout); toastDiv.remove(); });
    container.appendChild(toast);
}

// ================= FUNCIONES DE ERROR =================
function mostrarError(mensaje) {
    console.error(mensaje);
    showToast(mensaje, 'error');
    const modal = document.getElementById('modalError');
    const errorMensaje = document.getElementById('errorMensaje');
    if (modal && errorMensaje) {
        errorMensaje.textContent = mensaje;
        modal.style.display = 'flex';
        setTimeout(() => modal.style.display = 'none', 5000);
    }
}

// ================= BUSCADOR =================
class Buscador {
    constructor(inputId, sugerenciasId, items, onSelect, displayFn = null) {
        this.input = document.getElementById(inputId);
        this.sugerenciasDiv = document.getElementById(sugerenciasId);
        this.items = items;
        this.onSelect = onSelect;
        this.displayFn = displayFn || ((item) => item.codigo ? `${item.codigo} - ${item.nombre}` : item.nombre);
        this.filtradas = [];
        this.indiceSeleccionado = -1;
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        this.input.addEventListener('input', () => this.buscar());
        this.input.addEventListener('keydown', (e) => this.teclado(e));
        this.input.addEventListener('focus', () => { if (this.input.value.trim() !== '') this.buscar(); });
        const clearBtn = this.input.parentElement?.querySelector('.clear-input');
        if (clearBtn) clearBtn.addEventListener('click', () => { this.input.value = ''; this.ocultar(); this.input.focus(); });
        document.addEventListener('click', (e) => { if (!this.input.contains(e.target) && !this.sugerenciasDiv.contains(e.target)) this.ocultar(); });
    }
    
    buscar() {
        const texto = this.input.value.toLowerCase().trim();
        this.sugerenciasDiv.innerHTML = '';
        this.indiceSeleccionado = -1;
        if (texto === '') { this.ocultar(); return; }
        
        this.filtradas = this.items.filter(item => item.codigo !== 'OTRO' && (item.nombre.toLowerCase().includes(texto) || (item.codigo && item.codigo.toLowerCase().includes(texto))));
        this.filtradas.forEach(item => {
            const div = document.createElement('div');
            div.className = 'sugerencia-item';
            div.textContent = this.displayFn(item);
            div.onclick = () => this.seleccionarItem(item);
            this.sugerenciasDiv.appendChild(div);
        });
        
        const divOtro = document.createElement('div');
        divOtro.className = 'sugerencia-item otro';
        divOtro.innerHTML = `<i class="fas fa-pencil-alt"></i> ESCRIBIR MANUAL: "${texto.toUpperCase()}"`;
        divOtro.onclick = () => this.seleccionarItem({ codigo: texto.toUpperCase(), nombre: texto.toUpperCase(), esNuevo: true });
        this.sugerenciasDiv.appendChild(divOtro);
        this.sugerenciasDiv.style.display = 'block';
    }
    
    seleccionarItem(item) { this.onSelect(item); this.input.value = this.displayFn(item); this.ocultar(); }
    
    teclado(e) {
        if (this.sugerenciasDiv.style.display !== 'block') return;
        const items = this.sugerenciasDiv.querySelectorAll('.sugerencia-item');
        if (e.key === 'ArrowDown') { e.preventDefault(); this.indiceSeleccionado = Math.min(this.indiceSeleccionado + 1, items.length - 1); this.resaltarSeleccionado(items); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); this.indiceSeleccionado = Math.max(this.indiceSeleccionado - 1, -1); this.resaltarSeleccionado(items); }
        else if (e.key === 'Enter') { e.preventDefault(); if (this.indiceSeleccionado >= 0 && items[this.indiceSeleccionado]) items[this.indiceSeleccionado].click(); }
        else if (e.key === 'Escape') this.ocultar();
    }
    
    resaltarSeleccionado(items) { items.forEach((item, idx) => item.style.background = idx === this.indiceSeleccionado ? '#e5e7eb' : ''); }
    ocultar() { this.sugerenciasDiv.style.display = 'none'; this.indiceSeleccionado = -1; }
}

// ================= INICIALIZACIÓN PRINCIPAL =================
document.addEventListener('DOMContentLoaded', () => {
    inicializarUsuario();
    iniciarTimerInactividad();
    
    configurarImagenCargo();
    
    new Buscador('clienteInput', 'clienteSugerencias', clientesLista,
        (item) => { 
            document.getElementById('clienteNombre').innerText = item.nombre; 
            actualizarPaso(1); 
            showToast(`Cliente: ${item.nombre}`, 'success'); 
        },
        (item) => item.nombre
    );
    
    new Buscador('articuloInput', 'articuloSugerencias', articulosLista,
        (item) => { 
            document.getElementById('codigoArticuloHidden').value = item.codigo; 
            document.getElementById('nombreArticulo').innerHTML = item.nombre; 
            actualizarPaso(3); 
        },
        (item) => item.codigo ? `${item.codigo} - ${item.nombre}` : item.nombre
    );
    
    setupEventListeners();
    setupKeyboardShortcuts();
    setupModalClose();
    
    render();
    actualizarModoArticulo();
    actualizarEstadisticas();
    
    const username = sessionStorage.getItem('username') || 'Usuario';
    showToast(`Bienvenido ${username}`, 'success', '¡Hola!');
});

// ================= CONFIGURACIÓN DE EVENTOS =================
function setupEventListeners() {
    document.getElementById('vendedorSelect').addEventListener('change', function() {
        document.getElementById('vendedorNombre').innerText = this.value || '—';
        if (this.value) { actualizarPaso(2); showToast(`Vendedor: ${this.value}`, 'success'); }
    });
    
    document.getElementById('cantidadInput').addEventListener('paste', function(e) {
        e.preventDefault();
        procesarPegado((e.clipboardData || window.clipboardData).getData('text'));
    });
    
    document.getElementById('cantidadInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') { e.preventDefault(); procesarCantidad(); }
    });
    
    document.getElementById('btnAgregar').addEventListener('click', procesarCantidad);
    document.getElementById('btnLimpiar').addEventListener('click', mostrarModalLimpiar);
    document.getElementById('btnGrabar').addEventListener('click', grabarLista);
    document.getElementById('btnSalir').addEventListener('click', () => document.getElementById('modalSalir').style.display = 'flex');
    
    const helpBtn = document.getElementById('helpButton');
    if (helpBtn) helpBtn.addEventListener('click', () => document.getElementById('modalAyuda').style.display = 'flex');
    
    document.getElementById('duplicarUltimo').addEventListener('click', duplicarUltimoArticulo);
    document.getElementById('exportarExcel').addEventListener('click', exportarAExcel);
    
    document.getElementById('btnVolverEditar').addEventListener('click', () => document.getElementById('modalGrabar').style.display = 'none');
    document.getElementById('btnGenerarPDF').addEventListener('click', () => { document.getElementById('modalGrabar').style.display = 'none'; generarPDF(); });
    document.getElementById('btnImprimirGrabar').addEventListener('click', () => { document.getElementById('modalGrabar').style.display = 'none'; imprimir(); });
    
    document.getElementById('cancelarLimpiar').addEventListener('click', ocultarModalLimpiar);
    document.getElementById('confirmarLimpiar').addEventListener('click', () => { limpiar(); ocultarModalLimpiar(); showToast('Lista limpiada', 'info'); });
    
    const cerrarErrorBtn = document.getElementById('cerrarErrorBtn');
    if (cerrarErrorBtn) cerrarErrorBtn.addEventListener('click', () => document.getElementById('modalError').style.display = 'none');
}

function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'l') { e.preventDefault(); mostrarModalLimpiar(); }
        if (e.ctrlKey && e.key === 'g') { e.preventDefault(); grabarLista(); }
        if (e.ctrlKey && e.key === 'p') { e.preventDefault(); imprimir(); }
        if (e.ctrlKey && e.key === 'd') { e.preventDefault(); duplicarUltimoArticulo(); }
        if (e.key === 'Escape') cerrarTodosModales();
    });
}

function setupModalClose() {
    ['modalGrabar', 'modalConfirmacion', 'modalSalir', 'modalError', 'modalAyuda'].forEach(id => {
        const modal = document.getElementById(id);
        if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
    });
}

function cerrarTodosModales() {
    document.querySelectorAll('[id^="modal"]').forEach(modal => { 
        if (modal.id !== 'modalInactividad') modal.style.display = 'none'; 
    });
}

// ================= ACTUALIZACIÓN DE PASOS =================
function actualizarPaso(paso) {
    document.querySelectorAll('.step').forEach((step, index) => {
        step.classList.remove('active', 'completed');
        if (index + 1 < paso) step.classList.add('completed');
        else if (index + 1 === paso) step.classList.add('active');
    });
}

// ================= ESTADÍSTICAS =================
function actualizarEstadisticas() {
    const pesoEl = document.getElementById('pesoEstimado');
    const rollosEl = document.getElementById('rollosEstimados');
    const promedioEl = document.getElementById('promedioArticulo');
    const metrosEl = document.getElementById('metrosTotalesStats');
    const prendasEl = document.getElementById('prendasTotales');
    const cantidadesEl = document.getElementById('cantidadesTotales');
    
    if (pesoEl) pesoEl.textContent = `${(totalMetros * FACTOR_PESO_METRO).toFixed(2)} kg`;
    if (rollosEl) rollosEl.textContent = Math.ceil(totalMetros / METROS_POR_ROLLO);
    if (promedioEl) promedioEl.textContent = `${lista.length > 0 ? (totalMetros / lista.length).toFixed(2) : '0.00'} m`;
    if (metrosEl) metrosEl.textContent = `${totalMetros.toFixed(2)} m`;
    if (prendasEl) prendasEl.textContent = lista.filter(item => item.prenda && item.prenda.trim() !== '').length;
    if (cantidadesEl) cantidadesEl.textContent = lista.reduce((acc, item) => acc + item.cantidades.length, 0);
}

// ================= DUPLICAR Y EXPORTAR =================
function duplicarUltimoArticulo() {
    if (lista.length === 0) { mostrarError('No hay artículos para duplicar'); return; }
    if (lista.length >= MAX_ITEMS) { mostrarError(`Límite alcanzado: máximo ${MAX_ITEMS} artículos`); return; }
    const duplicado = JSON.parse(JSON.stringify(lista[lista.length - 1]));
    lista.push(duplicado);
    totalMetros += parseFloat(duplicado.cantidadTotal);
    render(); 
    actualizarEstadisticas();
    showToast('Artículo duplicado', 'success');
}

function exportarAExcel() {
    if (lista.length === 0) { mostrarError('No hay artículos para exportar'); return; }
    let csv = 'Artículo,Código,Prenda,Cantidades,Total\n';
    lista.forEach(item => csv += `"${item.nombre}","${item.codigo}","${item.prenda || ''}","${item.cantidades.join(' | ')}","${item.cantidadTotal}"\n`);
    csv += `\n"TOTAL",,,,"${totalMetros.toFixed(2)}"`;
    
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Packing_List_${new Date().getTime()}.csv`;
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link);
    showToast('Archivo Excel generado', 'success');
}

// ================= FUNCIONES PRINCIPALES =================
function grabarLista() {
    const cliente = document.getElementById('clienteNombre').innerText;
    const vendedor = document.getElementById('vendedorNombre').innerText;
    
    if (cliente === '—' || cliente === '') { mostrarError('Seleccione un cliente'); return; }
    if (vendedor === '—' || vendedor === '') { mostrarError('Seleccione un vendedor'); return; }
    if (lista.length === 0 && !modoArticuloActivo) { mostrarError('Agregue al menos un artículo'); return; }
    
    if (modoArticuloActivo && articuloActual && articuloActual.cantidades.length > 0) {
        if (confirm('Hay un artículo en proceso. ¿Desea finalizarlo y agregarlo a la lista?')) finalizarArticuloActual();
        else return;
    }
    
    document.getElementById('resumenCliente').innerText = cliente;
    document.getElementById('resumenVendedor').innerText = vendedor;
    document.getElementById('resumenTotal').innerText = totalMetros.toFixed(2);
    
    const tbody = document.getElementById('resumenTablaBody');
    tbody.innerHTML = '';
    lista.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td><strong>${item.nombre}</strong></td><td>${item.prenda || '—'}</td><td style="font-size:11px;">${item.cantidades.map(c => c.toFixed(2)).join(' / ')}</td><td><strong>${item.cantidadTotal}</strong></td>`;
        tbody.appendChild(row);
    });
    
    document.getElementById('modalGrabar').style.display = 'flex';
    actualizarPaso(4);
}

function iniciarNuevoArticulo() {
    let cod = document.getElementById('codigoArticuloHidden').value;
    let nombre = document.getElementById('nombreArticulo').innerHTML;
    let prendaValor = document.getElementById('prendaInput').value.trim().toUpperCase();
    
    if (!cod || !nombre || nombre === 'Ingrese o seleccione un artículo') {
        let articuloInputValue = document.getElementById('articuloInput').value.trim().toUpperCase();
        if (articuloInputValue !== '') { 
            cod = articuloInputValue; 
            nombre = articuloInputValue; 
            document.getElementById('codigoArticuloHidden').value = cod; 
            document.getElementById('nombreArticulo').innerHTML = nombre; 
        }
        else { mostrarError('Seleccione o escriba un artículo'); return false; }
    }
    
    if (lista.length >= MAX_ITEMS) { mostrarError(`Límite alcanzado: máximo ${MAX_ITEMS} artículos`); return false; }
    
    if (validarArticuloDuplicado(cod)) return false;
    
    articuloActual = { codigo: cod, nombre: nombre, cantidades: [], prenda: prendaValor };
    modoArticuloActivo = true;
    return true;
}

function procesarPegado(data) {
    let numeros = data.split(/[\s,\t\n]+/).filter(n => n.trim() !== '');
    let agregadas = 0;
    
    numeros.forEach(num => {
        let cant = parseFloat(num);
        if (!isNaN(cant) && cant > 0) {
            if (!modoArticuloActivo && !iniciarNuevoArticulo()) return;
            if (modoArticuloActivo && articuloActual && articuloActual.cantidades.length < MAX_FILAS_POR_ARTICULO * COLUMNAS_POR_FILA) {
                articuloActual.cantidades.push(cant);
                agregadas++;
            }
        }
    });
    
    if (agregadas > 0) {
        document.getElementById('cantidadInput').value = '';
        document.getElementById('prendaInput').value = '';
        actualizarModoArticulo(); 
        mostrarCantidadesTemporales(); 
        actualizarEstadisticas();
        showToast(`${agregadas} cantidades agregadas`, 'success');
    } else if (numeros.length > 0) {
        mostrarError('No se encontraron números válidos');
    }
}

function procesarCantidad() {
    let valor = document.getElementById('cantidadInput').value.trim();
    
    if (valor === '0') { finalizarArticuloActual(); return; }
    
    let cant = parseFloat(valor);
    if (isNaN(cant) || cant <= 0) { mostrarError('Ingrese cantidad válida (>0) o 0 para finalizar'); return; }
    
    if (!modoArticuloActivo && !iniciarNuevoArticulo()) return;
    
    if (articuloActual.cantidades.length >= MAX_FILAS_POR_ARTICULO * COLUMNAS_POR_FILA) {
        mostrarError(`Máximo ${MAX_FILAS_POR_ARTICULO * COLUMNAS_POR_FILA} cantidades. Presione 0 para finalizar.`);
        return;
    }
    
    articuloActual.cantidades.push(cant);
    document.getElementById('cantidadInput').value = '';
    document.getElementById('prendaInput').value = '';
    document.getElementById('cantidadInput').focus();
    
    actualizarModoArticulo(); 
    mostrarCantidadesTemporales(); 
    actualizarEstadisticas();
}

function finalizarArticuloActual() {
    if (!modoArticuloActivo || !articuloActual || articuloActual.cantidades.length === 0) {
        mostrarError('No hay artículo activo para finalizar'); 
        return;
    }
    
    let totalArticulo = articuloActual.cantidades.reduce((sum, cant) => sum + cant, 0);
    totalMetros += totalArticulo;
    
    lista.push({
        nombre: articuloActual.nombre, 
        codigo: articuloActual.codigo,
        cantidades: [...articuloActual.cantidades], 
        cantidadTotal: totalArticulo.toFixed(2),
        prenda: articuloActual.prenda || ''
    });
    
    articuloActual = null; 
    modoArticuloActivo = false;
    
    document.getElementById('codigoArticuloHidden').value = '';
    document.getElementById('articuloInput').value = '';
    document.getElementById('nombreArticulo').innerHTML = 'Ingrese o seleccione un artículo';
    document.getElementById('cantidadInput').value = '';
    document.getElementById('prendaInput').value = '';
    document.getElementById('articuloInput').focus();
    
    actualizarModoArticulo(); 
    actualizarEstadisticas(); 
    render();
    showToast('Artículo finalizado', 'success');
}

function mostrarCantidadesTemporales() { render(); }

function generarFilaArticuloTemporal() {
    if (!articuloActual) return '';
    const subtotal = articuloActual.cantidades.reduce((s, c) => s + c, 0);
    const maxTotal = MAX_FILAS_POR_ARTICULO * COLUMNAS_POR_FILA;
    
    let html = `<tr style="background:#f9fafb;"><td><strong>${articuloActual.nombre}</strong><span style="background:#6b7280;color:white;padding:2px 8px;border-radius:12px;font-size:10px;margin-left:10px;">EN PROCESO (${articuloActual.cantidades.length}/${maxTotal})</span><div style="margin-top:8px;padding:8px;">`;
    
    for (let i = 0; i < articuloActual.cantidades.length; i += COLUMNAS_POR_FILA) {
        html += '<div style="display:grid;grid-template-columns:repeat(6,1fr);gap:3px;">';
        for (let j = 0; j < COLUMNAS_POR_FILA; j++) {
            html += (i+j < articuloActual.cantidades.length) ? `<span>${articuloActual.cantidades[i+j].toFixed(2)}</span>` : '<span></span>';
        }
        html += '</div>';
    }
    
    html += `</div><div style="margin-top:8px;font-weight:bold;text-align:right;">Subtotal: ${subtotal.toFixed(2)}</div></td><td>${subtotal.toFixed(2)}</td><td>${articuloActual.prenda || '—'}</td><td><button onclick="cancelarArticuloActual()" style="background:#6b7280;color:white;border:none;padding:5px 10px;border-radius:4px;cursor:pointer;">Cancelar</button></td></tr>`;
    return html;
}

function cancelarArticuloActual() {
    if (confirm('¿Cancelar artículo en proceso?')) {
        articuloActual = null; 
        modoArticuloActivo = false;
        document.getElementById('codigoArticuloHidden').value = '';
        document.getElementById('articuloInput').value = '';
        document.getElementById('nombreArticulo').innerHTML = 'Ingrese o seleccione un artículo';
        document.getElementById('cantidadInput').value = '';
        document.getElementById('prendaInput').value = '';
        document.getElementById('articuloInput').focus();
        actualizarModoArticulo(); 
        render();
    }
}
window.cancelarArticuloActual = cancelarArticuloActual;

function actualizarModoArticulo() {
    const el = document.getElementById('nombreArticulo');
    if (modoArticuloActivo && articuloActual) {
        const subtotal = articuloActual.cantidades.reduce((s,c) => s + c, 0);
        el.innerHTML = `${articuloActual.nombre} | ${articuloActual.cantidades.length} cantidades | Subtotal: ${subtotal.toFixed(2)}<br><small>Ingrese cantidades o 0 para finalizar</small>`;
        el.style.background = '#f9fafb'; 
        el.style.padding = '10px';
    } else {
        el.innerHTML = 'Ingrese o seleccione un artículo';
        el.style.background = ''; 
        el.style.padding = '';
    }
}

function generarFilaArticulo(item, idx) {
    let html = `<tr><td><strong>${item.nombre}</strong><div style="margin-top:8px;padding:8px;">`;
    
    for (let i = 0; i < item.cantidades.length; i += COLUMNAS_POR_FILA) {
        html += '<div style="display:grid;grid-template-columns:repeat(6,1fr);gap:3px;">';
        for (let j = 0; j < COLUMNAS_POR_FILA; j++) {
            html += (i+j < item.cantidades.length) ? `<span>${item.cantidades[i+j].toFixed(2)}</span>` : '<span></span>';
        }
        html += '</div>';
    }
    
    html += `</div><div style="margin-top:8px;font-weight:bold;text-align:right;">Subtotal: ${item.cantidadTotal}</div></td><td>${item.cantidadTotal}</td><td>${item.prenda || '—'}</td><td><button onclick="eliminarItem(${idx})" style="background:#991b1b;color:white;border:none;padding:5px 10px;border-radius:4px;cursor:pointer;"><i class="fas fa-trash"></i> Eliminar</button></td></tr>`;
    return html;
}

function eliminarItem(index) {
    if (confirm('¿Eliminar este artículo?')) {
        totalMetros -= parseFloat(lista[index].cantidadTotal);
        lista.splice(index, 1);
        render(); 
        actualizarEstadisticas();
        showToast('Artículo eliminado', 'info');
    }
}
window.eliminarItem = eliminarItem;

function render() {
    let tbody = document.querySelector('#tabla tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    const tablaVacia = document.querySelector('.tabla-vacia');
    if (tablaVacia) tablaVacia.style.display = (lista.length === 0 && !modoArticuloActivo) ? 'block' : 'none';
    
    lista.forEach((item, idx) => tbody.innerHTML += generarFilaArticulo(item, idx));
    if (modoArticuloActivo && articuloActual) tbody.innerHTML += generarFilaArticuloTemporal();
    
    document.getElementById('total').innerText = totalMetros.toFixed(2);
    document.getElementById('cantidad').innerText = lista.length;
    document.getElementById('progressBar').style.width = (lista.length / MAX_ITEMS) * 100 + '%';
}

// ================= FUNCIÓN CRÍTICA: generarTablaHTML =================
function generarTablaHTML() {
    let html = '<table style="width:100%;border-collapse:collapse;font-size:9px;">';
    
    if (lista.length === 0) {
        html += '<tr><td style="text-align:center;padding:10px;">No hay artículos</td></tr>';
    } else {
        lista.forEach(item => {
            html += `<tr><td style="font-weight:bold;padding-top:4px;font-size:10px;">${item.nombre}</td></tr>`;
            
            if (item.prenda && item.prenda.trim() !== '') {
                html += `<tr><td style="font-size:8px;color:#555;padding-bottom:2px;">PRENDA: ${item.prenda}</td></tr>`;
            }
            
            for (let i = 0; i < item.cantidades.length; i += COLUMNAS_POR_FILA) {
                html += '<tr><td><div style="display:grid;grid-template-columns:repeat(6,1fr);gap:1px;padding:1px 0;">';
                for (let j = 0; j < COLUMNAS_POR_FILA; j++) {
                    if (i + j < item.cantidades.length) {
                        html += `<span style="font-size:8px;">${item.cantidades[i + j].toFixed(2)}</span>`;
                    } else {
                        html += '<span></span>';
                    }
                }
                html += '</div></td></tr>';
            }
            
            html += `<tr><td style="text-align:right;border-bottom:1px solid #000;padding-bottom:3px;font-size:9px;">Subtotal: ${item.cantidadTotal}</td></tr>`;
        });
    }
    
    html += '</table>';
    return html;
}

function configurarImagenCargo() {
    const img = document.getElementById('logoImagen');
    if (img) { 
        img.src = 'CARGO.png';
        img.onerror = function() { this.style.display = 'none'; };
    }
}

// ================= FUNCIÓN CRÍTICA: prepararImpresion =================
function prepararImpresion() {
    let cliente = document.getElementById('clienteNombre').innerText;
    let vendedor = document.getElementById('vendedorNombre').innerText;
    let tabla = generarTablaHTML();
    let rollos = lista.reduce((acc, item) => acc + item.cantidades.length, 0);
    
    if (cliente === '—' || cliente === '') cliente = 'NO ESPECIFICADO';
    if (vendedor === '—' || vendedor === '') vendedor = 'NO ESPECIFICADO';
    
    // Primera copia
    const pLista = document.getElementById('p_lista');
    const pTotal = document.getElementById('p_total');
    const pCliente = document.getElementById('p_cliente');
    const pVendedor = document.getElementById('p_vendedor');
    const pRollos = document.getElementById('p_rollos');
    
    if (pLista) pLista.innerHTML = tabla;
    if (pTotal) pTotal.textContent = totalMetros.toFixed(2);
    if (pCliente) pCliente.textContent = cliente;
    if (pVendedor) pVendedor.textContent = vendedor;
    if (pRollos) pRollos.textContent = rollos;
    
    // Segunda copia
    const pLista2 = document.getElementById('p_lista2');
    const pTotal2 = document.getElementById('p_total2');
    const pCliente2 = document.getElementById('p_cliente2');
    const pVendedor2 = document.getElementById('p_vendedor2');
    const pRollos2 = document.getElementById('p_rollos2');
    
    if (pLista2) pLista2.innerHTML = tabla;
    if (pTotal2) pTotal2.textContent = totalMetros.toFixed(2);
    if (pCliente2) pCliente2.textContent = cliente;
    if (pVendedor2) pVendedor2.textContent = vendedor;
    if (pRollos2) pRollos2.textContent = rollos;
}

function generarPDF() {
    if (lista.length === 0) { mostrarError('Agregue al menos un artículo'); return; }
    if (document.getElementById('clienteNombre').innerText === '—') { mostrarError('Seleccione un cliente'); return; }
    if (document.getElementById('vendedorNombre').innerText === '—') { mostrarError('Seleccione un vendedor'); return; }
    
    prepararImpresion();
    
    // Cerrar modal de grabar
    const modalGrabar = document.getElementById('modalGrabar');
    if (modalGrabar) modalGrabar.style.display = 'none';
    
    // Usar window.print() que ya funciona
    // En Chrome/Edge: el usuario selecciona "Guardar como PDF"
    setTimeout(() => {
        window.print();
    }, 300);
}

// ================= IMPRIMIR DIRECTO =================
function imprimir() {
    prepararImpresion();
    
    // Cerrar modal de grabar
    document.getElementById('modalGrabar').style.display = 'none';
    
    setTimeout(() => {
        window.print();
    }, 300);
}
function limpiar() {
    lista = []; 
    totalMetros = 0; 
    articuloActual = null; 
    modoArticuloActivo = false;
    
    ['clienteInput', 'vendedorSelect', 'articuloInput', 'cantidadInput', 'prendaInput', 'codigoArticuloHidden'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    
    document.getElementById('clienteNombre').innerText = '—';
    document.getElementById('vendedorNombre').innerText = '—';
    document.getElementById('nombreArticulo').innerHTML = 'Ingrese o seleccione un artículo';
    
    actualizarPaso(1); 
    actualizarModoArticulo(); 
    actualizarEstadisticas(); 
    render();
}

function mostrarModalLimpiar() {
    if (lista.length > 0 || modoArticuloActivo) {
        document.getElementById('modalConfirmacion').style.display = 'flex';
    } else {
        limpiar();
    }
}

function ocultarModalLimpiar() { 
    document.getElementById('modalConfirmacion').style.display = 'none'; 
}

// ================= FUNCIONES GLOBALES =================
window.confirmarSalida = function() {
    sessionStorage.setItem('fromLogout', 'true');
    sessionStorage.clear();
    window.location.replace('login.html');
};

window.cancelarSalida = function() {
    document.getElementById('modalSalir').style.display = 'none';
    history.pushState(null, null, location.href);
};

render();

// ================= MEJORA #11: BOTÓN EDITAR ARTÍCULO =================
function editarArticulo(index) {
    if (modoArticuloActivo) {
        mostrarError('Finalice el artículo en proceso antes de editar');
        return;
    }
    
    const item = lista[index];
    
    // Cargar datos en el formulario
    document.getElementById('articuloInput').value = item.codigo + ' - ' + item.nombre;
    document.getElementById('codigoArticuloHidden').value = item.codigo;
    document.getElementById('nombreArticulo').innerHTML = item.nombre;
    document.getElementById('prendaInput').value = item.prenda || '';
    
    // Crear artículo activo con las cantidades existentes
    articuloActual = {
        codigo: item.codigo,
        nombre: item.nombre,
        cantidades: [...item.cantidades],
        prenda: item.prenda || ''
    };
    modoArticuloActivo = true;
    
    // Eliminar de la lista
    totalMetros -= parseFloat(item.cantidadTotal);
    lista.splice(index, 1);
    
    actualizarModoArticulo();
    render();
    actualizarEstadisticas();
    
    document.getElementById('cantidadInput').focus();
    showToast('Editando artículo. Agregue más cantidades o presione 0 para finalizar', 'info');
}
window.editarArticulo = editarArticulo;

// ================= MEJORA #12: VALIDAR NO DUPLICADOS =================
function validarArticuloDuplicado(codigo) {
    const duplicado = lista.find(item => item.codigo === codigo);
    if (duplicado) {
        mostrarError(`El artículo "${duplicado.nombre}" ya está en la lista. Use EDITAR para modificarlo.`);
        return true;
    }
    if (modoArticuloActivo && articuloActual && articuloActual.codigo === codigo) {
        mostrarError('Este artículo ya está en proceso de edición');
        return true;
    }
    return false;
}

// ================= MEJORA #14: GUARDAR HISTORIAL =================
function guardarEnHistorial() {
    const historial = JSON.parse(localStorage.getItem('packingHistorial') || '[]');
    
    const registro = {
        fecha: new Date().toISOString(),
        cliente: document.getElementById('clienteNombre').innerText,
        vendedor: document.getElementById('vendedorNombre').innerText,
        total: totalMetros,
        articulos: lista.length,
        observaciones: document.getElementById('observacionesGrabar')?.value || '',
        lista: JSON.parse(JSON.stringify(lista))
    };
    
    historial.unshift(registro);
    
    // Mantener solo últimos 50 registros
    if (historial.length > 50) {
        historial.pop();
    }
    
    localStorage.setItem('packingHistorial', JSON.stringify(historial));
    showToast('Lista guardada en historial', 'success');
}

function verHistorial() {
    const historial = JSON.parse(localStorage.getItem('packingHistorial') || '[]');
    
    if (historial.length === 0) {
        mostrarError('No hay listas guardadas en el historial');
        return;
    }
    
    let mensaje = 'ÚLTIMAS LISTAS GUARDADAS:\n\n';
    historial.slice(0, 5).forEach((reg, i) => {
        const fecha = new Date(reg.fecha).toLocaleString();
        mensaje += `${i+1}. ${fecha}\n`;
        mensaje += `   Cliente: ${reg.cliente}\n`;
        mensaje += `   Total: ${reg.total} | Artículos: ${reg.articulos}\n\n`;
    });
    
    alert(mensaje);
}
window.verHistorial = verHistorial;

// MODIFICAR grabarLista() para incluir historial
const grabarListaOriginal = grabarLista;
grabarLista = function() {
    grabarListaOriginal();
    // Guardar en historial después de grabar
    if (lista.length > 0) {
        guardarEnHistorial();
    }
};

