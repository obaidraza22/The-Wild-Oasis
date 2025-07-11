import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://bmjyhrunpqqcwlegqxdx.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtanlocnVucHFxY3dsZWdxeGR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyMTM1NzAsImV4cCI6MjA2Nzc4OTU3MH0.7FjH2Nj1rhX2l9gxnVY-URKBFZAUCYD9dWjkqIvXBPk`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
