export interface SeedSupplier {
    name_supplier : string;
    phone?: string;
    address?: string;
}

export const seedSuppliers: SeedSupplier[] = [
    {
        name_supplier: 'Donacion'
    },
    {
        name_supplier: 'Supplier 2',
        phone: 'Phone 2',
        address: 'Address 2'
    },
];