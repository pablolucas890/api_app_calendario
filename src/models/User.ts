import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

@Entity('users')// decorator, associoa a classe Appointment à entidade appointment do database
class User {
    @PrimaryGeneratedColumn('uuid')// associoa a coluna id à coluna id do db
    id: string;

    @Column()
    name?: string;

    @Column()
    email?: string;

    @Column()
    password: string;

    @Column()
    type?: Number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default User;
