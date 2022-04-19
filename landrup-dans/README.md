# Landrup Dans terminprøve opgave

# Formål:

  Hovedopgaven (dvs. appen) består af syv views, hvor hver enkelt af dem har sine egne formål, funktionaliteter og adgangsbegræsninger. Der var også tre valgfri opgaver, hvor jeg har vælgt at lave opgave C og kan sagtens forklare opgave A (har begyndt at deploye sidst på ugen, så ved ikke om det gælder).

# Detaljer:
  Oversigten over "Kravspecifikation" og hvad der lykkes, delvis lykkes eller overhovedet ikke lykkes for mig i teoriprøven (struktueret på views):
  **Velkommen**<br>
  💯 knap i bunden animeres ind på siden (usynlig => synlig) efter 1500ms
  <br>
  💯 knap i bunden leder videre til Aktiviteter
  <br>
  **Aktiviteter**<br>
  💯 vises en liste over alle aktiviteter, brugeren kan swipe igennem vertikalt
  <br>
  💯 overskriften og drawer menuen i bunden er statiske (_padding-top driller dog lidt på overskriften_)
  <br>
  💯 brugere kan klikke på et aktivitetskort for flere detaljer
  <br>

  **Aktivitetsdetaljer**<br>
  💯 vises detaljer for en enkelt aktivitet
  <br>
  💯 knap "Tilmeld"/"Forlad" afhængig af om brugeren er allerede tilmeld eller ej - vises kun for loggede brugere
  <br>
  💯❌ brugere kan tilmelde / framelde sig aktiviteten (_det lykkes desværre ikke med alle de begrænsninger nævnt i opgaven - dvs. ikke muligt at tilmelde sig flere gange/tilmelde det samme, aldersbegrænsning_)
  <br>

  **Kalender, default**<br>
  💯 for brugere: vises alle de aktiviteter man er tilmeldt, leder til detaljer siden ved click
  <br>
  💯 for instruktør: vises alle de aktiviteter man er intruktør for, leder til "Kalender, hold-oversigt" siden ved click
  <br>
  💯 hvis man ikke er logget ind og kommer tilfældigvis på siden, vises der en <Protected /> component med en warning og en knap som leder til Login siden
  <br>

  **Kalender, hold-oversigt**<br>
  💯 vises kun for instruktør: vises en liste over tilmeldninger til en aktivitet (fuld navn)
  <br>
  💯❌ der mangler dobbel sikkerhed væg, dvs. der skal tilføjes <Protected /> og andet info (for brugere) just in case
  💯 RETTET _Red. den 28. februar:_ sikkerhedsvæggen bygget op, virker dog kun hvis der skrives _:id_ i params, ellers er der "No matched route found", som skyldes helt sikkert routing.
  <br>

  **Søg**<br>
  💯 søgefelt vises resultater kun efter en bruger har skrevet i søgefeltet
  <br>
  ❌ hvis der ikke findes resultater, gives info om det
  <br>

  **Fælles**<br>
  💯 drawer menu vises kun på bestemte sider
  <br>
  💯 knapperne på <Nav /> føres til henholdsvis "Aktiviteter", "Søgesiden" og "Kalendersiden"
  <br>
  ❌ RETTET alle formularer valideres og gives response til brugeren (tid mangel)
  💯 _Red. den 1. marts:_ Login formular fik en valideringsfunktion
  <br>

  **Hvis jeg havde mere tid**<br>
  Havde jeg mere tid, ville jeg fixe sikkerhedsvæg på "Hold-oversigt" siden, "Søgning" - info texten, validering af formular og så forsøge på at fixe Tilmeld/Frameld funktionaliteten så den virker ordentligt.
  <br>

  **Overvejelser ift koden**
    Der findes udkommenteret kodestykker i koden, som er en anden måde at se/gøre tingene på, dem ville jeg gerne bare forstå bedre og finde ud af hvad for nogle fordele, de forskellige måder at gøre tingene på, har.
<br>
# Click and check it out!
  https://landrup-dans.netlify.app/