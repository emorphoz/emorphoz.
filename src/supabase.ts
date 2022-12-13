import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { ref } from "@vue/reactivity";

const supabaseUrl = ref("https://lbyenijetmjflyaxhqhv.supabase.co");
const supabaseAnonKey = ref("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxieWVuaWpldG1qZmx5YXhocWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYxNjA2NTYsImV4cCI6MTk4MTczNjY1Nn0.vGLyAnDAPKbAvZWt9FsypX_PZLdX3MbzoBfLORrUsa4");

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

//declare global {
//  var supabase: SupabaseClient;
//}
// Pour tester dans la console, dé-commenter la ligne qui suit :
// @ts-ignore
globalThis.supabase = supabase;

export const user = ref(supabase.auth.user());
supabase.auth.onAuthStateChange(() => {
  user.value = supabase.auth.user();
});