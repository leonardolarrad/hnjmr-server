import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('departments')
export class Department {
    @PrimaryGeneratedColumn()
    id_department: number;

    @Column({ type: "varchar", length: 100 })
    name_department: string;

    @Column({ type: "varchar", length: 15 })
    phone_department: string;
}
