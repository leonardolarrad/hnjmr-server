import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('national_assets')
export class NationalAsset {
    @PrimaryGeneratedColumn()
    id_asset : number;

    @Column({ type: "varchar", length: 512 })
    name : string;

    @Column({ type: "varchar", length: 512, nullable : true })
    description : string;

    @Column({ type: "varchar", length: 128})
    status : string;

    @Column({ type: "varchar", length: 1024, nullable : true })
    note : string;

    @Column({ type: "date"})
    date_acquisition : Date;

    @Column({ type: "date"})
    date_discontinued : Date;

    @Column({ type: "varchar", length: 512, nullable : true })
    storage : string;

    @Column({ type: "varchar", length: 512, nullable : true })
    source : string;

    @Column({ type: "varchar", length: 512, nullable : true })
    destination : string;

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
