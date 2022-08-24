import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('medical_supplies')
export class MedicalSupply {
    @PrimaryGeneratedColumn()
    id_medical_supplies: number;

    @Column({type: 'varchar' })
    name_material: string;

    @Column({type: 'varchar', nullable: true })
    description: string;
}
