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
        name_supplier: 'Ministerio de Salud',
        phone: '+56988888888',
        address: 'Av. de la Libertad, Santiago'
    },
    {
        name_supplier: 'Ministerio de Educacion',
        phone: '+56988888888',
        address: 'Av. de la Libertad, Caracas'
    },
    {
        name_supplier: 'Ministerio de Trabajo',
        phone: '+56988888888',
        address: 'Av. de Libertador, Caracas'
    },
    {
        name_supplier: 'Ministerio de Justicia',
        phone: '+5698888887',
        address: 'Av. de Francia, Caracas'
    },
    {
        name_supplier: 'ONG',
        phone: '+1698888869',
        address: 'Av. La Soledad, San Cristobal'
    }   
];