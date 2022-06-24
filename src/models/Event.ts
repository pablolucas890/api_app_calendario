import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne, ManyToOne, OneToMany,
} from 'typeorm';
import User from './User';

@Entity('events')// decorator, associoa a classe Appointment à entidade appointment do database
class Event {
    @PrimaryGeneratedColumn('uuid')// associoa a coluna id à coluna id do db
    id: string;

    @Column()
    title?: string;

    @Column()
    username?: string;

    @Column()
    description?: string;

    @Column()
    link?: string;

    @Column()
    image?: Number;

    @Column()
    event_type?: Number;

    @Column()
    calendar_type?: Number;

    @CreateDateColumn()
    date_start: Date;

    @CreateDateColumn()
    date_end: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Event;
