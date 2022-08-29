export interface SeedSupplier {
    name_supplier : string;
    phone?: string;
    address?: string;
}

export const seedSuppliers: SeedSupplier[] = [
    {
        name_supplier: 'Supplier 1',
        phone: 'Phone 1',
        address: 'Address 1'
    },
    {
        name_supplier: 'Supplier 2',
        phone: 'Phone 2',
        address: 'Address 2'
    },
];