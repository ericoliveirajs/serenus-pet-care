import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Lead {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  whatsapp: string;

  @Column()
  nomePet: string;

  @CreateDateColumn()
  dataCriacao: Date;
}