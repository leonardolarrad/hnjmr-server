import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MedicalSupply } from "../../entities/medical-supply.entity";
import { Supplier } from "./supplier.entity";

@Entity('lots')
export class Lot {
    @PrimaryGeneratedColumn()
    id_lots: number;
    
    @Column({type: 'date' })
    date_delivery: Date;
    
    @Column({type: 'integer' })
    stock: number;

    @Column({type: 'date' })
    due_date: Date;

    @ManyToOne(type => MedicalSupply, medicalSupply => medicalSupply.lots)
    medicalSupply: MedicalSupply;

    @ManyToOne(type => Supplier, supplier => supplier.lots, { onDelete: 'CASCADE' })
    supplier: Supplier;
}
