export interface SeedAsset {
    name: string;
    description?: string;
    status: ValidStatus;
    note?: string;
    date_acquisition: Date;
    date_discontinued: Date;
    storage?: string;
    source?: string;
    destination?: string;
}
type ValidStatus = 'Disponible' | 'No Disponible' | 'Desuso' | 'Perdido' | 'En mantenimiento' | 'En uso';

export const seedAssets: SeedAsset[] = [
    {
        name: 'Asset 1',
        description: 'Description 1',
        status: 'Disponible',
        note: 'Note 1',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2020-01-01'),
        storage: 'Storage 1',
        source: 'Source 1',
        destination: 'Destination 1'
    },
    {
        name: 'Asset 2',
        description: 'Description 2',
        status: 'No Disponible',
        note: 'Note 2',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2020-01-01'),
        storage: 'Storage 2',
        source: 'Source 2',
        destination: 'Destination 2'
    },
];     
