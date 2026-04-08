const THE_PASSWORD = "ET2026IR";

const HERO_VIDEO = {
    id: "https://www.dropbox.com/scl/fi/jiyhdv1vccdtt91jhayeh/I-7-LADRI-DEL-TEMPO-COME-AVERE-PIU-TEMPO.mp4?rlkey=f54pge4noisyqir5jj5u561nk&st=cczcesmz&raw=1",
    title: "I 7 LADRI DEL TEMPO",
    desc: "Scopri i sabotatori invisibili della tua produttività e impara a gestire il tuo tempo come un vero leader."
};

const categories = [
    { name: "PRIMA FORMAZIONE NUOVO CONSULENTE", videos: [
        { id: "https://www.dropbox.com/scl/fi/a0lswxi350isedvhqvds5/ESEMPIO-CHIAMATA-per-appuntamento-consigli-vari.mp4?rlkey=5jy4isxa0enbpv8mqwei08m1q&st=nvskybgz&dl=0", title: "ESEMPIO CHIAMATA per appuntamento", poster: "img/Gestione-del-tempo-priorità.png" },
        { id: "https://www.dropbox.com/scl/fi/4fp5xqoyvnbv8j3is1t4s/I-PRIIMI-PASSI-FOLLOW-UP-CONSULENTE.mp4?rlkey=px2tsn949ee0z3m6tr80vjl9y&st=jqcjvfgi&dl=0", title: "I PRIMI PASSI FOLLOW UP CONSULENTE" },
        { id: "https://www.dropbox.com/scl/fi/0kmg63wtf8eax3n3sxbag/I-PRIMI-PASSI-BENVENUTO.mp4?rlkey=x9zf0f4w1yr436fvw4s7m7pzc&st=ldls1rp6&dl=0", title: "I PRIMI PASSI BENVENUTO" },
        { id: "https://www.dropbox.com/scl/fi/pu07lqfkqoqxyhbeky6ou/PRIMA-FORMAZIONE-NUOVO-CONSULENTE.mp4?rlkey=9rxdp0i2h6umivr464zl3s2zi&st=5136ln4b&dl=0", title: "PRIMA FORMAZIONE NUOVO CONSULENTE" }
    ]},
    { name: "90 DAYS RUN", videos: [
        { id: "https://www.dropbox.com/scl/fi/7r2mtsn8x7jepuwf829fc/90-DAYS-RUN-LA-CORSA-DEI-90-GIORNI.mp4?rlkey=znj2hr4a31dg1ykafv5l1p6xq&st=3vz7uccn&dl=0", title: "90 DAYS RUN LA CORSA DEI 90 GIORNI" },
        { id: "https://www.dropbox.com/scl/fi/itdtev5mdn0wuq8uzxbfn/PREP-KICK-OFF-MONACO.mp4?rlkey=cb58bxfzo6k8ylorgkrf781od&st=53ed14af&dl=0", title: "PREP KICK OFF MONACO" }
    ]},
    { name: "ATTIVARE IL CONSULENTE", videos: [
        { id: "https://www.dropbox.com/scl/fi/qzvthm70uq7j9wf87nrwt/ATTIVARE-IL-CONSULENTE.mp4?rlkey=48jxercszh19v1zr883wvyd88&st=1t8ve0co&dl=0", title: "ATTIVARE IL CONSULENTE" },
        { id: "https://www.dropbox.com/scl/fi/zvbz9iyjvk5glbp1g59of/IL-CICLO-DI-VITA-DEL-CONSULENTE.mp4?rlkey=ovtutmyv7evndgh43akjtzzaj&st=nvplwbtw&dl=0", title: "IL CICLO DI VITA DEL CONSULENTE" }
    ]},
    { name: "COME AVERE RISULTATI CONCRETI NEL NETWORK", videos: [
        { id: "https://www.dropbox.com/scl/fi/b1wdb95pg7dm9pu0ms8lb/COME-AVERE-RISULTATI-CONCRETI.mp4?rlkey=qe3couw16dnts7kkcajdgy87f&st=h4m1a012&dl=0", title: "COME AVERE RISULTATI CONCRETI" }
    ]},
    { name: "FORMAZIONE 2026", videos: [
        { id: "https://www.dropbox.com/scl/fi/jiyhdv1vccdtt91jhayeh/I-7-LADRI-DEL-TEMPO-COME-AVERE-PIU-TEMPO.mp4?rlkey=f54pge4noisyqir5jj5u561nk&st=7givwfa7&dl=0", title: "I 7 LADRI DEL TEMPO - COME AVERE PIU' TEMPO" },
        { id: "https://www.dropbox.com/scl/fi/q4iyap1gnnj2bpsjm7ll0/END-OF-MONTH-CALL.mp4?rlkey=dzk5wrkm65kxflgecjwrfsvm9&st=siu4s76m&dl=0", title: "END OF MONTH CALL" },
        { id: "https://www.dropbox.com/scl/fi/8v6nuv2dx506p4wsy1543/VINCENZO-AMATULLI-FORMAZIONE-E-TESTIMONIANZA.mp4?rlkey=4zay3d0fx62zywyot48v1qywf&st=x2igpfki&dl=0", title: "VINCENZO AMATULLI FORMAZIONE E TESTIMONIANZA" },
        { id: "https://www.dropbox.com/scl/fi/h4hgjbggp4lsa99husd2c/NOVITA-CHOGAN-MARZO-2026.mp4?rlkey=n5golm2h0ciu2j4s3uctok7wc&st=jevemisw&dl=0", title: "NOVITA' CHOGAN MARZO 2026" },
        { id: "https://www.dropbox.com/scl/fi/080dq5char3anks58euex/STRATEGIE-DI-COMUNICAZIONE.mp4?rlkey=gzlq63bsu114qbah8hhfndj71&st=ef705fw4&dl=0", title: "STRATEGIE DI COMUNICAZIONE" },
        { id: "https://www.dropbox.com/scl/fi/re7t2onn4pe16h0zjd49e/LASCIA-IL-TUO-LAVORO-IN-90-GIORNI-2026.mp4?rlkey=cqbcg3ib4yje2lkjh0jbsoagi&st=9zc1uux4&dl=0", title: "LASCIA IL TUO LAVORO IN 90 GIORNI 2026" }
    ]},
    { name: "FORMAZIONE DI BASE", videos: [
        { id: "https://www.dropbox.com/scl/fi/0pbktidktqcgyg4a72p78/I-PRIMI-PASSI.mp4?rlkey=56trbs2davw5160ujbo7dnlwa&st=i9rtpyml&dl=0", title: "I PRIMI PASSI" },
        { id: "https://www.dropbox.com/scl/fi/n41760d6k5n0yza9e5il7/formazione-importante-NUOVO-CONSULENTE.mp4?rlkey=pqk53jg77j58dtc8v2e2ya3k1&st=xs5y78y9&dl=0", title: "formazione importante NUOVO CONSULENTE" },
        { id: "https://www.dropbox.com/scl/fi/424p52ak47vevrksyxkdl/Gestione-del-tempo-TIME-MANAGEMENT2024.mp4?rlkey=emof54utt9dzvj6idussk6pn6&st=rqpfl76i&dl=0", title: "Gestione del tempo TIME MANAGEMENT 2024" },
        { id: "https://www.dropbox.com/scl/fi/fii3pms27ddgu91nlczno/HOME-PARTY-Come-svolgerlo.mp4?rlkey=hv0h1rrh92mnxb12xf0kux6gc&st=9j8veigk&dl=0", title: "HOME PARTY - Come svolgerlo!" },
        { id: "https://www.dropbox.com/scl/fi/vlw1k6lzzyf0pnh2ew0au/IL-PRINCIPIO-DEL-MLM.mp4?rlkey=mbr4t4c4ycxygns3tg1f65kbd&st=ou40lhvo&dl=0", title: "IL PRINCIPIO DEL MLM" }
    ]},
    { name: "FORMAZIONE PRODOTTI", videos: [
        { id: "https://www.dropbox.com/scl/fi/z9roorws9stwyfg22updr/BENESSERE-con-i-nostri-prodotti-Marco-Casciaro.mp4?rlkey=y2i6ihm8n7bbpfrm8qitqge4c&st=g63hfmhw&dl=0", title: "BENESSERE con i nostri prodotti (Marco Casciaro)" },
        { id: "https://www.dropbox.com/scl/fi/93fb23jjreu8qma8g5j1c/PRODOTTI-Problema-SOLUZIONE.mp4?rlkey=ki1n0xx3gzkoorvlvi0ov60ml&st=fuobhcz5&dl=0", title: "PRODOTTI Problema - SOLUZIONE!" },
        { id: "https://www.dropbox.com/scl/fi/5iz22r6mpa4ggs872yi4r/E-STATE-al-TOP-prodotti-per-l-estate.mp4?rlkey=kjgn16pcx8t46o1c8a6htdpek&st=svfhuhul&dl=0", title: "E-STATE al TOP prodotti per l'estate" }
    ]},
    { name: "FORMAZIONE SOCIAL", videos: [
        { id: "https://www.dropbox.com/scl/fi/n2xv3i9junwmna1o3qjr1/Sponsorizzare-sui-social.mp4?rlkey=v5gwcjv8t3l27ohh9rii77iv4&st=zmdnle4z&dl=0", title: "Sponsorizzare sui social" },
        { id: "https://www.dropbox.com/scl/fi/75c1zc8rhqnfn4btgajbh/COME-FARE-LE-LIVE.mp4?rlkey=ix6tphfruazj8dio74y4uoh9j&st=o82o0i5z&dl=0", title: "COME FARE LE LIVE" },
        { id: "https://www.dropbox.com/scl/fi/n77p37quj4llpw1qm400s/whatsapp-party.mp4?rlkey=d84s94znqnhl6epvjzl732nw9&st=95bzr5c6&dl=0", title: "WHATSAPP PARTY" },
        { id: "https://www.dropbox.com/scl/fi/cgfw9pl8vzrd7c2azu7xj/Social-strategy-tik-tok-1-parte.mp4?rlkey=6e5h0acwjmbamarffryuk642h&st=v5au5iyf&dl=0", title: "SOCIAL STRATEGY TIKTOK - PARTE 1" },
        { id: "https://www.dropbox.com/scl/fi/xtgv69j92ybjv9sz3np0r/Social-strategy-tik-tok-2-piano-compensi.mp4?rlkey=0wb71kgkm6261exekwfdc3o99&st=zjip2srq&dl=0", title: "SOCIAL STRATEGY TIKTOK - PARTE 1 + PIANO COMPENSI" },
        { id: "https://www.dropbox.com/scl/fi/w9nx4oa1b7gleunyoacny/REALIZZARE-VIDEO-PER-TIK-TOK.mp4?rlkey=g8j04g64fccqfxc2khmbvb6sj&st=fmbjxpwe&dl=0", title: "REALIZZARE VIDEO PER TIKTOK" }
    ]},
    { name: "FORMAZIONE SPONSOR", videos: [
        { id: "https://www.dropbox.com/scl/fi/ho5qlbz7xcydmzvmjqr4m/I-COMPITI-E-LE-FUNZIONI-DELLO-SPONSOR.mp4?rlkey=harpk85lacqzwnyxmjf9uogi0&st=0tox6cq8&dl=0", title: "I COMPITI E LE FUNZIONI DELLO SPONSOR" },
        { id: "https://www.dropbox.com/scl/fi/q5nr677i35qjrrn73ping/PRESENTARE-IL-BUSINESS.mp4?rlkey=tl2s6g8fnazpcpwhk15pyv182&st=8e2z3cfs&dl=0", title: "PRESENTARE IL BUSINESS" },
        { id: "https://www.dropbox.com/scl/fi/wcz95dqvys8sqpigud5v9/ESEMPIO-CHIAMATA-per-appuntamento-consigli-vari.mp4?rlkey=fuiij4satkqgbz72q8iyteqs0&st=obozzguy&dl=0", title: "ESEMPIO CHIAMATA PER APPUNTAMENTO & CONSIGLI VARI" },
        { id: "https://www.dropbox.com/scl/fi/mxw2ix7u1zhv5xttgn9mc/MINDSET-GRATITUDINE-.VALORI-NEL-NM.mp4?rlkey=n917f0ohuz5xuffiplkbrzm1b&st=2w8q4z4w&dl=0", title: "MINDSET & GRATITUDINE - VALORI NEL NETWORK MARKETING" }
    ]},
    { name: "FUNZIONI AVANZATE", videos: [
        { id: "https://www.dropbox.com/scl/fi/l493k4km91fhh3f30zrvl/RIATTIVARE-UN-CONSULENTE-CON-CAMBIO-SPONSOR.mp4?rlkey=ybcqno0nz9vpq0m7a97k64ny5&st=y1tm0c21&dl=0", title: "RIATTIVARE UN CONSULENTE CON CAMBIO SPONSOR" },
        { id: "https://www.dropbox.com/scl/fi/doieiugbdz9f4rc6d3xmg/Cambio-mail-e-funzioni-di-convalida-nuovo-consulente.mp4?rlkey=vzclbac0k48b27la49udzaad4&st=z6l0uus1&dl=0", title: "CAMBIO MAIL E FUNZIONI DI CONVALIDA NUOVO CONSULENTE" },
        { id: "https://www.dropbox.com/scl/fi/z7njqlo9ht8jfkaug7i6d/FUNZIONE-KPI.mp4?rlkey=700uskzrqt0miabh6ow2klb8s&st=hs9qv28t&dl=0", title: "FUNZIONE KPI" }
    ]}
];

const catalogs = [
    { title: "Catalogo Prodotti 2026", icon: "📚", link: "INSERISCI_URL_PDF" },
    { title: "Piano Compensi", icon: "💰", link: "INSERISCI_URL_PDF" }
];
