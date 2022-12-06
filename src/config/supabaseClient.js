import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://agsobcagbqbsbdbrvggl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnc29iY2FnYnFic2JkYnJ2Z2dsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk0Nzk3MzUsImV4cCI6MTk4NTA1NTczNX0.xGmugCms2lRbf_1hA8JyvUN-wnFcGhGVzH6pKAsBlAo";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
