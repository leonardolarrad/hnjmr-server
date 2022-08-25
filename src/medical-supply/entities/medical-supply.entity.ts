import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lot } from "../lot/entities/lot.entity";

@Entity('medical_supplies')
export class MedicalSupply {
    @PrimaryGeneratedColumn()
    id_medical_supplies: number;

    @Column({type: 'varchar' })
    name_material: string;

    @Column({type: 'varchar', nullable: true })
    description: string;

    @OneToMany(type => Lot, lot => lot.medicalSupply)
    lots: Lot[];
}
