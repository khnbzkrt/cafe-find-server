import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
    await prisma.province.createMany({
        data: [
            {
                name: 'Adana',
            },
            {
                name: 'Adiyaman',
            },
            {
                name: 'Afyonkarahisar',
            },
            {
                name: 'Ağrı',
            },
            {
                name: 'Amasya',
            },
            {
                name: 'Ankara',
            },
            {
                name: 'Antalya',
            },
            {
                name: 'Artvin',
            },
            {
                name: 'Aydin',
            },
            {
                name: 'Balıkesir',
            },
            {
                name: 'Bilecik',
            },
            {
                name: 'Bingöl',
            },
            {
                name: 'Bitlis',
            },
            {
                name: 'Bolu',
            },
            {
                name: 'Burdur',
            },
            {
                name: 'Bursa',
            },
            {
                name: 'Çanakkale',
            },
            {
                name: 'Çankiri',
            },
            {
                name: 'Çorum',
            },
            {
                name: 'Denizli',
            },
            {
                name: 'Diyarbakır',
            },
            {
                name: 'Edirne',
            },
            {
                name: 'Elazığ',
            },
            {
                name: 'Erzincan',
            },
            {
                name: 'Erzurum',
            },
            {
                name: 'Eskişehir',
            },
            {
                name: 'Gaziantep',
            },
            {
                name: 'Giresun',
            },
            {
                name: 'Gümüşhane',
            },
            {
                name: 'Hakkari',
            },
            {
                name: 'Hatay',
            },
            {
                name: 'Isparta',
            },
            {
                name: 'Mersin',
            },
            {
                name: 'Istanbul',
            },
            {
                name: 'Izmir',
            },
            {
                name: 'Kars',
            },
            {
                name: 'Kastamonu',
            },
            {
                name: 'Kayseri',
            },
            {
                name: 'Kırklareli',
            },
            {
                name: 'Kırşehir',
            },
            {
                name: 'Kocaeli',
            },
            {
                name: 'Konya',
            },
            {
                name: 'Kütahya',
            },
            {
                name: 'Malatya',
            },
            {
                name: 'Manisa',
            },
            {
                name: 'Kahramanmaraş',
            },
            {
                name: 'Mardin',
            },
            {
                name: 'Muğla',
            },
            {
                name: 'Muş',
            },
            {
                name: 'Nevşehir',
            },
            {
                name: 'Niğde',
            },
            {
                name: 'Ordu',
            },
            {
                name: 'Rize',
            },
            {
                name: 'Sakarya',
            },
            {
                name: 'Samsun',
            },
            {
                name: 'Siirt',
            },
            {
                name: 'Sinop',
            },
            {
                name: 'Sivas',
            },
            {
                name: 'Tekirdağ',
            },
            {
                name: 'Tokat',
            },
            {
                name: 'Trabzon',
            },
            {
                name: 'Tunceli',
            },
            {
                name: 'Şanlıurfa',
            },
            {
                name: 'Uşak',
            },
            {
                name: 'Van',
            },
            {
                name: 'Yozgat',
            },
            {
                name: 'Zonguldak',
            },
            {
                name: 'Aksaray',
            },
            {
                name: 'Bayburt',
            },
            {
                name: 'Karaman',
            },
            {
                name: 'Kirikkale',
            },
            {
                name: 'Batman',
            },
            {
                name: 'Şırnak',
            },
            {
                name: 'Bartin',
            },
            {
                name: 'Ardahan',
            },
            {
                name: 'Iğdır',
            },
            {
                name: 'Yalova',
            },
            {
                name: 'Karabük',
            },
            {
                name: 'Kilis',
            },
            {
                name: 'Osmaniye',
            },
            {
                name: 'Düzce',
            },
        ],
    });
};

main();
