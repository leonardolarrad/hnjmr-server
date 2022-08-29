interface SeedLot {
    date_delivery: Date;
    stock: number;
    due_date?: Date;
    id_medical_supplies: number;
    id_suppliers?: number;
}

export const seedLots: SeedLot[] = [
    {
        date_delivery: new Date('2020-01-01'),
        stock: 1,
        due_date: new Date('2020-01-01'),
        id_medical_supplies: 1,
        id_suppliers: 1
    },
    {
        date_delivery: new Date('2020-01-01'),
        stock: 2,
        due_date: new Date('2020-01-01'),
        id_medical_supplies: 2,
        id_suppliers: 2
    },
];