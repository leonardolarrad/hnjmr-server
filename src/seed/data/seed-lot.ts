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
        date_delivery: new Date('2021-12-19'),
        stock: 25,
        due_date: new Date('2029-12-19'),
        id_medical_supplies: 2,
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
        date_delivery: new Date('2021-12-19'),
        stock: 25,
        due_date: new Date('2029-12-19'),
        id_medical_supplies: 2,
        id_suppliers: 3
    }                         
];