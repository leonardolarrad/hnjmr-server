import { number } from "joi";
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('assets')
export class Asset {
    @PrimaryGeneratedColumn()
    id_asset : number;

    @Column({ type: "varchar", length: 512, nullable : true })
    group : string;

    @Column({ type: "varchar", length: 512, nullable : true })
    subgroup : string;

    @Column({ type: "varchar", length: 512, nullable : true})
    section : string;

    @Column({ type: "varchar", length: 128, nullable : true })
    num : string;

    @Column({ type: "varchar", length: 512, nullable : true })
    desc : string;

    @Column({ type: "varchar", length: 512, nullable : true })
    tower : string;

    @Column({ type: "varchar", length: 512, nullable : true })
    floor : string;

    @Column({ type: "varchar", length: 512, nullable : true })
    room : string;

    @Column({ type: "varchar", length: 512, nullable : true })
    serial : string;

    @Column({ type: "varchar", length: 512, nullable : true })
    cin : string;

    @Column({ type: "int", nullable : true })
    unit_value : number;

    @Column({ type: "int", nullable : true })
    quantity : number;

    @Column({ type: "date"})
    created_at : Date;
    
    @Column({ type: "date", nullable : true })
    updated_at : Date;

    @BeforeInsert()
    generateDate() {
        this.created_at = new Date();
        this.updated_at = new Date();
    }

    @BeforeUpdate()
    updateDate() {
        this.updated_at = new Date();
    }
}
