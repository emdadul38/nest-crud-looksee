import { Document } from "mongoose";

export interface SLooksee extends Document {
  readonly id: number;
  readonly name: string;
  readonly quantity: number;
}