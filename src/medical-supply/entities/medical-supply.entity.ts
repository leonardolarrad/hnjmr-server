import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('medical_supplies')
export class MedicalSupply {
    @PrimaryGeneratedColumn()
    id_medical_supplies: number;

    @Column('text')
    name_material: string;

    @Column('text', { nullable: true })
    description: string;
}
