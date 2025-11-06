import { createClient } from '@supabase/supabase-js';

// REPLACE WITH YOUR SUPABASE PROJECT DETAILS
const supabaseUrl = 'https://fhvriauekkfpzoieruap.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZodnJpYXVla2tmcHpvaWVydWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzMjg4NjUsImV4cCI6MjA3NzkwNDg2NX0.syGBd43DMhTUkFIkFwqZqmX2pt1XnArnm6sECBXOYWc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);