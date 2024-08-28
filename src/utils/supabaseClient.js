
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yxxtrmiggeoassdfuvgs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4eHRybWlnZ2VvYXNzZGZ1dmdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwNjc5NDIsImV4cCI6MjAzNzY0Mzk0Mn0.C-WFnfBHl38YYFV--cAfp2sxz8nn4F7XN-zOtvH48Lo'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;