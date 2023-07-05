import mongoose from 'mongoose';

class Database {
  private dbUrl: string;

  constructor() {
    this.dbUrl = 'mongodb://localhost:27017/hospital-webapi';
  }

  public async connect(): Promise<void> {
    try {
      await mongoose.connect(this.dbUrl);
      console.log('Conexión exitosa a la base de datos');
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
    }
  }
}

export const db = new Database();
