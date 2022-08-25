import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lot } from "./lot.entity";


@Entity('suppliers')
export class Supplier {
    @PrimaryGeneratedColumn()
    id_suppliers: number;

    @Column({type: 'varchar' })
    name_supplier: string;

    @Column({type: 'varchar'})
    phone: string;

    @Column({type: 'varchar'})
    address: string;

    @OneToMany(type => Lot, lot => lot.supplier)
    lots: Lot[];
}