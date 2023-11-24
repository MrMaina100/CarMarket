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
          car_name: string | null
          created_at: string
          drive: string | null
          engine_size: string | null
          fuel_type: string | null
          id: string
          location: string | null
          mileage: string | null
          price: number | null
          transmission: string | null
          user_id: string
          year: number | null
        }
        Insert: {
          car_name?: string | null
          created_at?: string
          drive?: string | null
          engine_size?: string | null
          fuel_type?: string | null
          id?: string
          location?: string | null
          mileage?: string | null
          price?: number | null
          transmission?: string | null
          user_id: string
          year?: number | null
        }
        Update: {
          car_name?: string | null
          created_at?: string
          drive?: string | null
          engine_size?: string | null
          fuel_type?: string | null
          id?: string
          location?: string | null
          mileage?: string | null
          price?: number | null
          transmission?: string | null
          user_id?: string
          year?: number | null
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
