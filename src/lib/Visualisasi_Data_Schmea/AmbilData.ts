import { supabase } from "$lib/supabase/dbConnect";
import { TentangLamanDashboard } from "../../routes/EnumLamanControl";


export interface DataVisualisasi{
    DataVisualisasi1: any[]
    DataVisualisasi2:any []
    DataVisualisasi3: any[]
}

export function AmbilData(Type: TentangLamanDashboard){
    switch (Type) {
        case TentangLamanDashboard.Default:
            
            break;
        
        case TentangLamanDashboard.User_information:

            break;
        
        case TentangLamanDashboard.Barang_information:

            break;

        case TentangLamanDashboard.Transaksi_information:

            break;

        case TentangLamanDashboard.Complain_information:

            break;
    
        default:
            break;
    }
}