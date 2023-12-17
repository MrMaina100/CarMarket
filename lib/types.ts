export type PropTypes = {    
    id?:string,
    car_name: string | null,
    year: string | null,
    engine_size:string | null,
    drive:string | null,
    fuel_type:string | null,
    transmission:string | null,
    mileage:string | null,
    location:string | null,
    price:string | null,
    image_url: string[] | null
    profiles?:{
        id: string | null,
        name: string | null;
        email: string | null
    } | null

    
   
  
}