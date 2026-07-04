const album_pags = [
    {
        type: "portada",
        label: "Álbum de flores para mi amorcito; orquídea que adornas mi vivir",
        title: "Flores que me\nrecuerdan a ti",
        subtitle: "Aquí reposa lo que es el mero hecho de pensarte,\nporque como estas hojas son las hojas en mi corazón",
        date: "Desde el 5 de septiembre de 2025",
    },

    {
        type: "Posdata",
        tint: "tinta-rosa",
        heading: "Estas son para ti,\n la cosa son las que faltan",
        body: "Qué bonito pasar la vida teniendo tantas cosas que decir para que cuando te mire todo eso se pierda en el mar, porque lo único que quiero hacer es estar contigo, mirarte siempre y poder susurrarte al oído lo hermosa que estás, hoy, mañana y siempre",
        signature: "Esto es un pedacito de lo que por ti siento",
    },

    {
        type: "flor",
        tint: "tinta-rosa",
        image: "audiovisuales/imágenes/gardenia.png",
        name: "Gardenia",
        latin: "Gardenia jasminoides",
        description: "Son preciosas tus curvas definidas,\n tus formas marcan el camino,\n somos dos defendiendo nuestras vidas,\n y aún así eres el sol matutino.\n Flotas grácil a cada paso,\n con esa figura que es tan dulce como tu regazo,\n en las puntas llevas el rocío a mi ser,\n de ahí que seas la luz en el anochecer.",
        audio: "audiovisuales/audios/gardenia.mp3",
    },

    {
        type: "flor",
        tint: "tinta-rosa",
        image: "audiovisuales/imágenes/lirio.png",
        name: "Lirio",
        latin: "Crinum bulbispermum",
        description: "Te sabes hermosa,\n ya hoy modelas en broma,\n bailas suelta,\n cada día me posas,\n y de regalo me das tu aroma.\n Te veo,\n fragante y vívida,\n en el centro de este equilibrio,\n pues tu sonrisa ya no está perdida,\n ahora cuéntame la historia como es debida,\n como con cada beso me conduces al delirio.",
        audio: "audiovisuales/audios/lirio.mp3",
    },

    {
        type: "flor",
        tint: "tinta-rosa",
        image: "audiovisuales/imágenes/tulipán.png",
        name: "Tulipán",
        latin: "Tulipa gesneriana",
        description: "Como un viento despacio,\n de vientre rosa y afable, \n y extremidades delicadas, \n así digo que tu cuerpo es un palacio, \n de gestos todos amables, \n y de manos tan dedicadas. \n Pues, entre tus besos de papel, \n tus ojos grandes y de nácar, \n son solo introducción a tus dedos de pincel, \n delineas calmada, \n tanto que aún mi calma aplacas.",
        audio: "audiovisuales/audios/tulipán.mp3",
    },

    {
        type: "flor",
        tint: "tinta-rosa",
        image: "audiovisuales/imágenes/rosa.png",
        name: "Rosa",
        latin: "Rosa gallica",
        description: "Este sin rima va.\n No es fortuito,\n En lo absoluto es por relato,\n No influye la cantidad de colores que en ti habitan,\n Mucho menos los que decidas teñirte,\n No te restan las astillas,\n Ni le suma el brillo que incide en ti,\n Solo el que tú despides.\n En la integralidad de tu ser se encuentra la perfección,\n No vana,\n no efímera,\n Tus curvas son formas para mi tacto,\n Y tu esencia entera me seduce,\n Pero no es por eso que hoy sonrío,\n Es la perfección que las manos,\n que en el pecho gestas,\n que en la voz suscitas,\n no son tus favoritas,\n ¿Pero qué te puedo yo decir?\n Fuiste tú que me ganaste así.",
        audio: "audiovisuales/audios/rosa.mp3",
    },

    {
        type: "flor",
        tint: "tinta-rosa",
        image: "audiovisuales/imágenes/clavel.png",
        name: "Clavel",
        latin: "Dianthus caryophyllus",
        description: "Por tus curvas sigo,\n son de papel tus dedos,\n hoy te digo,\n que en tus cabellos me enredo,\n todo por querer estar contigo.\n Sabes,\n por momentos mi latir se siente así,\n por culpa de tus labios y los abrazos,\n me siento parte de este sentir,\n queriendo construir más de estos lazos.",
        audio: "audiovisuales/audios/clavel.mp3",
    },

    {
        type: "flor",
        tint: "tinta-rosa",
        image: "audiovisuales/imágenes/geranio.png",
        name: "Geranio",
        latin: "pelargonium hortorum",
        description: "El rubí que en los labios llevas,\n Infunden rubor en los míos,\n capaz es la mezcla,\n pero exijo más pruebas,\n que los míos solo buscan huir del frío.\n Me embriaga tu mera presencia,\n me mantiene concentrado,\n en atrapar con la vista tu esencia,\n y se vuelve imperante catalogarte como lo más preciado.",
        audio: "audiovisuales/audios/geranio.mp3",
    },
    
    {
        type: "flor",
        tint: "tinta-rosa",
        image: "audiovisuales/imágenes/crisantemo.png",
        name: "Crisantemo",
        latin: "Chrysanthemum morifolium",
        description: "Cimentada bien en tus bases,\n parecieras inamovible,\n solo eres flexible en el viento.\n Te escondiste,\n bien adentro,\n y con tu belleza imposible,\n me apabullas todas la veces.\n Te ves libre en tus adentros,\n tibia cual lamento,\n te abrazas de la forma que te quiero abrazar,\n sin termómetro y en todo lugar.",
        audio: "audiovisuales/audios/crisantemo.mp3",
    },

    {
        type: "flor",
        tint: "tinta-rosa",
        image: "audiovisuales/imágenes/astromelia.png",
        name: "Astromelia",
        latin: "alstroemeria hybrida",
        description: "Luces fuerte mientras al cielo apuntas,\n Por tus pétalos ni el viento cruza,\n Así nuestras manos juntas,\n Al devolverme la mirada a mi sonrisa acusas.\n En el hermetismo de tu patrón se refleja,\n Una parte profunda de mi amor,\n Parecieras contagiarme el rubor,\n Y mi cuerpo,\n tuyo,\n se deja.",
        audio: "audiovisuales/audios/astromelia.mp3",
    },

    {
        type: "flor",
        tint: "tinta-rosa",
        image: "audiovisuales/imágenes/orquídea.png",
        name: "Orquídea",
        latin: "Cattleya trianae",
        description: "Desvelada y epífita,\n de dulces rojos está hecho tu ser,\n maldijiste lo que esa voz te dicta,\n supiste entonces que no podías perder.\n De raíces al aire te cimentas,\n hasta tus sépalos guardan un pedido del amor,\n aquel que cultivamos entre luces inciertas,\n y hoy miramos su radiante fulgor.\n En el nombre llevas una promesa;\n así como en tu piel reposa mi voz,\n te veo encontrar calma en mi tibieza,\n mientras en tu nombre,\n encuentro el sol.",
        audio: "audiovisuales/audios/orquídea.mp3",
    },

    {
        type: "cierre",
        tint: "tinta-rosa",
        quote: "Cada flor que viste\nes una forma nueva de decirte\nque te amo.",
        body: "Gracias por leer y oír lo presente en este librito. Espero que en cada página te haya hecho sonreír así como yo lo hice mientras te lo escribía.",
        signature: "Con amor, santi",
    },
];