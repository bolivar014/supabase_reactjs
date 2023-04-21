// Importamos client supabase
import { createClient } from '@supabase/supabase-js'

// Exportamos constante client de supabase
export const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL, 
    process.env.REACT_APP_SUPABASE_ANON_KEY
);