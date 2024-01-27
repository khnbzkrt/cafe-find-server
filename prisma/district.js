import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
    await prisma.district.createMany({
        data: [
            {
                name: 'Aladağ',
                provinceId: 1,
            },
            {
                name: 'Ceyhan',
                provinceId: 1,
            },
            {
                name: 'Çukurova',
                provinceId: 1,
            },
            {
                name: 'Feke',
                provinceId: 1,
            },
            {
                name: 'İmamoğlu',
                provinceId: 1,
            },
            {
                name: 'Karaisalı',
                provinceId: 1,
            },
            {
                name: 'Karataş',
                provinceId: 1,
            },
            {
                name: 'Kozan',
                provinceId: 1,
            },
            {
                name: 'Pozanti',
                provinceId: 1,
            },
            {
                name: 'Saimbeyli',
                provinceId: 1,
            },
            {
                name: 'Sariçam',
                provinceId: 1,
            },
            {
                name: 'Seyhan',
                provinceId: 1,
            },
            {
                name: 'Tufanbeyli',
                provinceId: 1,
            },
            {
                name: 'Yumurtalik',
                provinceId: 1,
            },
            {
                name: 'Yüreğir',
                provinceId: 1,
            },
            {
                name: 'Besni',
                provinceId: 2,
            },
            {
                name: 'Çelikhan',
                provinceId: 2,
            },
            {
                name: 'Gerger',
                provinceId: 2,
            },
            {
                name: 'Gölbaşı',
                provinceId: 2,
            },
            {
                name: 'Kahta',
                provinceId: 2,
            },
            {
                name: 'Merkez',
                provinceId: 2,
            },
            {
                name: 'Samsat',
                provinceId: 2,
            },
            {
                name: 'Sincik',
                provinceId: 2,
            },
            {
                name: 'Tut',
                provinceId: 2,
            },
            {
                name: 'Başmakçı',
                provinceId: 3,
            },
            {
                name: 'Bayat',
                provinceId: 3,
            },
            {
                name: 'Bolvadin',
                provinceId: 3,
            },
            {
                name: 'Çay',
                provinceId: 3,
            },
            {
                name: 'Çobanlar',
                provinceId: 3,
            },
            {
                name: 'Dazkiri',
                provinceId: 3,
            },
            {
                name: 'Dinar',
                provinceId: 3,
            },
            {
                name: 'Emirdağ',
                provinceId: 3,
            },
            {
                name: 'Evciler',
                provinceId: 3,
            },
            {
                name: 'Hocalar',
                provinceId: 3,
            },
            {
                name: 'İhsaniye',
                provinceId: 3,
            },
            {
                name: 'İscehisar',
                provinceId: 3,
            },
            {
                name: 'Kizilören',
                provinceId: 3,
            },
            {
                name: 'Merkez',
                provinceId: 3,
            },
            {
                name: 'Sandikli',
                provinceId: 3,
            },
            {
                name: 'Sinanpaşa',
                provinceId: 3,
            },
            {
                name: 'Sultandağı',
                provinceId: 3,
            },
            {
                name: 'Şuhut',
                provinceId: 3,
            },
            {
                name: 'Diyadin',
                provinceId: 4,
            },
            {
                name: 'Doğubayazıt',
                provinceId: 4,
            },
            {
                name: 'Eleşkirt',
                provinceId: 4,
            },
            {
                name: 'Hamur',
                provinceId: 4,
            },
            {
                name: 'Merkez',
                provinceId: 4,
            },
            {
                name: 'Patnos',
                provinceId: 4,
            },
            {
                name: 'Taşlıçay',
                provinceId: 4,
            },
            {
                name: 'Tutak',
                provinceId: 4,
            },
            {
                name: 'Göynücek',
                provinceId: 5,
            },
            {
                name: 'Gümüşhacıköy',
                provinceId: 5,
            },
            {
                name: 'Hamamözü',
                provinceId: 5,
            },
            {
                name: 'Merkez',
                provinceId: 5,
            },
            {
                name: 'Merzifon',
                provinceId: 5,
            },
            {
                name: 'Suluova',
                provinceId: 5,
            },
            {
                name: 'Taşova',
                provinceId: 5,
            },
            {
                name: 'Akyurt',
                provinceId: 6,
            },
            {
                name: 'Altındağ',
                provinceId: 6,
            },
            {
                name: 'Ayaş',
                provinceId: 6,
            },
            {
                name: 'Bala',
                provinceId: 6,
            },
            {
                name: 'Beypazari',
                provinceId: 6,
            },
            {
                name: 'Çamlidere',
                provinceId: 6,
            },
            {
                name: 'Çankaya',
                provinceId: 6,
            },
            {
                name: 'Çubuk',
                provinceId: 6,
            },
            {
                name: 'Elmadağ',
                provinceId: 6,
            },
            {
                name: 'Etimesgut',
                provinceId: 6,
            },
            {
                name: 'Evren',
                provinceId: 6,
            },
            {
                name: 'Gölbaşı',
                provinceId: 6,
            },
            {
                name: 'Güdül',
                provinceId: 6,
            },
            {
                name: 'Haymana',
                provinceId: 6,
            },
            {
                name: 'Kahramankazan',
                provinceId: 6,
            },
            {
                name: 'Kalecik',
                provinceId: 6,
            },
            {
                name: 'Keçiören',
                provinceId: 6,
            },
            {
                name: 'Kizilcahamam',
                provinceId: 6,
            },
            {
                name: 'Mamak',
                provinceId: 6,
            },
            {
                name: 'Nallihan',
                provinceId: 6,
            },
            {
                name: 'Polatli',
                provinceId: 6,
            },
            {
                name: 'Pursaklar',
                provinceId: 6,
            },
            {
                name: 'Sincan',
                provinceId: 6,
            },
            {
                name: 'Şereflikoçhisar',
                provinceId: 6,
            },
            {
                name: 'Yenimahalle',
                provinceId: 6,
            },
            {
                name: 'Akseki',
                provinceId: 7,
            },
            {
                name: 'Aksu',
                provinceId: 7,
            },
            {
                name: 'Alanya',
                provinceId: 7,
            },
            {
                name: 'Demre',
                provinceId: 7,
            },
            {
                name: 'Döşemealtı',
                provinceId: 7,
            },
            {
                name: 'Elmali',
                provinceId: 7,
            },
            {
                name: 'Finike',
                provinceId: 7,
            },
            {
                name: 'Gazipaşa',
                provinceId: 7,
            },
            {
                name: 'Gündoğmuş',
                provinceId: 7,
            },
            {
                name: 'İbradı',
                provinceId: 7,
            },
            {
                name: 'Kaş',
                provinceId: 7,
            },
            {
                name: 'Kemer',
                provinceId: 7,
            },
            {
                name: 'Kepez',
                provinceId: 7,
            },
            {
                name: 'Konyaalti',
                provinceId: 7,
            },
            {
                name: 'Korkuteli',
                provinceId: 7,
            },
            {
                name: 'Kumluca',
                provinceId: 7,
            },
            {
                name: 'Manavgat',
                provinceId: 7,
            },
            {
                name: 'Muratpaşa',
                provinceId: 7,
            },
            {
                name: 'Serik',
                provinceId: 7,
            },
            {
                name: 'Ardanuç',
                provinceId: 8,
            },
            {
                name: 'Arhavi',
                provinceId: 8,
            },
            {
                name: 'Borçka',
                provinceId: 8,
            },
            {
                name: 'Hopa',
                provinceId: 8,
            },
            {
                name: 'Kemalpaşa',
                provinceId: 8,
            },
            {
                name: 'Merkez',
                provinceId: 8,
            },
            {
                name: 'Murgul',
                provinceId: 8,
            },
            {
                name: 'Şavşat',
                provinceId: 8,
            },
            {
                name: 'Yusufeli',
                provinceId: 8,
            },
            {
                name: 'Bozdoğan',
                provinceId: 9,
            },
            {
                name: 'Buharkent',
                provinceId: 9,
            },
            {
                name: 'Çine',
                provinceId: 9,
            },
            {
                name: 'Didim',
                provinceId: 9,
            },
            {
                name: 'Efeler',
                provinceId: 9,
            },
            {
                name: 'Germencik',
                provinceId: 9,
            },
            {
                name: 'İncirliova',
                provinceId: 9,
            },
            {
                name: 'Karacasu',
                provinceId: 9,
            },
            {
                name: 'Karpuzlu',
                provinceId: 9,
            },
            {
                name: 'Koçarli',
                provinceId: 9,
            },
            {
                name: 'Köşk',
                provinceId: 9,
            },
            {
                name: 'Kuşadası',
                provinceId: 9,
            },
            {
                name: 'Kuyucak',
                provinceId: 9,
            },
            {
                name: 'Nazilli',
                provinceId: 9,
            },
            {
                name: 'Söke',
                provinceId: 9,
            },
            {
                name: 'Sultanhisar',
                provinceId: 9,
            },
            {
                name: 'Yenipazar',
                provinceId: 9,
            },
            {
                name: 'Altieylül',
                provinceId: 10,
            },
            {
                name: 'Ayvalik',
                provinceId: 10,
            },
            {
                name: 'Balya',
                provinceId: 10,
            },
            {
                name: 'Bandirma',
                provinceId: 10,
            },
            {
                name: 'Bigadiç',
                provinceId: 10,
            },
            {
                name: 'Burhaniye',
                provinceId: 10,
            },
            {
                name: 'Dursunbey',
                provinceId: 10,
            },
            {
                name: 'Edremit',
                provinceId: 10,
            },
            {
                name: 'Erdek',
                provinceId: 10,
            },
            {
                name: 'Gömeç',
                provinceId: 10,
            },
            {
                name: 'Gönen',
                provinceId: 10,
            },
            {
                name: 'Havran',
                provinceId: 10,
            },
            {
                name: 'İvrindi',
                provinceId: 10,
            },
            {
                name: 'Karesi',
                provinceId: 10,
            },
            {
                name: 'Kepsut',
                provinceId: 10,
            },
            {
                name: 'Manyas',
                provinceId: 10,
            },
            {
                name: 'Marmara',
                provinceId: 10,
            },
            {
                name: 'Savaştepe',
                provinceId: 10,
            },
            {
                name: 'Sindirgi',
                provinceId: 10,
            },
            {
                name: 'Susurluk',
                provinceId: 10,
            },
            {
                name: 'Bozüyük',
                provinceId: 11,
            },
            {
                name: 'Gölpazari',
                provinceId: 11,
            },
            {
                name: 'İnhisar',
                provinceId: 11,
            },
            {
                name: 'Merkez',
                provinceId: 11,
            },
            {
                name: 'Osmaneli',
                provinceId: 11,
            },
            {
                name: 'Pazaryeri',
                provinceId: 11,
            },
            {
                name: 'Söğüt',
                provinceId: 11,
            },
            {
                name: 'Yenipazar',
                provinceId: 11,
            },
            {
                name: 'Adakli',
                provinceId: 12,
            },
            {
                name: 'Genç',
                provinceId: 12,
            },
            {
                name: 'Karliova',
                provinceId: 12,
            },
            {
                name: 'Kiğı',
                provinceId: 12,
            },
            {
                name: 'Merkez',
                provinceId: 12,
            },
            {
                name: 'Solhan',
                provinceId: 12,
            },
            {
                name: 'Yayladere',
                provinceId: 12,
            },
            {
                name: 'Yedisu',
                provinceId: 12,
            },
            {
                name: 'Adilcevaz',
                provinceId: 13,
            },
            {
                name: 'Ahlat',
                provinceId: 13,
            },
            {
                name: 'Güroymak',
                provinceId: 13,
            },
            {
                name: 'Hizan',
                provinceId: 13,
            },
            {
                name: 'Merkez',
                provinceId: 13,
            },
            {
                name: 'Mutki',
                provinceId: 13,
            },
            {
                name: 'Tatvan',
                provinceId: 13,
            },
            {
                name: 'Dörtdivan',
                provinceId: 14,
            },
            {
                name: 'Gerede',
                provinceId: 14,
            },
            {
                name: 'Göynük',
                provinceId: 14,
            },
            {
                name: 'Kibriscik',
                provinceId: 14,
            },
            {
                name: 'Mengen',
                provinceId: 14,
            },
            {
                name: 'Merkez',
                provinceId: 14,
            },
            {
                name: 'Mudurnu',
                provinceId: 14,
            },
            {
                name: 'Seben',
                provinceId: 14,
            },
            {
                name: 'Yeniçağa',
                provinceId: 14,
            },
            {
                name: 'Ağlasun',
                provinceId: 15,
            },
            {
                name: 'Altinyayla',
                provinceId: 15,
            },
            {
                name: 'Bucak',
                provinceId: 15,
            },
            {
                name: 'Çavdir',
                provinceId: 15,
            },
            {
                name: 'Çeltikçi',
                provinceId: 15,
            },
            {
                name: 'Gölhisar',
                provinceId: 15,
            },
            {
                name: 'Karamanli',
                provinceId: 15,
            },
            {
                name: 'Kemer',
                provinceId: 15,
            },
            {
                name: 'Merkez',
                provinceId: 15,
            },
            {
                name: 'Tefenni',
                provinceId: 15,
            },
            {
                name: 'Yeşilova',
                provinceId: 15,
            },
            {
                name: 'Büyükorhan',
                provinceId: 16,
            },
            {
                name: 'Gemlik',
                provinceId: 16,
            },
            {
                name: 'Gürsu',
                provinceId: 16,
            },
            {
                name: 'Harmancik',
                provinceId: 16,
            },
            {
                name: 'İnegöl',
                provinceId: 16,
            },
            {
                name: 'İznik',
                provinceId: 16,
            },
            {
                name: 'Karacabey',
                provinceId: 16,
            },
            {
                name: 'Keles',
                provinceId: 16,
            },
            {
                name: 'Kestel',
                provinceId: 16,
            },
            {
                name: 'Mudanya',
                provinceId: 16,
            },
            {
                name: 'Mustafakemalpaşa',
                provinceId: 16,
            },
            {
                name: 'Nilüfer',
                provinceId: 16,
            },
            {
                name: 'Orhaneli',
                provinceId: 16,
            },
            {
                name: 'Orhangazi',
                provinceId: 16,
            },
            {
                name: 'Osmangazi',
                provinceId: 16,
            },
            {
                name: 'Yenişehir',
                provinceId: 16,
            },
            {
                name: 'Yildirim',
                provinceId: 16,
            },
            {
                name: 'Ayvacik',
                provinceId: 17,
            },
            {
                name: 'Bayramiç',
                provinceId: 17,
            },
            {
                name: 'Biga',
                provinceId: 17,
            },
            {
                name: 'Bozcaada',
                provinceId: 17,
            },
            {
                name: 'Çan',
                provinceId: 17,
            },
            {
                name: 'Eceabat',
                provinceId: 17,
            },
            {
                name: 'Ezine',
                provinceId: 17,
            },
            {
                name: 'Gelibolu',
                provinceId: 17,
            },
            {
                name: 'Gökçeada',
                provinceId: 17,
            },
            {
                name: 'Lapseki',
                provinceId: 17,
            },
            {
                name: 'Merkez',
                provinceId: 17,
            },
            {
                name: 'Yenice',
                provinceId: 17,
            },
            {
                name: 'Atkaracalar',
                provinceId: 18,
            },
            {
                name: 'Bayramören',
                provinceId: 18,
            },
            {
                name: 'Çerkeş',
                provinceId: 18,
            },
            {
                name: 'Eldivan',
                provinceId: 18,
            },
            {
                name: 'Ilgaz',
                provinceId: 18,
            },
            {
                name: 'Kizilirmak',
                provinceId: 18,
            },
            {
                name: 'Korgun',
                provinceId: 18,
            },
            {
                name: 'Kurşunlu',
                provinceId: 18,
            },
            {
                name: 'Merkez',
                provinceId: 18,
            },
            {
                name: 'Orta',
                provinceId: 18,
            },
            {
                name: 'Şabanözü',
                provinceId: 18,
            },
            {
                name: 'Yaprakli',
                provinceId: 18,
            },
            {
                name: 'Alaca',
                provinceId: 19,
            },
            {
                name: 'Bayat',
                provinceId: 19,
            },
            {
                name: 'Boğazkale',
                provinceId: 19,
            },
            {
                name: 'Dodurga',
                provinceId: 19,
            },
            {
                name: 'İskilip',
                provinceId: 19,
            },
            {
                name: 'Kargi',
                provinceId: 19,
            },
            {
                name: 'Laçin',
                provinceId: 19,
            },
            {
                name: 'Mecitözü',
                provinceId: 19,
            },
            {
                name: 'Merkez',
                provinceId: 19,
            },
            {
                name: 'Oğuzlar',
                provinceId: 19,
            },
            {
                name: 'Ortaköy',
                provinceId: 19,
            },
            {
                name: 'Osmancik',
                provinceId: 19,
            },
            {
                name: 'Sungurlu',
                provinceId: 19,
            },
            {
                name: 'Uğurludağ',
                provinceId: 19,
            },
            {
                name: 'Acipayam',
                provinceId: 20,
            },
            {
                name: 'Babadağ',
                provinceId: 20,
            },
            {
                name: 'Baklan',
                provinceId: 20,
            },
            {
                name: 'Bekilli',
                provinceId: 20,
            },
            {
                name: 'Beyağaç',
                provinceId: 20,
            },
            {
                name: 'Bozkurt',
                provinceId: 20,
            },
            {
                name: 'Buldan',
                provinceId: 20,
            },
            {
                name: 'Çal',
                provinceId: 20,
            },
            {
                name: 'Çameli',
                provinceId: 20,
            },
            {
                name: 'Çardak',
                provinceId: 20,
            },
            {
                name: 'Çivril',
                provinceId: 20,
            },
            {
                name: 'Güney',
                provinceId: 20,
            },
            {
                name: 'Honaz',
                provinceId: 20,
            },
            {
                name: 'Kale',
                provinceId: 20,
            },
            {
                name: 'Merkezefendi',
                provinceId: 20,
            },
            {
                name: 'Pamukkale',
                provinceId: 20,
            },
            {
                name: 'Sarayköy',
                provinceId: 20,
            },
            {
                name: 'Serinhisar',
                provinceId: 20,
            },
            {
                name: 'Tavas',
                provinceId: 20,
            },
            {
                name: 'Bağlar',
                provinceId: 21,
            },
            {
                name: 'Bismil',
                provinceId: 21,
            },
            {
                name: 'Çermik',
                provinceId: 21,
            },
            {
                name: 'Çinar',
                provinceId: 21,
            },
            {
                name: 'Çüngüş',
                provinceId: 21,
            },
            {
                name: 'Dicle',
                provinceId: 21,
            },
            {
                name: 'Eğil',
                provinceId: 21,
            },
            {
                name: 'Ergani',
                provinceId: 21,
            },
            {
                name: 'Hani',
                provinceId: 21,
            },
            {
                name: 'Hazro',
                provinceId: 21,
            },
            {
                name: 'Kayapinar',
                provinceId: 21,
            },
            {
                name: 'Kocaköy',
                provinceId: 21,
            },
            {
                name: 'Kulp',
                provinceId: 21,
            },
            {
                name: 'Lice',
                provinceId: 21,
            },
            {
                name: 'Silvan',
                provinceId: 21,
            },
            {
                name: 'Sur',
                provinceId: 21,
            },
            {
                name: 'Yenişehir',
                provinceId: 21,
            },
            {
                name: 'Enez',
                provinceId: 22,
            },
            {
                name: 'Havsa',
                provinceId: 22,
            },
            {
                name: 'İpsala',
                provinceId: 22,
            },
            {
                name: 'Keşan',
                provinceId: 22,
            },
            {
                name: 'Lalapaşa',
                provinceId: 22,
            },
            {
                name: 'Meriç',
                provinceId: 22,
            },
            {
                name: 'Merkez',
                provinceId: 22,
            },
            {
                name: 'Süloğlu',
                provinceId: 22,
            },
            {
                name: 'Uzunköprü',
                provinceId: 22,
            },
            {
                name: 'Ağın',
                provinceId: 23,
            },
            {
                name: 'Alacakaya',
                provinceId: 23,
            },
            {
                name: 'Aricak',
                provinceId: 23,
            },
            {
                name: 'Baskil',
                provinceId: 23,
            },
            {
                name: 'Karakoçan',
                provinceId: 23,
            },
            {
                name: 'Keban',
                provinceId: 23,
            },
            {
                name: 'Kovancilar',
                provinceId: 23,
            },
            {
                name: 'Maden',
                provinceId: 23,
            },
            {
                name: 'Merkez',
                provinceId: 23,
            },
            {
                name: 'Palu',
                provinceId: 23,
            },
            {
                name: 'Sivrice',
                provinceId: 23,
            },
            {
                name: 'Çayirli',
                provinceId: 24,
            },
            {
                name: 'İliç',
                provinceId: 24,
            },
            {
                name: 'Kemah',
                provinceId: 24,
            },
            {
                name: 'Kemaliye',
                provinceId: 24,
            },
            {
                name: 'Merkez',
                provinceId: 24,
            },
            {
                name: 'Otlukbeli',
                provinceId: 24,
            },
            {
                name: 'Refahiye',
                provinceId: 24,
            },
            {
                name: 'Tercan',
                provinceId: 24,
            },
            {
                name: 'Üzümlü',
                provinceId: 24,
            },
            {
                name: 'Aşkale',
                provinceId: 25,
            },
            {
                name: 'Aziziye',
                provinceId: 25,
            },
            {
                name: 'Çat',
                provinceId: 25,
            },
            {
                name: 'Hinis',
                provinceId: 25,
            },
            {
                name: 'Horasan',
                provinceId: 25,
            },
            {
                name: 'İspir',
                provinceId: 25,
            },
            {
                name: 'Karaçoban',
                provinceId: 25,
            },
            {
                name: 'Karayazi',
                provinceId: 25,
            },
            {
                name: 'Köprüköy',
                provinceId: 25,
            },
            {
                name: 'Narman',
                provinceId: 25,
            },
            {
                name: 'Oltu',
                provinceId: 25,
            },
            {
                name: 'Olur',
                provinceId: 25,
            },
            {
                name: 'Palandöken',
                provinceId: 25,
            },
            {
                name: 'Pasinler',
                provinceId: 25,
            },
            {
                name: 'Pazaryolu',
                provinceId: 25,
            },
            {
                name: 'Şenkaya',
                provinceId: 25,
            },
            {
                name: 'Tekman',
                provinceId: 25,
            },
            {
                name: 'Tortum',
                provinceId: 25,
            },
            {
                name: 'Uzundere',
                provinceId: 25,
            },
            {
                name: 'Yakutiye',
                provinceId: 25,
            },
            {
                name: 'Alpu',
                provinceId: 26,
            },
            {
                name: 'Beylikova',
                provinceId: 26,
            },
            {
                name: 'Çifteler',
                provinceId: 26,
            },
            {
                name: 'Günyüzü',
                provinceId: 26,
            },
            {
                name: 'Han',
                provinceId: 26,
            },
            {
                name: 'İnönü',
                provinceId: 26,
            },
            {
                name: 'Mahmudiye',
                provinceId: 26,
            },
            {
                name: 'Mihalgazi',
                provinceId: 26,
            },
            {
                name: 'Mihalıççık',
                provinceId: 26,
            },
            {
                name: 'Odunpazari',
                provinceId: 26,
            },
            {
                name: 'Saricakaya',
                provinceId: 26,
            },
            {
                name: 'Seyitgazi',
                provinceId: 26,
            },
            {
                name: 'Sivrihisar',
                provinceId: 26,
            },
            {
                name: 'Tepebaşı',
                provinceId: 26,
            },
            {
                name: 'Araban',
                provinceId: 27,
            },
            {
                name: 'İslahiye',
                provinceId: 27,
            },
            {
                name: 'Karkamış',
                provinceId: 27,
            },
            {
                name: 'Nizip',
                provinceId: 27,
            },
            {
                name: 'Nurdağı',
                provinceId: 27,
            },
            {
                name: 'Oğuzeli',
                provinceId: 27,
            },
            {
                name: 'Şahinbey',
                provinceId: 27,
            },
            {
                name: 'Şehitkamil',
                provinceId: 27,
            },
            {
                name: 'Yavuzeli',
                provinceId: 27,
            },
            {
                name: 'Alucra',
                provinceId: 28,
            },
            {
                name: 'Bulancak',
                provinceId: 28,
            },
            {
                name: 'Çamoluk',
                provinceId: 28,
            },
            {
                name: 'Çanakçi',
                provinceId: 28,
            },
            {
                name: 'Dereli',
                provinceId: 28,
            },
            {
                name: 'Doğankent',
                provinceId: 28,
            },
            {
                name: 'Espiye',
                provinceId: 28,
            },
            {
                name: 'Eynesil',
                provinceId: 28,
            },
            {
                name: 'Görele',
                provinceId: 28,
            },
            {
                name: 'Güce',
                provinceId: 28,
            },
            {
                name: 'Keşap',
                provinceId: 28,
            },
            {
                name: 'Merkez',
                provinceId: 28,
            },
            {
                name: 'Piraziz',
                provinceId: 28,
            },
            {
                name: 'Şebinkarahisar',
                provinceId: 28,
            },
            {
                name: 'Tirebolu',
                provinceId: 28,
            },
            {
                name: 'Yağlıdere',
                provinceId: 28,
            },
            {
                name: 'Kelkit',
                provinceId: 29,
            },
            {
                name: 'Köse',
                provinceId: 29,
            },
            {
                name: 'Kürtün',
                provinceId: 29,
            },
            {
                name: 'Merkez',
                provinceId: 29,
            },
            {
                name: 'Şiran',
                provinceId: 29,
            },
            {
                name: 'Torul',
                provinceId: 29,
            },
            {
                name: 'Çukurca',
                provinceId: 30,
            },
            {
                name: 'Derecik',
                provinceId: 30,
            },
            {
                name: 'Merkez',
                provinceId: 30,
            },
            {
                name: 'Şemdinli',
                provinceId: 30,
            },
            {
                name: 'Yüksekova',
                provinceId: 30,
            },
            {
                name: 'Altinözü',
                provinceId: 31,
            },
            {
                name: 'Antakya',
                provinceId: 31,
            },
            {
                name: 'Arsuz',
                provinceId: 31,
            },
            {
                name: 'Belen',
                provinceId: 31,
            },
            {
                name: 'Defne',
                provinceId: 31,
            },
            {
                name: 'Dörtyol',
                provinceId: 31,
            },
            {
                name: 'Erzin',
                provinceId: 31,
            },
            {
                name: 'Hassa',
                provinceId: 31,
            },
            {
                name: 'İskenderun',
                provinceId: 31,
            },
            {
                name: 'Kirikhan',
                provinceId: 31,
            },
            {
                name: 'Kumlu',
                provinceId: 31,
            },
            {
                name: 'Payas',
                provinceId: 31,
            },
            {
                name: 'Reyhanli',
                provinceId: 31,
            },
            {
                name: 'Samandağ',
                provinceId: 31,
            },
            {
                name: 'Yayladağı',
                provinceId: 31,
            },
            {
                name: 'Aksu',
                provinceId: 32,
            },
            {
                name: 'Atabey',
                provinceId: 32,
            },
            {
                name: 'Eğirdir',
                provinceId: 32,
            },
            {
                name: 'Gelendost',
                provinceId: 32,
            },
            {
                name: 'Gönen',
                provinceId: 32,
            },
            {
                name: 'Keçiborlu',
                provinceId: 32,
            },
            {
                name: 'Merkez',
                provinceId: 32,
            },
            {
                name: 'Senirkent',
                provinceId: 32,
            },
            {
                name: 'Sütçüler',
                provinceId: 32,
            },
            {
                name: 'Şarkikaraağaç',
                provinceId: 32,
            },
            {
                name: 'Uluborlu',
                provinceId: 32,
            },
            {
                name: 'Yalvaç',
                provinceId: 32,
            },
            {
                name: 'Yenişarbademli',
                provinceId: 32,
            },
            {
                name: 'Akdeniz',
                provinceId: 33,
            },
            {
                name: 'Anamur',
                provinceId: 33,
            },
            {
                name: 'Aydincik',
                provinceId: 33,
            },
            {
                name: 'Bozyazi',
                provinceId: 33,
            },
            {
                name: 'Çamliyayla',
                provinceId: 33,
            },
            {
                name: 'Erdemli',
                provinceId: 33,
            },
            {
                name: 'Gülnar',
                provinceId: 33,
            },
            {
                name: 'Mezitli',
                provinceId: 33,
            },
            {
                name: 'Mut',
                provinceId: 33,
            },
            {
                name: 'Silifke',
                provinceId: 33,
            },
            {
                name: 'Tarsus',
                provinceId: 33,
            },
            {
                name: 'Toroslar',
                provinceId: 33,
            },
            {
                name: 'Yenişehir',
                provinceId: 33,
            },
            {
                name: 'Adalar',
                provinceId: 34,
            },
            {
                name: 'Arnavutköy',
                provinceId: 34,
            },
            {
                name: 'Ataşehir',
                provinceId: 34,
            },
            {
                name: 'Avcilar',
                provinceId: 34,
            },
            {
                name: 'Bağcılar',
                provinceId: 34,
            },
            {
                name: 'Bahçelievler',
                provinceId: 34,
            },
            {
                name: 'Bakirköy',
                provinceId: 34,
            },
            {
                name: 'Başakşehir',
                provinceId: 34,
            },
            {
                name: 'Bayrampaşa',
                provinceId: 34,
            },
            {
                name: 'Beşiktaş',
                provinceId: 34,
            },
            {
                name: 'Beykoz',
                provinceId: 34,
            },
            {
                name: 'Beylikdüzü',
                provinceId: 34,
            },
            {
                name: 'Beyoğlu',
                provinceId: 34,
            },
            {
                name: 'Büyükçekmece',
                provinceId: 34,
            },
            {
                name: 'Çatalca',
                provinceId: 34,
            },
            {
                name: 'Çekmeköy',
                provinceId: 34,
            },
            {
                name: 'Esenler',
                provinceId: 34,
            },
            {
                name: 'Esenyurt',
                provinceId: 34,
            },
            {
                name: 'Eyüpsultan',
                provinceId: 34,
            },
            {
                name: 'Fatih',
                provinceId: 34,
            },
            {
                name: 'Gaziosmanpaşa',
                provinceId: 34,
            },
            {
                name: 'Güngören',
                provinceId: 34,
            },
            {
                name: 'Kadiköy',
                provinceId: 34,
            },
            {
                name: 'Kağıthane',
                provinceId: 34,
            },
            {
                name: 'Kartal',
                provinceId: 34,
            },
            {
                name: 'Küçükçekmece',
                provinceId: 34,
            },
            {
                name: 'Maltepe',
                provinceId: 34,
            },
            {
                name: 'Pendik',
                provinceId: 34,
            },
            {
                name: 'Sancaktepe',
                provinceId: 34,
            },
            {
                name: 'Sariyer',
                provinceId: 34,
            },
            {
                name: 'Silivri',
                provinceId: 34,
            },
            {
                name: 'Sultanbeyli',
                provinceId: 34,
            },
            {
                name: 'Sultangazi',
                provinceId: 34,
            },
            {
                name: 'Şile',
                provinceId: 34,
            },
            {
                name: 'Şişli',
                provinceId: 34,
            },
            {
                name: 'Tuzla',
                provinceId: 34,
            },
            {
                name: 'Ümraniye',
                provinceId: 34,
            },
            {
                name: 'Üsküdar',
                provinceId: 34,
            },
            {
                name: 'Zeytinburnu',
                provinceId: 34,
            },
            {
                name: 'Aliağa',
                provinceId: 35,
            },
            {
                name: 'Balçova',
                provinceId: 35,
            },
            {
                name: 'Bayindir',
                provinceId: 35,
            },
            {
                name: 'Bayrakli',
                provinceId: 35,
            },
            {
                name: 'Bergama',
                provinceId: 35,
            },
            {
                name: 'Beydağ',
                provinceId: 35,
            },
            {
                name: 'Bornova',
                provinceId: 35,
            },
            {
                name: 'Buca',
                provinceId: 35,
            },
            {
                name: 'Çeşme',
                provinceId: 35,
            },
            {
                name: 'Çiğli',
                provinceId: 35,
            },
            {
                name: 'Dikili',
                provinceId: 35,
            },
            {
                name: 'Foça',
                provinceId: 35,
            },
            {
                name: 'Gaziemir',
                provinceId: 35,
            },
            {
                name: 'Güzelbahçe',
                provinceId: 35,
            },
            {
                name: 'Karabağlar',
                provinceId: 35,
            },
            {
                name: 'Karaburun',
                provinceId: 35,
            },
            {
                name: 'Karşıyaka',
                provinceId: 35,
            },
            {
                name: 'Kemalpaşa',
                provinceId: 35,
            },
            {
                name: 'Kinik',
                provinceId: 35,
            },
            {
                name: 'Kiraz',
                provinceId: 35,
            },
            {
                name: 'Konak',
                provinceId: 35,
            },
            {
                name: 'Menderes',
                provinceId: 35,
            },
            {
                name: 'Menemen',
                provinceId: 35,
            },
            {
                name: 'Narlidere',
                provinceId: 35,
            },
            {
                name: 'Ödemiş',
                provinceId: 35,
            },
            {
                name: 'Seferihisar',
                provinceId: 35,
            },
            {
                name: 'Selçuk',
                provinceId: 35,
            },
            {
                name: 'Tire',
                provinceId: 35,
            },
            {
                name: 'Torbali',
                provinceId: 35,
            },
            {
                name: 'Urla',
                provinceId: 35,
            },
            {
                name: 'Akyaka',
                provinceId: 36,
            },
            {
                name: 'Arpaçay',
                provinceId: 36,
            },
            {
                name: 'Digor',
                provinceId: 36,
            },
            {
                name: 'Kağızman',
                provinceId: 36,
            },
            {
                name: 'Merkez',
                provinceId: 36,
            },
            {
                name: 'Sarıkamış',
                provinceId: 36,
            },
            {
                name: 'Selim',
                provinceId: 36,
            },
            {
                name: 'Susuz',
                provinceId: 36,
            },
            {
                name: 'Abana',
                provinceId: 37,
            },
            {
                name: 'Ağlı',
                provinceId: 37,
            },
            {
                name: 'Araç',
                provinceId: 37,
            },
            {
                name: 'Azdavay',
                provinceId: 37,
            },
            {
                name: 'Bozkurt',
                provinceId: 37,
            },
            {
                name: 'Cide',
                provinceId: 37,
            },
            {
                name: 'Çatalzeytin',
                provinceId: 37,
            },
            {
                name: 'Daday',
                provinceId: 37,
            },
            {
                name: 'Devrekani',
                provinceId: 37,
            },
            {
                name: 'Doğanyurt',
                provinceId: 37,
            },
            {
                name: 'Hanönü',
                provinceId: 37,
            },
            {
                name: 'İhsangazi',
                provinceId: 37,
            },
            {
                name: 'İnebolu',
                provinceId: 37,
            },
            {
                name: 'Küre',
                provinceId: 37,
            },
            {
                name: 'Merkez',
                provinceId: 37,
            },
            {
                name: 'Pınarbaşı',
                provinceId: 37,
            },
            {
                name: 'Seydiler',
                provinceId: 37,
            },
            {
                name: 'Şenpazar',
                provinceId: 37,
            },
            {
                name: 'Taşköprü',
                provinceId: 37,
            },
            {
                name: 'Tosya',
                provinceId: 37,
            },
            {
                name: 'Akkışla',
                provinceId: 38,
            },
            {
                name: 'Bünyan',
                provinceId: 38,
            },
            {
                name: 'Develi',
                provinceId: 38,
            },
            {
                name: 'Felahiye',
                provinceId: 38,
            },
            {
                name: 'Hacilar',
                provinceId: 38,
            },
            {
                name: 'İncesu',
                provinceId: 38,
            },
            {
                name: 'Kocasinan',
                provinceId: 38,
            },
            {
                name: 'Melikgazi',
                provinceId: 38,
            },
            {
                name: 'Özvatan',
                provinceId: 38,
            },
            {
                name: 'Pınarbaşı',
                provinceId: 38,
            },
            {
                name: 'Sarıoğlan',
                provinceId: 38,
            },
            {
                name: 'Sariz',
                provinceId: 38,
            },
            {
                name: 'Talas',
                provinceId: 38,
            },
            {
                name: 'Tomarza',
                provinceId: 38,
            },
            {
                name: 'Yahyali',
                provinceId: 38,
            },
            {
                name: 'Yeşilhisar',
                provinceId: 38,
            },
            {
                name: 'Babaeski',
                provinceId: 39,
            },
            {
                name: 'Demirköy',
                provinceId: 39,
            },
            {
                name: 'Kofçaz',
                provinceId: 39,
            },
            {
                name: 'Lüleburgaz',
                provinceId: 39,
            },
            {
                name: 'Merkez',
                provinceId: 39,
            },
            {
                name: 'Pehlivanköy',
                provinceId: 39,
            },
            {
                name: 'Pınarhisar',
                provinceId: 39,
            },
            {
                name: 'Vize',
                provinceId: 39,
            },
            {
                name: 'Akçakent',
                provinceId: 40,
            },
            {
                name: 'Akpinar',
                provinceId: 40,
            },
            {
                name: 'Boztepe',
                provinceId: 40,
            },
            {
                name: 'Çiçekdağı',
                provinceId: 40,
            },
            {
                name: 'Kaman',
                provinceId: 40,
            },
            {
                name: 'Merkez',
                provinceId: 40,
            },
            {
                name: 'Mucur',
                provinceId: 40,
            },
            {
                name: 'Başiskele',
                provinceId: 41,
            },
            {
                name: 'Çayirova',
                provinceId: 41,
            },
            {
                name: 'Darica',
                provinceId: 41,
            },
            {
                name: 'Derince',
                provinceId: 41,
            },
            {
                name: 'Dilovası',
                provinceId: 41,
            },
            {
                name: 'Gebze',
                provinceId: 41,
            },
            {
                name: 'Gölcük',
                provinceId: 41,
            },
            {
                name: 'İzmit',
                provinceId: 41,
            },
            {
                name: 'Kandira',
                provinceId: 41,
            },
            {
                name: 'Karamürsel',
                provinceId: 41,
            },
            {
                name: 'Kartepe',
                provinceId: 41,
            },
            {
                name: 'Körfez',
                provinceId: 41,
            },
            {
                name: 'Ahirli',
                provinceId: 42,
            },
            {
                name: 'Akören',
                provinceId: 42,
            },
            {
                name: 'Akşehir',
                provinceId: 42,
            },
            {
                name: 'Altınekin',
                provinceId: 42,
            },
            {
                name: 'Beyşehir',
                provinceId: 42,
            },
            {
                name: 'Bozkir',
                provinceId: 42,
            },
            {
                name: 'Cihanbeyli',
                provinceId: 42,
            },
            {
                name: 'Çeltik',
                provinceId: 42,
            },
            {
                name: 'Çumra',
                provinceId: 42,
            },
            {
                name: 'Derbent',
                provinceId: 42,
            },
            {
                name: 'Derebucak',
                provinceId: 42,
            },
            {
                name: 'Doğanhisar',
                provinceId: 42,
            },
            {
                name: 'Emirgazi',
                provinceId: 42,
            },
            {
                name: 'Ereğli',
                provinceId: 42,
            },
            {
                name: 'Güneysinir',
                provinceId: 42,
            },
            {
                name: 'Hadim',
                provinceId: 42,
            },
            {
                name: 'Halkapinar',
                provinceId: 42,
            },
            {
                name: 'Hüyük',
                provinceId: 42,
            },
            {
                name: 'Ilgin',
                provinceId: 42,
            },
            {
                name: 'Kadinhani',
                provinceId: 42,
            },
            {
                name: 'Karapinar',
                provinceId: 42,
            },
            {
                name: 'Karatay',
                provinceId: 42,
            },
            {
                name: 'Kulu',
                provinceId: 42,
            },
            {
                name: 'Meram',
                provinceId: 42,
            },
            {
                name: 'Sarayönü',
                provinceId: 42,
            },
            {
                name: 'Selçuklu',
                provinceId: 42,
            },
            {
                name: 'Seydişehir',
                provinceId: 42,
            },
            {
                name: 'Taşkent',
                provinceId: 42,
            },
            {
                name: 'Tuzlukçu',
                provinceId: 42,
            },
            {
                name: 'Yalihüyük',
                provinceId: 42,
            },
            {
                name: 'Yunak',
                provinceId: 42,
            },
            {
                name: 'Altıntaş',
                provinceId: 43,
            },
            {
                name: 'Aslanapa',
                provinceId: 43,
            },
            {
                name: 'Çavdarhisar',
                provinceId: 43,
            },
            {
                name: 'Domaniç',
                provinceId: 43,
            },
            {
                name: 'Dumlupinar',
                provinceId: 43,
            },
            {
                name: 'Emet',
                provinceId: 43,
            },
            {
                name: 'Gediz',
                provinceId: 43,
            },
            {
                name: 'Hisarcık',
                provinceId: 43,
            },
            {
                name: 'Merkez',
                provinceId: 43,
            },
            {
                name: 'Pazarlar',
                provinceId: 43,
            },
            {
                name: 'Simav',
                provinceId: 43,
            },
            {
                name: 'Şaphane',
                provinceId: 43,
            },
            {
                name: 'Tavşanlı',
                provinceId: 43,
            },
            {
                name: 'Akçadağ',
                provinceId: 44,
            },
            {
                name: 'Arapgir',
                provinceId: 44,
            },
            {
                name: 'Arguvan',
                provinceId: 44,
            },
            {
                name: 'Battalgazi',
                provinceId: 44,
            },
            {
                name: 'Darende',
                provinceId: 44,
            },
            {
                name: 'Doğanşehir',
                provinceId: 44,
            },
            {
                name: 'Doğanyol',
                provinceId: 44,
            },
            {
                name: 'Hekimhan',
                provinceId: 44,
            },
            {
                name: 'Kale',
                provinceId: 44,
            },
            {
                name: 'Kuluncak',
                provinceId: 44,
            },
            {
                name: 'Pütürge',
                provinceId: 44,
            },
            {
                name: 'Yazihan',
                provinceId: 44,
            },
            {
                name: 'Yeşilyurt',
                provinceId: 44,
            },
            {
                name: 'Ahmetli',
                provinceId: 45,
            },
            {
                name: 'Akhisar',
                provinceId: 45,
            },
            {
                name: 'Alaşehir',
                provinceId: 45,
            },
            {
                name: 'Demirci',
                provinceId: 45,
            },
            {
                name: 'Gölmarmara',
                provinceId: 45,
            },
            {
                name: 'Gördes',
                provinceId: 45,
            },
            {
                name: 'Kırkağaç',
                provinceId: 45,
            },
            {
                name: 'Köprübaşı',
                provinceId: 45,
            },
            {
                name: 'Kula',
                provinceId: 45,
            },
            {
                name: 'Salihli',
                provinceId: 45,
            },
            {
                name: 'Sarigöl',
                provinceId: 45,
            },
            {
                name: 'Saruhanli',
                provinceId: 45,
            },
            {
                name: 'Selendi',
                provinceId: 45,
            },
            {
                name: 'Soma',
                provinceId: 45,
            },
            {
                name: 'Şehzadeler',
                provinceId: 45,
            },
            {
                name: 'Turgutlu',
                provinceId: 45,
            },
            {
                name: 'Yunusemre',
                provinceId: 45,
            },
            {
                name: 'Afşin',
                provinceId: 46,
            },
            {
                name: 'Andirin',
                provinceId: 46,
            },
            {
                name: 'Çağlayancerit',
                provinceId: 46,
            },
            {
                name: 'Dulkadiroğlu',
                provinceId: 46,
            },
            {
                name: 'Ekinözü',
                provinceId: 46,
            },
            {
                name: 'Elbistan',
                provinceId: 46,
            },
            {
                name: 'Göksun',
                provinceId: 46,
            },
            {
                name: 'Nurhak',
                provinceId: 46,
            },
            {
                name: 'Onikişubat',
                provinceId: 46,
            },
            {
                name: 'Pazarcik',
                provinceId: 46,
            },
            {
                name: 'Türkoğlu',
                provinceId: 46,
            },
            {
                name: 'Artuklu',
                provinceId: 47,
            },
            {
                name: 'Dargeçit',
                provinceId: 47,
            },
            {
                name: 'Derik',
                provinceId: 47,
            },
            {
                name: 'Kiziltepe',
                provinceId: 47,
            },
            {
                name: 'Mazıdağı',
                provinceId: 47,
            },
            {
                name: 'Midyat',
                provinceId: 47,
            },
            {
                name: 'Nusaybin',
                provinceId: 47,
            },
            {
                name: 'Ömerli',
                provinceId: 47,
            },
            {
                name: 'Savur',
                provinceId: 47,
            },
            {
                name: 'Yeşilli',
                provinceId: 47,
            },
            {
                name: 'Bodrum',
                provinceId: 48,
            },
            {
                name: 'Dalaman',
                provinceId: 48,
            },
            {
                name: 'Datça',
                provinceId: 48,
            },
            {
                name: 'Fethiye',
                provinceId: 48,
            },
            {
                name: 'Kavaklidere',
                provinceId: 48,
            },
            {
                name: 'Köyceğiz',
                provinceId: 48,
            },
            {
                name: 'Marmaris',
                provinceId: 48,
            },
            {
                name: 'Menteşe',
                provinceId: 48,
            },
            {
                name: 'Milas',
                provinceId: 48,
            },
            {
                name: 'Ortaca',
                provinceId: 48,
            },
            {
                name: 'Seydikemer',
                provinceId: 48,
            },
            {
                name: 'Ula',
                provinceId: 48,
            },
            {
                name: 'Yatağan',
                provinceId: 48,
            },
            {
                name: 'Bulanik',
                provinceId: 49,
            },
            {
                name: 'Hasköy',
                provinceId: 49,
            },
            {
                name: 'Korkut',
                provinceId: 49,
            },
            {
                name: 'Malazgirt',
                provinceId: 49,
            },
            {
                name: 'Merkez',
                provinceId: 49,
            },
            {
                name: 'Varto',
                provinceId: 49,
            },
            {
                name: 'Acigöl',
                provinceId: 50,
            },
            {
                name: 'Avanos',
                provinceId: 50,
            },
            {
                name: 'Derinkuyu',
                provinceId: 50,
            },
            {
                name: 'Gülşehir',
                provinceId: 50,
            },
            {
                name: 'Hacıbektaş',
                provinceId: 50,
            },
            {
                name: 'Kozakli',
                provinceId: 50,
            },
            {
                name: 'Merkez',
                provinceId: 50,
            },
            {
                name: 'Ürgüp',
                provinceId: 50,
            },
            {
                name: 'Altunhisar',
                provinceId: 51,
            },
            {
                name: 'Bor',
                provinceId: 51,
            },
            {
                name: 'Çamardi',
                provinceId: 51,
            },
            {
                name: 'Çiftlik',
                provinceId: 51,
            },
            {
                name: 'Merkez',
                provinceId: 51,
            },
            {
                name: 'Ulukışla',
                provinceId: 51,
            },
            {
                name: 'Akkuş',
                provinceId: 52,
            },
            {
                name: 'Altinordu',
                provinceId: 52,
            },
            {
                name: 'Aybasti',
                provinceId: 52,
            },
            {
                name: 'Çamaş',
                provinceId: 52,
            },
            {
                name: 'Çatalpinar',
                provinceId: 52,
            },
            {
                name: 'Çaybaşı',
                provinceId: 52,
            },
            {
                name: 'Fatsa',
                provinceId: 52,
            },
            {
                name: 'Gölköy',
                provinceId: 52,
            },
            {
                name: 'Gülyali',
                provinceId: 52,
            },
            {
                name: 'Gürgentepe',
                provinceId: 52,
            },
            {
                name: 'İkizce',
                provinceId: 52,
            },
            {
                name: 'Kabadüz',
                provinceId: 52,
            },
            {
                name: 'Kabataş',
                provinceId: 52,
            },
            {
                name: 'Korgan',
                provinceId: 52,
            },
            {
                name: 'Kumru',
                provinceId: 52,
            },
            {
                name: 'Mesudiye',
                provinceId: 52,
            },
            {
                name: 'Perşembe',
                provinceId: 52,
            },
            {
                name: 'Ulubey',
                provinceId: 52,
            },
            {
                name: 'Ünye',
                provinceId: 52,
            },
            {
                name: 'Ardeşen',
                provinceId: 53,
            },
            {
                name: 'Çamlıhemşin',
                provinceId: 53,
            },
            {
                name: 'Çayeli',
                provinceId: 53,
            },
            {
                name: 'Derepazari',
                provinceId: 53,
            },
            {
                name: 'Findikli',
                provinceId: 53,
            },
            {
                name: 'Güneysu',
                provinceId: 53,
            },
            {
                name: 'Hemşin',
                provinceId: 53,
            },
            {
                name: 'İkizdere',
                provinceId: 53,
            },
            {
                name: 'İyidere',
                provinceId: 53,
            },
            {
                name: 'Kalkandere',
                provinceId: 53,
            },
            {
                name: 'Merkez',
                provinceId: 53,
            },
            {
                name: 'Pazar',
                provinceId: 53,
            },
            {
                name: 'Adapazari',
                provinceId: 54,
            },
            {
                name: 'Akyazi',
                provinceId: 54,
            },
            {
                name: 'Arifiye',
                provinceId: 54,
            },
            {
                name: 'Erenler',
                provinceId: 54,
            },
            {
                name: 'Ferizli',
                provinceId: 54,
            },
            {
                name: 'Geyve',
                provinceId: 54,
            },
            {
                name: 'Hendek',
                provinceId: 54,
            },
            {
                name: 'Karapürçek',
                provinceId: 54,
            },
            {
                name: 'Karasu',
                provinceId: 54,
            },
            {
                name: 'Kaynarca',
                provinceId: 54,
            },
            {
                name: 'Kocaali',
                provinceId: 54,
            },
            {
                name: 'Pamukova',
                provinceId: 54,
            },
            {
                name: 'Sapanca',
                provinceId: 54,
            },
            {
                name: 'Serdivan',
                provinceId: 54,
            },
            {
                name: 'Söğütlü',
                provinceId: 54,
            },
            {
                name: 'Tarakli',
                provinceId: 54,
            },
            {
                name: 'Alaçam',
                provinceId: 55,
            },
            {
                name: 'Asarcik',
                provinceId: 55,
            },
            {
                name: 'Atakum',
                provinceId: 55,
            },
            {
                name: 'Ayvacik',
                provinceId: 55,
            },
            {
                name: 'Bafra',
                provinceId: 55,
            },
            {
                name: 'Canik',
                provinceId: 55,
            },
            {
                name: 'Çarşamba',
                provinceId: 55,
            },
            {
                name: 'Havza',
                provinceId: 55,
            },
            {
                name: 'İlkadım',
                provinceId: 55,
            },
            {
                name: 'Kavak',
                provinceId: 55,
            },
            {
                name: 'Ladik',
                provinceId: 55,
            },
            {
                name: 'Salipazari',
                provinceId: 55,
            },
            {
                name: 'Tekkeköy',
                provinceId: 55,
            },
            {
                name: 'Terme',
                provinceId: 55,
            },
            {
                name: 'Vezirköprü',
                provinceId: 55,
            },
            {
                name: 'Yakakent',
                provinceId: 55,
            },
            {
                name: '19 mayis',
                provinceId: 55,
            },
            {
                name: 'Baykan',
                provinceId: 56,
            },
            {
                name: 'Eruh',
                provinceId: 56,
            },
            {
                name: 'Kurtalan',
                provinceId: 56,
            },
            {
                name: 'Merkez',
                provinceId: 56,
            },
            {
                name: 'Pervari',
                provinceId: 56,
            },
            {
                name: 'Şirvan',
                provinceId: 56,
            },
            {
                name: 'Tillo',
                provinceId: 56,
            },
            {
                name: 'Ayancik',
                provinceId: 57,
            },
            {
                name: 'Boyabat',
                provinceId: 57,
            },
            {
                name: 'Dikmen',
                provinceId: 57,
            },
            {
                name: 'Durağan',
                provinceId: 57,
            },
            {
                name: 'Erfelek',
                provinceId: 57,
            },
            {
                name: 'Gerze',
                provinceId: 57,
            },
            {
                name: 'Merkez',
                provinceId: 57,
            },
            {
                name: 'Saraydüzü',
                provinceId: 57,
            },
            {
                name: 'Türkeli',
                provinceId: 57,
            },
            {
                name: 'Akincilar',
                provinceId: 58,
            },
            {
                name: 'Altinyayla',
                provinceId: 58,
            },
            {
                name: 'Divriği',
                provinceId: 58,
            },
            {
                name: 'Doğanşar',
                provinceId: 58,
            },
            {
                name: 'Gemerek',
                provinceId: 58,
            },
            {
                name: 'Gölova',
                provinceId: 58,
            },
            {
                name: 'Gürün',
                provinceId: 58,
            },
            {
                name: 'Hafik',
                provinceId: 58,
            },
            {
                name: 'İmranlı',
                provinceId: 58,
            },
            {
                name: 'Kangal',
                provinceId: 58,
            },
            {
                name: 'Koyulhisar',
                provinceId: 58,
            },
            {
                name: 'Merkez',
                provinceId: 58,
            },
            {
                name: 'Suşehri',
                provinceId: 58,
            },
            {
                name: 'Şarkışla',
                provinceId: 58,
            },
            {
                name: 'Ulaş',
                provinceId: 58,
            },
            {
                name: 'Yıldızeli',
                provinceId: 58,
            },
            {
                name: 'Zara',
                provinceId: 58,
            },
            {
                name: 'Çerkezköy',
                provinceId: 59,
            },
            {
                name: 'Çorlu',
                provinceId: 59,
            },
            {
                name: 'Ergene',
                provinceId: 59,
            },
            {
                name: 'Hayrabolu',
                provinceId: 59,
            },
            {
                name: 'Kapakli',
                provinceId: 59,
            },
            {
                name: 'Malkara',
                provinceId: 59,
            },
            {
                name: 'Marmaraereğlisi',
                provinceId: 59,
            },
            {
                name: 'Muratli',
                provinceId: 59,
            },
            {
                name: 'Saray',
                provinceId: 59,
            },
            {
                name: 'Süleymanpaşa',
                provinceId: 59,
            },
            {
                name: 'Şarköy',
                provinceId: 59,
            },
            {
                name: 'Almus',
                provinceId: 60,
            },
            {
                name: 'Artova',
                provinceId: 60,
            },
            {
                name: 'Başçiftlik',
                provinceId: 60,
            },
            {
                name: 'Erbaa',
                provinceId: 60,
            },
            {
                name: 'Merkez',
                provinceId: 60,
            },
            {
                name: 'Niksar',
                provinceId: 60,
            },
            {
                name: 'Pazar',
                provinceId: 60,
            },
            {
                name: 'Reşadiye',
                provinceId: 60,
            },
            {
                name: 'Sulusaray',
                provinceId: 60,
            },
            {
                name: 'Turhal',
                provinceId: 60,
            },
            {
                name: 'Yeşilyurt',
                provinceId: 60,
            },
            {
                name: 'Zile',
                provinceId: 60,
            },
            {
                name: 'Akçaabat',
                provinceId: 61,
            },
            {
                name: 'Arakli',
                provinceId: 61,
            },
            {
                name: 'Arsin',
                provinceId: 61,
            },
            {
                name: 'Beşikdüzü',
                provinceId: 61,
            },
            {
                name: 'Çarşıbaşı',
                provinceId: 61,
            },
            {
                name: 'Çaykara',
                provinceId: 61,
            },
            {
                name: 'Dernekpazari',
                provinceId: 61,
            },
            {
                name: 'Düzköy',
                provinceId: 61,
            },
            {
                name: 'Hayrat',
                provinceId: 61,
            },
            {
                name: 'Köprübaşı',
                provinceId: 61,
            },
            {
                name: 'Maçka',
                provinceId: 61,
            },
            {
                name: 'Of',
                provinceId: 61,
            },
            {
                name: 'Ortahisar',
                provinceId: 61,
            },
            {
                name: 'Sürmene',
                provinceId: 61,
            },
            {
                name: 'Şalpazarı',
                provinceId: 61,
            },
            {
                name: 'Tonya',
                provinceId: 61,
            },
            {
                name: 'Vakfıkebir',
                provinceId: 61,
            },
            {
                name: 'Yomra',
                provinceId: 61,
            },
            {
                name: 'Çemişgezek',
                provinceId: 62,
            },
            {
                name: 'Hozat',
                provinceId: 62,
            },
            {
                name: 'Mazgirt',
                provinceId: 62,
            },
            {
                name: 'Merkez',
                provinceId: 62,
            },
            {
                name: 'Nazımiye',
                provinceId: 62,
            },
            {
                name: 'Ovacik',
                provinceId: 62,
            },
            {
                name: 'Pertek',
                provinceId: 62,
            },
            {
                name: 'Pülümür',
                provinceId: 62,
            },
            {
                name: 'Akçakale',
                provinceId: 63,
            },
            {
                name: 'Birecik',
                provinceId: 63,
            },
            {
                name: 'Bozova',
                provinceId: 63,
            },
            {
                name: 'Ceylanpinar',
                provinceId: 63,
            },
            {
                name: 'Eyyübiye',
                provinceId: 63,
            },
            {
                name: 'Halfeti',
                provinceId: 63,
            },
            {
                name: 'Haliliye',
                provinceId: 63,
            },
            {
                name: 'Harran',
                provinceId: 63,
            },
            {
                name: 'Hilvan',
                provinceId: 63,
            },
            {
                name: 'Karaköprü',
                provinceId: 63,
            },
            {
                name: 'Siverek',
                provinceId: 63,
            },
            {
                name: 'Suruç',
                provinceId: 63,
            },
            {
                name: 'Viranşehir',
                provinceId: 63,
            },
            {
                name: 'Banaz',
                provinceId: 64,
            },
            {
                name: 'Eşme',
                provinceId: 64,
            },
            {
                name: 'Karahalli',
                provinceId: 64,
            },
            {
                name: 'Merkez',
                provinceId: 64,
            },
            {
                name: 'Sivaslı',
                provinceId: 64,
            },
            {
                name: 'Ulubey',
                provinceId: 64,
            },
            {
                name: 'Bahçesaray',
                provinceId: 65,
            },
            {
                name: 'Başkale',
                provinceId: 65,
            },
            {
                name: 'Çaldiran',
                provinceId: 65,
            },
            {
                name: 'Çatak',
                provinceId: 65,
            },
            {
                name: 'Edremit',
                provinceId: 65,
            },
            {
                name: 'Erciş',
                provinceId: 65,
            },
            {
                name: 'Gevaş',
                provinceId: 65,
            },
            {
                name: 'Gürpinar',
                provinceId: 65,
            },
            {
                name: 'İpekyolu',
                provinceId: 65,
            },
            {
                name: 'Muradiye',
                provinceId: 65,
            },
            {
                name: 'Özalp',
                provinceId: 65,
            },
            {
                name: 'Saray',
                provinceId: 65,
            },
            {
                name: 'Tuşba',
                provinceId: 65,
            },
            {
                name: 'Akdağmadeni',
                provinceId: 66,
            },
            {
                name: 'Aydincik',
                provinceId: 66,
            },
            {
                name: 'Boğazlıyan',
                provinceId: 66,
            },
            {
                name: 'Çandir',
                provinceId: 66,
            },
            {
                name: 'Çayiralan',
                provinceId: 66,
            },
            {
                name: 'Çekerek',
                provinceId: 66,
            },
            {
                name: 'Kadışehri',
                provinceId: 66,
            },
            {
                name: 'Merkez',
                provinceId: 66,
            },
            {
                name: 'Saraykent',
                provinceId: 66,
            },
            {
                name: 'Sarikaya',
                provinceId: 66,
            },
            {
                name: 'Sorgun',
                provinceId: 66,
            },
            {
                name: 'Şefaatli',
                provinceId: 66,
            },
            {
                name: 'Yenifakılı',
                provinceId: 66,
            },
            {
                name: 'Yerköy',
                provinceId: 66,
            },
            {
                name: 'Alapli',
                provinceId: 67,
            },
            {
                name: 'Çaycuma',
                provinceId: 67,
            },
            {
                name: 'Devrek',
                provinceId: 67,
            },
            {
                name: 'Ereğli',
                provinceId: 67,
            },
            {
                name: 'Gökçebey',
                provinceId: 67,
            },
            {
                name: 'Kilimli',
                provinceId: 67,
            },
            {
                name: 'Kozlu',
                provinceId: 67,
            },
            {
                name: 'Merkez',
                provinceId: 67,
            },
            {
                name: 'Ağaçören',
                provinceId: 68,
            },
            {
                name: 'Eskil',
                provinceId: 68,
            },
            {
                name: 'Gülağaç',
                provinceId: 68,
            },
            {
                name: 'Güzelyurt',
                provinceId: 68,
            },
            {
                name: 'Merkez',
                provinceId: 68,
            },
            {
                name: 'Ortaköy',
                provinceId: 68,
            },
            {
                name: 'Sarıyahşi',
                provinceId: 68,
            },
            {
                name: 'Sultanhani',
                provinceId: 68,
            },
            {
                name: 'Aydintepe',
                provinceId: 69,
            },
            {
                name: 'Demirözü',
                provinceId: 69,
            },
            {
                name: 'Merkez',
                provinceId: 69,
            },
            {
                name: 'Ayranci',
                provinceId: 70,
            },
            {
                name: 'Başyayla',
                provinceId: 70,
            },
            {
                name: 'Ermenek',
                provinceId: 70,
            },
            {
                name: 'Kazımkarabekir',
                provinceId: 70,
            },
            {
                name: 'Merkez',
                provinceId: 70,
            },
            {
                name: 'Sarıveliler',
                provinceId: 70,
            },
            {
                name: 'Bahşili',
                provinceId: 71,
            },
            {
                name: 'Balışeyh',
                provinceId: 71,
            },
            {
                name: 'Çelebi',
                provinceId: 71,
            },
            {
                name: 'Delice',
                provinceId: 71,
            },
            {
                name: 'Karakeçili',
                provinceId: 71,
            },
            {
                name: 'Keskin',
                provinceId: 71,
            },
            {
                name: 'Merkez',
                provinceId: 71,
            },
            {
                name: 'Sulakyurt',
                provinceId: 71,
            },
            {
                name: 'Yahşihan',
                provinceId: 71,
            },
            {
                name: 'Beşiri',
                provinceId: 72,
            },
            {
                name: 'Gercüş',
                provinceId: 72,
            },
            {
                name: 'Hasankeyf',
                provinceId: 72,
            },
            {
                name: 'Kozluk',
                provinceId: 72,
            },
            {
                name: 'Merkez',
                provinceId: 72,
            },
            {
                name: 'Sason',
                provinceId: 72,
            },
            {
                name: 'Beytüşşebap',
                provinceId: 73,
            },
            {
                name: 'Cizre',
                provinceId: 73,
            },
            {
                name: 'Güçlükonak',
                provinceId: 73,
            },
            {
                name: 'İdil',
                provinceId: 73,
            },
            {
                name: 'Merkez',
                provinceId: 73,
            },
            {
                name: 'Silopi',
                provinceId: 73,
            },
            {
                name: 'Uludere',
                provinceId: 73,
            },
            {
                name: 'Amasra',
                provinceId: 74,
            },
            {
                name: 'Kurucaşile',
                provinceId: 74,
            },
            {
                name: 'Merkez',
                provinceId: 74,
            },
            {
                name: 'Ulus',
                provinceId: 74,
            },
            {
                name: 'Çildir',
                provinceId: 75,
            },
            {
                name: 'Damal',
                provinceId: 75,
            },
            {
                name: 'Göle',
                provinceId: 75,
            },
            {
                name: 'Hanak',
                provinceId: 75,
            },
            {
                name: 'Merkez',
                provinceId: 75,
            },
            {
                name: 'Posof',
                provinceId: 75,
            },
            {
                name: 'Aralik',
                provinceId: 76,
            },
            {
                name: 'Karakoyunlu',
                provinceId: 76,
            },
            {
                name: 'Merkez',
                provinceId: 76,
            },
            {
                name: 'Tuzluca',
                provinceId: 76,
            },
            {
                name: 'Altinova',
                provinceId: 77,
            },
            {
                name: 'Armutlu',
                provinceId: 77,
            },
            {
                name: 'Çinarcik',
                provinceId: 77,
            },
            {
                name: 'Çiftlikköy',
                provinceId: 77,
            },
            {
                name: 'Merkez',
                provinceId: 77,
            },
            {
                name: 'Termal',
                provinceId: 77,
            },
            {
                name: 'Eflani',
                provinceId: 78,
            },
            {
                name: 'Eskipazar',
                provinceId: 78,
            },
            {
                name: 'Merkez',
                provinceId: 78,
            },
            {
                name: 'Ovacik',
                provinceId: 78,
            },
            {
                name: 'Safranbolu',
                provinceId: 78,
            },
            {
                name: 'Yenice',
                provinceId: 78,
            },
            {
                name: 'Elbeyli',
                provinceId: 79,
            },
            {
                name: 'Merkez',
                provinceId: 79,
            },
            {
                name: 'Musabeyli',
                provinceId: 79,
            },
            {
                name: 'Polateli',
                provinceId: 79,
            },
            {
                name: 'Bahçe',
                provinceId: 80,
            },
            {
                name: 'Düziçi',
                provinceId: 80,
            },
            {
                name: 'Hasanbeyli',
                provinceId: 80,
            },
            {
                name: 'Kadirli',
                provinceId: 80,
            },
            {
                name: 'Merkez',
                provinceId: 80,
            },
            {
                name: 'Sumbas',
                provinceId: 80,
            },
            {
                name: 'Toprakkale',
                provinceId: 80,
            },
            {
                name: 'Akçakoca',
                provinceId: 81,
            },
            {
                name: 'Cumayeri',
                provinceId: 81,
            },
            {
                name: 'Çilimli',
                provinceId: 81,
            },
            {
                name: 'Gölyaka',
                provinceId: 81,
            },
            {
                name: 'Gümüşova',
                provinceId: 81,
            },
            {
                name: 'Kaynaşlı',
                provinceId: 81,
            },
            {
                name: 'Merkez',
                provinceId: 81,
            },
            {
                name: 'Yığılca',
                provinceId: 81,
            },
        ],
    });
};

main();
