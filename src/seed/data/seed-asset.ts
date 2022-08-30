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
        name: 'Maquina de imagenes medicas',
        description: 'Crea imágenes de diversas partes del cuerpo humano con fines de diagnóstico y tratamiento dentro de la salud digital',
        status: 'En uso',
        note: 'Radiografía de rayos x, fluoroscopia, Resonancia magnética, Tomografía computarizada',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2025-01-01'),
        storage: 'Sector 1',
        source: 'Ministerio de Salud'
    },
    {
        name: 'Equipo de hematologia',
        description: 'Equipos de diagnóstico médico que analizan la sangre',
        status: 'Disponible',
        note: 'Incluye: Analizadores de sangre y electrolitos, filtros deslizantes y citometros de flujo',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2023-01-01'),
        storage: 'Sector 1',
        source: 'Proveedor 1'
    },
    {
        name: 'Equipo de analisis de orina',
        description: 'Equipos utilizados para análisis de orina',
        status: 'En uso',
        note: 'Incluye: Tiras reactivas de orina 10 parametros, centrifuga clinica y Tubo de centrifuga conico 15ml',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2025-01-01'),
        storage: 'Sector 1',
        source: 'Ministerio de Salud'
    },
    {
        name: 'Bombas de infusion',
        description: 'Bomba de tratamiento que infunde líquidos, medicamentos o nutrientes en el sistema circulatorio de un paciente',
        status: 'Perdido',
        note: 'Generalmente se usa por vía intravenosa, aunque ocasionalmente se usan infusiones subcutáneas, arteriales y epidurales.',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2023-01-01'),
        storage: 'Sector 2',
        source: 'Proveedor 2'
    },
    {
        name: 'Maquina quirurjica LASIK',
        description: 'Utilizado por oftalmólogos para la corrección de la visión con láser',
        status: 'En uso',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2025-01-01'),
        storage: 'Sector 2',
        source: 'Proveedor 3'
    },
    {
        name: 'Laseres medicos',
        description: 'equipos médicos que utilizan fuentes de luz enfocadas con precisión para tratar o extirpar tejidos como los tejidos cancerosos',
        status: 'No Disponible',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2025-01-01'),
        storage: 'Sector 2',
        source: 'Proveedor 1'
    },
    {
        name: 'Ventiladores',
        status: 'En mantenimiento',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2030-01-01'),
        storage: 'Sector 3',
        source: 'Proveedor 2'
    },
    {
        name: 'Dispositivo de circulación extracorpórea',
        status: 'No Disponible',
        note: 'se hace cargo temporalmente de la función del corazón y los pulmones durante la cirugía al mantener la circulación de la sangre y el contenido de oxígeno del cuerpo del paciente',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2025-01-01'),
        storage: 'Sector 3',
        source: 'Proveedor 3'
    },
    {
        name: 'Maquina de dialisis',
        description: 'Utilizado para ayudar a eliminar el exceso de agua, solutos y toxinas de la sangre en personas cuyos riñones ya no pueden realizar estas funciones de forma natural',
        status: 'En uso',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2025-01-01'),
        storage: 'Sector 3',
        source: 'Proveedor 1'
    },
    {
        name: 'Maquina de anestesia',
        status: 'Disponible',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2025-01-01'),
        storage: 'Sector 4',
        source: 'Proveedor 3'
    },
    {
        name: 'Bomba de aspiracion/succion',
        status: 'Desuso',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2025-01-01'),
        storage: 'Sector 4',
        source: 'Ministerio de Salud'
    },
    {
        name: 'Autoclave/Esterilizador',
        status: 'Disponible',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2023-01-01'),
        storage: 'Sector 4',
        source: 'Proveedor 3'
    },
    {
        name: 'Analizador de quimica sanguinea',
        status: 'Disponible',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2025-01-01'),
        storage: 'Sector 4',
        source: 'Proveeor 2'
    },
    {
        name: 'Sierra de fundicion',
        status: 'Desuso',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2023-01-01'),
        storage: 'Sector 4',
        source: 'Proveedor 4'
    },
    {
        name: 'Centrifugo',
        status: 'No Disponible',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2025-01-01'),
        storage: 'Sector 4',
        source: 'Proveedor 1'
    },
    {
        name: 'Equipo de Computadora',
        status: 'Disponible',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2025-01-01'),
        storage: 'Sector 4',
        source: 'Proveedor 3'
    },
    {
        name: 'CPAP/Humidificador',
        status: 'En mantenimiento',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2030-01-01'),
        storage: 'Sector 4',
        source: 'Proveedor 4'
    },
    {
        name: 'Desfibrilador',
        status: 'No Disponible',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2025-01-01'),
        storage: 'Sector 4',
        source: 'Proveedor 3'
    },
    {
        name: 'Dermatoma',
        status: 'En uso',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2025-01-01'),
        storage: 'Sector 4',
        source: 'Proveedor 1'
    },
    {
        name: 'Ultrasonido de Diagnóstico con sondas',
        status: 'Disponible',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2025-01-01'),
        storage: 'Sector 4',
        source: 'Proveedor 3'
    },
    {
        name: 'ECG / EKG',
        status: 'Desuso',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2025-01-01'),
        storage: 'Sector 4',
        source: 'Ministerio de Salud'
    },
    {
        name: 'Unidad electroquirúrgica',
        status: 'Disponible',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2023-01-01'),
        storage: 'Sector 4',
        source: 'Proveedor 3'
    },
    {
        name: 'Bomba de alimentación',
        status: 'Disponible',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2025-01-01'),
        storage: 'Sector 4',
        source: 'Proveeor 2'
    },
    {
        name: 'Doppler fetal',
        status: 'Desuso',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2023-01-01'),
        storage: 'Sector 4',
        source: 'Proveedor 4'
    },
    {
        name: 'Monitor fetal',
        status: 'No Disponible',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2025-01-01'),
        storage: 'Sector 4',
        source: 'Proveedor 1'
    },
    {
        name: 'Cama de hospital/cirugía, parto',
        status: 'Disponible',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2025-01-01'),
        storage: 'Sector 4',
        source: 'Proveedor 3'
    },
    {
        name: 'Incubadora',
        status: 'En mantenimiento',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2030-01-01'),
        storage: 'Sector 4',
        source: 'Proveedor 4'
    },
    {
        name: 'Calentador Infantil',
        status: 'No Disponible',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2025-01-01'),
        storage: 'Sector 4',
        source: 'Proveedor 3'
    },
    {
        name: 'Microscopio de laboratorio',
        status: 'En uso',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2025-01-01'),
        storage: 'Sector 4',
        source: 'Proveedor 1'
    },
    {
        name: 'Camilla',
        status: 'Disponible',
        date_acquisition: new Date('2020-01-01'),
        date_discontinued: new Date('2025-01-01'),
        storage: 'Sector 4',
        source: 'Proveedor 3'
    },
];     
