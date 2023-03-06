// L'URL sur laquelle votre application web est visitable (à changer si nécessaire)
export const BASE_URL = "http://localhost:4200/";
// L'URL de l'API Supabase à mettre à jour absolument
export const API_URL = "https://ovgrwbpfjdvxssvzmxxq.supabase.co";
// La clé d'API de votre compte Supabase à mettre à jour absolument
export const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92Z3J3YnBmamR2eHNzdnpteHhxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3ODA5MjQ5NiwiZXhwIjoxOTkzNjY4NDk2fQ.aVqf1fvA7S2v9AApc6np3dFk4H-18pBZjlsaDgKSdVs";

/**
 * Petite fonction utilitaire qui permet de supprimer tout ce qui se trouve dans les tables customers et invoices
 * de l'API SupaBase
 */
export const resetDatabase = () => {
  cy.request({
    method: "DELETE",
    url: API_URL + "/invoices?id=gt.0",
    headers: {
      apiKey: API_KEY,
    },
  });

  cy.request({
    method: "DELETE",
    url: API_URL + "/customers?id=gt.0",
    headers: {
      apiKey: API_KEY,
    },
  });
};
