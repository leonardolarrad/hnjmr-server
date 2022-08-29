import { SeedAsset, seedAssets } from "./seed-asset";
import { SeedLot, seedLots } from "./seed-lot";
import { SeedSupplier, seedSuppliers } from "./seed-supplier";

interface SeedData {
    seedLots: SeedLot[];
    seedAssets: SeedAsset[];
    seedSuppliers: SeedSupplier[];
}

export const initialData: SeedData = {
    seedLots: seedLots,
    seedAssets: seedAssets,
    seedSuppliers:  seedSuppliers
}