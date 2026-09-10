export function getSupabaseRestConfig() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  const baseUrl = supabaseUrl
    .trim()
    .replace(/\/rest\/v1\/?$/, "")
    .replace(/\/$/, "");

  const headers: Record<string, string> = {
    apikey: serviceRoleKey
  };

  if (serviceRoleKey.startsWith("eyJ")) {
    headers.Authorization = `Bearer ${serviceRoleKey}`;
  }

  return {
    restUrl: `${baseUrl}/rest/v1`,
    headers
  };
}
