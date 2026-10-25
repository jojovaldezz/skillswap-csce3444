import { supabase } from '../lib/supabase';

// Register a new student, then create their profile row.
export async function signUp(email, password, name, major = '', bio = '') {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;

  const user = data.user;
  if (!user) throw new Error('Sign up did not return a user.');

  const { error: profileError } = await supabase
    .from('profiles')
    .insert({ id: user.id, name, major, bio });

  if (profileError) throw profileError;

  return user;
}

// Sign in an existing student.
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data.user;
}

// End the current session.
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

// Who is signed in right now? Returns null if nobody is.
export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) return null;
  return data.user;
}

// Read one student's profile.
export async function getProfile(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
}

// Update the signed-in student's own profile.
export async function updateProfile(userId, updates) {
  const { data, error } = await supabase
    .from('profiles')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', userId)
    .select()
    .single();

  if (error) throw error;
  return data;
}