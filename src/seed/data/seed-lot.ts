export interface SeedLot {
    date_delivery: Date;
    stock: number;
    due_date?: Date;
    id_medical_supplies: number;
    id_suppliers?: number;
}

export const seedLots: SeedLot[] = [
    {
        date_delivery: new Date('2020-01-01'),
        stock: 100,
        due_date: new Date('2026-01-01'),
        id_medical_supplies: 1,
        id_suppliers: 1
    },
    {
        date_delivery: new Date('2022-12-01'),
        stock: 50,
        due_date: new Date('2030-05-30'),
        id_medical_supplies: 2,
        id_suppliers: 2
    },
    {
        date_delivery: new Date('2022-11-11'),
        stock: 500,
        id_medical_supplies: 3
    },
    {
        date_delivery: new Date('2018-03-25'),
        stock: 350,
        due_date: new Date('2022-11-11'),
        id_medical_supplies: 4
    },
    {
        date_delivery: new Date('2018-03-25'),
        stock: 350,
        due_date: new Date('2022-11-11'),
        id_medical_supplies: 1
    },
    {
        date_delivery: new Date('2019-11-06'),
        stock: 350,
        due_date: new Date('2023-05-11'),
        id_medical_supplies: 5,
        id_suppliers: 3
    },
    {
        date_delivery: new Date('2021-12-19'),
        stock: 25,
        due_date: new Date('2029-12-19'),
        id_medical_supplies: 2,
        id_suppliers: 3
    },
    {
        date_delivery: new Date('2021-06-19'),
        stock: 300,
        id_medical_supplies: 9,
        id_suppliers: 4
    },
    {
        date_delivery: new Date('2016-08-19'),
        stock: 510,
        due_date: new Date('2029-12-19'),
        id_medical_supplies: 10,
        id_suppliers: 3
    },
    {
        date_delivery: new Date('2021-11-06'),
        stock: 155,
        due_date: new Date('2029-12-19'),
        id_medical_supplies: 11,
        id_suppliers: 1
    },
    {
        date_delivery: new Date('2021-11-06'),
        stock: 520,
        due_date: new Date('2029-12-19'),
        id_medical_supplies: 1,
        id_suppliers: 1
    },
    {
        date_delivery: new Date('2021-11-06'),
        stock: 150,
        due_date: new Date('2029-12-19'),
        id_medical_supplies: 20,
        id_suppliers: 1
    },
    {
        date_delivery: new Date('2020-11-06'),
        stock: 150,
        due_date: new Date('2029-12-19'),
        id_medical_supplies: 14,
        id_suppliers: 1
    },
    {
        date_delivery: new Date('2020-11-16'),
        stock: 150,
        id_medical_supplies: 3,
        id_suppliers: 3
    },
    {
        date_delivery: new Date('2021-10-06'),
        stock: 187,
        due_date: new Date('2029-12-19'),
        id_medical_supplies: 6,
        id_suppliers: 1
    },
    {
        date_delivery: new Date('2021-11-22'),
        stock: 250,
        due_date: new Date('2029-12-19'),
        id_medical_supplies: 16,
        id_suppliers: 1
    },
    {
        date_delivery: new Date('2021-12-06'),
        stock: 155,
        due_date: new Date('2028-12-19'),
        id_medical_supplies: 6,
        id_suppliers: 1
    },
    {
        date_delivery: new Date('2021-02-06'),
        stock: 230,
        due_date: new Date('2029-12-19'),
        id_medical_supplies: 5,
        id_suppliers: 1
    },
    {
        date_delivery: new Date('2021-11-23'),
        stock: 16,
        id_medical_supplies: 3,
        id_suppliers: 3
    },
    {
        date_delivery: new Date('2021-09-06'),
        stock: 45,
        due_date: new Date('2036-12-19'),
        id_medical_supplies: 9,
        id_suppliers: 4
    },
    {
        date_delivery: new Date('2020-10-06'),
        stock: 156,
        due_date: new Date('2028-09-10'),
        id_medical_supplies: 5,
        id_suppliers: 2
    },
    {
        date_delivery: new Date('2016-11-06'),
        stock: 9,
        due_date: new Date('2022-09-19'),
        id_medical_supplies: 96,
        id_suppliers: 3
    },
    {
        date_delivery: new Date('2020-01-06'),
        stock: 471,
        id_medical_supplies: 10,
        id_suppliers: 1
    },
    {
        date_delivery: new Date('2021-11-26'),
        stock: 110,
        due_date: new Date('2029-12-19'),
        id_medical_supplies: 2,
        id_suppliers: 1
    },
    {
        date_delivery: new Date('2021-08-29'),
        stock: 320,
        id_medical_supplies: 1,
        id_suppliers: 1
    },                         
];