export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      cars: {
        Row: {
          car_name: string
          created_at: string
          drive: string
          engine_size: string
          fuel_type: string
          id: string
          location: string
          mileage: string
          price: string
          transmission: string
          user_id: string
          year: string
        }
        Insert: {
          car_name: string
          created_at?: string
          drive: string
          engine_size: string
          fuel_type: string
          id?: string
          location: string
          mileage: string
          price: string
          transmission: string
          user_id: string
          year: string
        }
        Update: {
          car_name?: string
          created_at?: string
          drive?: string
          engine_size?: string
          fuel_type?: string
          id?: string
          location?: string
          mileage?: string
          price?: string
          transmission?: string
          user_id?: string
          year?: string
        }
        Relationships: [
          {
            foreignKeyName: "cars_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
