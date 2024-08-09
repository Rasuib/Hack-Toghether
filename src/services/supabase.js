import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jmjpdjeyoavbxebzywjd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptanBkamV5b2F2YnhlYnp5d2pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4NTkwMDEsImV4cCI6MjAzODQzNTAwMX0.Zr9S30iWEEJMdjzQy4RHTOZ9DRc6_B11VSc345vAkBA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
